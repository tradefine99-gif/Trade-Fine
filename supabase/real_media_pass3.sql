-- ============================================================
-- Real client media — pass 3 (August 2026 batch, 152-photo review)
-- Run AFTER real_media_correction.sql
--
-- Adds a further curated batch pulled from the client's newest photo
-- export: 11 product photos confidently matched into the actual catalog
-- (product_images, image_type='showcase' — additional angles, never
-- replacing the existing primary render), 13 additional real product
-- photographs for the Gallery only (no exact catalog construction
-- match, same reasoning documented in real_media_correction.sql), and
-- 8 additional real factory/production stills for the Gallery and the
-- new animated Manufacturing page strip.
--
-- Scope notes on what was deliberately left out of this batch:
-- * Several jerseys in the source photos carry third-party pro-league
--   branding (an NFL team name + logo, a Buffalo-Bills-styled bison
--   mark on a track jacket) and were excluded for the same trademark
--   reason documented in real_media_correction.sql.
-- * The photo batch contained ~50 near-duplicate shots of the same few
--   padded-shorts colorways (worn + flat, multiple angles each) — only
--   the clearest, most visually distinct examples were kept so the
--   Gallery reads as curated rather than repetitive.
--
-- Safe to re-run: every insert is guarded by a WHERE NOT EXISTS check.
-- ============================================================

-- ---------- 1. PRODUCT SHOWCASE PHOTOS (product_images) ----------

with prod as (select id from products where slug = 'match-jersey')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'products-real/red-white-stripe-match-jersey-front.webp', 'Real client order — red and white striped match jersey, front', 'showcase', 90
from prod
where not exists (select 1 from product_images pi where pi.product_id = prod.id and pi.url = 'products-real/red-white-stripe-match-jersey-front.webp');

with prod as (select id from products where slug = 'match-jersey')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'products-real/red-white-stripe-match-jersey-back.webp', 'Real client order — red and white striped match jersey, flat back', 'showcase', 91
from prod
where not exists (select 1 from product_images pi where pi.product_id = prod.id and pi.url = 'products-real/red-white-stripe-match-jersey-back.webp');

with prod as (select id from products where slug = 'soccer-training-jersey-teal')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'products-real/teal-orange-longsleeve-training-jersey.webp', 'Real client order — teal and orange long-sleeve training jersey', 'showcase', 90
from prod
where not exists (select 1 from product_images pi where pi.product_id = prod.id and pi.url = 'products-real/teal-orange-longsleeve-training-jersey.webp');

with prod as (select id from products where slug = 'modest-long-sleeve-top-charcoal')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'products-real/heart-print-longsleeve-compression-top.webp', 'Real client order — full-coverage long-sleeve top, allover print', 'showcase', 90
from prod
where not exists (select 1 from product_images pi where pi.product_id = prod.id and pi.url = 'products-real/heart-print-longsleeve-compression-top.webp');

with prod as (select id from products where slug = 'football-jersey-front-silver-black')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'products-real/chaos-52-silver-football-jersey.webp', 'Real client order — silver and black custom football jersey', 'showcase', 90
from prod
where not exists (select 1 from product_images pi where pi.product_id = prod.id and pi.url = 'products-real/chaos-52-silver-football-jersey.webp');

with prod as (select id from products where slug = 'football-jersey-back-crimson')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'products-real/eagles-graphic-football-jersey.webp', 'Real client order — sublimated football jersey, full-graphic design', 'showcase', 90
from prod
where not exists (select 1 from product_images pi where pi.product_id = prod.id and pi.url = 'products-real/eagles-graphic-football-jersey.webp');

with prod as (select id from products where slug = 'football-game-pants-white-blue')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'products-real/football-game-pants-worn-white.webp', 'Real client order — padded football game pants, white', 'showcase', 90
from prod
where not exists (select 1 from product_images pi where pi.product_id = prod.id and pi.url = 'products-real/football-game-pants-worn-white.webp');

with prod as (select id from products where slug = 'pullover-hoodie')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'products-real/bliist-black-hoodie-wings-back.webp', 'Real client order — pullover hoodie, back graphic', 'showcase', 92
from prod
where not exists (select 1 from product_images pi where pi.product_id = prod.id and pi.url = 'products-real/bliist-black-hoodie-wings-back.webp');

with prod as (select id from products where slug = 'zip-hoodie-heather-grey')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'products-real/faith-hoodie-love-of-god-zip-blue.webp', 'Real client order — full-zip hoodie, front and sleeve print', 'showcase', 90
from prod
where not exists (select 1 from product_images pi where pi.product_id = prod.id and pi.url = 'products-real/faith-hoodie-love-of-god-zip-blue.webp');

