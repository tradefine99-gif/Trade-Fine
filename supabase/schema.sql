-- ============================================================
-- TradeFine Sportswear — Database Schema (v2)
-- Run this in the Supabase SQL Editor: Project → SQL Editor → New query
--
-- Design notes:
-- * Every table has Row Level Security (RLS) enabled. Nothing is
--   world-writable. The public "anon" key (used in the browser) can only:
--     - INSERT into leads (contact/quote form submissions)
--     - INSERT into reviews (new reviews, forced unpublished — see below)
--     - SELECT from categories, products, product_images, gallery_items,
--       published articles, and published+approved reviews
--   It can NEVER read leads back, edit/delete anything, or force a review
--   to appear live. All of that requires an authenticated (non-anon)
--   connection — i.e. you, via the Supabase dashboard, or a future
--   admin panel with real auth.
-- * jsonb `specs` on products intentionally mirrors the exact shape the
--   React ProductSpecs component already reads (product.spec.moq,
--   product.spec.gsmOptions, etc.) so the frontend swap requires minimal
--   changes to that component.
-- ============================================================

create extension if not exists "pgcrypto";

-- ------------------------------------------------------------
-- CATEGORIES
-- Mirrors src/data/productsData.js CATEGORIES exactly (id/slug, name,
-- tagline, subcategories). Subcategories are a simple string list tied
-- 1:1 to a category — not enough independent structure to justify a
-- separate table.
-- ------------------------------------------------------------
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,          -- e.g. 'sports-wear'
  name text not null,                 -- e.g. 'Sports Wear'
  tagline text,
  subcategories jsonb not null default '[]', -- e.g. ["Jerseys","Shorts & Bottoms","Outerwear"]
  sort_order int not null default 0
);

alter table categories enable row level security;
create policy "public can read categories" on categories for select to anon using (true);


-- ------------------------------------------------------------
-- PRODUCTS
-- ------------------------------------------------------------
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references categories(id) on delete set null,
  subcategory text,                   -- e.g. 'Jerseys' — matches categories.subcategories entries
  slug text not null unique,          -- e.g. 'match-jersey'
  name text not null,
  type text,                          -- e.g. 'Jersey' — short type label shown above the product name
  description text,
  badges jsonb not null default '[]', -- e.g. ["Custom Manufacturing","OEM / ODM"]
  customization jsonb not null default '[]', -- e.g. ["Sublimation","DTF","Embroidery"]
  specs jsonb not null default '{}',  -- mirrors baseSpec() shape: fullyCustomizable, madeToRequirement,
                                       -- materialOptions, gsmOptions, sizeCustomization, colorCustomization,
                                       -- logoCustomization, labelOptions, packaging, moq, leadTime,
                                       -- countryOfManufacturing, qualityControl, exportAvailability
  is_featured boolean not null default false,
  is_active boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table products enable row level security;
create policy "public can read active products" on products for select to anon using (is_active = true);

-- keep updated_at current on every edit (relevant once a CMS writes here)
create or replace function set_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger products_set_updated_at
  before update on products
  for each row execute function set_updated_at();


-- ------------------------------------------------------------
-- PRODUCT_IMAGES
-- One-to-many by design — a product is never limited to a single image.
-- image_type supports the front/back/side/detail/alternate/showcase
-- distinction called for in the brief, even though today's data only
-- populates one 'primary' row per product (the UI currently generates
-- presentation angles from that single photo — see ProductViewer.jsx).
-- Adding real additional angles later is just additional rows here,
-- with zero schema changes.
-- ------------------------------------------------------------
create table if not exists product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  url text not null,
  alt text,
  image_type text not null default 'primary'
    check (image_type in ('primary','front','back','side','detail','alternate','showcase')),
  sort_order int not null default 0
);

alter table product_images enable row level security;
create policy "public can read product images" on product_images for select to anon using (true);


