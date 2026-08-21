// Generates dist/sitemap.xml with every static route PLUS every
// published article and active product currently in Supabase.
//
// This is intentionally a separate, optional script rather than a
// postbuild hook wired into `npm run build` by default: it needs real
// Supabase credentials to run, and a CI/preview build without those
// credentials configured shouldn't fail just because the sitemap step
// can't reach the database. Run it manually (or wire it into your own
// deploy pipeline) after `npm run build`:
//
//   node scripts/generate-sitemap.mjs
//
// Requires VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in the
// environment (same values as .env) — reads with the public anon key
// only, same as the frontend, so it only ever sees what a visitor
// could already see (published articles, active products).

import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'node:fs';

const SITE_URL = 'https://www.tradefinesportswear.com';

const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/products', changefreq: 'weekly', priority: '0.9' },
  { path: '/manufacturing', changefreq: 'monthly', priority: '0.8' },
  { path: '/oem-odm', changefreq: 'monthly', priority: '0.8' },
  { path: '/gallery', changefreq: 'monthly', priority: '0.6' },
  { path: '/resources', changefreq: 'weekly', priority: '0.7' },
  { path: '/contact', changefreq: 'yearly', priority: '0.6' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.2' },
  { path: '/terms', changefreq: 'yearly', priority: '0.2' },
];

async function main() {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
      'Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY in the environment — cannot fetch products/articles. Static-only sitemap left untouched at public/sitemap.xml.'
    );
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const [{ data: articles, error: articlesError }, { data: products, error: productsError }] =
    await Promise.all([
      supabase.from('articles').select('slug, published_at').eq('is_published', true),
      supabase.from('products').select('slug').eq('is_active', true),
    ]);

  if (articlesError) console.error('Could not fetch articles for sitemap:', articlesError.message);
  if (productsError) console.error('Could not fetch products for sitemap:', productsError.message);

  const urls = [
    ...STATIC_ROUTES.map(
      (r) => `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
    ),
    ...(articles || []).map((a) => {
      const lastmod = a.published_at ? `\n    <lastmod>${a.published_at.slice(0, 10)}</lastmod>` : '';
      return `  <url>\n    <loc>${SITE_URL}/resources/${a.slug}</loc>${lastmod}\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`;
    }),
    // Products currently live at /products?product=<slug> (see the
    // deep-link support added to ProductsGrid.jsx) rather than a
    // dedicated /products/:slug route. Listed here so they're at least
    // discoverable; a real path-based product route would be a
    // stronger long-term fix — see the SEO report's "remaining issues".
    ...(products || []).map(
      (p) => `  <url>\n    <loc>${SITE_URL}/products?product=${p.slug}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.5</priority>\n  </url>`
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;

  writeFileSync('dist/sitemap.xml', xml);
  console.log(`sitemap.xml written with ${urls.length} URLs (${STATIC_ROUTES.length} static, ${(articles || []).length} articles, ${(products || []).length} products).`);
}

main();
