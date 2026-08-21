import { supabase } from '../lib/supabase';
import { resolveLocalImage } from '../lib/localImages';

/**
 * Fetches every active gallery item. Reconstructs the exact shape
 * GalleryGrid.jsx already expects: { id, category, caption, src }.
 * A single fetch is used (same reasoning as productsService — the
 * current UI filters client-side by category and the catalog is small
 * enough that this is simpler than round-tripping per filter click).
 */
export async function getGalleryItems() {
  const { data, error } = await supabase
    .from('gallery_items')
    .select('id, category, caption, image_url, media_type, video_url, poster_url')
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('getGalleryItems failed:', error);
    return { items: [], error: error.message };
  }

  const items = (data || [])
    .map((row) => {
      const isVideo = row.media_type === 'video';
      return {
        id: row.id,
        category: row.category,
        caption: row.caption,
        mediaType: isVideo ? 'video' : 'image',
        // For images, `src` is the display image. For videos, `src` is the
        // poster frame (used for the grid tile) and `videoSrc` is the actual
        // clip, only resolved/loaded once the lightbox opens — the grid
        // itself never mounts a <video> element, so browsing the gallery
        // never downloads video bytes.
        src: isVideo ? resolveLocalImage(row.poster_url) : resolveLocalImage(row.image_url),
        videoSrc: isVideo ? row.video_url : null, // public/videos/*.mp4 — plain absolute path, not bundled
      };
    })
    .filter((item) => item.src); // same defensive filter the original data file used

  return { items, error: null };
}

/**
 * The Gallery page's filter-chip order is intentionally curated (it tells
 * a "Factory → Production → ... → finished collections" story) rather
 * than derived from whatever categories happen to exist on items — so
 * this stays a small static list here, matching the original
 * galleryData.js exactly, rather than a database table. If category
 * management genuinely needs to be dynamic later, this is a 10-row table
 * to add — not urgent today.
 */
export const GALLERY_CATEGORIES = [
  'Factory Tour',
  'Production Line',
  'Materials & Fabric',
  'Printing',
  'Embroidery',
  'Quality & Packaging',
  'Sportswear Collection',
  'Team Uniforms',
  'Protective Gear',
  'Gym & Fitness Wear',
  'Casual & Corporate',
  'Accessories & Finishing',
];