with prod as (select id from products where slug = 'baseball-uniform')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'products-real/pinstripe-baseball-uniform-flatlay.webp', 'Real client order — pinstripe baseball uniform set, flat lay', 'showcase', 90
from prod
where not exists (select 1 from product_images pi where pi.product_id = prod.id and pi.url = 'products-real/pinstripe-baseball-uniform-flatlay.webp');

with prod as (select id from products where slug = 'baseball-jersey-back-navy-red')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'products-real/blue-baseball-jersey-proud-mom-back.webp', 'Real client order — button-up baseball jersey, back print', 'showcase', 90
from prod
where not exists (select 1 from product_images pi where pi.product_id = prod.id and pi.url = 'products-real/blue-baseball-jersey-proud-mom-back.webp');

-- ---------- 2. ADDITIONAL REAL PRODUCT PHOTOS (Gallery only) ----------
insert into gallery_items (category, caption, image_url, sort_order)
select * from (values
  ('Casual & Corporate', 'Branded pullover hoodie, boxed and stacked', 'products-real/gold-hoodie-boxed-stack.webp', 60),
  ('Casual & Corporate', 'Branded crewneck sweatshirt, alternate photo', 'products-real/bliist-blue-crewneck-alt.webp', 61),
  ('Casual & Corporate', 'Faith-wear zip hoodie, alternate design, flat lay', 'products-real/faith-hoodie-acts-verse-flat.webp', 62),
  ('Team Uniforms', 'Two-tone magenta and teal cycling jersey, worn fit', 'products-real/pink-teal-cycling-jersey-worn.webp', 63),
  ('Team Uniforms', 'Patriotic-theme baseball jersey, worn fit', 'products-real/america-baseball-jersey-worn-back.webp', 64),
  ('Team Uniforms', 'Motocross-style long-sleeve jersey, orange and black', 'products-real/orange-black-motocross-jersey-longsleeve.webp', 65),
  ('Team Uniforms', 'Graphic motocross jersey, skull design', 'products-real/yellow-black-motocross-jersey-skull.webp', 66),
  ('Team Uniforms', 'Custom jersey and shorts set, orange and green', 'products-real/orange-green-jersey-shorts-set.webp', 67),
  ('Team Uniforms', 'Digital camo jersey, folded production stock', 'products-real/digital-camo-jersey-folded-stock.webp', 68),
  ('Protective Gear', 'Padded compression shorts, black hex pattern', 'products-real/padded-shorts-black-hex-flat.webp', 69),
  ('Protective Gear', 'Padded compression shorts, spiderweb print, worn fit', 'products-real/padded-shorts-spiderweb-worn.webp', 70),
  ('Protective Gear', 'Padded compression shorts, tie-dye, worn fit', 'products-real/padded-shorts-tie-dye-worn.webp', 71),
  ('Protective Gear', 'Padded girdle shorts, quilted panels', 'products-real/padded-girdle-shorts-white-quilted.webp', 72)
) as v(category, caption, image_url, sort_order)
where not exists (select 1 from gallery_items g where g.caption = v.caption);

-- ---------- 3. ADDITIONAL REAL FACTORY / PRODUCTION STILLS ----------
insert into gallery_items (category, caption, image_url, sort_order)
select * from (values
  ('Quality & Packaging', 'Folded garments staged for packing, stairwell view', 'factory-real/folded-garments-staged-stairwell.webp', 100),
  ('Quality & Packaging', 'Folded garments bagged ahead of cartoning', 'factory-real/folded-garments-bagged-packing.webp', 101),
  ('Quality & Packaging', 'Polybagged garments, ready for cartons', 'factory-real/polybagged-garments-pile.webp', 102),
  ('Quality & Packaging', 'Folded hoodies stacked for packing', 'factory-real/folded-hoodies-stack-packing.webp', 103),
  ('Quality & Packaging', 'Poly-wrapped bundles ready for export', 'factory-real/poly-wrapped-bundles-export.webp', 104),
  ('Quality & Packaging', 'Bagged padded shorts, finished inventory', 'factory-real/bagged-padded-shorts-inventory.webp', 105),
  ('Quality & Packaging', 'Football shoulder pad sets, stacked for shipment', 'factory-real/shoulder-pad-sets-stacked.webp', 106),
  ('Production Line', 'Sewing operator assembling padded panels at the table', 'factory-real/sewing-operator-padded-panels-table.webp', 107)
) as v(category, caption, image_url, sort_order)
where not exists (select 1 from gallery_items g where g.caption = v.caption);

-- ============================================================
-- End of pass 3. All rows above are additive only — nothing from
-- real_media_seed.sql or real_media_correction.sql is modified.
-- ============================================================
