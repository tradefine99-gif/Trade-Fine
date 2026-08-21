# TradeFine — Supabase Integration: Setup Guide & Delivery Notes

This document is the complete handoff for the database/dynamic-data work. Read the **Setup Guide** section to get the site running against your live Supabase project; read **Delivery Notes** for what changed, what's still static, and what was actually verified vs. what needs testing on your end.

---

## Part 1 — Setup Guide (step by step)

### 1. Create your Supabase project
You already have one: **Project ID `mobgzcugdqfxbvdhzkek`**, URL `https://mobgzcugdqfxbvdhzkek.supabase.co`. If you ever need to create another (e.g. a separate staging project), go to [supabase.com](https://supabase.com) → New Project.

### 2. Find your Project URL and anon/publishable key
Supabase dashboard → **Project Settings → API**.
- **Project URL** is at the top of that page.
- **anon / publishable key** is the `sb_publishable_...` key on the same page. **Never use the `service_role` / secret key in this project** — it must never appear in frontend code.

### 3. Set your environment variables
Copy `.env.example` to `.env` in the project root and fill in both values (your real credentials are **not** included in this ZIP, per standard practice — never ship real API keys inside a source archive):
```
VITE_SUPABASE_URL=https://mobgzcugdqfxbvdhzkek.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_...   (the publishable key from your dashboard's API page)
```
`.env` is already listed in `.gitignore`, so once created it won't accidentally get committed if this project goes into version control.

### 4. Run the database schema
Supabase dashboard → **SQL Editor → New query**. Open `supabase/schema.sql` from this project, paste the full contents, click **Run**. This creates all 7 tables, every Row Level Security policy, and the base permission grants. Safe to run once — running it a second time will error on “already exists” for tables (harmless; nothing will be duplicated).

### 5. Set up Storage (for review photo uploads)
Same SQL Editor, new query: run `supabase/storage.sql`. This creates the `review-photos` bucket used by the "Leave a Review" form's optional photo upload.

### 6. Seed your existing content
Same SQL Editor, new query: run `supabase/seed.sql`. This loads your actual existing content — all 77 products, 6 categories, 95 gallery images, 8 reviews, and all 5 full articles (real markdown bodies, not excerpts) — generated programmatically from your original data files, not retyped. Takes a few seconds; you'll see ~270 "INSERT 0 1" success lines.

### 7. Verify products
Dashboard → **Table Editor → products**. You should see 77 rows. Click into `product_images` — each product should have exactly one linked image row (`image_type = 'primary'`). On the live site, visit `/products` — the grid, category filters, and clicking into a product's detail modal should all work exactly as before.

### 8. Verify articles
Table Editor → **articles** — 5 rows, each with a long `content` column (the real markdown). Visit `/resources` on the site, then click into any article — the full formatted article should render, including inline images.

### 9. Verify gallery
Table Editor → **gallery_items** — 95 rows. Visit `/gallery` — all category filter chips should populate the same photos as before.

### 10. Verify reviews
Table Editor → **reviews** — 8 rows, all with `is_published = true` (these are your pre-existing, already-vetted reviews). Visit the homepage's reviews section — they should all display. **Then test moderation**: submit a new review through the "Leave a Review" form on the site. It will **not** appear on the site (by design). Go back to Table Editor → reviews — you'll see a 9th row with `is_published = false`. To make it public, edit that row and set `is_published` to `true` (this requires you to be logged into the dashboard — the public site itself has no way to do this, which is the point).

### 11. Verify quote/contact submissions
Submit both the homepage "Request a Quote" form and the `/contact` page form. Table Editor → **leads** — you should see two new rows with `source = 'quote'` and `source = 'contact'` respectively, each `status = 'new'`. This table is intentionally **not readable from the public site** — you can only see submissions here, in the dashboard.

### 12. Run the application locally
```bash
npm install
npm run dev
```
Visit the printed localhost URL.

### 13. Build for production
```bash
npm run build
```
Outputs to `dist/`. This was already run successfully during delivery — see Part 2 for what was verified.

---

## Part 2 — Delivery Notes

### Files changed / added
```
supabase/
  schema.sql          — full DB schema, RLS policies, grants  (NEW)
  storage.sql         — review-photo Storage bucket + policies (NEW)
  seed.sql            — generated seed data for all existing content (NEW)

src/lib/
  supabase.js         — Supabase client (NEW)
  localImages.js       — resolves DB image references back to bundled assets (NEW)

src/services/
  leadsService.js      — submitLead()                          (NEW)
  productsService.js   — getCategories(), getProducts(), getProductBySlug(), getRelatedProducts()  (NEW)
  galleryService.js    — getGalleryItems(), GALLERY_CATEGORIES  (NEW)
  articlesService.js   — getArticles(), getArticleBySlug(), CATEGORIES  (NEW)
  reviewsService.js    — getPublishedReviews(), submitReview(), getAverageRating(), getCountryList(), REVIEW_CATEGORIES  (NEW)

src/components/common/
  DataState.jsx         — shared LoadingGrid / LoadingBlock / ErrorState / EmptyState  (NEW)

Rewired to fetch from Supabase instead of static imports:
  src/components/products/ProductsGrid.jsx
  src/components/products/ProductDetailModal.jsx  (also: fixed a pre-existing crash bug, see below)
  src/components/products/RelatedProducts.jsx
  src/components/gallery/GalleryGrid.jsx
  src/pages/Resources.jsx
  src/components/resources/ArticleGrid.jsx
  src/pages/ArticleDetail.jsx  (also: added DOMPurify sanitization)
  src/components/home/ClientReviews.jsx
  src/components/home/ReviewFormModal.jsx
  src/components/home/RequestQuote.jsx  (also: real submission, honeypot, loading state)
  src/components/contact/ContactForm.jsx  (also: real submission, honeypot, loading state)

package.json — added @supabase/supabase-js, dompurify
.env.example — new
.env — new (your real credentials; gitignored)
```

### A real bug found and fixed along the way
`ProductDetailModal.jsx` called `product.badges.map(...)` with no fallback. The original static data only ever set `badges` on **one** of 77 products — every other product would have thrown `Cannot read properties of undefined (reading 'map')` the moment its modal opened. This was a pre-existing issue, not something introduced by this migration; both the new database schema (`badges` defaults to `[]`) and a defensive fallback directly in the component now prevent it.

### What's dynamic now (backed by Supabase)
Categories, products (with images), gallery, articles (full content), reviews (with moderation), and lead/quote submissions — the seven areas the brief asked for. Adding a product, article, gallery photo, or approving a review in the Supabase dashboard's Table Editor will appear on the live site on next page load, with **no code changes or redeploy**. That's the core requirement this task asked for.

### What's still static, and why
- **Product/gallery/article images** stay bundled with the app build (same as before) — only the *metadata* moved to the database. Re-hosting to Supabase Storage is a clean, optional follow-up (the schema already supports it — `product_images.url` just becomes a full URL instead of a relative one); doing it now would have meant re-uploading ~30MB of assets without a clear win for this phase.
- **Filter-chip label lists** (Gallery's 10 categories, Resources' 4 categories, Reviews' 6 category labels) are small, stable, curated lists kept as static exports rather than database tables — each is a handful of fixed strings driving filter UI, not editorial content. Trivial to convert to tables later if that changes.
- **Site search** (`src/data/searchIndex.js`) still reads article titles from the original static `resourcesData.js` file for its keyword index, not from Supabase. This wasn't one of the seven areas the brief listed as in-scope, and wiring it up properly would mean restructuring how the instant-search box gets its data. A newly added article via the dashboard **will not** show up in site search results until this is addressed — flagging this clearly rather than leaving it as a silent gap.
- **The original static data files** (`productsData.js`, `galleryData.js`, `resourcesData.js`, `reviewsData.js`) are still in the project, untouched and unused by any live component except the search index above. Kept deliberately, per "do not delete until migration is verified" — safe to remove once you've confirmed the live site fully checks out.

### CMS-ready, not CMS-built
No admin dashboard was built, as instructed — but the schema and services were designed so one can sit on top without touching the React app again. A future admin panel just needs to write to these same tables using an **authenticated** (not anon) Supabase connection; every service function (`getProducts()`, `getArticles()`, etc.) will pick up its writes automatically.

### Security — what was actually verified, not just written
This was tested against a real Postgres instance with Supabase's exact role/policy model simulated, not assumed correct:
- Public can read active/published content — confirmed.
- Public **cannot** read the `leads` table under any circumstance — confirmed (`permission denied`).
- Public can insert a lead — confirmed.
- Public can submit a review — confirmed, and **critically**: an insert attempting to set `is_published = true` directly is **rejected by the database itself** (not just hidden by the UI) — confirmed via a live RLS policy violation.
- Public cannot update or delete any content — confirmed.
- `dangerouslySetInnerHTML` in `ArticleDetail.jsx` now runs through DOMPurify before rendering, closing the XSS gap flagged in the brief, since article content is no longer developer-authored source code but database content.

### What could not be verified from this environment
This sandbox has no network access to `supabase.co` — confirmed via a live browser test that showed the app correctly constructing and firing real, properly-formed PostgREST requests (visible in the console output) which failed only due to the sandbox's own network restrictions, not a code issue. Every page was confirmed to degrade gracefully into the shared error state (with a working "Try Again" button) rather than crashing or showing a blank screen — but the actual successful round-trip (real data appearing after running the SQL scripts on your live project) needs to be confirmed on your end, per steps 7–11 above. Do not take "it's dynamic" as proven until you've walked through those verification steps yourself.

### Known limitations, summarized
1. Site search doesn't yet include database-added articles (static index).
2. Images remain bundled, not in Supabase Storage.
3. Small curated label lists (filter chips) aren't database-driven — acceptable given they're not editorial content.
4. Actual live round-trip to your Supabase project is unverified from this sandbox (network-restricted); verify via steps 7–11.
