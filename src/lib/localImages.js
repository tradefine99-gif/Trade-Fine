// Shared image resolver for the transition period where product/gallery/
// article METADATA lives in Supabase but the actual image files stay
// bundled with the app (see the migration note at the bottom of
// supabase/seed.sql for why, and how to move to Supabase Storage later).
//
// Each service (productsService, galleryService, articlesService) stores
// just a relative reference in the database — e.g. "Sportswear/Match
// Jersey.jpg" or "/about/factory1.png" — exactly the same reference the
// original static data files used. This resolver turns that reference
// back into the real, Vite-bundled asset URL, the same way
// productsData.js / galleryData.js always did.

const bannerModules = import.meta.glob('../assets/banners/*.{png,PNG,jpg,JPG,jpeg,JPEG}', {
  eager: true,
  import: 'default',
});
const aboutModules = import.meta.glob('../assets/about/*.{png,PNG,jpg,JPG,jpeg,JPEG}', {
  eager: true,
  import: 'default',
});
const articleModules = import.meta.glob('../assets/articles/*.{png,PNG,jpg,JPG,jpeg,JPEG}', {
  eager: true,
  import: 'default',
});
const productModules = import.meta.glob('../assets/products/*/*.{png,PNG,jpg,JPG,jpeg,JPEG}', {
  eager: true,
  import: 'default',
});
// Real client-supplied media (see the August 2026 media integration pass):
// actual factory floor stills (extracted from client video) and actual
// product photographs, as opposed to the earlier AI-generated placeholder
// set above. Kept in their own folders so the two sources are never
// ambiguous when reading a reference string.
const factoryRealModules = import.meta.glob('../assets/factory-real/*.{webp,WEBP,jpg,JPG,jpeg,JPEG}', {
  eager: true,
  import: 'default',
});
const productsRealModules = import.meta.glob('../assets/products-real/*.{webp,WEBP,jpg,JPG,jpeg,JPEG}', {
  eager: true,
  import: 'default',
});

const ALL_MODULES = {
  ...bannerModules,
  ...aboutModules,
  ...articleModules,
  ...productModules,
  ...factoryRealModules,
  ...productsRealModules,
};

/**
 * Resolves a stored relative reference (e.g. "Sportswear/Match Jersey.jpg"
 * or "/about/factory1.png") to the real bundled asset URL, or null if no
 * matching file exists (so the UI can show a "no image" state instead of
 * a broken <img> tag).
 */
export function resolveLocalImage(ref) {
  if (!ref) return null;
  const match = Object.entries(ALL_MODULES).find(([path]) => path.endsWith(ref));
  return match ? match[1] : null;
}

/**
 * Resolves a product_images-style reference. Generated product renders are
 * stored as "Folder/file.jpg" (relative to assets/products/*). Real
 * client-supplied product photos are stored as "products-real/file.webp"
 * (see the August 2026 media integration pass) and are resolved directly
 * since they don't live under assets/products/.
 */
export function resolveProductImage(folderSlashFile) {
  if (!folderSlashFile) return null;
  if (folderSlashFile.startsWith('products-real/')) {
    return resolveLocalImage(folderSlashFile);
  }
  return resolveLocalImage(`/products/${folderSlashFile}`);
}
