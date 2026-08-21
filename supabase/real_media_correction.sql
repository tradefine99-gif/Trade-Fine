-- ============================================================
-- Real media correction pass (second pass) — run AFTER real_media_seed.sql
--
-- Fixes three problems left over from the first pilot:
--
-- 1. The base seed script still had 3 AI-generated "Factory Tour" images
--    sitting at the TOP of the Gallery (sort_order 0-2) — the exact
--    opposite of what a trust-building gallery needs. Removed here.
--
-- 2. Four "real product" gallery items from the first pass turned out to
--    show licensed third-party IP (Seattle Mariners / MLB, Miami Dolphins
--    / NFL and Tennessee Titans / NFL branding, and a Starbucks logo
--    patch) — none of which TradeFine has any affiliation with. Using
--    these as if they were TradeFine's own catalog work is a trademark
--    problem, not just a style one. Removed here.
--
-- 3. Adds 16 additional real factory/production stills + 2 additional
--    real production video clips (all extracted from the client's own
--    factory video footage — the photo batch contained finished-product
--    shots only, no factory floor images), spread across the categories
--    the Gallery already supports. Also wires 3 confidently-matched real
--    product photos into product_images (image_type='showcase') so they
--    surface in the actual product detail viewer, not just the Gallery.
--
-- Safe to re-run: every insert is guarded, every delete matches on an
-- exact caption/url that only ever existed once.
-- ============================================================

-- ---------- 1. REMOVE THE 3 AI "FACTORY TOUR" IMAGES ----------
delete from gallery_items
where caption in (
  'Our manufacturing facility floor.',
  'Inside the production facility.',
  'Where every order begins.'
);

-- ---------- 2. REMOVE LICENSED THIRD-PARTY IP ----------
delete from gallery_items
where caption in (
  'USA-themed jersey, worn fit',            -- shows Tennessee Titans (NFL) branding
  'USA-themed baseball jersey, worn fit',   -- shows Miami Dolphins (NFL) branding
  'MLB-style button-up baseball jersey',    -- shows Seattle Mariners (MLB) branding
  'Camo and yellow motocross-style jersey'  -- shows a Starbucks logo patch
);

-- ---------- 3. NEW REAL FACTORY / PRODUCTION STILLS ----------
-- NOTE: category values below deliberately reuse the Gallery's existing
-- filter-chip taxonomy (GALLERY_CATEGORIES in galleryService.js is a
-- fixed list, not derived from the data) — using a category outside that
-- list would make an item invisible under every filter except "All".
insert into gallery_items (category, caption, image_url, sort_order)
select * from (values
  ('Factory Tour', 'Real production floor — sewing station, khaki garment', 'factory-real/sewing-operator-khaki-garment.webp', 40),
  ('Factory Tour', 'Real production floor — sewing a red and white jersey', 'factory-real/sewing-operator-red-white-jersey.webp', 41),
  ('Production Line', 'Quilting a padded panel, close detail', 'factory-real/sewing-quilted-padding-blue.webp', 42),
  ('Production Line', 'Quilting a tie-dye padded panel', 'factory-real/sewing-quilted-padding-tiedye.webp', 43),
  ('Embroidery', 'TAJIMA embroidery head stitching a multi-color design', 'factory-real/tajima-embroidery-colorful.webp', 44),
  ('Embroidery', 'Embroidered lettering, in progress', 'factory-real/embroidery-lettering-green.webp', 45),
  ('Printing', 'Screen printing — ink pull on a finished design', 'factory-real/screen-printing-red-ink-pull.webp', 46),
  ('Printing', 'Screen printing — custom lettering in production', 'factory-real/screen-printing-black-sheep-yellow.webp', 47),
  ('Printing', 'Heat press finishing a sublimated jersey number', 'factory-real/heat-press-jersey-number.webp', 48),
  ('Printing', 'Sublimation calendar press feeding striped fabric', 'factory-real/sublimation-calendar-press-stripes.webp', 49),
  ('Materials & Fabric', 'Fabric roll being unwound for printing', 'factory-real/fabric-roll-unwinding-white.webp', 50),
  ('Materials & Fabric', 'Handling freshly sublimated fabric', 'factory-real/sublimated-fabric-handling-blue.webp', 51),
  ('Materials & Fabric', 'Padded panel material, quilted and stacked', 'factory-real/padding-material-blue-quilted-stack.webp', 52),
  ('Quality & Packaging', 'Finished goods boxed and stacked for dispatch', 'factory-real/packaging-boxes-stacked.webp', 53),
  ('Quality & Packaging', 'Printed garments packed into export cartons', 'factory-real/packaging-folded-garments-box.webp', 54),
  ('Quality & Packaging', 'Quality check — folding and inspecting finished garments', 'factory-real/quality-check-folding-garments.webp', 55),
  ('Quality & Packaging', 'Finished hoodies folded and ready for shipment', 'factory-real/finished-goods-folded-stack-hoodies.webp', 56)
) as v(category, caption, image_url, sort_order)
where not exists (select 1 from gallery_items g where g.caption = v.caption);

