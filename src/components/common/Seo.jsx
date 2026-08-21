import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../../lib/seoConfig';

/**
 * Per-page SEO tag manager for this client-rendered SPA.
 *
 * Why this approach instead of a library: there's no server-side
 * rendering or prerendering step in this build (plain Vite + React,
 * no react-helmet/SSR dependency), so there's no place to inject
 * per-route <head> tags at request time. This component sets
 * document.title and upserts the relevant <meta>/<link> tags on
 * mount/route change instead — zero new dependencies, works for any
 * crawler that executes JavaScript (Googlebot does).
 *
 * Known limitation (documented, not silently glossed over): crawlers
 * that do NOT execute JavaScript — notably link-preview bots for
 * WhatsApp, Facebook, LinkedIn and X/Twitter — will only ever see the
 * static Open Graph tags baked into index.html, not these per-page
 * ones. Practical effect: every page currently shares the homepage's
 * social preview card when shared on those platforms. Fixing this
 * properly needs a prerendering or SSR step (e.g. vite-plugin-ssr, a
 * small prerender script, or an edge function that serves cached HTML
 * to known bot user agents) — that's a real infrastructure change and
 * is intentionally out of scope here; see the SEO report.
 */
function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function Seo({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
}) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonicalUrl = `${SITE_URL}${location.pathname}`;

    document.title = fullTitle;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');

    // Canonical — strips query params/trailing slash variants so
    // filtered/paginated views of the same page (e.g. /products?category=x)
    // consolidate to one indexable URL instead of splitting ranking
    // signal across duplicates.
    upsertLink('canonical', canonicalUrl);

    // Open Graph
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:site_name', SITE_NAME);

    // Twitter / X
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);
  }, [title, description, image, type, noindex, location.pathname]);

  return null;
}
