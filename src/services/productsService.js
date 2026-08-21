import { supabase } from '../lib/supabase';
import { resolveProductImage } from '../lib/localImages';

/**
 * Transforms a Supabase products row (+ its joined product_images) into
 * the exact shape the existing UI already expects (ProductCard,
 * ProductDetailModal, ProductViewer, ProductSpecs, RelatedProducts).
 * Keeping this shape identical is what let those components stay almost
 * entirely unchanged during this migration.
 */
function toUiProduct(row) {
  const images = (row.product_images || []).slice().sort((a, b) => a.sort_order - b.sort_order);
  const primary = images[0];
  return {
    id: row.slug,
    dbId: row.id,
    name: row.name,
    type: row.type,
    category: row.categories?.slug ?? null,
    subcategory: row.subcategory,
    description: row.description,
    badges: row.badges ?? [],
    customization: row.customization ?? [],
    spec: row.specs ?? {},
    fabricOptions: row.specs?.materialOptions ?? [],
    image: primary ? resolveProductImage(primary.url) : null,
    images: images.map((img) => ({
      url: resolveProductImage(img.url),
      alt: img.alt,
      type: img.image_type,
    })),
  };
}

/**
 * Fetches every active category, in display order, with its
 * subcategories array intact — the exact shape ProductsGrid.jsx already
 * consumes as CATEGORIES.
 */
export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('id, slug, name, tagline, subcategories')
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('getCategories failed:', error);
    return { categories: [], error: error.message };
  }

  const categories = (data || []).map((c) => ({
    id: c.slug,
    name: c.name,
    tagline: c.tagline,
    subcategories: c.subcategories ?? [],
  }));

  return { categories, error: null };
}

/**
 * Fetches every active product (with its images) in one request. For a
 * catalog this size (~80 products), a single fetch with client-side
 * category/subcategory filtering — the same interaction pattern the
 * current ProductsGrid already uses — is simpler and just as fast as
 * round-tripping to the server on every filter click. If the catalog
 * grows substantially, swap this for server-side filtering via
 * `.eq('category_id', ...)` without changing the calling components.
 */
export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select(`
      id, slug, name, type, subcategory, description, badges, customization, specs, sort_order,
      categories ( slug ),
      product_images ( url, alt, image_type, sort_order )
    `)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('getProducts failed:', error);
    return { products: [], error: error.message };
  }

  return { products: (data || []).map(toUiProduct), error: null };
}

/** Fetches a single product by its slug (used for deep-linking / SEO later). */
export async function getProductBySlug(slug) {
  const { data, error } = await supabase
    .from('products')
    .select(`
      id, slug, name, type, subcategory, description, badges, customization, specs,
      categories ( slug ),
      product_images ( url, alt, image_type, sort_order )
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('getProductBySlug failed:', error);
    return { product: null, error: error.message };
  }

  return { product: data ? toUiProduct(data) : null, error: null };
}

/**
 * Pure helper — same matching rule the original getRelatedProducts()
 * used (same category, excludes itself, must have an image), just
 * operating on an already-fetched products array instead of a module-
 * level constant, since that array now comes from Supabase.
 */
export function getRelatedProducts(allProducts, product, limit = 4) {
  return allProducts
    .filter((p) => p.id !== product.id && p.category === product.category && p.image)
    .slice(0, limit);
}
