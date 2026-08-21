-- ============================================================
-- Real client media seed — run AFTER migration 004_gallery_video_support.sql
--
-- Adds the curated pilot batch: 6 real factory stills, 2 real factory
-- video clips (with posters), and 20 real product photographs — all
-- pulled from the client's actual photos/videos, professionally
-- cropped, color-corrected and compressed (see PR notes / chat for the
-- full inventory of what was reviewed and why these were selected).
--
-- Safe to re-run: each insert is guarded by a WHERE NOT EXISTS check
-- on caption, so running this twice won't create duplicates.
-- ============================================================

-- ---------- FACTORY STILLS (Factory Tour / Production / Printing / Embroidery / Materials) ----------
insert into gallery_items (category, caption, image_url, sort_order)
select * from (values
  ('Materials & Fabric', 'Fabric roll being fed for cutting', 'factory-real/fabric-roll-feeding.webp', 10),
  ('Printing', 'Sublimation printing detail on fabric', 'factory-real/sublimation-fabric-printing-detail.webp', 11),
  ('Production Line', 'Sewing operator stitching a finished piece', 'factory-real/sewing-operator-stitching.webp', 12),
  ('Printing', 'Large-format sublimation printer in operation', 'factory-real/large-format-sublimation-printer.webp', 13),
  ('Printing', 'Sublimation printer running a custom design', 'factory-real/sublimation-printer-wide.webp', 14),
  ('Embroidery', 'Tajima embroidery machine stitching a logo', 'factory-real/tajima-embroidery-machine.webp', 15)
) as v(category, caption, image_url, sort_order)
where not exists (select 1 from gallery_items g where g.caption = v.caption);

-- ---------- FACTORY VIDEO CLIPS ----------
insert into gallery_items (category, caption, media_type, video_url, poster_url, image_url, sort_order)
select * from (values
  ('Printing', 'Sublimation printing in motion — real factory floor', 'video',
    '/videos/sublimation-printing.mp4', 'factory-real/sublimation-printing-poster.webp',
    'factory-real/sublimation-printing-poster.webp', 16),
  ('Embroidery', 'Embroidery machine at work — real factory floor', 'video',
    '/videos/embroidery-machine.mp4', 'factory-real/embroidery-machine-poster.webp',
    'factory-real/embroidery-machine-poster.webp', 17)
) as v(category, caption, media_type, video_url, poster_url, image_url, sort_order)
where not exists (select 1 from gallery_items g where g.caption = v.caption);

-- ---------- REAL PRODUCT PHOTOGRAPHS ----------
insert into gallery_items (category, caption, image_url, sort_order)
select * from (values
  ('Team Uniforms', 'Custom red cycling jersey, worn fit', 'products-real/red-worn-cycling-jersey.webp', 20),
  ('Team Uniforms', 'Custom red cycling jersey, flat lay', 'products-real/red-cycling-jersey-flat.webp', 21),
  ('Team Uniforms', 'USA-themed jersey, worn fit', 'products-real/usa-jersey-worn-model.webp', 22),
  ('Team Uniforms', 'USA-themed baseball jersey, worn fit', 'products-real/usa-baseball-jersey-model.webp', 23),
  ('Team Uniforms', 'Team Woirin sublimated jersey', 'products-real/team-woirin-yellow-jersey.webp', 24),
  ('Team Uniforms', 'MLB-style button-up baseball jersey', 'products-real/mariners-style-baseball-jersey.webp', 25),
  ('Team Uniforms', 'Flame graphic jersey and shorts set', 'products-real/flame-graphic-jersey-set.webp', 26),
  ('Team Uniforms', 'Camo and yellow motocross-style jersey', 'products-real/camo-yellow-motocross-jersey.webp', 27),
  ('Protective Gear', 'Padded compression shorts, web pattern', 'products-real/padded-shorts-web-pattern-blue.webp', 28),
  ('Protective Gear', 'Padded compression shorts, bow pattern', 'products-real/padded-shorts-bow-pattern-black.webp', 29),
  ('Protective Gear', 'Padded compression shorts, tie-dye', 'products-real/padded-shorts-tie-dye.webp', 30),
  ('Protective Gear', 'Padded compression shorts, worn fit', 'products-real/padded-compression-shorts-navy-worn.webp', 31),
  ('Protective Gear', 'Football shoulder pad set', 'products-real/football-shoulder-pads-blue.webp', 32),
  ('Production Line', 'Sewing operator assembling padded shorts', 'products-real/sewing-operator-padded-shorts.webp', 33),
  ('Casual & Corporate', 'Branded crewneck sweatshirt', 'products-real/bliist-blue-crewneck.webp', 34),
  ('Casual & Corporate', 'Branded pullover hoodie, gold', 'products-real/gold-yellow-hoodie.webp', 35),
  ('Casual & Corporate', 'Faith-wear zip hoodie', 'products-real/faith-wear-hoodie-blue.webp', 36),
  ('Quality & Packaging', 'Finished goods boxed for shipment', 'products-real/packed-shipping-boxes.webp', 37),
  ('Quality & Packaging', 'Bulk packed apparel ready for export', 'products-real/bulk-packed-apparel-boxes.webp', 38),
  ('Quality & Packaging', 'Folded apparel stack, quality-checked', 'products-real/folded-apparel-stack-camo.webp', 39)
) as v(category, caption, image_url, sort_order)
where not exists (select 1 from gallery_items g where g.caption = v.caption);