-- ------------------------------------------------------------
-- GALLERY_ITEMS
-- ------------------------------------------------------------
create table if not exists gallery_items (
  id uuid primary key default gen_random_uuid(),
  category text not null,     -- matches the filter chip labels (e.g. "Team Uniforms")
  caption text,
  image_url text not null,
  is_active boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table gallery_items enable row level security;
create policy "public can read active gallery items" on gallery_items for select to anon using (is_active = true);


-- ------------------------------------------------------------
-- ARTICLES
-- content = full markdown body (rendered client-side with `marked`,
-- now sanitized with DOMPurify before it ever hits the DOM — see
-- src/pages/ArticleDetail.jsx).
-- ------------------------------------------------------------
create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text,                -- one of resourcesData's CATEGORIES, kept as plain text (small fixed list)
  excerpt text,
  cover_image text,
  content text not null,
  read_time text,                -- display string, e.g. "17 min read" (author-estimated, not computed)
  is_featured boolean not null default false,
  is_published boolean not null default true,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table articles enable row level security;
create policy "public can read published articles" on articles for select to anon using (is_published = true);

create trigger articles_set_updated_at
  before update on articles
  for each row execute function set_updated_at();


-- ------------------------------------------------------------
-- REVIEWS
-- Two distinct flags, matching the intent already written into the
-- codebase's own comments (reviewsData.js / ReviewFormModal.jsx):
--   is_verified  -> confirmed against a real completed order (a badge,
--                   informational — not a visibility switch)
--   is_published -> controls whether it appears on the public site at all
--
-- CRITICAL: the public INSERT policy below forces is_published = false
-- on every row a visitor creates via the "Leave a Review" form — a
-- visitor cannot publish their own review by, say, editing the request
-- in devtools, because the database itself rejects any insert attempt
-- where is_published isn't false. Only an authenticated (non-anon)
-- connection can flip a review to published — i.e. moderation.
-- ------------------------------------------------------------
create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  initials text,
  company text,
  country text,
  country_flag text,           -- emoji flag, e.g. '🇺🇸'
  email text,
  rating int not null check (rating between 1 and 5),
  product text,                 -- free-text product name the review refers to
  category text,                -- category slug, e.g. 'gym-wear'
  avatar_color_class text,      -- presentational Tailwind class for the avatar chip
  photo_url text,               -- optional, uploaded to Supabase Storage (see storage.sql)
  body text not null,
  is_verified boolean not null default false,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

alter table reviews enable row level security;

create policy "public can read published reviews"
  on reviews for select
  to anon
  using (is_published = true);

create policy "public can submit a review, always unpublished"
  on reviews for insert
  to anon
  with check (is_published = false and is_verified = false);


-- ------------------------------------------------------------
-- LEADS (contact form + request-a-quote form submissions)
-- ------------------------------------------------------------
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  source text not null check (source in ('contact', 'quote')),
  company_name text not null,
  contact_person text not null,
  email text not null,
  country text,
  category text,
  quantity text,
  message text,
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed')),
  created_at timestamptz not null default now()
);

alter table leads enable row level security;

create policy "public can submit a lead"
  on leads for insert
  to anon
  with check (status = 'new');

-- Deliberately no SELECT policy for `anon` — RLS defaults to deny, so the
-- public website can never read leads back. Only an authenticated
-- connection (you, via the dashboard, or a future admin panel) can.

-- ============================================================
-- Base table privileges for the anon role.
--
-- On a real Supabase project these are already granted automatically
-- as part of how every project is provisioned — but they're spelled out
-- explicitly here so this schema is fully self-contained, portable, and
-- testable against any plain Postgres instance (not just Supabase).
-- RLS policies further restrict what these GRANTs allow; a GRANT alone
-- does not bypass RLS. Must come after all tables exist, hence placed
-- here rather than at the top of the file.
-- ============================================================
grant usage on schema public to anon;
grant select on categories, products, product_images, gallery_items, articles, reviews to anon;
grant insert on leads, reviews to anon;

-- ============================================================
-- End of schema. Run supabase/seed.sql next to load the site's existing
-- content into these tables.
-- ============================================================
