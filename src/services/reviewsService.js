import { supabase } from '../lib/supabase';

/**
 * Mirrors the product categories (see categories table) for filtering
 * reviews by what was purchased. Kept as a small static list here rather
 * than derived from the categories table — the "All Categories" entry
 * and the id/label shape are specific to this filter UI, not reusable
 * content.
 */
export const REVIEW_CATEGORIES = [
  { id: 'all', label: 'All Categories' },
  { id: 'sports-wear', label: 'Sports Wear' },
  { id: 'team-sports', label: 'Team Sports' },
  { id: 'gym-wear', label: 'Gym Wear' },
  { id: 'casual-wear', label: 'Casual Wear' },
  { id: 'corporate-apparel', label: 'Corporate Apparel' },
  { id: 'custom-accessories', label: 'Custom Accessories' },
];

function toUiReview(row) {
  return {
    id: row.id,
    name: row.author_name,
    initials: row.initials,
    company: row.company,
    country: row.country,
    countryFlag: row.country_flag,
    rating: row.rating,
    product: row.product,
    category: row.category,
    date: row.created_at,
    verified: row.is_verified,
    text: row.body,
    color: row.avatar_color_class,
    photoUrl: row.photo_url,
  };
}

/**
 * Fetches every published review — moderation-approved reviews only.
 * Column list is explicit (not `select('*')`) specifically to exclude
 * `email`: the RLS policy on this table is row-level (is_published =
 * true), not column-level, so a `select('*')` here would hand every
 * reviewer's email address to anyone querying with the public anon key,
 * even though the UI never shows it.
 */
export async function getPublishedReviews() {
  const { data, error } = await supabase
    .from('reviews')
    .select('id, author_name, initials, company, country, country_flag, rating, product, category, avatar_color_class, photo_url, body, is_verified, created_at')
    .eq('is_published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('getPublishedReviews failed:', error);
    return { reviews: [], error: error.message };
  }

  return { reviews: (data || []).map(toUiReview), error: null };
}

export function getAverageRating(reviews) {
  if (!reviews.length) return 0;
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
}

export function getCountryList(reviews) {
  const seen = [];
  for (const r of reviews) {
    if (r.country && !seen.includes(r.country)) seen.push(r.country);
  }
  return seen;
}

/**
 * Submits a new review for moderation. Always lands as unpublished and
 * unverified — the database itself enforces this via RLS (see
 * supabase/schema.sql), so this isn't just a client-side courtesy; a
 * tampered request from devtools would still be rejected by Postgres.
 *
 * If a photo file is provided, it's uploaded to the public
 * `review-photos` Storage bucket first; if that upload fails for any
 * reason, the review is still submitted without the photo rather than
 * blocking the whole submission on an optional extra.
 */
export async function submitReview({
  name,
  company,
  country,
  email,
  rating,
  product,
  message,
  photoFile,
}) {
  let photoUrl = null;

  if (photoFile) {
    const path = `${Date.now()}-${photoFile.name}`.replace(/\s+/g, '-');
    const { error: uploadError } = await supabase.storage
      .from('review-photos')
      .upload(path, photoFile);

    if (uploadError) {
      console.warn('Review photo upload failed, continuing without it:', uploadError);
    } else {
      const { data: publicUrlData } = supabase.storage.from('review-photos').getPublicUrl(path);
      photoUrl = publicUrlData?.publicUrl ?? null;
    }
  }

  const { error } = await supabase.from('reviews').insert({
    author_name: name,
    company,
    country,
    email,
    rating,
    product,
    body: message,
    photo_url: photoUrl,
    is_published: false,
    is_verified: false,
  });

  if (error) {
    console.error('submitReview failed:', error);
    return { success: false, error: 'Something went wrong submitting your review. Please try again.' };
  }

  return { success: true };
}
