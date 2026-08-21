import { supabase } from '../lib/supabase';
import { resolveLocalImage } from '../lib/localImages';

/**
 * Small, stable, curated list — same reasoning as galleryService's
 * GALLERY_CATEGORIES: not worth a database table for four fixed labels
 * used only to drive filter chips.
 */
export const CATEGORIES = ['Manufacturing', 'OEM / ODM', 'Fabric Guide', 'Printing Guide'];

const MONTH_YEAR = { month: 'long', year: 'numeric' };

function toUiArticle(row) {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category,
    excerpt: row.excerpt,
    image: resolveLocalImage(row.cover_image),
    date: row.published_at
      ? new Date(row.published_at).toLocaleDateString('en-US', MONTH_YEAR)
      : '',
    // Raw ISO timestamp kept alongside the formatted `date` string above
    // specifically for Schema.org Article markup (datePublished expects
    // ISO 8601, not "Month Year").
    publishedAtISO: row.published_at || null,
    readTime: row.read_time,
    featured: row.is_featured,
  };
}

/**
 * Fetches every published article (list view — no `content` body, which
 * can be tens of thousands of characters per article; ArticleGrid and
 * the homepage's featured-article card never need the full body, only
 * the detail page does). Keeps the list request light regardless of how
 * long individual articles get.
 */
export async function getArticles() {
  const { data, error } = await supabase
    .from('articles')
    .select('slug, title, category, excerpt, cover_image, read_time, is_featured, published_at')
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('getArticles failed:', error);
    return { articles: [], error: error.message };
  }

  return { articles: (data || []).map(toUiArticle), error: null };
}

/**
 * Fetches one published article with its full markdown body. The body
 * still contains the same `ARTICLE_IMG:filename.jpg` markers the static
 * .md files always used — ArticleDetail.jsx's existing marker-replacement
 * step (via src/data/articleImages.js) is unchanged and runs on whatever
 * content string comes back here, same as before.
 */
export async function getArticleBySlug(slug) {
  const { data, error } = await supabase
    .from('articles')
    .select('slug, title, category, excerpt, cover_image, content, read_time, is_featured, published_at')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (error) {
    console.error('getArticleBySlug failed:', error);
    return { article: null, error: error.message };
  }

  if (!data) return { article: null, error: null };

  return { article: { ...toUiArticle(data), content: data.content }, error: null };
}