-- ---------- 4. NEW REAL PRODUCTION VIDEO CLIPS ----------
insert into gallery_items (category, caption, media_type, video_url, poster_url, image_url, sort_order)
select * from (values
  ('Production Line', 'Sewing a padded panel — real factory floor', 'video',
    '/videos/sewing-padding-production.mp4', 'factory-real/sewing-padding-production-poster.webp',
    'factory-real/sewing-padding-production-poster.webp', 57),
  ('Printing', 'Screen printing in motion — real factory floor', 'video',
    '/videos/screen-printing-production.mp4', 'factory-real/screen-printing-production-poster.webp',
    'factory-real/screen-printing-production-poster.webp', 58)
) as v(category, caption, media_type, video_url, poster_url, image_url, sort_order)
where not exists (select 1 from gallery_items g where g.caption = v.caption);

-- ---------- 5. RESEQUENCE THE FACTORY TOUR CATEGORY TO LEAD WITH REAL MEDIA ----------
-- The 3 AI images that used to occupy sort_order 0-2 are gone; pull the
-- existing real factory-tour-relevant items forward so the category opens
-- on real media rather than the remaining stock/article photography.
update gallery_items set sort_order = 0 where caption = 'Sewing operator stitching a finished piece';
update gallery_items set sort_order = 1 where caption = 'Tajima embroidery machine stitching a logo';
update gallery_items set sort_order = 2 where caption = 'Large-format sublimation printer in operation';

-- ---------- 6. REAL PRODUCT PHOTOS INTO THE ACTUAL PRODUCT CATALOG ----------
-- These are confident, type-level matches (same garment construction —
-- not just "a hoodie exists somewhere"). image_type = 'showcase' means
-- they appear as ADDITIONAL photos in the product detail viewer, never
-- replacing the existing primary render.
with prod as (select id from products where slug = 'streetwear-crewneck')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'products-real/bliist-blue-crewneck.webp', 'Real client order — crewneck sweatshirt', 'showcase', 90
from prod
where not exists (
  select 1 from product_images pi where pi.product_id = prod.id and pi.url = 'products-real/bliist-blue-crewneck.webp'
);

with prod as (select id from products where slug = 'pullover-hoodie')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'products-real/gold-yellow-hoodie.webp', 'Real client order — pullover hoodie', 'showcase', 90
from prod
where not exists (
  select 1 from product_images pi where pi.product_id = prod.id and pi.url = 'products-real/gold-yellow-hoodie.webp'
);

with prod as (select id from products where slug = 'pullover-hoodie')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'products-real/faith-wear-hoodie-blue.webp', 'Real client order — pullover hoodie, alternate colorway', 'showcase', 91
from prod
where not exists (
  select 1 from product_images pi where pi.product_id = prod.id and pi.url = 'products-real/faith-wear-hoodie-blue.webp'
);

-- Note on scope: padded/protective shorts, cycling jerseys, baseball
-- jerseys and motocross-style jerseys from the real photo batch were
-- deliberately NOT mapped to specific catalog products — the catalog has
-- no exact-construction match for them (e.g. plain "Compression Shorts"
-- vs. the padded/foam-insert shorts actually photographed), and mapping
-- them would misrepresent what that product is. They remain visible and
-- correctly categorized in the Gallery instead (see real_media_seed.sql).
