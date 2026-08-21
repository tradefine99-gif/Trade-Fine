-- ============================================================
-- TradeFine — seed data, generated programmatically from the
-- site's existing static data files (productsData.js, galleryData.js,
-- resourcesData.js, reviewsData.js, and the real .md article bodies).
-- Run this AFTER schema.sql.
-- ============================================================

-- ------------------------------------------------------------
-- categories
-- ------------------------------------------------------------
insert into categories (id, slug, name, tagline, subcategories, sort_order) values (gen_random_uuid(), 'sports-wear', 'Sports Wear', 'Performance kits built for competition and training', '["Jerseys", "Shorts & Bottoms", "Outerwear"]'::jsonb, 0) on conflict (slug) do nothing;
insert into categories (id, slug, name, tagline, subcategories, sort_order) values (gen_random_uuid(), 'team-sports', 'Team Sports', 'Sport-specific uniforms, matched and numbered by squad', '["Soccer Uniform", "Goalkeeper Uniform", "Basketball Uniform", "Baseball Uniform", "American Football Uniform"]'::jsonb, 1) on conflict (slug) do nothing;
insert into categories (id, slug, name, tagline, subcategories, sort_order) values (gen_random_uuid(), 'gym-wear', 'Gym Wear', 'Compression, training and combat sport gear', '["Compression Wear", "Combat Sports", "Shorts & Modest Wear"]'::jsonb, 2) on conflict (slug) do nothing;
insert into categories (id, slug, name, tagline, subcategories, sort_order) values (gen_random_uuid(), 'casual-wear', 'Casual Wear', 'Streetwear and lifestyle essentials', '["Tops", "Bottoms", "Outerwear"]'::jsonb, 3) on conflict (slug) do nothing;
insert into categories (id, slug, name, tagline, subcategories, sort_order) values (gen_random_uuid(), 'corporate-apparel', 'Corporate Apparel', 'Branded workwear for teams and offices', '["Polos & Uniforms"]'::jsonb, 4) on conflict (slug) do nothing;
insert into categories (id, slug, name, tagline, subcategories, sort_order) values (gen_random_uuid(), 'custom-accessories', 'Custom Accessories', 'Caps, bags, socks and finishing pieces', '["Made to Order"]'::jsonb, 5) on conflict (slug) do nothing;

-- ------------------------------------------------------------
-- products + product_images
-- ------------------------------------------------------------
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Jerseys', 'match-jersey', 'Match Jersey', 'Jersey', 'Lightweight competition jersey engineered for breathability and full-color sublimation graphics.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "140\u2013180 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 0 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'match-jersey')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Match Jersey.jpg', 'Match Jersey', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Jerseys', 'basketball-jersey-sw', 'Training Basketball Jersey', 'Jersey', 'Sleeveless performance jersey with mesh side panels for airflow and bold sublimated graphics.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Stone Placement"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "150\u2013190 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 1 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'basketball-jersey-sw')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Basketball jersy.png', 'Training Basketball Jersey', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Jerseys', 'baseball-button-up-sw', 'Practice Baseball Jersey', 'Jersey', 'Full-button baseball jersey with reinforced seams, built for practice kits and team branding.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 2 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'baseball-button-up-sw')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Baseball Button-Up.png', 'Practice Baseball Jersey', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Jerseys', 'training-jersey-emerald', 'Training Jersey', 'Jersey', 'Raglan-sleeve training jersey with a chevron sublimation panel, built for daily squad training kits.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "150\u2013180 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 3 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'training-jersey-emerald')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Training Jersey Emerald.png', 'Training Jersey', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Jerseys', 'jersey-fabric-detail', 'Jersey Fabric & Stitching Detail', 'Jersey', 'Close-up of our sublimated interlock fabric and flatlock stitching, showing the finish quality behind every jersey run.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 4 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'jersey-fabric-detail')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Jersey Fabric Detail.png', 'Jersey Fabric & Stitching Detail', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Shorts & Bottoms', 'basketball-shorts-sw', 'Basketball Shorts', 'Shorts', 'Relaxed-fit performance shorts with side mesh venting and an adjustable drawcord waistband.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "150\u2013200 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 5 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'basketball-shorts-sw')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Basketball Shorts.png', 'Basketball Shorts', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Shorts & Bottoms', 'training-pants', 'Training Pants', 'Pants', 'Tapered training pants with zip ankle cuffs, built for warm-up sessions and travel kits.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 6 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'training-pants')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Training Pants.png', 'Training Pants', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Shorts & Bottoms', 'running-shorts-charcoal', 'Running Shorts', 'Shorts', 'Lightweight micro-mesh running shorts with side panel ventilation, built for training and match day.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "130\u2013170 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 7 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'running-shorts-charcoal')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Running Shorts Charcoal.png', 'Running Shorts', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Shorts & Bottoms', 'track-pants-black', 'Track Pants', 'Pants', 'Dry-fit track pants with a tapered fit and reflective side stripe, built for warm-up and travel kits.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 8 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'track-pants-black')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Track Pants Black.png', 'Track Pants', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Shorts & Bottoms', 'training-shorts-folded-blue', 'Compression-Lined Training Shorts', 'Shorts', 'Compression-lined training shorts, produced with an inner brief liner for match-day comfort and support.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "150\u2013200 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 9 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'training-shorts-folded-blue')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Training Shorts Folded Blue.png', 'Compression-Lined Training Shorts', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Outerwear', 'warm-up-jacket', 'Warm-Up Jacket', 'Jacket', 'Full-zip team warm-up jacket with ribbed cuffs, built for sideline branding and travel wear.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF", "Sublimation"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Ripstop Nylon", "Cotton Twill", "Poly-Cotton Twill"], "gsmOptions": "220\u2013280 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 10 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'warm-up-jacket')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Warm-up Jacket.png', 'Warm-Up Jacket', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Outerwear', 'bomber-warmup-jacket-black', 'Bomber Warm-Up Jacket', 'Jacket', 'Bomber-style warm-up jacket in ripstop nylon with a ribbed collar, built for sideline and travel wear.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF", "Sublimation"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Ripstop Nylon", "Cotton Twill", "Poly-Cotton Twill"], "gsmOptions": "220\u2013280 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 11 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'bomber-warmup-jacket-black')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Bomber Warmup Jacket Black.png', 'Bomber Warm-Up Jacket', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Outerwear', 'windbreaker-grey-yellow', 'Lightweight Windbreaker', 'Jacket', 'Water-resistant colorblock windbreaker with a packable shell, built for squad travel kits.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Ripstop Nylon", "Cotton Twill", "Poly-Cotton Twill"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 12 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'windbreaker-grey-yellow')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Windbreaker Grey Yellow.png', 'Lightweight Windbreaker', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Outerwear', 'halfzip-pullover-maroon', 'Half-Zip Training Pullover', 'Jacket', 'Brushed fleece half-zip pullover with rib-knit cuffs, built for cool-weather training sessions.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Brushed Fleece", "French Terry", "Cotton-Poly Blend"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 13 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'halfzip-pullover-maroon')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Halfzip Pullover Maroon.png', 'Half-Zip Training Pullover', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'sports-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Outerwear', 'jacket-fabric-detail-navy', 'Outerwear Fabric & Stitching Detail', 'Jacket', 'Close-up of our warm-up jacket fabric and embroidered stitching, showing the finish quality behind every run.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Ripstop Nylon", "Cotton Twill", "Poly-Cotton Twill"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 14 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'jacket-fabric-detail-navy')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Jacket Fabric Detail Navy.png', 'Outerwear Fabric & Stitching Detail', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Soccer Uniform', 'soccer-uniform', 'Soccer Uniform Set', 'Uniform Set', 'Full soccer kit — jersey and shorts produced together as a matched squad set with sponsor placements.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "140\u2013180 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 15 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'soccer-uniform')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Match Jersey.jpg', 'Soccer Uniform Set', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Soccer Uniform', 'cricket-t20-jersey', 'Cricket T20 Jersey', 'Jersey', 'Raglan-sleeve T20 jersey with full sublimated panels, produced to squad size sets and sponsor placements.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 16 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'cricket-t20-jersey')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/cricket T20 jersy.png', 'Cricket T20 Jersey', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Soccer Uniform', 'soccer-match-shorts-white', 'Soccer Match Shorts', 'Shorts', 'Match-day soccer shorts with piped side seams, produced as part of a matched squad kit.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 17 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'soccer-match-shorts-white')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Soccer Match Shorts White.png', 'Soccer Match Shorts', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Soccer Uniform', 'soccer-training-jersey-teal', 'Long-Sleeve Soccer Training Jersey', 'Jersey', 'Long-sleeve training jersey in breathable mesh, built for cool-weather sessions and squad kits.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 18 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'soccer-training-jersey-teal')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Soccer Training Jersey Teal.png', 'Long-Sleeve Soccer Training Jersey', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Soccer Uniform', 'soccer-kit-folded-red', 'Soccer Kit Set (Folded)', 'Uniform Set', 'Complete matched jersey-and-shorts soccer kit, produced and packaged as a squad-ready set.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 19 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'soccer-kit-folded-red')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Soccer Kit Folded Red.png', 'Soccer Kit Set (Folded)', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Goalkeeper Uniform', 'goalkeeper-uniform', 'Goalkeeper Uniform', 'Jersey', 'Padded-elbow goalkeeper jersey with a distinct colorway, produced as part of a matched club kit.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013200 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 20 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'goalkeeper-uniform')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Goalkeeper Jersey.png', 'Goalkeeper Uniform', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Goalkeeper Uniform', 'goalkeeper-jersey-back-green', 'Goalkeeper Jersey — Back View', 'Jersey', 'Padded-elbow goalkeeper jersey shown from the back, produced as part of a matched club kit.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013200 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 21 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'goalkeeper-jersey-back-green')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Goalkeeper Jersey Back Green.png', 'Goalkeeper Jersey — Back View', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Goalkeeper Uniform', 'goalkeeper-pants-charcoal', 'Goalkeeper Padded Pants', 'Pants', 'Padded goalkeeper pants with reinforced knee stitching, built for diving saves and match durability.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 22 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'goalkeeper-pants-charcoal')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Goalkeeper Pants Charcoal.png', 'Goalkeeper Padded Pants', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Goalkeeper Uniform', 'goalkeeper-jersey-long-sleeve-yellow', 'Long-Sleeve Goalkeeper Jersey', 'Jersey', 'Full-length sleeve goalkeeper jersey in a high-visibility colorway, produced to squad kit specification.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 23 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'goalkeeper-jersey-long-sleeve-yellow')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Goalkeeper Jersey Long Sleeve Yellow.png', 'Long-Sleeve Goalkeeper Jersey', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Goalkeeper Uniform', 'goalkeeper-jersey-folded-orange', 'Goalkeeper Jersey (Folded)', 'Jersey', 'Folded goalkeeper jersey showing cuff and hem finishing, produced as part of a matched club kit.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 24 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'goalkeeper-jersey-folded-orange')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Goalkeeper Jersey Folded Orange.png', 'Goalkeeper Jersey (Folded)', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Basketball Uniform', 'basketball-uniform', 'Basketball Uniform Set', 'Uniform Set', 'Matched basketball jersey and shorts set with sublimated team graphics and roster numbering.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Stone Placement"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 25 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'basketball-uniform')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Basketball jersy.png', 'Basketball Uniform Set', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Basketball Uniform', 'basketball-shorts-purple-gold', 'Basketball Uniform Shorts', 'Shorts', 'Mesh-paneled basketball shorts with a woven waistband tag, produced as part of a matched squad set.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Stone Placement"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 26 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'basketball-shorts-purple-gold')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Basketball Shorts Purple Gold.png', 'Basketball Uniform Shorts', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Basketball Uniform', 'basketball-practice-jersey-back', 'Reversible Practice Jersey', 'Jersey', 'Reversible two-color practice jersey shown from the back, built for scrimmage squads.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 27 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'basketball-practice-jersey-back')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Basketball Practice Jersey Back.png', 'Reversible Practice Jersey', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Basketball Uniform', 'basketball-warmup-shooting-shirt-red', 'Basketball Shooting Warm-Up Shirt', 'Top', 'Loose-fit shooting warm-up shirt for pre-game routines, produced to squad size sets.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 28 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'basketball-warmup-shooting-shirt-red')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Basketball Warmup Shooting Shirt Red.png', 'Basketball Shooting Warm-Up Shirt', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Basketball Uniform', 'basketball-uniform-set-folded', 'Basketball Uniform Set (Folded)', 'Uniform Set', 'Complete matched jersey-and-shorts basketball set, produced and packaged as a squad-ready kit.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Stone Placement"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 29 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'basketball-uniform-set-folded')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Basketball Uniform Set Folded.png', 'Basketball Uniform Set (Folded)', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Baseball Uniform', 'baseball-uniform', 'Baseball Uniform', 'Jersey', 'Full-button team baseball jersey, produced to squad size sets with embroidered team names and numbers.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 30 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'baseball-uniform')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Baseball Button-Up.png', 'Baseball Uniform', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Baseball Uniform', 'baseball-pants-cream-pinstripe', 'Baseball Pinstripe Pants', 'Pants', 'Classic pinstripe baseball pants in woven twill, produced to squad size sets with belt-loop detailing.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 31 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'baseball-pants-cream-pinstripe')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Baseball Pants Cream Pinstripe.png', 'Baseball Pinstripe Pants', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Baseball Uniform', 'baseball-jersey-back-navy-red', 'Baseball Jersey — Back View', 'Jersey', 'Full-button team baseball jersey shown from the back, produced with embroidered team names and numbers.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 32 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'baseball-jersey-back-navy-red')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Baseball Jersey Back Navy Red.png', 'Baseball Jersey — Back View', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Baseball Uniform', 'baseball-pullover-jacket-grey', 'Baseball Pullover Jacket', 'Jacket', 'Brushed fleece pullover jacket for dugout wear, produced as part of a matched team travel kit.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Brushed Fleece", "French Terry", "Cotton-Poly Blend"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 33 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'baseball-pullover-jacket-grey')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Baseball Pullover Jacket Grey.png', 'Baseball Pullover Jacket', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Baseball Uniform', 'baseball-jersey-button-detail', 'Baseball Jersey Button Detail', 'Jersey', 'Close-up of the button placket and stitching on our full-button baseball jersey.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 34 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'baseball-jersey-button-detail')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Baseball Jersey Button Detail.png', 'Baseball Jersey Button Detail', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'American Football Uniform', 'football-jersey-front-silver-black', 'American Football Jersey', 'Jersey', 'Double-knit football jersey built for padded-compatible fits, produced to team specification.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "30\u201340 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 35 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'football-jersey-front-silver-black')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Football Jersey Front Silver Black.png', 'American Football Jersey', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'American Football Uniform', 'football-jersey-back-crimson', 'American Football Jersey — Back View', 'Jersey', 'Reinforced-mesh football jersey shown from the back, produced for full squad rosters.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "30\u201340 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 36 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'football-jersey-back-crimson')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Football Jersey Back Crimson.png', 'American Football Jersey — Back View', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'American Football Uniform', 'football-game-pants-white-blue', 'American Football Game Pants', 'Pants', 'Stretch-woven football game pants with reinforced pad-pocket stitching, built to team specification.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "30\u201340 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 37 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'football-game-pants-white-blue')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Football Game Pants White Blue.png', 'American Football Game Pants', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'American Football Uniform', 'football-practice-pinnie-yellow', 'Football Practice Pinnie', 'Top', 'Lightweight mesh practice pinnie for squad drills and scrimmage grouping.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 38 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'football-practice-pinnie-yellow')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Football Practice Pinnie Yellow.png', 'Football Practice Pinnie', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'team-sports')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'American Football Uniform', 'football-uniform-set-folded-green', 'American Football Uniform Set (Folded)', 'Uniform Set', 'Complete matched jersey-and-pants football set, produced and packaged as a squad-ready kit.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per kit style", "leadTime": "30\u201340 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 39 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'football-uniform-set-folded-green')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Sportswear/Football Uniform Set Folded Green.png', 'American Football Uniform Set (Folded)', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Compression Wear', 'compression-top', 'Compression Top', 'Top', 'Second-skin compression top with flatlock seams, ideal for base layers and sublimated team designs.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["4-Way Stretch Spandex", "Nylon-Lycra Blend", "Compression Knit"], "gsmOptions": "180\u2013220 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 40 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'compression-top')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/Compression Top.png', 'Compression Top', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Compression Wear', 'training-leggings', 'Training Leggings', 'Leggings', 'High-waist training leggings with four-way stretch and a hidden waistband pocket.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["4-Way Stretch Spandex", "Nylon-Lycra Blend", "Compression Knit"], "gsmOptions": "190\u2013230 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 41 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'training-leggings')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/Training Leggings.png', 'Training Leggings', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Compression Wear', 'compression-base-layer-black', 'Long-Sleeve Compression Base Layer', 'Top', 'Long-sleeve compression base layer with flatlock seams, built for layering under team kits.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["4-Way Stretch Spandex", "Nylon-Lycra Blend", "Compression Knit"], "gsmOptions": "180\u2013220 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 42 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'compression-base-layer-black')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/Compression Base Layer Black.png', 'Long-Sleeve Compression Base Layer', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Compression Wear', 'compression-shorts-navy', 'Compression Shorts', 'Shorts', 'Nylon-lycra compression shorts with a wide elastic waistband, built for base-layer support.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["4-Way Stretch Spandex", "Nylon-Lycra Blend", "Compression Knit"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 43 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'compression-shorts-navy')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/Compression Shorts Navy.png', 'Compression Shorts', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Compression Wear', 'compression-fabric-detail-maroon', 'Compression Fabric & Seam Detail', 'Top', 'Close-up of our compression fabric and flatlock seam stitching, showing the finish quality behind every run.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["4-Way Stretch Spandex", "Nylon-Lycra Blend", "Compression Knit"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 44 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'compression-fabric-detail-maroon')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/Compression Fabric Detail Maroon.png', 'Compression Fabric & Seam Detail', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Combat Sports', 'mma-rashguard', 'MMA Rashguard', 'Rashguard', 'Long-sleeve compression rashguard with full sublimation coverage for fight-team branding.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["4-Way Stretch Spandex", "Nylon-Lycra Blend", "Compression Knit"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 45 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'mma-rashguard')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/MMA Rashguard.png', 'MMA Rashguard', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Combat Sports', 'bjj-gi-jacket', 'BJJ Gi Jacket', 'Gi Jacket', 'Pearl-weave Gi jacket with reinforced stitching at stress points, built to federation weight standards.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Pearl Weave Cotton", "Gold Weave Cotton", "Rip-Stop Cotton"], "gsmOptions": "450\u2013550 GSM (weave weight)", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 46 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'bjj-gi-jacket')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/BJJ Gi Jacket.png', 'BJJ Gi Jacket', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Combat Sports', 'bjj-gi-pants', 'BJJ Gi Pants', 'Gi Pants', 'Ripstop Gi pants with a reinforced knee panel and rope drawstring waist.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Ripstop Cotton", "Cotton-Poly Ripstop"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 47 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'bjj-gi-pants')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/BJJ Gi Pants.png', 'BJJ Gi Pants', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Combat Sports', 'grappling-spats', 'Grappling Spats', 'Spats', 'Full-length compression spats with a wide waistband, built for no-gi grappling and MMA teams.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["4-Way Stretch Spandex", "Nylon-Lycra Blend", "Compression Knit"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 48 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'grappling-spats')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/Grappling Spats.png', 'Grappling Spats', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Combat Sports', 'muay-thai-shorts-black-gold', 'Muay Thai Fight Shorts', 'Shorts', 'Satin-finish Muay Thai fight shorts with embroidered side detailing, built for competition and fight-team branding.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "Sublimation"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Satin Polyester", "Nylon-Satin Blend"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 49 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'muay-thai-shorts-black-gold')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/Muay Thai Shorts Black Gold.png', 'Muay Thai Fight Shorts', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Shorts & Modest Wear', 'gym-shorts', 'Gym Shorts', 'Shorts', 'Lightweight training shorts with an inner brief liner and laser-cut side vents.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 50 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'gym-shorts')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/Gym Shorts.png', 'Gym Shorts', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Shorts & Modest Wear', 'sports-hijab-combo', 'Sports Hijab Combo', 'Modest Wear Set', 'Breathable modest-wear set pairing a sports hijab with a matched compression base layer.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["4-Way Stretch Spandex", "Nylon-Lycra Blend", "Compression Knit"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 51 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'sports-hijab-combo')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/Sports Hijab Combo.png', 'Sports Hijab Combo', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Shorts & Modest Wear', 'modest-leggings-black', 'Full-Length Modest Leggings', 'Leggings', 'Opaque, full-length training leggings with four-way stretch, built as a modest-wear base layer.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["4-Way Stretch Spandex", "Nylon-Lycra Blend", "Compression Knit"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 52 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'modest-leggings-black')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/Modest Leggings Black.png', 'Full-Length Modest Leggings', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Shorts & Modest Wear', 'modest-long-sleeve-top-charcoal', 'Long-Sleeve Modest Athletic Top', 'Top', 'Breathable long-sleeve athletic top with a relaxed, modest-friendly fit and ribbed cuffs.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 53 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'modest-long-sleeve-top-charcoal')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/Modest Long Sleeve Top Charcoal.png', 'Long-Sleeve Modest Athletic Top', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'gym-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Shorts & Modest Wear', 'board-shorts-teal', 'Loose-Fit Board Shorts', 'Shorts', 'Quick-dry board shorts with a drawstring waist, built for modest-wear swim and training sets.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Interlock Polyester", "Micro Mesh", "Dry-Fit Pique", "Recycled Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 54 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'board-shorts-teal')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Fitnesswear/Board Shorts Teal.png', 'Loose-Fit Board Shorts', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'casual-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Tops', 'oversized-tee', 'Oversized Tee', 'T-Shirt', 'Drop-shoulder oversized tee in heavyweight cotton, built as a streetwear staple for private label drops.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["DTF", "DTG", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Combed Cotton Jersey", "Cotton-Poly Jersey", "Pique Knit"], "gsmOptions": "220\u2013260 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 55 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'oversized-tee')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Oversized Tee.PNG', 'Oversized Tee', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'casual-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Tops', 'streetwear-crewneck', 'Streetwear Crewneck', 'Sweatshirt', 'Boxy-fit crewneck sweatshirt in brushed fleece, finished with a ribbed hem and cuffs.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["DTF", "Embroidery", "DTG"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Brushed Fleece", "French Terry", "Cotton-Poly Blend"], "gsmOptions": "280\u2013340 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 56 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'streetwear-crewneck')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/streetwear crewneck.PNG', 'Streetwear Crewneck', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'casual-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Tops', 'pullover-hoodie', 'Pullover Hoodie', 'Hoodie', 'Heavyweight pullover hoodie with a kangaroo pocket and double-lined hood for structure.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["DTF", "Embroidery", "DTG"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Brushed Fleece", "French Terry", "Cotton-Poly Blend"], "gsmOptions": "300\u2013360 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 57 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'pullover-hoodie')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Pullover Hoodie.PNG', 'Pullover Hoodie', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'casual-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Tops', 'zip-hoodie-heather-grey', 'Zip-Up Hoodie', 'Hoodie', 'Cotton-poly fleece zip-up hoodie with ribbed cuffs, built for streetwear and staff uniform drops.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["DTF", "Embroidery", "DTG"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Brushed Fleece", "French Terry", "Cotton-Poly Blend"], "gsmOptions": "280\u2013340 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 58 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'zip-hoodie-heather-grey')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Zip Hoodie Heather Grey.png', 'Zip-Up Hoodie', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'casual-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Tops', 'oversized-graphic-tee-off-white', 'Oversized Graphic Tee', 'T-Shirt', 'Combed cotton jersey graphic tee with a relaxed drop-shoulder fit, built for private label drops.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["DTF", "DTG", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Combed Cotton Jersey", "Cotton-Poly Jersey", "Pique Knit"], "gsmOptions": "220\u2013260 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 59 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'oversized-graphic-tee-off-white')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Oversized Graphic Tee Off White.png', 'Oversized Graphic Tee', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'casual-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Bottoms', 'casual-joggers', 'Casual Joggers', 'Joggers', 'Tapered fleece joggers with an elastic ankle cuff and side seam pockets.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Brushed Fleece", "French Terry", "Cotton-Poly Blend"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 60 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'casual-joggers')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Casual Joggers.PNG', 'Casual Joggers', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'casual-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Bottoms', 'track-pants', 'Track Pants', 'Pants', 'Classic straight-leg track pants with side taping, available in any brand colorway.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Ripstop Nylon", "Cotton Twill", "Poly-Cotton Twill"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 61 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'track-pants')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/track pants.PNG', 'Track Pants', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'casual-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Bottoms', 'cargo-pants-olive', 'Cargo Pants', 'Pants', 'Cotton twill cargo pants with utility side pockets, built for streetwear and private label drops.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Ripstop Nylon", "Cotton Twill", "Poly-Cotton Twill"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 62 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'cargo-pants-olive')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Cargo Pants Olive.png', 'Cargo Pants', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'casual-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Bottoms', 'denim-style-joggers-blue', 'Denim-Style Joggers', 'Joggers', 'Relaxed-fit denim-style joggers in a cotton-poly twill, finished with an elastic ankle cuff.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Ripstop Nylon", "Cotton Twill", "Poly-Cotton Twill"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 63 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'denim-style-joggers-blue')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Denim Style Joggers Blue.png', 'Denim-Style Joggers', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'casual-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Bottoms', 'casual-shorts-beige-folded', 'Casual Shorts', 'Shorts', 'Drawstring casual shorts in premium cotton twill, shown folded to highlight fabric finish.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["DTF", "Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Ripstop Nylon", "Cotton Twill", "Poly-Cotton Twill"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 64 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'casual-shorts-beige-folded')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Casual Shorts Beige Folded.png', 'Casual Shorts', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'casual-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Outerwear', 'coach-jacket', 'Coach Jacket', 'Jacket', 'Lightweight snap-button coach jacket with a mesh lining, built for branded team and streetwear lines.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Ripstop Nylon", "Cotton Twill", "Poly-Cotton Twill"], "gsmOptions": "200\u2013260 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 65 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'coach-jacket')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Coach Jacket.PNG', 'Coach Jacket', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'casual-wear')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Outerwear', 'puffer-jacket', 'Puffer Jacket', 'Jacket', 'Quilted puffer jacket with insulated fill and a storm-flap zip closure for cold-weather drops.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Nylon Shell", "Poly Taffeta Shell"], "gsmOptions": "180\u2013240 GSM shell", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style/color", "leadTime": "30\u201340 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 66 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'puffer-jacket')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Puffer Jacket.png', 'Puffer Jacket', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'corporate-apparel')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Polos & Uniforms', 'corporate-polo', 'Corporate Polo', 'Polo', 'Pique-knit corporate polo with a structured collar, built for embroidered logo programs and staff uniforms.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Combed Cotton Jersey", "Cotton-Poly Jersey", "Pique Knit"], "gsmOptions": "180\u2013220 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "30 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 67 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'corporate-polo')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Corporate Polo.PNG', 'Corporate Polo', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'corporate-apparel')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Polos & Uniforms', 'corporate-shirt-long-sleeve-blue', 'Corporate Long-Sleeve Shirt', 'Shirt', 'Pique-knit long-sleeve corporate shirt with a structured collar and button placket, built for staff uniform programs.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Combed Cotton Jersey", "Cotton-Poly Jersey", "Pique Knit"], "gsmOptions": "180\u2013220 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "30 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 68 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'corporate-shirt-long-sleeve-blue')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Corporate Shirt Long Sleeve Blue.png', 'Corporate Long-Sleeve Shirt', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'corporate-apparel')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Polos & Uniforms', 'corporate-polo-charcoal-back', 'Corporate Polo — Back View', 'Polo', 'Combed cotton pique corporate polo shown from the back, built for embroidered logo programs.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Combed Cotton Jersey", "Cotton-Poly Jersey", "Pique Knit"], "gsmOptions": "180\u2013220 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "30 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 69 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'corporate-polo-charcoal-back')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Corporate Polo Charcoal Back.png', 'Corporate Polo — Back View', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'corporate-apparel')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Polos & Uniforms', 'corporate-vest-navy', 'Corporate Vest / Gilet', 'Vest', 'Quilted corporate vest with a brushed fleece lining, built for layered staff uniform programs.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Quilted Poly Shell", "Brushed Fleece Lining"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "30 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 70 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'corporate-vest-navy')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Corporate Vest Navy.png', 'Corporate Vest / Gilet', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'corporate-apparel')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Polos & Uniforms', 'corporate-polo-stack-folded', 'Corporate Polo Stack (Folded)', 'Polo', 'Folded stack of corporate polos across multiple colorways, produced to matched staff uniform programs.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Combed Cotton Jersey", "Cotton-Poly Jersey", "Pique Knit"], "gsmOptions": "180\u2013220 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "30 pcs per style/color", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 71 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'corporate-polo-stack-folded')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Casualwear/Corporate Polo Stack Folded.jpg', 'Corporate Polo Stack (Folded)', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'custom-accessories')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Made to Order', 'structured-cap-black', 'Structured Cap', 'Cap', 'Structured six-panel cap in cotton twill with an embroidered logo area, built for team and staff branding.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Cotton Twill", "Poly-Cotton Twill"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 72 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'structured-cap-black')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Accessories/Structured Cap Black.jpg', 'Structured Cap', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'custom-accessories')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Made to Order', 'duffel-bag-grey-orange', 'Branded Duffel Bag', 'Bag', 'Durable polyester duffel bag with reinforced strap stitching, built for team travel kits and staff gifting.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Durable Polyester", "Ripstop Nylon"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 73 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'duffel-bag-grey-orange')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Accessories/Duffel Bag Grey Orange.png', 'Branded Duffel Bag', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'custom-accessories')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Made to Order', 'athletic-socks-navy-white', 'Athletic Crew Socks', 'Socks', 'Ribbed-knit athletic crew socks, produced in matched pairs for team kits and retail packs.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Sublimation", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Cotton-Poly Ribbed Knit", "Compression Knit"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "100 pcs per style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 74 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'athletic-socks-navy-white')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Accessories/Athletic Socks Navy White.png', 'Athletic Crew Socks', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'custom-accessories')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Made to Order', 'beanie-charcoal', 'Knit Beanie', 'Beanie', 'Acrylic-wool blend knit beanie with a folded cuff, built for cold-weather team and staff branding.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Acrylic-Wool Blend"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 75 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'beanie-charcoal')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Accessories/Beanie Charcoal.png', 'Knit Beanie', 'primary', 0 from prod;
with cat as (select id from categories where slug = 'custom-accessories')
insert into products (id, category_id, subcategory, slug, name, type, description, badges, customization, specs, sort_order)
select gen_random_uuid(), cat.id, 'Made to Order', 'sports-backpack-black', 'Sports Backpack', 'Bag', 'Compact ripstop nylon sports backpack with reflective trim and reinforced strap stitching.', '["Custom Manufacturing", "OEM / ODM"]'::jsonb, '["Embroidery", "DTF"]'::jsonb, '{"fullyCustomizable": true, "madeToRequirement": true, "materialOptions": ["Ripstop Nylon", "Durable Polyester"], "gsmOptions": "160\u2013320 GSM", "sizeCustomization": "XS \u2013 5XL, or your own size chart", "colorCustomization": "Any Pantone / brand color match", "logoCustomization": "Woven, embroidered or printed placement", "labelOptions": "Woven neck label, printed care label, custom hang tag", "packaging": "Polybag, branded box or custom carton", "moq": "50 pcs per style", "leadTime": "25\u201335 days after sample approval", "countryOfManufacturing": "Sialkot, Pakistan", "qualityControl": "3-stage inline + final pre-shipment inspection", "exportAvailability": "Worldwide export, air & sea freight"}'::jsonb, 76 from cat
on conflict (slug) do nothing;
with prod as (select id from products where slug = 'sports-backpack-black')
insert into product_images (id, product_id, url, alt, image_type, sort_order)
select gen_random_uuid(), prod.id, 'Accessories/Sports Backpack Black.png', 'Sports Backpack', 'primary', 0 from prod;

-- ------------------------------------------------------------
-- gallery_items
-- ------------------------------------------------------------
-- NOTE (Aug 2026 media correction pass): the 3 AI-generated "Factory Tour"
-- renders that used to seed here (factory1.png / factory.png /
-- hero-factory.jpg) have been removed along with their source files —
-- real_media_correction.sql seeds real factory-floor media in their place.
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Production Line', 'Cutting and sewing lines in motion.', '/articles/manufacturing-process-hero.jpg', 3);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Production Line', 'From tech pack to production floor.', '/articles/choosing-manufacturer-hero.jpg', 4);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Materials & Fabric', 'Fabric sourcing and selection.', '/articles/fabrics-hero.jpg', 5);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Materials & Fabric', 'Synthetic and natural fiber options.', '/articles/synthetic-vs-natural-fiber.jpg', 6);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Materials & Fabric', 'Every spec built to requirement, not off the rack.', '/articles/generic-vs-customized.jpg', 7);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Printing', 'Screen printing in production.', '/articles/screen-printing-process.jpg', 8);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Printing', 'Full sublimation print run.', '/articles/sublimation-process.jpg', 9);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Embroidery', 'Embroidery detailing on a finished order.', '/articles/embroidery-hero.jpg', 10);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Embroidery', 'Embroidered logo placement, corporate polo.', '/products/Casualwear/Corporate Polo.PNG', 11);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Quality & Packaging', 'Quality inspection before shipment.', '/articles/quality-control-flow.jpg', 12);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Quality & Packaging', 'Private label and packaging options.', '/articles/oem-vs-private-label-hero.jpg', 13);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Match jersey, full sublimation.', '/products/Sportswear/Match Jersey.jpg', 14);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Basketball jersey, mesh side panels.', '/products/Sportswear/Basketball jersy.png', 15);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Baseball button-up jersey.', '/products/Sportswear/Baseball Button-Up.png', 16);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Basketball shorts, mesh venting.', '/products/Sportswear/Basketball Shorts.png', 17);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Training pants with zip cuffs.', '/products/Sportswear/Training Pants.png', 18);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Football and soccer wear collection.', '/products/Sportswear/Football Jersey Front Silver Black.png', 19);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Sportswear built for competition.', '/banners/hero.jpg', 20);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Training jersey, chevron sublimation panel.', '/products/Sportswear/Training Jersey Emerald.png', 21);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Sublimated jersey fabric and stitching detail.', '/products/Sportswear/Jersey Fabric Detail.png', 22);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Running shorts, micro-mesh venting.', '/products/Sportswear/Running Shorts Charcoal.png', 23);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Track pants, tapered fit.', '/products/Sportswear/Track Pants Black.png', 24);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Compression-lined training shorts.', '/products/Sportswear/Training Shorts Folded Blue.png', 25);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Bomber-style warm-up jacket.', '/products/Sportswear/Bomber Warmup Jacket Black.png', 26);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Lightweight windbreaker, colorblock shell.', '/products/Sportswear/Windbreaker Grey Yellow.png', 27);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Half-zip training pullover, brushed fleece.', '/products/Sportswear/Halfzip Pullover Maroon.png', 28);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Sportswear Collection', 'Outerwear fabric and stitching detail.', '/products/Sportswear/Jacket Fabric Detail Navy.png', 29);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Cricket T20 jersey, squad kit.', '/products/Sportswear/cricket T20 jersy.png', 30);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Goalkeeper jersey, matched club kit.', '/products/Sportswear/Goalkeeper Jersey.png', 31);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Team warm-up jacket, sideline branding.', '/products/Sportswear/Warm-up Jacket.png', 32);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Full club and league uniform sets.', '/products/Sportswear/Match Jersey.jpg', 33);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Soccer match shorts, piped side seams.', '/products/Sportswear/Soccer Match Shorts White.png', 34);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Long-sleeve soccer training jersey.', '/products/Sportswear/Soccer Training Jersey Teal.png', 35);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Complete soccer kit, folded.', '/products/Sportswear/Soccer Kit Folded Red.png', 36);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Goalkeeper jersey, back view.', '/products/Sportswear/Goalkeeper Jersey Back Green.png', 37);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Goalkeeper padded pants.', '/products/Sportswear/Goalkeeper Pants Charcoal.png', 38);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Long-sleeve goalkeeper jersey.', '/products/Sportswear/Goalkeeper Jersey Long Sleeve Yellow.png', 39);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Goalkeeper jersey, folded.', '/products/Sportswear/Goalkeeper Jersey Folded Orange.png', 40);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Basketball uniform shorts, mesh paneling.', '/products/Sportswear/Basketball Shorts Purple Gold.png', 41);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Reversible basketball practice jersey.', '/products/Sportswear/Basketball Practice Jersey Back.png', 42);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Basketball shooting warm-up shirt.', '/products/Sportswear/Basketball Warmup Shooting Shirt Red.png', 43);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Basketball uniform set, folded.', '/products/Sportswear/Basketball Uniform Set Folded.png', 44);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Baseball pinstripe pants.', '/products/Sportswear/Baseball Pants Cream Pinstripe.png', 45);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Baseball jersey, back view.', '/products/Sportswear/Baseball Jersey Back Navy Red.png', 46);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Baseball pullover jacket, dugout wear.', '/products/Sportswear/Baseball Pullover Jacket Grey.png', 47);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Baseball jersey, button placket detail.', '/products/Sportswear/Baseball Jersey Button Detail.png', 48);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'American football jersey, front view.', '/products/Sportswear/Football Jersey Front Silver Black.png', 49);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'American football jersey, back view.', '/products/Sportswear/Football Jersey Back Crimson.png', 50);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'American football game pants.', '/products/Sportswear/Football Game Pants White Blue.png', 51);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'Football practice pinnie, squad drills.', '/products/Sportswear/Football Practice Pinnie Yellow.png', 52);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Team Uniforms', 'American football uniform set, folded.', '/products/Sportswear/Football Uniform Set Folded Green.png', 53);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Compression top, flatlock seams.', '/products/Fitnesswear/Compression Top.png', 54);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Training leggings, four-way stretch.', '/products/Fitnesswear/Training Leggings.png', 55);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'MMA rashguard, full sublimation.', '/products/Fitnesswear/MMA Rashguard.png', 56);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'BJJ Gi jacket, pearl weave cotton.', '/products/Fitnesswear/BJJ Gi Jacket.png', 57);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'BJJ Gi pants, reinforced knee panel.', '/products/Fitnesswear/BJJ Gi Pants.png', 58);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Grappling spats, no-gi training.', '/products/Fitnesswear/Grappling Spats.png', 59);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Gym shorts, laser-cut vents.', '/products/Fitnesswear/Gym Shorts.png', 60);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Sports hijab combo, modest activewear.', '/products/Fitnesswear/Sports Hijab Combo.png', 61);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Gym and training wear collection.', '/banners/Gym banner.jpg', 62);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Gym wear built for daily training.', '/banners/Gym wear banner.jpg', 63);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Combat sports gear collection.', '/banners/Combat sports banner.jpg', 64);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Athleisure collection.', '/banners/Athleisure banner.jpg', 65);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Long-sleeve compression base layer.', '/products/Fitnesswear/Compression Base Layer Black.png', 66);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Compression shorts, base-layer support.', '/products/Fitnesswear/Compression Shorts Navy.png', 67);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Compression fabric and seam detail.', '/products/Fitnesswear/Compression Fabric Detail Maroon.png', 68);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Muay Thai fight shorts, satin finish.', '/products/Fitnesswear/Muay Thai Shorts Black Gold.png', 69);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Full-length modest training leggings.', '/products/Fitnesswear/Modest Leggings Black.png', 70);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Long-sleeve modest athletic top.', '/products/Fitnesswear/Modest Long Sleeve Top Charcoal.png', 71);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Gym & Fitness Wear', 'Loose-fit board shorts, modest swim wear.', '/products/Fitnesswear/Board Shorts Teal.png', 72);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Oversized tee, heavyweight cotton.', '/products/Casualwear/Oversized Tee.PNG', 73);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Streetwear crewneck, brushed fleece.', '/products/Casualwear/streetwear crewneck.PNG', 74);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Pullover hoodie, heavyweight fleece.', '/products/Casualwear/Pullover Hoodie.PNG', 75);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Casual joggers, tapered fit.', '/products/Casualwear/Casual Joggers.PNG', 76);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Track pants, side taping.', '/products/Casualwear/track pants.PNG', 77);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Coach jacket, mesh lining.', '/products/Casualwear/Coach Jacket.PNG', 78);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Puffer jacket, insulated fill.', '/products/Casualwear/Puffer Jacket.png', 79);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Casual wear collection.', '/banners/Casual wear banner.jpg', 80);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Zip-up hoodie, heather grey.', '/products/Casualwear/Zip Hoodie Heather Grey.png', 81);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Oversized graphic tee, off white.', '/products/Casualwear/Oversized Graphic Tee Off White.png', 82);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Cargo pants, utility pockets.', '/products/Casualwear/Cargo Pants Olive.png', 83);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Denim-style joggers, relaxed fit.', '/products/Casualwear/Denim Style Joggers Blue.png', 84);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Casual shorts, folded.', '/products/Casualwear/Casual Shorts Beige Folded.png', 85);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Corporate long-sleeve shirt.', '/products/Casualwear/Corporate Shirt Long Sleeve Blue.png', 86);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Corporate polo, back view.', '/products/Casualwear/Corporate Polo Charcoal Back.png', 87);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Corporate vest, quilted panels.', '/products/Casualwear/Corporate Vest Navy.png', 88);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Casual & Corporate', 'Corporate polo stack, matched colorways.', '/products/Casualwear/Corporate Polo Stack Folded.jpg', 89);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Accessories & Finishing', 'Structured cap, embroidered logo area.', '/products/Accessories/Structured Cap Black.jpg', 90);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Accessories & Finishing', 'Branded duffel bag, team travel kit.', '/products/Accessories/Duffel Bag Grey Orange.png', 91);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Accessories & Finishing', 'Athletic crew socks, matched pairs.', '/products/Accessories/Athletic Socks Navy White.png', 92);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Accessories & Finishing', 'Knit beanie, folded cuff.', '/products/Accessories/Beanie Charcoal.png', 93);
insert into gallery_items (id, category, caption, image_url, sort_order) values (gen_random_uuid(), 'Accessories & Finishing', 'Sports backpack, reflective trim.', '/products/Accessories/Sports Backpack Black.png', 94);

-- ------------------------------------------------------------
-- reviews (existing, pre-vetted reviews: published + verified)
-- ------------------------------------------------------------
insert into reviews (id, author_name, initials, company, country, country_flag, rating, product, category, avatar_color_class, body, is_verified, is_published, created_at) values (gen_random_uuid(), 'James Wilson', 'JW', 'Apex Fitness Co.', 'United States', '🇺🇸', 5, 'Compression Leggings', 'gym-wear', 'bg-blue-600/20 text-blue-400', 'TradeFine''s attention to technical detail is unmatched. Their ODM expertise allowed us to launch a performance leggings line that outpaced our competition in both comfort and durability. A true manufacturing partner.', true, true, '2026-05-12'::timestamptz);
insert into reviews (id, author_name, initials, company, country, country_flag, rating, product, category, avatar_color_class, body, is_verified, is_published, created_at) values (gen_random_uuid(), 'Ahmed Hassan', 'AH', 'Al Nokhba Sports Retail', 'United Arab Emirates', '🇦🇪', 5, 'Football Jerseys', 'team-sports', 'bg-orange-600/20 text-orange-400', 'We required a massive bulk order of football jerseys on a very tight timeline for a regional tournament. Not only was the quality of the sublimation printing superb, but the shipment arrived three days early.', true, true, '2026-04-03'::timestamptz);
insert into reviews (id, author_name, initials, company, country, country_flag, rating, product, category, avatar_color_class, body, is_verified, is_published, created_at) values (gen_random_uuid(), 'Oliver Smith', 'OS', 'Northline Activewear', 'United Kingdom', '🇬🇧', 5, 'Private Label Hoodies', 'casual-wear', 'bg-cyan-600/20 text-cyan-400', 'Launching a private label was daunting, but TradeFine made it seamless. From sampling the hoodies to the final customized branding tags, their communication and manufacturing process was professional at every step.', true, true, '2026-03-21'::timestamptz);
insert into reviews (id, author_name, initials, company, country, country_flag, rating, product, category, avatar_color_class, body, is_verified, is_published, created_at) values (gen_random_uuid(), 'Sofia Marchetti', 'SM', 'Marchetti Teamwear', 'Italy', '🇮🇹', 4, 'Basketball Jerseys', 'team-sports', 'bg-emerald-600/20 text-emerald-400', 'Good quality fabric and accurate sizing across the whole run. One reprint was needed on a logo placement, but the team resolved it quickly and covered the reprint cost without any argument.', true, true, '2026-02-14'::timestamptz);
insert into reviews (id, author_name, initials, company, country, country_flag, rating, product, category, avatar_color_class, body, is_verified, is_published, created_at) values (gen_random_uuid(), 'Daniel Kim', 'DK', 'Kim Athletics Group', 'South Korea', '🇰🇷', 5, 'Custom Tracksuits', 'sports-wear', 'bg-purple-600/20 text-purple-400', 'We have worked with three manufacturers in the past decade and TradeFine is by far the most transparent about lead times and MOQs. The tracksuit line they produced for us hit retail exactly on schedule.', true, true, '2026-01-29'::timestamptz);
insert into reviews (id, author_name, initials, company, country, country_flag, rating, product, category, avatar_color_class, body, is_verified, is_published, created_at) values (gen_random_uuid(), 'Emma van der Berg', 'EB', 'Van der Berg Sport', 'Netherlands', '🇳🇱', 5, 'Corporate Polos', 'corporate-apparel', 'bg-pink-600/20 text-pink-400', 'Ordered corporate polos for a 400-person company rollout. Embroidery placement was consistent across every unit and the fabric held up beautifully after repeated washing during our internal trial.', true, true, '2025-12-08'::timestamptz);
insert into reviews (id, author_name, initials, company, country, country_flag, rating, product, category, avatar_color_class, body, is_verified, is_published, created_at) values (gen_random_uuid(), 'Lucas Ferreira', 'LF', 'Ferreira Fightwear', 'Brazil', '🇧🇷', 4, 'BJJ Gi Jackets', 'custom-accessories', 'bg-amber-600/20 text-amber-400', 'Solid stitching and reinforced seams on the gi jackets — exactly what combat sportswear needs. Shipping to Brazil took a little longer than quoted, but the product quality made up for it.', true, true, '2025-11-17'::timestamptz);
insert into reviews (id, author_name, initials, company, country, country_flag, rating, product, category, avatar_color_class, body, is_verified, is_published, created_at) values (gen_random_uuid(), 'Chloe Martin', 'CM', 'Martin Yoga Collective', 'Canada', '🇨🇦', 5, 'Yoga Sets', 'gym-wear', 'bg-rose-600/20 text-rose-400', 'TradeFine''s sampling process saved us from a costly fabric mistake early on — they proactively suggested a better moisture-wicking blend for our climate. That kind of guidance is rare from an overseas manufacturer.', true, true, '2025-10-02'::timestamptz);

-- ------------------------------------------------------------
-- articles (full markdown body pulled from src/data/articles/*.md)
-- ------------------------------------------------------------
insert into articles (id, slug, title, category, excerpt, cover_image, content, read_time, is_featured, is_published, published_at) values (gen_random_uuid(), 'how-custom-sportswear-is-manufactured', 'How Custom Sportswear Is Manufactured: From Concept to Global Delivery', 'Manufacturing', 'A complete walkthrough of the custom sportswear manufacturing journey — from design and sampling through mass production, decoration, quality control, and worldwide delivery.', 'manufacturing-process-hero.jpg', '# How Custom Sportswear Is Manufactured: From Concept to Global Delivery

In the dynamic world of athletic apparel, where performance meets style,
the journey from a nascent idea to a tangible, high-quality garment worn
by athletes and enthusiasts worldwide is a complex yet fascinating one.
For sportswear brands, clothing startups, international buyers, and
sports teams, understanding the intricate process of custom sportswear
manufacturing isn''t just beneficial---it''s absolutely critical for
success.

This pillar article peels back the curtain, offering an unparalleled,
in-depth exploration of how custom sportswear is brought to life. From
the initial spark of an idea to its meticulous fabrication, rigorous
quality checks, and eventual global distribution, we''ll guide you
through every critical stage. As leading experts in technical apparel
production and B2B sportswear solutions, we aim to equip you with the
knowledge needed to navigate this industry with confidence, ensuring
your next collection or team uniform is not just manufactured, but
masterfully crafted.

Whether you''re looking to launch a new line of performance leggings,
create bespoke football jerseys, or produce a range of branded fitness
apparel, this guide will serve as your definitive resource, helping you
unlock the full potential of custom sportswear manufacturing.

## The Genesis: Concept & Design Development

Every exceptional piece of custom sportswear begins with a spark---an
idea, a need, a vision. This initial conceptualization phase is arguably
the most critical, laying the groundwork for every subsequent step in
the manufacturing process. Without a clear, well-defined concept, even
the most advanced manufacturing capabilities will struggle to deliver a
product that truly resonates.

#### Understanding Your Vision & Market

Before a single stitch is sewn or a pattern is drafted, we delve deep
into your brand''s vision. What is the purpose of this sportswear? Who
is your target audience? What specific performance benefits, aesthetic
qualities, or emotional connections do you want to evoke?

#### Examples:

-   **A startup creating compression wear:** Needs to focus on muscle
    support, moisture-wicking properties, and ergonomic design for
    optimal athletic performance.

-   **A sports club designing new football jerseys:** Requires durable,
    breathable fabric, precise sizing for team unity, and prominent
    branding for club identity.

-   **A fitness apparel brand:** Might prioritize sustainable materials,
    flattering cuts, and versatility for both gym workouts and casual
    wear.

**Expert Tip:** Conduct thorough market research. Understand current
trends, competitor offerings, and---most importantly---listen to your
target customer''s needs and pain points. This insight will inform your
design decisions and ensure your product meets a genuine demand.

#### The Role of Technical Design & Specifications

Once the broad vision is established, it''s translated into concrete
technical specifications. This is where creative ideas meet
manufacturing reality. Technical designers work to detail every aspect
of the garment.

#### Key elements include:

-   **Sketches and Illustrations:** Detailed drawings from various
    angles.

-   **Measurement Charts:** Precise sizing for each garment component
    (e.g., sleeve length, chest circumference, inseam).

-   **Bill of Materials (BOM):** A comprehensive list of all components,
    including fabrics, trims (zippers, buttons, drawstrings), labels,
    and threads.

-   **Construction Details:** Instructions on stitching types, seam
    finishes, and any special assembly techniques.

-   **Print/Embroidery Placement:** Exact locations and dimensions for
    logos, graphics, and text.

This technical package, often called a "Tech Pack," is the
manufacturer''s Bible, ensuring clarity and precision throughout
production.

#### Fabric Selection: The Foundation of Performance

The fabric choice is paramount in sportswear. It dictates comfort,
performance, durability, and even the final aesthetic. This decision is
a balance between functionality, cost, and availability.

#### Factors to consider:

-   **Performance Properties:**

    -   **Moisture-wicking:** Essential for keeping athletes dry and
        comfortable (e.g., polyester, nylon blends).

    -   **Breathability:** Allows air circulation to prevent
        overheating.

    -   **Stretch & Recovery:** Lycra/Spandex blends provide flexibility
        and retain shape.

    -   **Compression:** Specific knits and fiber blends for muscle
        support.

    -   **Durability:** Resistance to abrasion, pilling, and tearing.

    -   **UV Protection:** For outdoor sportswear.

    -   **Antibacterial/Odor Control:** Treatments or fibers that
        inhibit bacterial growth.

-   **Hand Feel:** How the fabric feels against the skin.

-   **Weight:** Light, medium, or heavy, depending on the garment''s
    purpose.

-   **Sustainability:** Recycled polyester, organic cotton, or other
    eco-friendly options.

#### Common Sportswear Fabrics:

-   **Polyester:** Excellent moisture-wicking, quick-drying, durable,
    and good for sublimation.

-   **Nylon:** Strong, abrasion-resistant, often used in outerwear and
    activewear.

-   **Spandex/Lycra/Elastane:** Provides stretch and shape retention,
    almost always blended with other fibers.

-   **Cotton Blends:** Can offer softness and natural feel, often
    blended for performance.

-   **Merino Wool:** Natural temperature regulation, odor resistance,
    often used for baselayers.

#### Comparison Table: Common Sportswear Fabric Properties

<div class="table-scroll"><table>
<thead><tr><th>Fabric Type</th><th>Key Properties</th><th>Best Use Cases</th><th>Pros</th><th>Cons</th></tr></thead>
<tbody>
<tr><td><strong>Polyester</strong></td><td>Moisture-wicking, quick-drying, durable, holds color well</td><td>Jerseys, activewear, running shorts, outer layers</td><td>Excellent performance, versatile, affordable</td><td>Can feel less natural, retains odors if not treated</td></tr>
<tr><td><strong>Nylon</strong></td><td>Strong, abrasion-resistant, smooth, lightweight</td><td>Jackets, running shorts, compression, swim</td><td>Very durable, high strength, smooth feel</td><td>Less breathable than some, can be expensive</td></tr>
<tr><td><strong>Spandex Blends</strong></td><td>High stretch, excellent recovery, comfortable</td><td>Leggings, sports bras, compression wear, cycling</td><td>Superb fit, freedom of movement</td><td>Poor breathability alone, prone to snagging</td></tr>
<tr><td><strong>Cotton Blends</strong></td><td>Soft, breathable (blended), comfortable</td><td>Casual gym wear, t-shirts, hoodies, tracksuits</td><td>Natural feel, comfortable, good drape</td><td>Absorbs moisture, slow drying (100% cotton)</td></tr>
<tr><td><strong>Merino Wool</strong></td><td>Temperature regulating, odor-resistant, soft</td><td>Baselayers, hiking wear, cold-weather activewear</td><td>Natural, sustainable, highly functional</td><td>More expensive, requires delicate care</td></tr>
</tbody>
</table></div>

<div class="table-scroll"><table>
<thead><tr><th>Feature</th><th>OEM Manufacturing</th><th>Private Label Manufacturing</th></tr></thead>
<tbody>
<tr><td><strong>Design Ownership</strong></td><td>Your brand owns the design</td><td>Manufacturer owns base design, you own branding</td></tr>
<tr><td><strong>Customization</strong></td><td>Full, bespoke design from scratch</td><td>Branding, color, material variations on existing styles</td></tr>
<tr><td><strong>Design Effort</strong></td><td>High, requires detailed tech packs from your side</td><td>Low, choose from manufacturer''s catalog</td></tr>
<tr><td><strong>Minimum Order QTY (MOQ)</strong></td><td>Generally higher</td><td>Generally lower</td></tr>
<tr><td><strong>Lead Time</strong></td><td>Longer (due to new design &amp; pattern development)</td><td>Shorter (designs and patterns are pre-existing)</td></tr>
<tr><td><strong>Cost</strong></td><td>Higher (initial design &amp; development costs)</td><td>Lower (design &amp; development costs spread across clients)</td></tr>
<tr><td><strong>Ideal For</strong></td><td>Established brands, unique product lines, specific tech apparel</td><td>Startups, testing new markets, quick product launches</td></tr>
</tbody>
</table></div>

## Decoration & Branding: Adding Your Signature Touch

Once the garments are assembled, they move to the decoration stage,
where your brand identity truly comes alive. We offer a comprehensive
suite of printing and branding techniques to ensure your custom
sportswear stands out.

#### Sublimation Printing: Vibrant & Durable

Sublimation is a leading printing method for performance sportswear,
especially for vibrant, all-over designs.

**Process:** Designs are printed onto special transfer paper using
sublimation inks. This paper is then heat-pressed onto polyester fabric.
The heat causes the ink to turn into a gas and permanently dye the
fabric fibers.

#### Pros:

-   **Vibrant, full-color designs:** Unlimited color options, gradients,
    and intricate details.

-   **Permanent:** Won''t crack, peel, or fade over time, even with
    repeated washing.

-   **Breathable:** The ink becomes part of the fabric, so it doesn''t
    block pores.

-   **Lightweight:** No heavy layer on the fabric.

-   **Durability:** Ideal for active sportswear like football jerseys,
    cycling jerseys, and running wear.

#### Cons:

-   Only works effectively on polyester or high-polyester blend fabrics.

-   Lighter colored fabrics yield the best results for vibrant colors.

#### Screen Printing: Classic & Versatile

Screen printing is a traditional and highly versatile method, excellent
for bold graphics and specific spot colors.

**Process:** A stencil (screen) is created for each color in the design.
Ink is then pushed through the screen onto the fabric. Each color is
applied separately.

#### Pros:

-   **Cost-effective:** For larger quantities and fewer colors.

-   **Durable:** Produces a thick, long-lasting print.

-   **Vibrant colors:** Excellent color opacity on various fabric types.

-   **Versatile:** Works on cotton, blends, and many synthetic fabrics.

#### Cons:

-   Limited number of colors per design (more colors increase cost).

-   Less ideal for highly complex, multi-color designs or photographic
    images.

-   Can feel slightly heavier on the fabric, especially with large
    prints.

#### Embroidery: Premium Texture

Embroidery adds a sophisticated, textured, and premium feel to custom
sportswear.

**Process:** Designs are stitched onto the fabric using threads and
specialized embroidery machines.

#### Pros:

-   **High-end look:** Adds a professional and luxurious touch.

-   **Durability:** Extremely long-lasting and resistant to fading or
    peeling.

-   **Dimension:** Creates a tactile, raised effect.

-   **Ideal for logos:** Perfect for team emblems, corporate branding on
    polo shirts, hoodies, and jackets.

#### Cons:

-   More expensive than printing.

-   Not suitable for very intricate details or gradients.

-   Can add weight and stiffness to lighter fabrics.

#### Heat Transfer Printing: Modern & Precise

Heat transfer printing involves applying a design (cut from vinyl or
printed on special transfer paper) onto fabric using heat and pressure.

**Process:** A pre-printed or cut design is placed on the garment and
pressed with a heat press machine, adhering the design to the fabric.

#### Pros:

-   **Versatile:** Works on a wide range of fabrics and garment types.

-   **Ideal for low MOQs:** Cost-effective for small batches or
    individual customization (e.g., names and numbers on jerseys).

-   **Vibrant colors:** Can achieve photographic quality designs.

-   **Quick turnaround:** Relatively fast application process.

#### Cons:

-   Can feel like a "sticker" on the fabric.

-   Durability varies by transfer type; some may crack or peel over
    time.

-   Less breathable than sublimation.

#### Specialty Branding: Silicone Logos, Woven Labels, Hang Tags

Beyond printing and embroidery, we offer specialized branding elements
that elevate your custom sportswear.

-   **Silicone Logos:** These raised, tactile logos add a modern,
    high-tech finish. They are durable, flexible, and often used on
    technical apparel for a premium look.

-   **Woven Labels:** Sewn into the garment, woven labels (neck labels,
    hem tags) provide essential branding, care instructions, and sizing
    information with a high-quality feel.

-   **Hang Tags:** Detachable tags attached to the garment, offering
    space for branding, product information, pricing, and storytelling.
    They are a key part of the retail presentation.

## Quality Control & Assurance: The Non-Negotiable Standard

![Quality control workflow at TradeFine](ARTICLE_IMG:quality-control-flow.jpg)

Quality is not an afterthought; it''s ingrained in every stage of our
custom sportswear manufacturing process. Our robust Quality Control (QC)
and Quality Assurance (QA) protocols ensure that every garment meets the
highest standards of performance, durability, and aesthetic appeal.

#### In-Process Inspections

Quality checks begin on the factory floor as garments are being made.

-   **Fabric Inspection:** Before cutting, fabrics are checked for
    defects, color consistency, and accurate specifications.

-   **Cutting Inspection:** Cut pieces are checked against patterns for
    accuracy.

-   **Sewing Line Inspection:** Supervisors regularly inspect stitching,
    seam strength, and construction details at various points during
    assembly.

-   **Printing/Embroidery Inspection:** Decorated garments are checked
    for print accuracy, color matching, alignment, and adhesion.

This proactive approach allows for immediate identification and
correction of issues, preventing defects from escalating.

#### Pre-Shipment Inspections (PSI)

Before any order leaves our facility, a comprehensive Pre-Shipment
Inspection is conducted. This is a crucial final verification step.

#### PSI Checklist:

-   **Quantity Check:** Verify the exact count of items against the
    order.

-   **Workmanship:** Thorough inspection of stitching, seams, and
    overall construction quality.

-   **Measurements:** Randomly selected garments are measured against
    the approved size specifications.

-   **Visual Defects:** Checking for fabric flaws, stains, holes,
    missing components.

-   **Labeling & Branding:** Confirming correct woven labels, hang tags,
    and printed/embroidered logos.

-   **Packaging:** Ensuring packaging meets specifications and is
    suitable for international shipping.

-   **Functionality:** Testing zippers, drawstrings, and other
    functional elements.

#### Testing & Compliance

For technical sportswear, material and garment testing goes beyond
visual inspection. This may include:

-   **Fabric Weight & Composition:** Verifying grammage and fiber
    content.

-   **Colorfastness:** Testing resistance to fading from washing, light,
    and rubbing.

-   **Shrinkage:** Ensuring garments retain their size after washing.

-   **Pilling Resistance:** Checking how well the fabric resists forming
    small balls of fiber.

-   **Tensile Strength:** Measuring resistance to tearing.

-   **Moisture Management:** Quantifying wicking speed and drying time.

-   **Chemical Compliance:** Ensuring fabrics and dyes meet
    international safety standards (e.g., REACH, OEKO-TEX).

#### Common Quality Issues & Prevention

-   **Problem:** Inconsistent sizing.

    -   **Prevention:** Accurate pattern making, precise cutting,
        regular measurement checks during sewing.

-   **Problem:** Poor stitching (loose threads, uneven seams).

    -   **Prevention:** Skilled operators, regular machine maintenance,
        in-process inspections.

-   **Problem:** Print/Embroidery defects (misalignment, fading,
    peeling).

    -   **Prevention:** Correct machine calibration, quality
        inks/threads, thorough post-decoration inspection.

-   **Problem:** Fabric flaws (holes, pulls, color variations).

    -   **Prevention:** Strict incoming fabric inspection, quality
        checks at the cutting stage.

By implementing stringent QC at every stage, we guarantee that the
sportswear delivered to your customers meets the highest expectations.

## Finishing & Packaging: The Final Presentation

The journey of custom sportswear doesn''t end with production. The
finishing touches and meticulous packaging are crucial for protecting
the garment, enhancing its retail appeal, and conveying your brand''s
commitment to quality.

#### Garment Finishing (Washing, Ironing, Folding)

After production and decoration, garments often undergo final finishing
processes:

-   **Washing:** Some garments, especially those with certain prints or
    special treatments, may be washed to soften the fabric, remove
    residues, or pre-shrink.

-   **Ironing/Pressing:** To remove wrinkles and give the garment a
    crisp, professional appearance.

-   **Folding:** Garments are precisely folded to prepare them for
    bagging and packaging. The method of folding can be customized based
    on client preferences and packaging requirements.

#### Custom Packaging Solutions

Packaging is your brand''s silent salesperson. It protects the product
during transit and enhances the unboxing experience for your customers.
We offer a range of custom packaging options.

#### Options Include:

-   **Polybags:** Clear or frosted polybags, often with suffocation
    warnings and ventilation holes, protect individual garments. Can be
    branded with your logo.

-   **Custom Hang Tags:** Essential for branding, product information,
    care instructions, and pricing. Can be made from various materials
    and finishes.

-   **Woven Labels:** Integrated into the garment, providing permanent
    branding and care details.

-   **Custom Stickers/Barcodes:** For easy inventory management and
    retail scanning.

-   **Outer Cartons:** Durable corrugated boxes, often branded with
    company logos and shipping information, for bulk transport.

#### Labeling & Barcoding

Accurate labeling is vital for compliance, inventory, and retail.

-   **Care Labels:** Essential for informing consumers how to properly
    wash and maintain their garments, often including fabric
    composition.

-   **Size Labels:** Clearly indicating the size of the garment.

-   **Country of Origin Labels:** A legal requirement for international
    trade.

-   **Barcodes (UPC/EAN):** Unique identifiers that facilitate inventory
    tracking, point-of-sale scanning, and supply chain efficiency.

## Logistics & Global Delivery: Reaching Your Market

The final stage in the custom sportswear manufacturing journey is
getting your finished products from our factory floor to your warehouse
or directly to your customers, wherever they are in the world. Our
robust logistics network ensures efficient and reliable global delivery.

#### Shipping Options (Air, Sea, Land)

Choosing the right shipping method depends on your timeline, budget, and
cargo volume.

-   **Air Freight:**

    -   **Pros:** Fastest delivery, ideal for urgent orders, high-value
        goods, or time-sensitive fashion collections.

    -   **Cons:** Most expensive option.

-   **Sea Freight:**

    -   **Pros:** Most cost-effective for large volumes, environmentally
        friendlier for bulk shipments.

    -   **Cons:** Slowest option, longer lead times.

-   **Land Freight:** (Road/Rail)

    -   **Pros:** Cost-effective for regional or continental shipping,
        flexible routes.

    -   **Cons:** Slower than air, may involve border customs for
        international routes.

**Professional Recommendation:** Plan your shipping strategy well in
advance. Consider a mix of methods -- air for initial launches or urgent
restocks, and sea for larger, less time-sensitive bulk orders.

#### Customs Clearance & Documentation

International shipping involves navigating complex customs regulations
and documentation. Our experienced logistics team manages this intricate
process, ensuring smooth customs clearance and avoiding costly delays.

#### Key Documents Include:

-   **Commercial Invoice:** Details the goods, value, and terms of sale.

-   **Packing List:** Itemizes the contents of each package.

-   **Bill of Lading (Sea) or Air Waybill (Air):** The contract between
    the shipper and carrier.

-   **Certificate of Origin:** Declares the country where the goods were
    manufactured.

-   **Import/Export Licenses:** If required for specific products or
    countries.

**Expert Tip:** Always provide accurate and complete documentation.
Inaccurate paperwork is a leading cause of customs delays and penalties.

#### Supply Chain Optimization

We continuously work to optimize our supply chain, from raw material
sourcing to final delivery. This involves:

-   **Strategic partnerships:** Collaborating with reliable logistics
    providers.

-   **Technology integration:** Using tracking systems for real-time
    visibility.

-   **Risk management:** Identifying and mitigating potential
    disruptions.

-   **Efficiency improvements:** Streamlining processes to reduce lead
    times and costs.

#### Worldwide Shipping Network

Our extensive global network enables us to ship custom sportswear to
clients in virtually any country. We leverage established relationships
with international carriers and freight forwarders, providing
door-to-door service and ensuring your products reach their destination
safely and on schedule.

## Partnering for Success: Choosing the Right Manufacturer

Selecting the right custom sportswear manufacturer is one of the most
pivotal decisions your brand will make. It''s not just about finding
someone who can sew fabric; it''s about finding a strategic partner who
understands your vision, values quality, and can scale with your growth.

#### Key Criteria for Selection

-   **Expertise in Sportswear:** Look for a manufacturer specializing in
    athletic apparel, particularly technical fabrics and performance
    requirements.

-   **Quality Standards:** A proven track record of stringent quality
    control and assurance processes. Request samples of their work.

-   **Communication & Transparency:** A partner who communicates
    clearly, provides regular updates, and is transparent about their
    processes, pricing, and potential challenges.

-   **Production Capabilities:** Ensure their capacity matches your
    volume requirements, from sampling to mass production.

-   **Technology & Equipment:** Modern machinery indicates efficiency,
    precision, and the ability to handle complex designs.

-   **Ethical & Sustainable Practices:** A commitment to fair labor and
    environmentally responsible manufacturing.

-   **Customization Services:** The ability to offer a full suite of
    services, from design support and fabric sourcing to diverse
    printing methods and custom packaging.

-   **Global Logistics:** Experience in international shipping, customs,
    and managing worldwide delivery.

-   **Minimum Order Quantity (MOQ):** Ensure their MOQs align with your
    business model, especially for startups.

#### Questions to Ask

When evaluating potential manufacturing partners, ask probing questions:

-   "What is your typical lead time for sampling and mass production?"

-   "What are your quality control procedures at each stage of
    production?"

-   "Can you provide references or case studies of similar sportswear
    projects?"

-   "What are your payment terms and typical deposit requirements?"

-   "How do you handle intellectual property protection for my
    designs?"

-   "What are your sustainability initiatives and certifications?"

-   "Do you offer design assistance or technical apparel
    consultation?"

-   "How do you manage international shipping and customs clearance?"

-   "What sets your manufacturing process apart from competitors?"

#### The Value of Experience & Expertise

Partnering with an experienced manufacturer means leveraging years of
accumulated knowledge in fabric technology, garment construction,
production efficiencies, and global logistics. An expert partner can
anticipate challenges, offer valuable insights, and guide you through
the complexities of the manufacturing process, saving you time, money,
and potential headaches. They become an extension of your team,
dedicated to bringing your vision to life with precision and excellence.

## FAQs: Your Custom Sportswear Manufacturing Questions Answered

Here are some frequently asked questions about custom sportswear
manufacturing, providing quick answers to common concerns.

**1. What is the typical Minimum Order Quantity (MOQ) for custom
sportswear?**
MOQs vary significantly depending on the product type, fabric,
decoration method, and manufacturer. For highly customized items like
sublimation jerseys, MOQs might be as low as 50-100 units per design.
For private label or simpler items, it could be lower. Always discuss
your specific needs with the manufacturer.

**2. How long does the entire custom sportswear manufacturing process
take?**
From initial concept to global delivery, the timeline can range from
8-16 weeks or more. This includes design finalization (2-4 weeks),
sample development (2-4 weeks per sample iteration), material sourcing
(2-4 weeks), mass production (4-8 weeks), and shipping (1-4 weeks
depending on method). Complex designs or high volumes may require more
time.

#### 3. Can I provide my own fabrics and trims for manufacturing?
Yes, many manufacturers allow clients to supply their own materials
(Customer''s Own Material - COM). However, the manufacturer will likely
require samples for testing to ensure compatibility with their machinery
and quality standards. This can sometimes affect lead times and
minimums.

#### 4. What file formats are required for my designs and logos?
For design and logo files, vector formats like AI (Adobe Illustrator),
EPS, or PDF are preferred as they allow for scaling without loss of
quality. High-resolution raster images (JPG, PNG) can be used for
mock-ups but are not ideal for production.

**5. How do you ensure the quality of custom sportswear during
production?**
We implement a multi-stage Quality Control (QC) process, including
fabric inspection, in-line production checks, mid-production audits, and
a comprehensive Pre-Shipment Inspection (PSI). We also conduct various
material and garment tests to ensure performance and durability.

**6. What are the most popular printing methods for custom
sportswear?**
Sublimation printing is highly popular for vibrant, all-over designs on
polyester fabrics. Screen printing is excellent for bold graphics and
specific spot colors. Embroidery adds a premium, textured look, and heat
transfer printing is versatile for various fabrics and low MOQs.

#### 7. Do you offer eco-friendly or sustainable fabric options?
Yes, we are committed to sustainable practices and offer a range of
eco-friendly fabrics, including recycled polyester, organic cotton
blends, and other sustainable materials. We can also source materials
from certified suppliers (e.g., OEKO-TEX, GRS).

**8. Can you help with the design process if I only have a basic
idea?**
Absolutely. We offer custom design services and technical apparel
consultation. Our design team can work with your initial concepts,
sketches, or mood boards to develop detailed tech packs and bring your
vision to life.

#### 9. What are the payment terms for custom sportswear manufacturing?
Standard payment terms typically involve an upfront deposit (e.g.,
30-50%) to commence production, with the remaining balance due upon
completion of manufacturing or before shipment. Specific terms can be
discussed and customized based on project size and client relationship.

#### 10. How do you handle international shipping and customs?
We have an experienced logistics team that manages worldwide shipping,
including customs clearance, documentation, and freight forwarding. We
offer various shipping options (air, sea) to meet your timeline and
budget, ensuring smooth delivery to your destination.

**11. What is the difference between OEM and Private Label
manufacturing?**
OEM (Original Equipment Manufacturer) means we produce goods based on
your exact designs and specifications. Private Label means you choose
from our existing, ready-to-brand styles, and we apply your logos and
customize them to your brand.

#### 12. Can I get a sample before committing to a bulk order?
Yes, sample development is a crucial part of our process. We produce
prototypes for your approval, allowing you to assess fit, quality, and
design before proceeding with mass production.

#### Conclusion: Your Vision, Delivered.

The journey of custom sportswear manufacturing is a testament to
precision, expertise, and a relentless pursuit of quality. From the
initial spark of an idea to the meticulous selection of fabrics, the
artistry of pattern making, the efficiency of mass production, the
vibrant application of branding, and the final journey across
continents, every step is critical.

For sportswear brands, emerging startups, ambitious retailers, and
dedicated sports teams, partnering with the right manufacturer is not
merely a transaction; it''s a strategic alliance. It''s about entrusting
your vision to a team that understands the nuances of performance
apparel, values integrity, and possesses the global reach to deliver
your products seamlessly to your target market.

We hope this comprehensive guide has illuminated the intricate processes
involved, demystifying the world of custom sportswear manufacturing and
empowering you with the knowledge to make informed decisions. Our
commitment is to transform your concepts into high-quality, market-ready
athletic apparel that stands out in a competitive landscape.

Ready to elevate your brand or outfit your team with sportswear that
truly performs?

**Request a Quotation Today and Let''s Bring Your Custom Sportswear
Vision to Life!**
', '17 min read', true, true, '2026-06-01'::timestamptz) on conflict (slug) do nothing;
insert into articles (id, slug, title, category, excerpt, cover_image, content, read_time, is_featured, is_published, published_at) values (gen_random_uuid(), 'choosing-the-right-sportswear-manufacturer', 'The Complete Guide to Choosing the Right Sportswear Manufacturer', 'Manufacturing', 'What separates a reliable manufacturing partner from a risky one — MOQs, communication, certifications, sampling process, and the questions worth asking before you commit.', 'choosing-manufacturer-hero.jpg', '# The Complete Guide to Choosing the Right Sportswear Manufacturer

In the fiercely competitive landscape of athletic apparel, the success
of your sportswear brand, clothing startup, sports team, or retail
operation hinges on a single, critical decision: **choosing the right
sportswear manufacturer**. This choice isn''t merely about finding a
vendor; it''s about forging a strategic partnership that can make or
break your product quality, brand reputation, market entry, and
ultimately, your profitability.

For sportswear brands seeking to launch innovative lines of fitness
apparel, clothing startups aiming to establish their niche with bespoke
leggings, or sports clubs requiring durable, high-performance team
uniforms, the stakes are incredibly high. A misstep here can lead to
costly delays, quality inconsistencies, supply chain nightmares, and
irreparable damage to your brand''s credibility. Conversely, a
well-chosen partner can propel your vision forward, ensuring your
technical apparel meets the highest standards of performance,
aesthetics, and ethical production.

This definitive guide, crafted by seasoned industry experts, will equip
you with an unparalleled framework for navigating this complex decision.
We''ll delve deep into the essential criteria, strategic considerations,
and best practices for vetting, selecting, and collaborating with a
sportswear manufacturing partner that aligns perfectly with your goals,
budget, and brand ethos. Prepare to unlock the insights needed to forge
a successful, long-term manufacturing alliance that ensures your custom
sportswear not only gets made but gets made brilliantly.

## The Foundation: Defining Your Sportswear Manufacturing Needs

Before you even begin the search for a sportswear manufacturer, the most
crucial step is an introspective one: a clear, honest assessment of your
own brand''s needs, vision, and operational realities. This foundational
understanding will act as your compass, guiding you toward partners that
are truly aligned with your objectives.

#### Understanding Your Product Line & Target Market

What exactly are you trying to create? Is it high-performance
compression wear for elite athletes, fashionable gym wear for a casual
fitness enthusiast, durable team uniforms for a youth sports league, or
perhaps specialized cycling jerseys? The specific characteristics of
your product directly dictate the type of manufacturing expertise
required.

#### Examples:

-   **High-performance running wear:** Requires advanced fabric
    technology (moisture-wicking, breathable), flatlock seams to prevent
    chafing, and ergonomic pattern cutting. A manufacturer specializing
    in technical apparel is essential.

-   **Custom football jerseys:** Demands durable, breathable polyester,
    sublimation printing capabilities for intricate designs, and robust
    stitching for repetitive stress.

-   **Lifestyle fitness apparel (hoodies, tracksuits):** Might
    prioritize comfort, soft-touch fabrics, and various decoration
    methods like screen printing or embroidery for branding.

**Professional Recommendation:** Create a detailed product brief for
each item. Include target user, key features, desired performance
attributes, aesthetic goals, and competitive positioning. This clarity
is invaluable when communicating with potential manufacturers.

#### Determining Your Production Volume & MOQs

Your projected order quantities directly influence the type of
manufacturer you should approach.

-   **Small Batches/Startups:** For new brands or those testing a
    market, lower Minimum Order Quantities (MOQs) are vital.
    Manufacturers catering to smaller runs might be more flexible but
    potentially have slightly higher per-unit costs.

-   **Medium to Large Scale Production:** Established brands or
    wholesalers will require manufacturers with significant production
    capacity, capable of handling thousands or tens of thousands of
    units per order, often offering economies of scale.

**Industry Insight:** Don''t underestimate the importance of aligning
your MOQ needs with a manufacturer''s typical MOQ. Forcing a
manufacturer to produce below their comfort zone can lead to higher
costs, poorer service, or reluctance to work with you long-term.

#### Budgetary Constraints & Cost Considerations

Cost is always a factor, but it should never be the *only* factor. A
cheaper manufacturer upfront can lead to devastating long-term costs due
to poor quality, delays, and reputational damage.

#### Key Cost Elements to Consider:

-   **Per-Unit Manufacturing Cost:** This is the core price of the
    garment.

-   **Material Costs:** Raw fabric, trims, labels.

-   **Sample Development Fees:** Fees for creating prototypes.

-   **Tooling/Setup Fees:** For specific printing screens, molds, etc.

-   **Quality Control Costs:** Though often included, clarify any
    specific third-party inspection costs.

-   **Packaging Costs:** Custom polybags, hang tags, cartons.

-   **Shipping & Logistics:** Freight, customs duties, import taxes.

**Expert Tip:** Always request a detailed breakdown of costs, not just a
single per-unit price. This transparency will help you understand where
your money is going and identify areas for potential optimization.

#### Timeline Expectations & Lead Time Requirements

Speed to market is crucial in the fast-paced apparel industry. Define
your ideal production timeline from concept to delivery.

-   **Sampling Lead Time:** How long it takes to produce initial
    prototypes.

-   **Material Sourcing Lead Time:** Time required to procure fabrics
    and trims.

-   **Mass Production Lead Time:** Time from material arrival to
    finished goods.

-   **Shipping Lead Time:** Time for goods to reach your destination.

**Real-World Scenario:** A sports club needs new uniforms before the
start of a new season. This firm deadline dictates that they must
partner with a manufacturer known for reliable lead times and efficient
production, potentially prioritizing air freight over cheaper sea
freight if time is tight.

#### Design Complexity & Technical Apparel Demands

The intricacy of your designs and the technical demands of your apparel
will significantly narrow your manufacturing options.

-   **Complex Patterning:** Garments with multiple panels, ergonomic
    cuts, or intricate seaming require advanced pattern-making
    capabilities and skilled sewers.

-   **Specialized Features:** Heat-sealed seams, laser-cut ventilation,
    bonded elements, or integrated smart technology demand manufacturers
    with specialized machinery and technical expertise.

-   **Performance Requirements:** Sportswear that needs specific
    moisture management, compression, UV protection, or anti-odor
    properties requires a manufacturer with deep knowledge of technical
    fabrics and finishes.

## Essential Qualities of a World-Class Sportswear Manufacturer

Once you''ve clearly defined your own needs, it''s time to identify the
non-negotiable attributes of a truly exceptional sportswear
manufacturing partner. These qualities form the bedrock of a successful,
long-term relationship.

#### Specialization in Sportswear & Technical Apparel

While many factories produce clothing, only those specializing in
sportswear truly understand its unique demands. Sportswear isn''t just
clothing; it''s performance gear.

#### Benefits of Specialization:

-   **Fabric Expertise:** Deep knowledge of technical fabrics
    (polyester, nylon, spandex blends, performance knits), their
    properties, and ideal applications.

-   **Construction Techniques:** Proficiency in flatlock stitching,
    ergonomic seaming, gusseting, and reinforcement crucial for
    activewear.

-   **Performance Understanding:** Awareness of how garments need to
    move, breathe, and support the body during physical activity.

-   **Specialized Machinery:** Access to sublimation printers, seamless
    knitting machines, heat-sealing equipment, and other tools specific
    to sportswear.

**Common Mistake:** Partnering with a general apparel manufacturer who
lacks sportswear expertise can lead to garments that look good but
perform poorly, causing customer dissatisfaction and returns.

#### Proven Expertise & Industry Experience

Experience breeds efficiency and problem-solving capabilities. A
manufacturer with a long history in sportswear will have refined
processes, established supply chains, and a deep understanding of
industry best practices.

#### Indicators of Expertise:

-   **Years in Business:** A long-standing history often signifies
    stability and reliability.

-   **Portfolio/Client List:** Look for reputable brands they''ve worked
    with (if publicly available).

-   **Technical Staff:** Highly skilled pattern makers, technical
    designers, and production managers.

-   **Case Studies:** Evidence of successfully completed projects,
    especially those similar to yours.

#### Robust Quality Control & Assurance (QC/QA)

Quality is paramount in sportswear. Defects not only damage your
brand''s reputation but also impact athletic performance and user
satisfaction. A top-tier manufacturer will have stringent QC/QA
protocols at every stage.

#### Key QC/QA Elements:

-   **Incoming Material Inspection:** Checking fabrics and trims for
    flaws, color consistency, and specifications.

-   **In-Process Checks:** Regular inspections during cutting, sewing,
    and decoration.

-   **Mid-Production Audits:** Comprehensive checks during the
    production run.

-   **Final Pre-Shipment Inspection (PSI):** A thorough check of
    finished goods before packaging and shipping.

-   **Lab Testing:** Ability to perform or outsource tests for
    colorfastness, shrinkage, pilling, moisture-wicking, and tensile
    strength.

#### Transparent Communication & Project Management

Effective communication is the lifeblood of any successful manufacturing
partnership, especially when dealing with international logistics and
time zone differences.

#### What to Look For:

-   **Responsiveness:** Timely replies to emails and inquiries.

-   **Proactive Updates:** Regular progress reports without you having
    to ask.

-   **Clear English Communication:** Essential for avoiding
    misunderstandings.

-   **Dedicated Account Manager:** A single point of contact simplifies
    communication.

-   **Problem-Solving Approach:** A manufacturer that identifies
    potential issues and proposes solutions, rather than just reporting
    problems.

**Benefits:** Clear communication minimizes errors, reduces delays, and
builds trust.

#### Ethical & Sustainable Manufacturing Practices

Today''s consumers and regulatory bodies demand transparency and
responsibility. Partnering with an ethically and sustainably compliant
manufacturer is no longer optional; it''s a necessity for brand
integrity and long-term viability.

#### Checklist for Ethical & Sustainable Practices:

-   **Fair Labor:** Compliance with local labor laws, fair wages, safe
    working conditions, no child labor.

-   **Environmental Impact:** Measures to reduce waste, conserve water
    and energy, manage chemical usage, and minimize pollution.

-   **Certifications:** Look for certifications like OEKO-TEX (for
    textile safety), GOTS (Global Organic Textile Standard), GRS (Global
    Recycled Standard), WRAP (Worldwide Responsible Accredited
    Production), or SA8000.

-   **Traceability:** The ability to trace materials back to their
    source.

**Industry Insight:** Ethical manufacturing not only protects your
brand''s reputation but also often correlates with better quality and
more engaged employees within the factory.

## Evaluating Manufacturing Capabilities & Services

Beyond core qualities, delve into the specific services and capabilities
a manufacturer offers. Do they align with your business model and
product requirements?

#### OEM vs. Private Label: Which is Right for You?

Understanding these two fundamental manufacturing models is crucial for
aligning with the right partner.

-   **OEM (Original Equipment Manufacturer) Manufacturing:**

    -   **Description:** The manufacturer produces goods based on your
        specific designs, patterns, and technical specifications (your
        "tech pack"). You provide the blueprint, they execute the
        production.

    -   **Pros:** Complete design control, unique product identity,
        ideal for established brands with proprietary designs.

    -   **Cons:** Higher design and development costs, longer lead times
        for new designs, typically higher MOQs.

    -   **Best For:** Brands with unique vision, technical apparel
        innovations, significant design resources.

-   **Private Label Manufacturing:**

    -   **Description:** You select existing, pre-designed styles from
        the manufacturer''s catalog. They then customize these items
        with your branding (logos, labels), colors, and possibly minor
        modifications.

    -   **Pros:** Lower MOQs, faster time to market, reduced design and
        development costs, easier for startups to launch.

    -   **Cons:** Less design control, potential for similar products in
        the market, reliance on manufacturer''s existing styles.

    -   **Best For:** Startups, businesses testing new markets, seeking
        cost-effective entry, sports clubs needing standard uniforms.

**Recommendation:** Consider your current stage of business. Startups
might begin with private label to gain market traction, then transition
to OEM as they grow and develop unique designs.

#### Comprehensive Service Offerings: From Design to Delivery

A truly valuable partner offers a full suite of services, simplifying
your supply chain management.

-   **Custom Design & Development:** Support in translating your
    concepts into manufacturable designs.

-   **Fabric Sourcing:** Access to a wide range of performance fabrics
    and material suppliers.

-   **Pattern Making & Grading:** Expertise in creating accurate
    patterns and scaling them to different sizes.

-   **Sample Development:** Efficient production of prototypes for fit
    and approval.

-   **Decoration Techniques:** A variety of printing (sublimation,
    screen, heat transfer) and embellishment (embroidery, silicone
    logos) options.

-   **Packaging & Labeling:** Custom polybags, hang tags, woven labels,
    barcodes.

-   **Quality Inspection:** In-house QC and optional third-party
    inspection management.

-   **Logistics & Worldwide Shipping:** Management of freight, customs,
    and delivery to your destination.

**Benefit:** A one-stop-shop manufacturer reduces coordination headaches
and potential communication gaps between multiple vendors.

#### Fabric Sourcing & Material Expertise

The heart of performance sportswear lies in its fabrics. Your
manufacturer should have extensive experience in sourcing and working
with technical textiles.

-   **Diverse Fabric Portfolio:** Access to moisture-wicking polyesters,
    breathable nylons, high-stretch spandex blends, sustainable options
    (recycled, organic), and specialized performance fabrics.

-   **Supplier Relationships:** Established connections with reputable
    fabric mills, ensuring consistent quality and availability.

-   **Fabric Testing:** Capability to test fabric properties to ensure
    they meet performance specifications.

#### Advanced Printing & Decoration Techniques

Your brand''s visual identity relies on high-quality decoration. The
manufacturer should offer a diverse range of appropriate techniques.

-   **Sublimation Printing:** For vibrant, all-over, durable designs on
    polyester.

-   **Screen Printing:** For bold graphics, cost-effective for larger
    runs on various fabrics.

-   **Embroidery:** For a premium, textured finish on logos and badges.

-   **Heat Transfer Printing:** Versatile for numbers, names, and
    complex designs on various fabric types.

-   **Specialty Embellishments:** Silicone logos, reflective elements,
    woven labels, hang tags.

#### Checklist for Decoration Capabilities:

-   Do they match your desired aesthetic?

-   Are they suitable for your chosen fabric?

-   Do they meet durability requirements for sportswear?

-   Can they achieve your specific color matching (Pantone Matching
    System - PMS)?

#### Sample Development & Prototyping Excellence

The sampling phase is where your design comes to life. A manufacturer''s
efficiency and accuracy here are critical.

#### Best Practices for Sample Development:

-   **Clear Communication of Revisions:** Document all changes
    meticulously.

-   **Multiple Sample Rounds (if needed):** Don''t rush to production
    until the sample is perfect.

-   **Fit Model Testing:** Ensure the sample fits your target body type
    correctly.

-   **Detailed Feedback:** Provide specific, actionable feedback on fit,
    construction, and aesthetics.

**Benefit:** A manufacturer skilled in sample development minimizes
costly errors and ensures the final product aligns with your vision.

#### Production Capacity & Scalability

As your brand grows, your manufacturing partner should be able to grow
with you.

-   **Current Capacity:** Can they handle your current order volumes
    within your desired lead times?

-   **Scalability:** Do they have the flexibility to increase production
    if your demand spikes?

-   **Flexibility:** Can they accommodate smaller test runs alongside
    larger orders?

**Recommendation:** Discuss your long-term growth plans with potential
manufacturers. A partner who understands and can support your growth
trajectory is invaluable.

## The Vetting Process: A Step-by-Step Guide

Finding the right sportswear manufacturer is a structured journey.
Follow these steps for a thorough and effective vetting process.

#### Step 1: Initial Research & Shortlisting

-   **Online Search:** Utilize keywords like "custom sportswear
    manufacturer," "technical apparel factory," "OEM sports
    uniforms."

-   **Industry Directories:** Explore B2B platforms like Alibaba, Global
    Sources, or specialized apparel manufacturing directories.

-   **Networking:** Ask for recommendations from other brands, industry
    consultants, or trade associations.

-   **Trade Shows:** Attend relevant apparel and textile trade shows to
    meet manufacturers face-to-face.

**Create a Shortlist:** Select 5-10 manufacturers that appear to meet
your basic criteria (product specialization, apparent size, location).

#### Step 2: Request for Quotation (RFQ) & Technical Pack Review

-   **Prepare a Comprehensive Tech Pack:** This should include detailed
    garment sketches, material specifications (fabric type, weight,
    composition), color references (Pantone codes), sizing charts,
    construction details, print/embroidery specifications, and packaging
    requirements.

-   **Send RFQ:** Distribute your tech pack to your shortlisted
    manufacturers, requesting a detailed quotation that includes
    per-unit cost, MOQ, sample fees, lead times, and payment terms.

-   **Evaluate Responses:** Compare quotes not just on price, but also
    on clarity, completeness, responsiveness, and how well they
    understand your specifications.

**Expert Tip:** A manufacturer''s ability to provide a comprehensive and
clear quote from a detailed tech pack is an early indicator of their
professionalism and attention to detail.

#### Step 3: Sample Development & Evaluation

This is arguably the most crucial step.

-   **Order Proto Samples:** Engage 2-3 of your top contenders to
    produce initial prototypes (proto samples) based on your tech pack.
    Be prepared to pay for these samples.

-   **Thorough Evaluation:**

    -   **Fit Test:** Use fit models that represent your target
        audience.

    -   **Functionality Test:** Put the sportswear through its paces
        (e.g., a run, a workout).

    -   **Quality Check:** Scrutinize stitching, seam finishes, fabric
        quality, and decoration.

    -   **Measurement Verification:** Ensure all measurements align with
        your specs.

    -   **Wash Test:** Check for shrinkage, colorfastness, and
        durability after washing.

-   **Provide Detailed Feedback:** Give clear, constructive feedback for
    revisions. Observe how quickly and accurately they implement changes
    for subsequent samples (e.g., fit sample, pre-production sample).

#### Step 4: Factory Audits & Certifications

For larger orders or long-term partnerships, a factory audit is highly
recommended.

-   **Self-Audit Questionnaire:** Request the manufacturer to complete a
    detailed questionnaire about their facilities, production processes,
    QC, and labor practices.

-   **Third-Party Audit:** Consider hiring an independent auditing firm
    to visit the factory and assess compliance with social (e.g., WRAP,
    SA8000) and environmental standards.

-   **Certifications:** Verify any claimed certifications (OEKO-TEX,
    GOTS, ISO, etc.) by requesting copies and checking their validity.

#### Step 5: Reference Checks & Case Studies

-   **Request References:** Ask for contact information for other brands
    or clients they have worked with, especially those in your niche.

-   **Contact References:** Ask about communication, quality
    consistency, lead time adherence, problem resolution, and overall
    satisfaction.

-   **Review Case Studies:** Examine their published case studies for
    insights into their capabilities and successful projects.

#### Step 6: Negotiation & Contract Finalization

-   **Negotiate Terms:** Discuss pricing, MOQs, payment terms, lead
    times, quality assurance clauses, and intellectual property
    agreements.

-   **Draft a Comprehensive Contract:** Ensure all agreed-upon terms are
    legally binding. Include details on product specifications, quality
    standards, delivery schedules, payment milestones, and dispute
    resolution.

-   **Start Small (if possible):** For your first order, consider a
    smaller, manageable quantity to build trust and evaluate their
    performance before committing to larger volumes.

## Critical Factors for Long-Term Partnership Success

Choosing a sportswear manufacturer is the beginning of a relationship.
For it to thrive and truly benefit your brand, several long-term
considerations come into play.

#### Intellectual Property Protection

Your designs are your brand''s unique assets. Ensuring their protection
is paramount.

-   **Non-Disclosure Agreement (NDA):** Always have a signed NDA in
    place before sharing any proprietary designs or tech packs.

-   **Contractual Clauses:** Include specific clauses in your
    manufacturing agreement outlining IP ownership and confidentiality.

-   **Manufacturer''s Reputation:** A reputable manufacturer will have
    strong internal controls to protect client IP.

**Consequence of Neglect:** Unprotected designs can lead to
counterfeiting or unauthorized production, severely damaging your brand
and market share.

#### Supply Chain Transparency & Risk Management

A transparent supply chain allows you to understand where materials come
from and how products are made, enhancing ethical oversight and enabling
better risk management.

-   **Visibility:** Can the manufacturer provide information on their
    sub-suppliers (fabric mills, trim suppliers)?

-   **Contingency Planning:** Does the manufacturer have strategies in
    place to mitigate risks like material shortages, production delays,
    or natural disasters?

-   **Geographic Diversification:** For very large brands, considering
    manufacturers in different regions can diversify risk.

#### Cultural Alignment & Trust

Beyond technical capabilities, a successful partnership often relies on
shared values and mutual trust.

-   **Communication Style:** Do their communication methods (email,
    calls, video) align with yours?

-   **Problem-Solving Philosophy:** Do they approach challenges
    collaboratively and seek solutions?

-   **Shared Vision:** Do they genuinely understand and buy into your
    brand''s mission and goals?

**Benefit:** A high degree of trust fosters open communication, easier
problem resolution, and a more enjoyable working relationship.

#### Continuous Improvement & Innovation

The sportswear industry is constantly evolving with new fabrics,
technologies, and trends. A forward-thinking manufacturer will embrace
continuous improvement and actively explore innovations.

-   **R&D Capabilities:** Do they invest in research and development for
    new materials or production techniques?

-   **Staying Current:** Do they stay abreast of global fashion and
    performance trends?

-   **Feedback Integration:** Are they open to client feedback and use
    it to refine their processes?

#### Post-Production Support & Problem Resolution

Even with the best planning, issues can arise. How a manufacturer
handles these challenges is a true test of partnership.

-   **Warranty/Guarantee:** Do they offer any guarantees on their
    workmanship?

-   **Returns/Defect Policy:** What is their process for addressing
    defective goods?

-   **Long-Term Support:** Are they available for ongoing consultation
    or support after an order is delivered?

## Common Mistakes When Choosing a Sportswear Manufacturer (and How to Avoid Them)

Navigating the manufacturing landscape can be fraught with pitfalls.
Being aware of these common mistakes can save you significant time,
money, and stress.

#### 1. Prioritizing Price Over Quality

-   **Mistake:** Choosing the cheapest manufacturer without thoroughly
    vetting their quality, experience, or capabilities.

-   **Consequence:** Inferior products, customer complaints, returns,
    brand damage, and ultimately, higher costs due to rectifying issues.

-   **Avoidance:** Always balance cost with quality. Request samples,
    perform thorough QC, check references, and remember that quality
    pays for itself in the long run.

#### 2. Ignoring MOQs and Production Capacity

-   **Mistake:** Partnering with a manufacturer whose MOQs are too high
    for your current needs, or whose capacity is insufficient for your
    growth.

-   **Consequence:** High inventory costs, inability to scale, or being
    unable to place orders that meet your market demand.

-   **Avoidance:** Clearly define your current and projected MOQs from
    the outset. Discuss production capacity and flexibility during the
    vetting process.

#### 3. Lack of Clear Communication & Specifications

-   **Mistake:** Providing incomplete tech packs, vague design
    instructions, or failing to maintain open, consistent communication.

-   **Consequence:** Misinterpretations, production errors, delays, and
    a final product that doesn''t match your vision.

-   **Avoidance:** Develop comprehensive tech packs, use clear and
    unambiguous language, utilize visual aids, and maintain a dedicated
    point of contact for all communications.

#### 4. Neglecting Ethical & Sustainability Due Diligence

-   **Mistake:** Not verifying a manufacturer''s ethical labor practices
    or environmental commitments.

-   **Consequence:** Brand backlash, reputational damage, legal issues,
    and contributing to harmful industry practices.

-   **Avoidance:** Request certifications, conduct third-party audits,
    ask specific questions about labor conditions and environmental
    policies, and prioritize transparency.

#### 5. Skipping Sample Development

-   **Mistake:** Rushing directly to mass production without approving a
    physical prototype.

-   **Consequence:** Discovering critical design flaws, fit issues, or
    quality problems only after thousands of units have been produced,
    leading to massive financial losses.

-   **Avoidance:** Always invest in a thorough sample development
    process, including multiple rounds of revisions and physical
    testing, until the sample is perfect.

#### 6. Failing to Protect Intellectual Property

-   **Mistake:** Sharing designs or proprietary information without a
    signed Non-Disclosure Agreement (NDA) or clear IP clauses in the
    contract.

-   **Consequence:** Risk of design theft, unauthorized reproduction, or
    counterfeiting of your products.

-   **Avoidance:** Have a strong, legally binding NDA in place from the
    very beginning, and ensure your manufacturing contract explicitly
    addresses IP ownership and confidentiality.

## Case Study: A Brand''s Journey to a Perfect Manufacturing Match

**Brand Profile:** "Ascend Athletic," a startup specializing in
premium women''s activewear (leggings, sports bras, tops) with a focus
on sustainable materials and inclusive sizing.

**Initial Challenge:** Ascend Athletic initially partnered with a large,
general apparel manufacturer to save costs. While the prices were
competitive, Ascend quickly faced challenges:

-   **Quality Issues:** Inconsistent stitching, poor fabric stretch
    recovery, and color variations.

-   **Communication Breakdown:** Language barriers and slow response
    times led to misunderstandings.

-   **Lack of Expertise:** The manufacturer struggled with the technical
    aspects of performance fabrics and specialized flatlock seams
    required for activewear.

-   **Ethical Concerns:** Ascend couldn''t get clear answers on the
    factory''s labor practices.

**The Turning Point:** Ascend realized they were prioritizing price over
the specific needs of their technical apparel. They redefined their
search criteria, focusing on:

1.  **Sportswear Specialization:** A manufacturer with a proven track
    record in activewear.

2.  **Robust QC:** Demonstrated multi-stage quality control.

3.  **Sustainable Focus:** Certifications and a clear commitment to
    eco-friendly production.

4.  **Clear Communication:** Excellent English-speaking project
    management.

5.  **Lower MOQs:** Flexibility for their startup phase.

**The Solution:** After a rigorous vetting process that included
detailed RFQs, multiple sample rounds, and a third-party audit, Ascend
partnered with a mid-sized, specialized sportswear manufacturer in
Vietnam.

#### Outcome:

-   **Superior Product Quality:** Flawless stitching, consistent sizing,
    and fabrics that performed exactly as specified.

-   **Efficient Communication:** A dedicated account manager provided
    regular updates and quickly resolved any issues.

-   **Ethical Alignment:** The new manufacturer held WRAP and OEKO-TEX
    certifications, aligning with Ascend''s brand values.

-   **Scalability:** The manufacturer offered flexible MOQs, allowing
    Ascend to grow steadily.

-   **Increased Customer Satisfaction:** Positive reviews poured in,
    praising the quality and fit of the apparel.

**Lesson Learned:** Investing more time and resources in **choosing
sportswear manufacturer** that truly aligns with your specific needs and
values ultimately leads to a higher quality product, a stronger brand,
and sustainable business growth.

## Expert Tips for Optimizing Your Manufacturer Relationship

Once you''ve selected your ideal partner, these tips will help you
cultivate a strong, productive, and long-lasting relationship.

1.  **Build a Relationship, Not Just a Transaction:** Treat your
    manufacturer as an extension of your team. Invest in communication,
    empathy, and mutual respect.

2.  **Provide Clear & Consistent Feedback:** Be specific, actionable,
    and timely with your feedback on samples and production. Use photos
    or marked-up documents to illustrate points.

3.  **Understand Their Culture & Processes:** Learn about their
    operational cadence, preferred communication channels, and any
    cultural nuances to foster better collaboration.

4.  **Pay on Time:** Adhering to payment schedules builds trust and
    ensures your orders are prioritized.

5.  **Be Realistic with Expectations:** Manufacturing involves
    complexities. Be open to discussing challenges and finding
    collaborative solutions rather than demanding the impossible.

6.  **Visit the Factory (If Possible):** A factory visit, especially for
    initial setup or large orders, can provide invaluable insight into
    their operations and foster personal connection.

7.  **Plan Ahead & Forecast Accurately:** Provide manufacturers with
    accurate forecasts of your needs to help them plan material
    procurement and production capacity efficiently.

8.  **Appreciate Their Work:** Acknowledging good work and expressing
    gratitude goes a long way in building loyalty and a positive working
    relationship.

## FAQs: Your Sportswear Manufacturer Questions Answered

Here are some frequently asked questions about choosing a sportswear
manufacturer, providing quick answers to common concerns.

**1. What is the most important factor when choosing a sportswear
manufacturer?**
While many factors are crucial, the most important is often the
manufacturer''s **specialization and proven expertise in sportswear and
technical apparel**. This ensures they understand the unique demands of
performance fabrics, construction, and quality required for athletic
wear.

#### 2. Should I choose a local or overseas sportswear manufacturer?
Both have pros and cons. **Local manufacturers** often offer faster
communication, easier visits, and potentially quicker lead times for
smaller runs. **Overseas manufacturers** (e.g., in Asia) typically offer
lower production costs, higher capacity, and access to a wider range of
specialized technologies and fabrics for larger volumes. Your decision
depends on your budget, timeline, MOQs, and ethical priorities.

#### 3. How can I ensure my designs are protected by a manufacturer?
Always sign a comprehensive **Non-Disclosure Agreement (NDA)** before
sharing any proprietary information. Additionally, ensure your
manufacturing contract includes strong intellectual property (IP)
protection clauses that clearly define ownership and confidentiality.

#### 4. What are common red flags when evaluating a manufacturer?
Red flags include unusually low prices that seem too good to be true,
poor communication, reluctance to provide samples or references, lack of
transparency about their processes or facility, no clear quality control
procedures, and inability to provide relevant certifications.

#### 5. Is a factory audit really necessary?
For significant investments, large orders, or long-term partnerships, a
factory audit (preferably third-party) is highly recommended. It
provides an independent verification of their production capabilities,
quality systems, and adherence to ethical and environmental standards.

#### 6. What is a "tech pack" and why is it so important?
A **tech pack (technical package)** is a comprehensive document
detailing every aspect of your garment design, including sketches,
measurements, material specifications, construction details, and
branding placement. It''s crucial because it serves as the definitive
blueprint for manufacturing, minimizing misinterpretations and ensuring
accuracy.

**7. How do MOQs (Minimum Order Quantities) impact my choice of
manufacturer?**
MOQs directly influence which manufacturers you can work with.
Manufacturers with very high MOQs are typically geared for large-scale
production and may not entertain smaller orders. If you''re a startup or
have limited volume, you''ll need to find manufacturers with lower, more
flexible MOQs, which might be common in private label offerings.

#### 8. What payment terms are typical in sportswear manufacturing?
Standard payment terms often involve an upfront deposit (e.g., 30-50%)
to initiate material sourcing and production, with the remaining balance
due upon completion of manufacturing or prior to shipment. Specific
terms can be negotiated based on the order size and the established
relationship.

#### 9. How important is sustainability when choosing a manufacturer?
Extremely important. Consumers increasingly demand sustainable and
ethically produced goods. Partnering with a manufacturer committed to
eco-friendly practices and fair labor not only enhances your brand''s
reputation but also helps meet regulatory compliance and future-proofs
your business.

**10. Can a manufacturer help with design if I only have a basic
idea?**
Yes, many full-service manufacturers offer custom design and development
support. They can take your sketches, mood boards, or basic concepts and
translate them into detailed tech packs, select suitable fabrics, and
guide you through the design process.

#### 11. What if there are quality issues with my order after delivery?
A reputable manufacturer will have a clear policy for handling quality
issues. This typically involves reviewing the defects, assessing
responsibility, and offering solutions such as repair, replacement, or
credit for defective goods. A strong contract should outline these
procedures.

#### 12. How do I evaluate a manufacturer''s communication skills?
Pay attention to their responsiveness, clarity of written and verbal
communication, willingness to answer questions thoroughly, and their
ability to proactively provide updates. A manufacturer with a dedicated,
English-speaking account manager is often a good sign.

#### Conclusion: Forge Your Future with the Right Partner

**Choosing sportswear manufacturer** is one of the most strategic
decisions your brand will make. It''s a process that demands meticulous
research, diligent vetting, and a clear understanding of your own needs
and the complexities of technical apparel production. The right partner
will not only manufacture your products but will become a crucial
extension of your team, contributing significantly to your brand''s
reputation, efficiency, and growth.

By prioritizing specialization, quality control, transparent
communication, ethical practices, and comprehensive service offerings,
you can navigate this critical selection with confidence. Remember, the
cheapest option rarely proves to be the most cost-effective in the long
run. Invest in a partner who aligns with your vision, can scale with
your ambitions, and is committed to delivering custom sportswear that
truly excels.

We understand the intricate dance between design, production, and
delivery on a global scale. As your dedicated sportswear manufacturing
consultant, we are poised to transform your concepts into tangible,
high-performance realities. Let us be the trusted partner that brings
your next collection or team uniform to market with unparalleled
precision and quality.

Ready to find the perfect manufacturing partner for your sportswear
brand?

#### Request a Quotation Today and Let Our Expertise Elevate Your Vision!
', '22 min read', false, true, '2026-06-01'::timestamptz) on conflict (slug) do nothing;
insert into articles (id, slug, title, category, excerpt, cover_image, content, read_time, is_featured, is_published, published_at) values (gen_random_uuid(), 'oem-vs-private-label-sportswear', 'OEM vs Private Label Sportswear: Which Manufacturing Model Is Right for Your Brand?', 'OEM / ODM', 'A side-by-side breakdown of OEM and Private Label manufacturing — design ownership, cost, lead time, MOQ, and how to decide which path fits your brand strategy.', 'oem-vs-private-label-hero.jpg', '# OEM vs Private Label Sportswear: Which Manufacturing Model Is Right for Your Brand?

In the dynamic and highly competitive world of sportswear, the journey
from a brilliant idea to a market-ready product is paved with critical
decisions. Among the most significant is choosing the right
manufacturing model: **OEM (Original Equipment Manufacturing) vs.
Private Label Sportswear**. This choice profoundly impacts everything
from your product''s uniqueness and development costs to your speed to
market and long-term brand identity.

For sportswear brands, agile clothing startups, international buyers,
and sports clubs, understanding the nuances of these two models isn''t
just about production---it''s about strategic alignment. Are you looking
to launch a truly innovative line of compression wear with proprietary
technology, or do you need to quickly introduce a range of high-quality
gym wear with your brand''s unique aesthetic? Your answer dictates the
optimal path forward.

This comprehensive guide, informed by our extensive expertise as
technical apparel consultants and global sportswear manufacturers, will
demystify OEM and Private Label models. We''ll delve into their
definitions, explore the pros and cons of each, highlight key
considerations, and provide real-world scenarios to help you determine
which manufacturing strategy is the perfect fit for your brand''s
vision, budget, and growth aspirations. By the end, you''ll be equipped
to make an informed decision that propels your sportswear venture
towards unparalleled success.

## Introduction to Sportswear Manufacturing Models

The journey to bring a custom sportswear product to market is complex,
often requiring a deep understanding of textile technology, garment
construction, and global logistics. Before diving into the specifics of
design, fabric sourcing, or printing techniques, a fundamental decision
must be made: how will your product actually be manufactured? This
initial strategic choice sets the trajectory for your entire supply
chain.

#### The Strategic Importance of Your Manufacturing Choice

The manufacturing model you select---OEM or Private Label---is not
merely an operational detail; it''s a strategic pillar that influences:

-   **Brand Identity & Differentiation:** How unique and recognizable
    will your product be?

-   **Product Uniqueness & Innovation:** Can you implement proprietary
    features or groundbreaking designs?

-   **Development Costs & Budget:** What are the upfront investments in
    design, patterns, and samples?

-   **Time to Market:** How quickly can you get your products from
    concept to customer?

-   **Minimum Order Quantities (MOQs):** What volume of production can
    you realistically commit to?

-   **Intellectual Property (IP) Ownership:** Who owns the design and
    patterns?

-   **Supply Chain Control:** How much oversight do you have over
    materials and processes?

A misaligned manufacturing model can lead to significant cost overruns,
extended delays, quality compromises, and ultimately, a failure to meet
market expectations. Conversely, choosing the right model empowers your
brand, streamlines your operations, and accelerates your path to
success.

## Understanding OEM (Original Equipment Manufacturing) Sportswear

OEM, or Original Equipment Manufacturing, is a highly customized
approach where a manufacturer produces goods based entirely on the
buyer''s unique designs, specifications, and intellectual property. In
the context of sportswear, this means bringing your original concepts
for athletic apparel to life.

#### Definition & Core Principles

In an OEM model, the buyer (your brand) owns the design, the patterns,
and often the intellectual property of the product. The manufacturer
acts as a production partner, executing your vision according to your
detailed instructions. Think of it as commissioning a tailor to create a
bespoke suit from your precise measurements and fabric choices.

#### Core Principles:

-   **Buyer-Driven Design:** You provide the complete technical package
    (tech pack).

-   **Exclusive Product:** The resulting product is unique to your
    brand.

-   **Manufacturer as Executor:** The factory''s role is to produce
    exactly what you''ve specified.

-   **IP Ownership by Buyer:** Your brand retains full ownership of the
    product design.

#### The OEM Process in Detail

1.  **Concept & Design Development (by your brand):** You generate the
    initial idea, sketches, and detailed technical drawings.

2.  **Tech Pack Creation (by your brand/designer):** A comprehensive
    document outlining every aspect: fabric type, weight, composition,
    color codes (Pantone), size charts, construction methods,
    print/embroidery placement, and trims.

3.  **Manufacturer Review & Quotation:** The OEM manufacturer reviews
    your tech pack, provides feedback on feasibility, suggests material
    alternatives, and submits a detailed quotation.

4.  **Material Sourcing:** The manufacturer sources fabrics, trims, and
    components according to your specifications.

5.  **Pattern Making & Sample Development:** Custom patterns are
    created, and an initial prototype (proto sample) is made.

6.  **Fit & Performance Testing (by your brand):** You rigorously test
    the sample for fit, function, and aesthetics.

7.  **Revisions & Approval:** Based on your feedback, samples are
    revised until approved (fit sample, pre-production sample).

8.  **Mass Production:** Once all samples are approved, mass production
    commences, followed by strict quality control.

9.  **Finishing, Packaging & Delivery:** Products are finished, packaged
    to your specifications, and shipped.

#### Key Advantages of OEM Sportswear Manufacturing

1.  **Unique Product & Strong Brand Identity:**

    -   **Benefit:** You create products that are entirely your own,
        setting you apart from competitors. This fosters a strong,
        recognizable brand identity and allows for proprietary features.

    -   **Example:** Developing a new type of compression fabric with a
        unique knit pattern or an innovative seamless design for sports
        bras.

2.  **Full Design Control & Customization:**

    -   **Benefit:** You have complete autonomy over every
        detail---fabric, fit, color, construction, and branding. This
        allows for precise alignment with your brand''s vision and
        performance requirements.

    -   **Example:** Designing a rugby kit with specific paneling for
        enhanced durability, ventilation zones unique to your brand, and
        a bespoke collar style.

3.  **Innovation & Technical Apparel Development:**

    -   **Benefit:** OEM is ideal for brands focused on pushing
        boundaries with new technologies, advanced materials, or
        groundbreaking ergonomic designs.

    -   **Example:** A startup developing running wear with integrated
        smart sensors or a unique moisture-wicking technology.

4.  **Higher Perceived Value:**

    -   **Benefit:** Exclusive products often command higher price
        points and are perceived as more premium by consumers who seek
        originality.

    -   **Example:** A luxury activewear brand using custom-developed,
        high-performance fabrics and unique designs to justify a premium
        price.

5.  **Intellectual Property Ownership:**

    -   **Benefit:** Your brand owns the designs and patterns,
        protecting your unique offerings from direct replication by
        competitors.

    -   **Expert Tip:** Always secure NDAs and IP clauses in your
        manufacturing contract to safeguard your designs.

#### Potential Disadvantages of OEM Sportswear Manufacturing

1.  **Higher Upfront Costs:**

    -   **Challenge:** Significant investment in design, pattern making,
        sample development, and tooling. Each new design incurs these
        costs.

    -   **Consideration:** Requires a larger initial budget compared to
        private label.

2.  **Longer Lead Times:**

    -   **Challenge:** The comprehensive design, development, and
        multiple sampling rounds extend the time from concept to mass
        production.

    -   **Consideration:** Not ideal for quick market entry or
        fast-changing trends.

3.  **Higher Minimum Order Quantities (MOQs):**

    -   **Challenge:** OEM manufacturers often require higher MOQs to
        justify the custom setup and production efforts.

    -   **Consideration:** Can be a barrier for startups or smaller
        brands with limited capital or demand.

4.  **Requires In-House Design & Technical Expertise:**

    -   **Challenge:** Your brand needs robust design capabilities, or
        you must hire external designers to create detailed tech packs.

    -   **Consideration:** Adds to your operational overhead if you
        don''t have these resources.

5.  **More Complex Project Management:**

    -   **Challenge:** You are responsible for every detail, requiring
        close oversight of the manufacturer to ensure specifications are
        met precisely.

    -   **Consideration:** Demands more internal resources for
        communication, quality checks, and approvals.

#### Who is OEM Best Suited For?

-   **Established Sportswear Brands:** With a clear brand identity,
    existing design teams, and a need for unique, innovative products.

-   **Tech-Focused Startups:** Companies looking to introduce
    groundbreaking performance features or proprietary designs.

-   **Brands with Strong IP Focus:** Those that prioritize product
    uniqueness and want to protect their designs.

-   **High-Volume Producers:** Businesses capable of meeting higher MOQs
    to achieve economies of scale for custom products.

-   **Niche Market Innovators:** Brands targeting specific athletic
    needs with highly specialized apparel.

## Understanding Private Label Sportswear Manufacturing

Private Label manufacturing offers a streamlined approach, allowing
brands to quickly launch products using a manufacturer''s existing
designs, which are then customized with the buyer''s branding. It''s
about putting your name on a proven product.

#### Definition & Core Principles

In the Private Label model, the manufacturer has a catalog of
pre-designed, ready-to-produce styles (e.g., standard leggings, hoodies,
t-shirts, jerseys). You select these styles and then customize them with
your brand''s logos, colors, specific fabric choices (from available
options), and labels. The core design remains the manufacturer''s, but
the final product is branded exclusively as yours.

#### Core Principles:

-   **Manufacturer-Driven Base Design:** You choose from existing
    designs.

-   **Branding by Buyer:** Your unique branding is applied.

-   **Speed & Efficiency:** Focus on quick customization and market
    entry.

-   **Manufacturer Owns Base IP:** The core product design is owned by
    the manufacturer.

#### The Private Label Process in Detail

1.  **Catalog Selection (by your brand):** You browse the
    manufacturer''s extensive catalog of existing sportswear styles
    (e.g., specific cuts of leggings, various hoodie styles, jersey
    templates).

2.  **Customization Choices (by your brand):** You select desired fabric
    colors (from available stock), apply your logos (via sublimation,
    screen print, embroidery), choose label types (woven, hang tags),
    and potentially make minor trim adjustments.

3.  **Manufacturer Provides Sample:** A sample of the chosen style with
    your branding is produced for your approval.

4.  **Approval & Mass Production:** Once the branded sample is approved,
    mass production begins.

5.  **Finishing, Packaging & Delivery:** Products are finished, packaged
    with your branding, and shipped.

#### Key Advantages of Private Label Sportswear Manufacturing

1.  **Lower Upfront Costs:**

    -   **Benefit:** No extensive design or pattern development fees, as
        you''re using existing styles. This significantly reduces
        initial investment.

    -   **Example:** A startup with a limited budget can launch a full
        line of gym wear without incurring high design costs.

2.  **Faster Time to Market:**

    -   **Benefit:** The design and pattern creation stages are
        eliminated, leading to quicker sample approval and much shorter
        production lead times.

    -   **Example:** A retailer needing to quickly capitalize on a new
        sportswear trend can get products on shelves in a fraction of
        the time compared to OEM.

3.  **Lower Minimum Order Quantities (MOQs):**

    -   **Benefit:** Manufacturers are often more flexible with MOQs for
        private label products because the base design is already
        established and can be offered to multiple clients.

    -   **Example:** Small sports clubs needing 20-30 custom soccer
        uniforms can often meet private label MOQs where OEM might be
        prohibitive.

4.  **Reduced Design & Technical Expertise Required:**

    -   **Benefit:** You don''t need an in-house design team or deep
        technical knowledge for garment construction. The manufacturer
        handles the core product development.

    -   **Example:** A new entrepreneur without apparel industry
        experience can launch a sportswear brand with relative ease.

5.  **Proven Product Quality & Fit:**

    -   **Benefit:** You''re utilizing designs that the manufacturer has
        likely refined and produced for other clients, often implying a
        tested and reliable fit and quality baseline.

    -   **Expert Tip:** Always order a sample with your branding to
        verify the quality and aesthetic before committing to a bulk
        order.

#### Potential Disadvantages of Private Label Sportswear Manufacturing

1.  **Limited Product Uniqueness & Differentiation:**

    -   **Challenge:** The core design is not exclusive to your brand,
        meaning competitors might offer very similar-looking products
        from the same manufacturer.

    -   **Consideration:** Differentiation relies heavily on branding,
        marketing, and customer experience rather than product design
        alone.

2.  **Less Design Control & Customization:**

    -   **Challenge:** Customization is limited to branding, colors
        (from available options), and sometimes minor embellishments.
        You cannot alter the core pattern or construction.

    -   **Consideration:** Not suitable if you have a highly specific or
        innovative product vision.

3.  **Reliance on Manufacturer''s Design Aesthetics:**

    -   **Challenge:** You are tied to the manufacturer''s existing
        style catalog. If their aesthetic doesn''t align with your
        brand, options might be limited.

    -   **Consideration:** Thoroughly review the manufacturer''s private
        label catalog before committing.

4.  **No Intellectual Property Ownership of Base Design:**

    -   **Challenge:** The manufacturer owns the IP of the core product
        design, meaning you cannot take that exact design to another
        factory.

    -   **Consideration:** Your brand''s IP is limited to your logos and
        unique branding elements applied to the product.

5.  **Potential for Perceived Genericism:**

    -   **Challenge:** If your brand relies solely on private label, and
        many other brands use the same base products, consumers might
        perceive your offerings as generic over time.

    -   **Consideration:** Strong branding, quality materials (where
        customizable), and excellent customer service become even more
        critical.

#### Who is Private Label Best Suited For?

-   **Clothing Startups & New Brands:** With limited budget and design
    resources, seeking a quick and cost-effective entry into the market.

-   **Retailers & Wholesalers:** Looking to expand their product
    offerings quickly with their own brand, leveraging existing designs.

-   **Sports Clubs & Teams:** Needing custom team uniforms and
    merchandise quickly and affordably, without needing highly unique
    designs.

-   **Influencers & E-commerce Businesses:** Wanting to launch branded
    apparel lines without deep manufacturing knowledge.

-   **Market Testers:** Businesses looking to test demand for specific
    product categories before investing heavily in OEM.

## Direct Comparison: OEM vs Private Label Sportswear

![Generic blank garment versus a fully customized jersey](ARTICLE_IMG:generic-vs-customized.jpg)

To simplify your decision, let''s place these two models side-by-side
across key dimensions.

#### A Side-by-Side Analysis

<div class="table-scroll"><table>
<thead><tr><th>Feature</th><th>OEM (Original Equipment Manufacturing)</th><th>Private Label Manufacturing</th></tr></thead>
<tbody>
<tr><td><strong>Product Design</strong></td><td>Your Brand''s Original Design</td><td>Manufacturer''s Existing Design</td></tr>
<tr><td><strong>Product Uniqueness</strong></td><td>High: completely custom, unique to your brand</td><td>Low to Medium: core design is generic, uniqueness from branding</td></tr>
<tr><td><strong>Design Control</strong></td><td>Full: every detail dictated by your tech pack</td><td>Limited: branding, colors, trims on existing styles</td></tr>
<tr><td><strong>Innovation Potential</strong></td><td>High: ideal for proprietary technology &amp; unique features</td><td>Low: restricted to existing product structures</td></tr>
<tr><td><strong>Intellectual Property</strong></td><td>Owned by your brand (design &amp; patterns)</td><td>Owned by manufacturer (base design); your brand owns logos</td></tr>
<tr><td><strong>Upfront Costs</strong></td><td>Higher: design, pattern making, sampling, tooling</td><td>Lower: no design &amp; pattern development fees</td></tr>
<tr><td><strong>Lead Times</strong></td><td>Longer: extensive R&amp;D, sampling, custom setup</td><td>Shorter: leveraging existing designs and patterns</td></tr>
<tr><td><strong>Minimum Order QTY (MOQ)</strong></td><td>Generally higher (to justify custom setup)</td><td>Generally lower (efficient for manufacturer)</td></tr>
<tr><td><strong>Required Expertise</strong></td><td>High: requires strong in-house design &amp; technical knowledge</td><td>Low: manufacturer handles core product development</td></tr>
<tr><td><strong>Differentiation</strong></td><td>Product-led: unique features, performance, aesthetic</td><td>Brand-led: branding, marketing, customer experience</td></tr>
<tr><td><strong>Market Entry</strong></td><td>Slower (for unique, innovative products)</td><td>Faster (for quick launches and trend capitalization)</td></tr>
<tr><td><strong>Best For</strong></td><td>Established brands, tech innovators, unique product vision, high volume</td><td>Startups, retailers, market testers, quick launches, cost-sensitive</td></tr>
</tbody>
</table></div>

#### Key Decision-Making Factors: A Deep Dive

When deciding between OEM and Private Label, consider these critical
factors in relation to your brand:

1.  **Your Brand''s Uniqueness & Vision:**

    -   **OEM:** If your core brand value is innovation, unique
        performance, or a distinct aesthetic that doesn''t exist, OEM is
        your path.

    -   **Private Label:** If your brand identity comes primarily from
        your marketing, branding, and customer experience, rather than
        product exclusivity, Private Label can be effective.

2.  **Budget & Financial Resources:**

    -   **OEM:** Requires a more substantial upfront investment for
        design and development. Ensure you have the capital.

    -   **Private Label:** A lower entry barrier, making it suitable for
        bootstrapped startups or those with limited initial funding.

3.  **Time to Market Strategy:**

    -   **OEM:** If you''re building a groundbreaking product, you''re
        prepared for a longer development cycle.

    -   **Private Label:** If you need to respond quickly to market
        trends or launch products rapidly, Private Label is superior.

4.  **Internal Design & Technical Capabilities:**

    -   **OEM:** Do you have a strong design team capable of creating
        detailed tech packs? Or the budget to hire consultants?

    -   **Private Label:** If your internal resources are lean,
        leveraging a manufacturer''s existing designs simplifies the
        process.

5.  **Minimum Order Quantity (MOQ) Requirements:**

    -   **OEM:** Be prepared for higher MOQs, typically in the hundreds
        or thousands of units per style/color.

    -   **Private Label:** Often offers MOQs as low as 50-100 units,
        making it accessible for smaller businesses.

6.  **Intellectual Property (IP) Goals:**

    -   **OEM:** If protecting your unique design and preventing
        replication is critical, OEM ensures your ownership.

    -   **Private Label:** If brand recognition through logos and
        marketing is your primary IP concern, Private Label is viable.

7.  **Scalability & Future Growth:**

    -   **OEM:** Allows for complete control as you scale, building a
        unique product ecosystem.

    -   **Private Label:** Can be a good starting point to test markets
        and build capital, but may limit long-term differentiation if
        not complemented by other strategies.

## Hybrid Approaches & Evolving Strategies

The choice between OEM and Private Label isn''t always binary. Many
successful brands utilize a combination of strategies, or evolve their
approach as they grow.

#### Combining OEM & Private Label

A popular strategy, especially for growing brands, is a hybrid approach:

-   **Core Products (OEM):** Invest in OEM for your signature,
    high-performance, or unique product lines that define your brand and
    offer competitive advantages (e.g., innovative compression wear,
    specialized cycling jerseys).

-   **Supporting Products (Private Label):** Utilize private label for
    essential, complementary, or more generic items that round out your
    collection but don''t require bespoke design (e.g., basic t-shirts,
    hoodies, tracksuits, or common shorts styles).

**Benefit:** This strategy allows brands to differentiate where it
matters most, while efficiently expanding their product range and
controlling costs for less critical items.

#### The Role of White Label Sportswear

While often used interchangeably with Private Label, "White Label"
typically refers to generic, unbranded products that a manufacturer
produces in bulk. A buyer then purchases these finished goods and
applies their own branding, often through a separate printing/embroidery
service or in-house.

-   **Key Difference from Private Label:** White Label products are
    typically *completely unbranded* when sold by the manufacturer,
    requiring the buyer to handle all branding application. Private
    Label usually involves the manufacturer *applying your branding* as
    part of their service.

-   **Pros:** Even lower MOQs sometimes, very fast if stock is readily
    available.

-   **Cons:** Even less customization, minimal control over fabric or
    features, very high chance of identical products on the market.

-   **Best For:** Very small startups, promotional merchandise, or
    businesses seeking extreme cost-efficiency for basic items.

#### Scaling Your Manufacturing Strategy

Your initial manufacturing choice doesn''t have to be your permanent
one.

-   **Startups:** Often begin with Private Label due to lower costs and
    MOQs, allowing them to test market demand and build capital.

-   **Growth Phase:** As the brand gains traction, they might introduce
    OEM for key products to build unique IP and differentiate, while
    still using Private Label for core basics.

-   **Established Brands:** May primarily use OEM for their core
    innovative lines, while strategically incorporating Private Label or
    White Label for fast-response items or market experiments.

**Professional Recommendation:** Regularly assess your brand''s stage,
market needs, and financial resources to ensure your manufacturing
strategy remains aligned with your overall business objectives.

## Navigating the Decision: A Step-by-Step Guide

Making the right choice requires a structured approach. Follow these
steps to guide your decision-making process.

#### Step 1: Define Your Product Uniqueness & Brand Vision

-   **Question:** What is the core essence of your brand? What makes
    your sportswear unique?

-   **Evaluation:**

    -   **Highly Unique/Innovative Product?** (e.g., new fabric tech,
        patented design) → Leans towards OEM

    -   **Quality & Branding on Standard Product?** (e.g., premium
        branding on known activewear styles) → Leans towards Private
        Label

-   **Action:** Document your brand''s unique selling proposition (USP)
    and product innovation goals.

#### Step 2: Assess Your Resources (Time, Budget, Design Expertise)

-   **Question:** What are your constraints and capabilities regarding
    time, money, and internal design skills?

-   **Evaluation:**

    -   **Ample Time, Larger Budget, In-House Design Team?** → Leans
        towards OEM

    -   **Tight Deadlines, Limited Budget, Minimal Design Team?** →
        Leans towards Private Label

-   **Action:** Conduct a realistic assessment of your available
    capital, preferred timeline for market entry, and design resources.

#### Step 3: Evaluate Market Entry & Speed Requirements

-   **Question:** How quickly do you need to get products to market? Are
    you responding to a fast-moving trend or building a long-term
    foundation?

-   **Evaluation:**

    -   **Building a Foundational, Unique Collection?** → OEM allows
        for meticulous development.

    -   **Rapid Response to Trends/Seasonal Demands?** → Private Label
        offers speed.

-   **Action:** Map out your desired product launch schedule and market
    responsiveness needs.

#### Step 4: Consider Your MOQs & Production Volume

-   **Question:** What are your realistic minimum order quantities for
    each product?

-   **Evaluation:**

    -   **Can You Meet Higher MOQs (500+ units/style/color)?** → OEM
        becomes more viable.

    -   **Need Lower MOQs (50-200 units/style/color)?** → Private
        Label is likely a better fit.

-   **Action:** Forecast your initial and projected order volumes.

#### Step 5: Prioritize Intellectual Property & Differentiation

-   **Question:** How critical is it for you to own the fundamental
    design of your product, beyond just your logo?

-   **Evaluation:**

    -   **Proprietary Design is Core to Your Business?** → OEM
        protects this asset.

    -   **Branding & Marketing are Primary Differentiators?** →
        Private Label allows focus here.

-   **Action:** Determine the strategic importance of product-level IP
    for your long-term success.

## Real-World Scenarios: Choosing the Right Model

Let''s illustrate these concepts with practical examples.

#### Case Study 1: The Innovative Tech-Wear Startup

**Brand:** "MotionCore Athletics" -- a startup aiming to revolutionize
performance recovery with a unique line of compression wear featuring
graduated compression zones and a proprietary moisture-wicking fabric
blend.

#### Needs:

-   Highly specific fabric composition and knit structure.

-   Ergonomic seaming and patterning for targeted compression.

-   Patented design elements.

-   Willingness to invest heavily in R&D for a truly unique product.

**Decision:** **OEM Manufacturing.**
**Why:** MotionCore''s core value is innovation and a truly unique
product. They need full control over design and materials to implement
their proprietary technology. While costs are higher and lead times
longer, the resulting product offers a significant competitive advantage
and can be patented, justifying the investment.

#### Case Study 2: The Fast-Fashion Sportswear Retailer

**Brand:** "FlexFit Trends" -- an online retailer focused on providing
stylish, affordable gym wear and athleisure wear that quickly responds
to trending aesthetics and colors.

#### Needs:

-   Rapid introduction of new styles (e.g., new legging colors, cropped
    hoodie designs).

-   Lower MOQs to test different trends without high inventory risk.

-   Cost-effectiveness to maintain competitive pricing.

-   Strong branding and marketing are their key differentiators.

**Decision:** **Private Label Manufacturing.**
**Why:** FlexFit Trends prioritizes speed to market and cost efficiency
for trendy items. By selecting from a manufacturer''s existing catalog,
they can quickly apply their branding to popular styles, getting
products online before the trend fades. Their brand identity comes from
their marketing and curation, not product exclusivity.

#### Case Study 3: The Expanding Sports Club

**Brand:** "United Youth FC" -- a growing soccer club needing new
uniforms for multiple age groups, training gear, and branded merchandise
for parents.

#### Needs:

-   Consistent branding across all teamwear.

-   Durable, functional sportswear suitable for regular use.

-   Reasonable pricing for bulk orders of uniforms.

-   Ability to add player names and numbers.

-   Relatively quick turnaround for new team additions.

**Decision:** **Mostly Private Label, with potential for OEM
elements.**
**Why:** For standard jerseys, shorts, and basic training tops, Private
Label is ideal. They can choose from existing uniform templates, apply
club logos via sublimation or screen printing, and efficiently order
customized items with player details. For unique club-specific
merchandise (e.g., a custom-designed track jacket for coaches), they
might consider a smaller OEM run. This hybrid approach balances cost,
speed, and customization effectively.

## Expert Recommendations & Best Practices

To optimize your journey in choosing between OEM and Private Label,
consider these expert recommendations:

1.  **Start with a Clear Vision:** Before engaging any manufacturer,
    have a crystal-clear understanding of your product''s purpose,
    target audience, and unique selling proposition. This foundational
    clarity will guide every subsequent decision.

2.  **Conduct Thorough Due Diligence:** Never rush the vetting process.
    Research, compare quotes, analyze samples, check references, and
    consider audits. A rushed decision can lead to long-term headaches.

3.  **Build Comprehensive Tech Packs:** For OEM, your tech pack is your
    bible. For private label, clear branding guidelines are essential.
    The more detail you provide, the fewer errors will occur.

4.  **Prioritize Communication:** Choose a manufacturer with excellent,
    transparent communication. Language proficiency, responsiveness, and
    proactive updates are invaluable, especially for international
    partnerships.

5.  **Focus on Value, Not Just Price:** The cheapest option is rarely
    the best in the long run. Consider the overall value proposition:
    quality, reliability, service, and strategic fit.

6.  **Visit If Possible:** For significant OEM investments, visiting the
    factory can build trust, provide insight into operations, and ensure
    alignment.

7.  **Start Small, Grow Big:** For initial orders, especially with new
    partners or for OEM, consider smaller runs to test the waters before
    committing to massive volumes.

8.  **Understand Incoterms and Logistics:** Familiarize yourself with
    international shipping terms (Incoterms) and discuss logistics with
    your manufacturer early on to avoid hidden costs and delays.

9.  **Protect Your IP:** Always have a signed NDA and clear contractual
    clauses to protect your designs and branding, regardless of the
    manufacturing model.

## FAQs: Your OEM vs Private Label Questions Answered

Here are some frequently asked questions about OEM and Private Label
sportswear manufacturing, providing quick answers to common concerns.

#### 1. What exactly is OEM in sportswear manufacturing?
OEM (Original Equipment Manufacturing) in sportswear means a
manufacturer produces garments strictly based on your brand''s unique,
proprietary designs, patterns, and technical specifications. You own the
design; the manufacturer executes it.

#### 2. What is Private Label sportswear manufacturing?
Private Label sportswear manufacturing involves selecting existing,
pre-designed styles from a manufacturer''s catalog. These garments are
then customized with your brand''s logos, chosen colors, and labels,
making them exclusive to your brand, though the core design belongs to
the manufacturer.

**3. Which model is better for a sportswear startup with a limited
budget?**
**Private Label** is generally better for startups with limited budgets.
It has lower upfront design and development costs, faster time to
market, and typically lower Minimum Order Quantities (MOQs), reducing
initial financial risk.

**4. If I want to create a truly innovative and unique sportswear
product, which model should I choose?**
You should choose **OEM manufacturing**. This model gives you full
control over design, fabric technology, and construction, allowing you
to develop proprietary features and truly differentiate your product.

#### 5. Do I own the design if I use Private Label manufacturing?
No, you typically do not own the core design of the product itself. The
manufacturer retains ownership of the base design. Your brand owns your
specific logos, labels, and branding elements applied to that product.

#### 6. What are the typical lead times for OEM vs. Private Label?
**OEM** generally has longer lead times (e.g., 8-16 weeks from concept
to delivery) due to extensive design, pattern making, and sample
development. **Private Label** has significantly shorter lead times
(e.g., 4-10 weeks) because it leverages existing designs.

#### 7. Can I combine OEM and Private Label strategies?
Yes, this is a very common and effective strategy, especially for
growing brands. You can use **OEM** for your signature, high-innovation
products and **Private Label** for essential, complementary, or more
generic items to balance uniqueness, cost, and speed.

**8. What is "White Label" sportswear, and how does it differ from
Private Label?**
White Label refers to generic, unbranded products manufactured in bulk.
You purchase these finished, unbranded goods and then apply your own
branding (often via a separate service). Private Label usually involves
the manufacturer applying your branding as part of their service before
selling to you.

#### 9. Which model usually has higher MOQs?
**OEM manufacturing** generally has higher MOQs because the manufacturer
incurs significant setup costs for custom designs, patterns, and
production processes. Private Label MOQs are typically lower as the base
designs are already established.

#### 10. How important is a tech pack for each model?
A **comprehensive tech pack is absolutely critical for OEM** as it is
the blueprint for your unique design. For **Private Label**, while a
full tech pack for the base garment isn''t needed, you will still need
clear branding guidelines and specifications for logo placement, colors,
and label requirements.

**11. What if I want a slightly modified version of a Private Label
product?**
Some Private Label manufacturers offer minor modifications (e.g.,
changing a pocket style, adding a reflective element). However,
significant alterations to the core pattern or construction would push
it closer to an OEM project, impacting costs and MOQs.

#### 12. Does OEM always mean more expensive?
Initially, yes, due to the R&D and design costs. However, for very large
volumes, the per-unit cost of OEM can become highly competitive. Private
Label is generally more cost-effective for smaller to medium runs.

#### 10. Conclusion: Strategize for Sportswear Success

The choice between **OEM vs Private Label sportswear** is a strategic
fork in the road, each path offering distinct advantages and challenges.
There is no universally "better" option; rather, there is
the *right* option for your brand''s specific stage, vision, resources,
and market goals.

If your ambition is to launch genuinely innovative, proprietary
technical apparel that sets new industry standards and demands full
creative control, OEM is your ultimate partner. It''s an investment in
uniqueness and intellectual property. If, however, you prioritize speed
to market, cost-efficiency, lower MOQs, and leveraging existing, proven
designs to quickly establish your brand or expand your offerings, then
Private Label provides an agile and accessible solution.

Many successful brands strategically blend these approaches, using OEM
for their flagship, differentiating products and Private Label for their
core, supporting collections. By thoroughly evaluating your needs
against the detailed insights provided in this guide, you can
confidently select the manufacturing model that aligns perfectly with
your brand''s trajectory.

We stand ready to be your trusted partner, regardless of your chosen
path. With extensive experience in both OEM and Private Label sportswear
manufacturing, we possess the expertise, technology, and global supply
chain to bring your vision to life, ensuring superior quality and
efficient delivery.

Ready to define your sportswear manufacturing strategy and move forward
with confidence?

#### Request a Quotation Today and Let''s Craft Your Brand''s Success!
', '22 min read', false, true, '2026-06-01'::timestamptz) on conflict (slug) do nothing;
insert into articles (id, slug, title, category, excerpt, cover_image, content, read_time, is_featured, is_published, published_at) values (gen_random_uuid(), 'best-sportswear-fabrics-explained', 'Best Sportswear Fabrics Explained: Choosing the Right Material for Every Sport', 'Fabric Guide', 'Moisture-wicking, compression, thermal regulation, and more — a technical guide to matching fiber types and fabric blends to the performance your product needs.', 'fabrics-hero.jpg', '# Best Sportswear Fabrics Explained: Choosing the Right Material for Every Sport

In the world of athletic performance and active lifestyles, the choice
of fabric is paramount. It''s the invisible hero, or sometimes the
overlooked villain, determining comfort, performance, durability, and
even the mental edge an athlete needs. For sportswear brands, clothing
startups, technical apparel designers, and even discerning athletes,
understanding the **best sportswear fabrics** is not just an
advantage---it''s a necessity.

Gone are the days when cotton dominated the gym. Today''s sportswear
landscape is a high-tech arena of engineered textiles, each meticulously
designed to meet the rigorous demands of specific sports and activities.
From moisture-wicking wizardry that keeps you dry during intense
workouts to compression fabrics that support muscles and aid recovery,
the options are vast and constantly evolving.

This comprehensive guide will take you on a deep dive into the
fascinating world of sportswear textiles. We''ll explore the key
properties that define performance fabrics, break down the
characteristics of the most popular materials, and help you navigate the
complexities of choosing the right fabric for every sport, every
garment, and every brand vision. Get ready to elevate your understanding
and make fabric choices that truly enhance athletic performance and
wearer satisfaction.

## The Science of Sportswear Fabrics: Key Performance Properties

Modern sportswear fabrics are engineered to optimize athletic
performance and enhance comfort. Understanding their key properties is
the first step in making informed material choices.

#### Moisture Management (Wicking & Quick-Drying)

This is perhaps the most critical function of sportswear fabrics.

-   **Moisture-Wicking:** The ability of a fabric to draw sweat away
    from the skin and transfer it to the outer surface of the fabric,
    where it can evaporate. This keeps the wearer dry and comfortable.
    Wicking fabrics achieve this through capillary action within their
    fibers.

-   **Quick-Drying:** The speed at which a fabric releases moisture and
    dries. Essential for preventing chilling after exercise and for
    multi-day use without needing to carry many garments.

**Example:** A runner''s shirt made from a high-performance wicking
polyester will pull sweat from the skin, preventing chafing and keeping
the body temperature regulated. Cotton, conversely, absorbs and holds
moisture, becoming heavy and uncomfortable.

#### Breathability & Ventilation

-   **Breathability:** The ability of a fabric to allow air and moisture
    vapor to pass through it. This helps regulate body temperature by
    preventing overheating and allowing sweat to evaporate.

-   **Ventilation:** Often achieved through specific knit structures
    (e.g., mesh panels), laser-cut holes, or strategic fabric placement,
    enhancing airflow in high-heat zones.

**Example:** A cycling jersey often incorporates mesh panels under the
arms or across the back to maximize airflow and prevent heat buildup
during strenuous rides.

#### Stretch & Recovery (Flexibility & Shape Retention)

-   **Stretch:** The ability of a fabric to elongate and move with the
    body without restriction, providing freedom of movement. Typically
    achieved with elastic fibers like Spandex.

-   **Recovery:** The ability of a stretched fabric to return to its
    original shape. Good recovery is crucial for maintaining fit,
    compression (if applicable), and garment longevity. Poor recovery
    leads to stretched-out, baggy garments.

**Example:** Leggings and sports bras require excellent two-way or
four-way stretch and superior recovery to offer comfort, support, and
maintain their shape through dynamic movements.

#### Compression & Support

-   **Compression:** A specific type of stretch fabric that applies
    gentle, consistent pressure to muscles.

    -   **Benefits:** Can enhance blood circulation, reduce muscle
        vibration (which leads to fatigue), and aid in post-exercise
        recovery.

    -   **Properties:** Achieved through high Lycra/Spandex content,
        specific knit structures, and often a denser fabric weight.

**Example:** Compression shorts worn by athletes help reduce muscle
soreness and fatigue during long runs or intense training sessions.

#### Durability & Abrasion Resistance

-   **Durability:** The overall ability of a fabric to withstand wear
    and tear, washing, and environmental factors over time.

-   **Abrasion Resistance:** The fabric''s ability to resist surface
    wear caused by rubbing or friction. Crucial for sportswear that
    experiences high contact, like rugby kits or hiking pants.

**Example:** Rugby kits are made from highly durable, abrasion-resistant
polyester blends to withstand the rigorous demands of the sport,
including scrums and tackles.

#### Thermal Regulation (Insulation & Cooling)

-   **Insulation:** The ability of a fabric to trap air and retain body
    heat, keeping the wearer warm in cold conditions. Often achieved
    with brushed fabrics, fleece, or specific natural fibers like wool.

-   **Cooling:** Fabrics designed to actively cool the skin, often
    through advanced wicking, ventilation, or even phase-change
    materials (PCMs).

**Example:** A thermal running jacket uses insulated fabric to keep the
runner warm in winter, while a summer baselayer might use a cooling yarn
technology to lower skin temperature.

#### UV Protection

-   **UV Protection:** Fabrics engineered to block harmful ultraviolet
    (UVA and UVB) rays from reaching the skin. Measured by UPF
    (Ultraviolet Protection Factor).

    -   **Properties:** Achieved through tight weaves, specific fiber
        types, or chemical finishes.

**Example:** Outdoor activewear, such as rash guards for watersports or
hiking shirts, often boasts a high UPF rating to protect against sun
exposure.

#### Anti-Microbial & Odor Control

-   **Anti-Microbial:** Fabrics treated or inherently designed to
    inhibit the growth of bacteria, fungi, and other microbes that cause
    odor.

-   **Odor Control:** Minimizing or neutralizing unpleasant body odor.

**Example:** Gym wear and running apparel often feature anti-odor
treatments or natural fibers like merino wool, which is naturally
odor-resistant, to keep garments fresher for longer.

#### Hand Feel & Comfort

-   **Hand Feel:** How the fabric feels against the skin -- soft,
    smooth, rough, cool, warm. This is a subjective but critical comfort
    factor.

-   **Comfort:** The overall pleasantness of wearing the garment,
    influenced by hand feel, breathability, stretch, and fit.

**Example:** Yoga wear often prioritizes a buttery-soft hand feel for
maximum comfort during stretching and meditation.

## Understanding Fiber Types: The Building Blocks

![Synthetic fiber versus natural fiber structure](ARTICLE_IMG:synthetic-vs-natural-fiber.jpg)

The performance properties discussed above stem directly from the types
of fibers used to create the fabric.

#### Synthetic Fibers: The Performance Powerhouses

Synthetics are engineered for specific performance attributes, making
them cornerstones of modern sportswear.

-   **Polyester:** The most widely used synthetic fiber in sportswear.
    Excellent moisture-wicking, quick-drying, durable,
    wrinkle-resistant, and holds color well (especially for
    sublimation).

-   **Nylon (Polyamide):** Stronger than polyester, highly
    abrasion-resistant, smooth hand feel, good stretch. Often used in
    outerwear, compression, and activewear where durability is key.

-   **Spandex (Lycra/Elastane):** Provides exceptional stretch and
    recovery. Almost always blended with other fibers (e.g.,
    polyester/spandex, nylon/spandex) to add elasticity without
    compromising other properties.

-   **Polypropylene:** Excellent thermal insulation and moisture
    transfer, very lightweight. Often used in baselayers for cold
    weather.

#### Natural Fibers: Evolved for Activewear

While traditional natural fibers like 100% cotton are largely unsuitable
for performance sportswear, some natural options have found a niche or
undergone innovations.

-   **Merino Wool:** A fine, soft wool from Merino sheep. Naturally
    temperature-regulating (insulates when cold, breathes when warm),
    excellent moisture management (can absorb a lot of moisture before
    feeling wet), naturally odor-resistant, and soft hand feel. Ideal
    for baselayers and outdoor activewear.

-   **Cotton (Blends):** 100% cotton is generally poor for sportswear
    (absorbs moisture, dries slowly, heavy). However,
    cotton *blends* (e.g., cotton-polyester-spandex) are used for
    athleisure, casual gym wear, or comfort-focused items where some
    natural feel is desired alongside enhanced performance.

#### Blends: The Best of Both Worlds

Most high-performance sportswear today uses fiber blends to combine the
best properties of different materials.

-   **Polyester/Spandex:** The most common blend for activewear,
    offering excellent stretch, wicking, and durability.

-   **Nylon/Spandex:** Often used for compression wear, swimsuits, or
    outerwear due to nylon''s strength and smoothness combined with
    spandex''s stretch.

-   **Cotton/Polyester/Spandex:** For comfort-focused athleisure with
    some stretch and improved drying over 100% cotton.

## The Best Sportswear Fabrics Explained: A Detailed Look

Let''s delve deeper into the characteristics and typical applications of
the most prominent sportswear fabrics.

#### Polyester: The Versatile Workhorse

-   **Properties:** Excellent moisture-wicking and quick-drying, highly
    durable, resistant to shrinking and stretching, maintains shape,
    good colorfastness, resistant to abrasion and most chemicals.

-   **Types:** Can be engineered into various textures (jersey,
    interlock, mesh, brushed fleece), weights, and finishes (e.g.,
    antimicrobial, UV protection). Recycled polyester (rPET) is a
    sustainable option.

-   **Best For:** Nearly all sportswear applications, including football
    jerseys, soccer uniforms, running wear, gym wear, cycling jerseys,
    t-shirts, hoodies (often as blends).

#### Nylon: Strength, Smoothness & Sheen

-   **Properties:** Extremely strong, high abrasion resistance, smooth
    and soft hand feel, excellent elasticity, good luster, often has a
    slightly cooler touch. Can be good for compression.

-   **Types:** Used in various knits and weaves, often blended with
    spandex.

-   **Best For:** Compression wear, outer shells for jackets, swimwear,
    high-durability items like rugby kits, running shorts.

#### Spandex (Lycra/Elastane): The Stretch Maestro

-   **Properties:** Unmatched elasticity and recovery (can stretch 5-8
    times its original length and return), durable, lightweight.

-   **Usage:** Almost always used in blends (typically 5-20% content)
    with polyester or nylon to add stretch and shape retention.

-   **Best For:** Leggings, sports bras, compression wear, cycling
    jerseys, any garment requiring significant freedom of movement and a
    body-hugging fit.

#### Merino Wool: Nature''s Performance Fiber

-   **Properties:** Exceptional temperature regulation (warm in cold,
    cool in heat), naturally moisture-wicking and breathable, soft hand
    feel (less itchy than traditional wool), naturally odor-resistant,
    sustainable.

-   **Usage:** Often blended with synthetics for enhanced durability or
    faster drying.

-   **Best For:** Baselayers, hiking apparel, running wear in varying
    climates, outdoor adventure gear, travel apparel due to odor
    resistance.

#### Tencel/Lyocell: Sustainable Softness & Performance

-   **Properties:** A regenerated cellulose fiber (from wood pulp).
    Extremely soft, smooth hand feel, excellent drape, good
    moisture-wicking and breathability, naturally antibacterial,
    environmentally friendly production process.

-   **Usage:** Often blended with other fibers (cotton, spandex).

-   **Best For:** Yoga wear, athleisure, soft gym wear, comfort-focused
    activewear.

#### Bamboo Viscose: Eco-Friendly Comfort

-   **Properties:** Another regenerated cellulose fiber. Incredibly
    soft, silky hand feel, highly breathable, good moisture absorption
    (can feel cooler), naturally antibacterial.

-   **Usage:** Blended for activewear.

-   **Best For:** Yoga and lounge wear, comfortable baselayers,
    eco-conscious activewear brands.

#### Cotton Blends: Enhanced Natural Touch

-   **Properties:** Blended with polyester and/or spandex, cotton
    contributes natural softness and breathability while synthetics add
    wicking, durability, and stretch.

-   **Usage:** For items where comfort and a natural feel are
    prioritized over maximum performance.

-   **Best For:** Casual gym wear, t-shirts, hoodies, tracksuits,
    jogging suits, polo shirts, lifestyle activewear.

#### Specialty & Innovative Fabrics

-   **Seamless Knits:** Garments knitted in a tube, minimizing seams for
    ultimate comfort, reduced chafing, and a second-skin feel. Often
    made from nylon/spandex or polyester/spandex. Ideal for sports bras,
    leggings, and baselayers.

-   **Smart Fabrics:** Textiles with integrated electronics, sensors, or
    special properties (e.g., phase-change materials for active
    cooling/warming, reflective yarns for visibility, conductive threads
    for heart rate monitoring).

-   **Ripstop Fabrics:** Woven fabrics, typically nylon or polyester,
    with a special reinforcing technique that makes them resistant to
    tearing. Common for outerwear.

## Choosing the Right Fabric for Every Sport & Garment

Matching fabric properties to the demands of specific sports and garment
types is crucial for optimizing performance and wearer satisfaction.

#### High-Intensity Sports (Running, Cycling, HIIT)

-   **Key Needs:** Maximum moisture-wicking, quick-drying, high
    breathability, excellent stretch & recovery, lightweight.

-   **Recommended Fabrics:**

    -   **Polyester/Spandex Blends:** For jerseys, shorts, running tops.

    -   **Nylon/Spandex Blends:** For tighter fits, cycling shorts,
        compression.

    -   **Mesh Polyester:** For ventilation panels.

-   **Why:** These activities generate significant sweat and heat,
    requiring fabrics that efficiently manage moisture and maintain
    comfort.

#### Team Sports (Football, Basketball, Soccer, Rugby)

-   **Key Needs:** Durability, abrasion resistance, moisture-wicking,
    breathability, good fit for movement.

-   **Recommended Fabrics:**

    -   **Heavy-Duty Polyester (Interlock or Mesh):** For jerseys,
        shorts. Often sublimated.

    -   **Nylon/Polyester Blends:** For rugby kits where extreme
        durability is needed.

    -   **Spandex content:** For freedom of movement.

-   **Why:** These sports involve high impact, constant movement, and
    frequent washing, demanding robust materials that perform and last.

#### Gym & Fitness (Weightlifting, Yoga, Pilates)

-   **Key Needs:** Comfort, softness, excellent stretch & recovery,
    breathability, moderate moisture-wicking.

-   **Recommended Fabrics:**

    -   **Polyester/Spandex Blends:** Versatile for leggings, tops,
        sports bras.

    -   **Nylon/Spandex Blends:** For higher compression or very smooth
        feel.

    -   **Tencel/Lyocell Blends:** For ultra-soft, comfortable yoga
        wear.

    -   **Cotton/Poly/Spandex Blends:** For comfortable gym t-shirts and
        hoodies.

-   **Why:** Focus is on unrestricted movement, comfort during extended
    wear, and light to moderate sweat management.

#### Outdoor & Adventure Sports (Hiking, Climbing, Winter Sports)

-   **Key Needs:** Thermal regulation (insulation or cooling),
    durability, UV protection, moisture-wicking, quick-drying, often
    water resistance/proofness for outer layers.

-   **Recommended Fabrics:**

    -   **Merino Wool (Baselayers):** Excellent for temperature
        regulation and odor control.

    -   **Polyester Fleece (Mid-layers):** For insulation.

    -   **Nylon/Spandex Blends:** For hiking pants (abrasion
        resistance).

    -   **Technical Woven Polyester/Nylon:** For outer shells (often
        with DWR finishes).

-   **Why:** Demands vary greatly by climate, requiring versatile
    fabrics that can adapt to changing conditions and provide
    protection.

#### Lifestyle & Athleisure Wear

-   **Key Needs:** Comfort, style, softness, good drape, moderate
    performance properties, versatility.

-   **Recommended Fabrics:**

    -   **Cotton/Polyester/Spandex Blends:** For hoodies, joggers,
        t-shirts.

    -   **Rayon/Spandex Blends:** For soft, drapey styles.

    -   **Brushed Polyester or Fleece:** For comfortable tracksuits.

-   **Why:** Focus is on everyday comfort and style, with a nod to
    athletic aesthetics.

#### Compression Wear Specifics

-   **Key Needs:** High Lycra/Spandex content (15-30%), dense knit
    structure, excellent recovery, moisture-wicking.

-   **Recommended Fabrics:**

    -   **Nylon/Spandex Blends (e.g., 80% Nylon, 20% Spandex):** Often
        preferred for its smooth hand and strong compression.

    -   **Polyester/Spandex Blends:** Also widely used for good
        compression and wicking.

-   **Why:** Designed to apply targeted pressure, requiring fabrics with
    significant stretch and superior recovery to maintain shape and
    function.

#### Swimwear & Water Sports

-   **Key Needs:** Chlorine resistance, UV protection, quick-drying,
    excellent stretch & recovery, comfort in wet conditions.

-   **Recommended Fabrics:**

    -   **Nylon/Spandex Blends:** The industry standard due to strength,
        stretch, and quick-drying properties.

    -   **Polyester/Spandex Blends:** Increasingly popular for better
        chlorine and UV resistance.

-   **Why:** Direct and prolonged exposure to water and chemicals
    demands specialized, durable fabrics.

## Sustainable Sportswear Fabrics: Beyond Performance

As environmental consciousness grows, sustainable fabric choices are
becoming a core pillar of modern sportswear brands. Performance no
longer needs to come at the planet''s expense.

#### Recycled Polyester (rPET)

-   **Source:** Made from post-consumer plastic bottles (e.g., PET
    bottles) or pre-consumer waste.

-   **Properties:** Retains all the performance benefits of virgin
    polyester (wicking, quick-drying, durable).

-   **Benefits:** Reduces plastic waste in landfills and oceans,
    consumes less energy and water in production compared to virgin
    polyester.

-   **Certification:** Look for the Global Recycled Standard (GRS)
    certification.

#### Organic Cotton

-   **Source:** Cotton grown without synthetic pesticides, fertilizers,
    or genetically modified seeds.

-   **Properties:** Soft, breathable, hypoallergenic. While 100% organic
    cotton isn''t ideal for high-performance, it''s excellent for
    athleisure or blends.

-   **Benefits:** Reduces environmental impact from chemical use,
    promotes healthier soil and ecosystems.

-   **Certification:** Global Organic Textile Standard (GOTS) is the
    leading certification.

#### Bio-based Synthetics

-   **Source:** Derived from renewable plant sources (e.g., corn, castor
    beans) rather than petroleum.

-   **Properties:** Can offer similar performance to traditional
    synthetics (e.g., bio-based nylon or polyester).

-   **Benefits:** Reduces reliance on fossil fuels, often lower carbon
    footprint.

-   **Examples:** Sorona (DuPont), Evo (Fulgar).

#### Certifications to Look For (OEKO-TEX, GRS, GOTS)

-   **OEKO-TEX Standard 100:** Certifies that textiles and fabrics are
    free from harmful substances and are safe for human use. A critical
    standard for all apparel, especially next-to-skin garments.

-   **Global Recycled Standard (GRS):** Verifies recycled content in
    products, along with responsible social, environmental, and chemical
    practices in production.

-   **Global Organic Textile Standard (GOTS):** The worldwide leading
    textile processing standard for organic fibers, including ecological
    and social criteria.

**Professional Recommendation:** Incorporating sustainable fabrics into
your sportswear line is a powerful way to enhance your brand''s appeal,
meet consumer demand, and contribute positively to the environment.

## Fabric Specification Checklist for Sportswear Brands

When communicating with your manufacturer, be precise about your fabric
requirements. Use this checklist:

-   **Fiber Composition:** (e.g., 88% Polyester, 12% Spandex)

-   **Fabric Construction:** (e.g., Interlock knit, Single jersey,
    Woven)

-   **Weight:** (e.g., 200 GSM - grams per square meter)

-   **Stretch Type:** (e.g., 2-way stretch, 4-way stretch)

-   **Performance Properties:** (e.g., Moisture-wicking, Quick-dry,
    Anti-odor, UV protection UPF 50+)

-   **Hand Feel:** (e.g., Soft touch, Smooth, Brushed)

-   **Color:** (Pantone TPX/TCX code)

-   **Dyeing Method:** (e.g., Piece dyed, Yarn dyed)

-   **Certifications:** (e.g., OEKO-TEX Standard 100, GRS Certified)

-   **Supplier Reference (if applicable):** (e.g., specific mill or
    fabric name if you have a preferred source)

-   **Minimum Order Quantity (MOQ):** (for the fabric itself, if known)

-   **Testing Requirements:** (e.g., Colorfastness, Shrinkage, Pilling
    resistance)

## Common Mistakes in Fabric Selection (and How to Avoid Them)

Avoiding these pitfalls can save you time, money, and enhance product
quality.

1.  **Prioritizing Price Over Performance:**

    -   **Mistake:** Choosing the cheapest fabric without verifying its
        actual performance properties.

    -   **Avoidance:** Always balance cost with functionality. A
        slightly more expensive fabric that performs well will lead to
        higher customer satisfaction and fewer returns.

2.  **Overlooking Hand Feel:**

    -   **Mistake:** Focusing only on technical specs and ignoring how
        the fabric feels against the skin.

    -   **Avoidance:** Always request and evaluate physical swatches.
        Comfort is a primary driver for sportswear purchases.

3.  **Neglecting Fabric Weight:**

    -   **Mistake:** Using a fabric that''s too heavy for a summer
        running top or too light for a cold-weather baselayer.

    -   **Avoidance:** Specify GSM (grams per square meter) relevant to
        the garment''s purpose and season.

4.  **Ignoring Stretch & Recovery:**

    -   **Mistake:** Using a fabric with good stretch but poor recovery,
        leading to garments that sag or lose shape.

    -   **Avoidance:** Test samples vigorously for recovery. High
        spandex content (e.g., 10-20%) is key for good recovery in
        activewear.

5.  **Assuming All "Polyester" is Equal:**

    -   **Mistake:** Believing all fabrics of the same fiber composition
        will perform identically.

    -   **Avoidance:** Polyester can be knitted, woven, brushed, or
        treated differently. Specify the exact construction, finish, and
        performance properties, not just the fiber.

6.  **Not Considering Durability for the Sport:**

    -   **Mistake:** Using a delicate fabric for a high-contact sport.

    -   **Avoidance:** Match the fabric''s abrasion resistance and tear
        strength to the demands of the sport (e.g., heavy-duty for
        rugby, lightweight for yoga).

7.  **Skipping Fabric Testing:**

    -   **Mistake:** Not testing fabrics for shrinkage, colorfastness,
        pilling, or actual wicking properties.

    -   **Avoidance:** Work with your manufacturer to perform essential
        lab tests on selected fabrics and finished garments.

## Expert Tips for Sourcing & Testing Sportswear Fabrics

-   **Leverage Manufacturer Expertise:** Your sportswear manufacturer
    has established relationships with fabric mills. Utilize their
    knowledge and network to source the best materials efficiently.

-   **Request Multiple Swatches:** Don''t settle for just one option.
    Request several swatches with varying compositions, weights, and
    finishes to compare.

-   **Perform Internal Wear Tests:** Beyond lab tests, have athletes or
    your team wear prototype garments during actual activities to assess
    real-world comfort and performance.

-   **Understand Lead Times:** Fabric sourcing often has its own lead
    times, which can impact your overall production schedule. Plan
    accordingly.

-   **Ask for Certifications:** Always request relevant certifications
    (OEKO-TEX, GRS, GOTS) to verify claims of safety and sustainability.

-   **Balance Innovation with Proven Performance:** While new fabrics
    are exciting, ensure they are thoroughly tested. Sometimes, a proven
    polyester-spandex blend is the safest bet for reliable performance.

## FAQs: Your Sportswear Fabric Questions Answered

Here are some frequently asked questions about sportswear fabrics,
providing quick answers to common concerns.

#### 1. What is the best fabric for moisture-wicking?
**Polyester** is widely considered the best for moisture-wicking due to
its hydrophobic nature and engineered fiber structures that draw sweat
away from the skin. Nylon and some technical blends also offer excellent
wicking.

#### 2. Why is cotton generally not recommended for active sportswear?
Cotton absorbs and holds moisture, making it heavy, slow to dry, and
prone to chafing when wet. This can lead to discomfort, chilling, and
increased risk of skin irritation during active use.

#### 3. What makes a fabric "breathable"?
Breathability refers to a fabric''s ability to allow air and moisture
vapor to pass through it. This is achieved through its fiber type (e.g.,
polyester, nylon), knit or weave structure (e.g., mesh, loosely woven),
and sometimes through micro-perforations or special finishes.

**4. How much spandex (Lycra/Elastane) should be in sportswear for good
stretch?**
For most activewear, a spandex content of **5-20%** is ideal. Leggings
and compression wear often have 10-20% spandex for optimal stretch,
recovery, and support. Lower percentages (e.g., 3-5%) provide some
comfort stretch for items like t-shirts or hoodies.

#### 5. Is Merino wool suitable for all types of sportswear?
Merino wool is excellent for baselayers, hiking, running, and
cold-weather sports due to its natural temperature regulation, odor
resistance, and moisture management. However, for very high-abrasion
activities or swimwear, blends or synthetics might be more durable and
faster drying.

#### 6. What does "GSM" mean in fabric specifications?
**GSM stands for "Grams per Square Meter"** and indicates the weight
of the fabric. A higher GSM means a heavier, often denser, fabric, while
a lower GSM indicates a lighter fabric. This is crucial for determining
suitability for different seasons and garment types.

**7. Are sustainable sportswear fabrics as high-performing as
traditional ones?**
Absolutely. Sustainable options like **recycled polyester (rPET)** offer
identical performance properties to virgin polyester. Innovations in
organic cotton blends and bio-based synthetics are also closing any
performance gaps, allowing brands to be both eco-conscious and
high-performing.

#### 8. What is UPF, and why is it important for sportswear?
**UPF stands for Ultraviolet Protection Factor**, measuring a fabric''s
ability to block harmful UVA and UVB rays. A higher UPF rating (e.g.,
UPF 50+) indicates excellent sun protection, which is crucial for
outdoor sportswear to prevent sunburn and long-term skin damage.

#### 9. How do anti-microbial treatments work in sportswear fabrics?
Anti-microbial treatments either inhibit the growth of odor-causing
bacteria on the fabric surface or neutralize existing odors. They can be
applied as a finish or integrated into the fiber itself, helping
garments stay fresher for longer between washes.

#### 10. What''s the difference between 2-way and 4-way stretch fabric?
**2-way stretch** fabric stretches in one direction, typically across
the width. **4-way stretch** fabric stretches in both directions --
horizontally and vertically (width and length) -- offering maximum
flexibility and freedom of movement, which is highly preferred for
active sportswear like leggings and compression tops.

#### 11. Why do manufacturers use fabric blends so often in sportswear?
Fabric blends combine the best properties of different fibers. For
example, polyester provides wicking and durability, while spandex adds
stretch. This allows manufacturers to engineer fabrics that deliver a
comprehensive range of performance benefits tailored to specific
athletic needs.

#### 12. Can I use the same fabric for all my sportswear products?
While some versatile fabrics like certain polyester/spandex blends can
be used for multiple products, it''s generally **not ideal** to use the
exact same fabric for everything. Different sports and garments have
unique performance requirements. Optimizing fabric choice for each
product ensures maximum performance, comfort, and durability.

#### 10. Conclusion: Fabric Your Future Performance

The world of sportswear fabrics is a sophisticated ecosystem where
science meets design to empower athletes and enhance active lifestyles.
Understanding the nuances of moisture management, stretch, durability,
and thermal regulation, alongside the characteristics of key fibers like
polyester, nylon, spandex, and merino wool, is fundamental for any brand
or designer serious about creating high-performance apparel.

The strategic selection of the **best sportswear fabrics** is more than
a technical detail---it''s a commitment to quality, comfort, and
ultimately, the success of your product. Whether you''re engineering a
cutting-edge cycling jersey, crafting ultra-soft yoga leggings, or
designing durable team uniforms, the material choice will dictate how
your garments perform, how they feel, and how they contribute to your
brand''s reputation. And with the growing imperative for sustainability,
conscious fabric choices now intertwine performance with planet care.

As experts in technical apparel manufacturing, we are passionate about
guiding our clients through this intricate selection process. Our deep
knowledge of fabric innovation, performance properties, and sustainable
sourcing ensures that your custom sportswear is not just made, but
intelligently designed from the fiber up.

Ready to make informed fabric choices that elevate your next sportswear
collection?

**Request a Quotation Today and Let''s Select the Perfect Materials for
Your Brand''s Success!**
', '18 min read', false, true, '2026-06-01'::timestamptz) on conflict (slug) do nothing;
insert into articles (id, slug, title, category, excerpt, cover_image, content, read_time, is_featured, is_published, published_at) values (gen_random_uuid(), 'sublimation-embroidery-screen-printing', 'Sublimation, Embroidery & Screen Printing: Choosing the Best Branding Method', 'Printing Guide', 'Durability, hand feel, color range, and cost — a full comparison of the three most-used decoration methods in custom sportswear manufacturing.', 'embroidery-hero.jpg', '# Sublimation, Embroidery & Screen Printing: Choosing the Best Branding Method for Custom Sportswear

In the vibrant and competitive world of custom sportswear, your brand''s
identity is as crucial as the performance of the apparel itself. A
striking logo, a bold team name, or an intricate graphic doesn''t just
adorn a garment; it communicates your brand''s ethos, unites a team, and
captivates your audience. But how do these designs get onto the fabric?
This is where the choice of **sportswear branding methods** becomes
paramount.

Gone are the days when a simple iron-on patch sufficed. Today''s
technical apparel demands sophisticated decoration techniques that match
its performance, durability, and aesthetic standards. Whether you''re
launching a new line of high-performance running wear, outfitting a
professional football team, or creating bespoke gym apparel, selecting
the right branding method---be it sublimation, embroidery, screen
printing, or others---is a strategic decision that impacts visual
appeal, longevity, and ultimately, your brand''s reputation.

This comprehensive guide will take a deep dive into the most popular and
effective sportswear branding methods. We''ll explore the nuances of
sublimation, the classic appeal of embroidery, the versatility of screen
printing, and other specialized techniques. By understanding the pros,
cons, ideal applications, and technical considerations of each, you''ll
be equipped to make informed choices that ensure your custom sportswear
not only performs flawlessly but also looks exceptional, proudly
carrying your brand to victory.

## The Importance of Choosing the Right Sportswear Branding Method

Your logo and graphics are more than just decorative elements; they are
an extension of your brand''s promise. When applied to sportswear, this
promise includes performance, durability, and comfort. The branding
method you choose directly impacts these critical factors.

#### Impact on Brand Identity, Performance & Durability

-   **Brand Identity:** A crisp, vibrant logo reinforces
    professionalism. A peeling or faded print undermines trust.

-   **Performance:** A heavy, non-breathable print on a technical fabric
    can negate its moisture-wicking properties, causing discomfort and
    affecting athletic performance.

-   **Durability:** Sportswear undergoes rigorous use and frequent
    washing. The branding must withstand these conditions without
    cracking, fading, or peeling, maintaining its integrity over the
    garment''s lifespan.

#### Key Factors Influencing Your Decision

1.  **Fabric Composition:** Certain methods work best with specific
    fabrics (e.g., sublimation with polyester).

2.  **Design Complexity & Colors:** Intricate designs, gradients, or a
    wide color palette limit some options.

3.  **Desired Hand Feel:** How the decoration feels on the fabric (soft,
    raised, smooth).

4.  **Durability Requirements:** How well the branding needs to
    withstand wear, stretching, and washing.

5.  **Breathability:** Will the decoration block the fabric''s
    performance features?

6.  **Cost & Minimum Order Quantity (MOQ):** Different methods have
    varying setup costs and per-unit prices based on volume.

7.  **Production Lead Time:** How quickly can the branding be applied.

## Deep Dive into Sublimation Printing

![The sublimation printing process from design to finished fabric](ARTICLE_IMG:sublimation-process.jpg)

Sublimation is a revolutionary printing technique that has become a
cornerstone for high-performance, full-custom sportswear due to its
vibrant, durable, and lightweight results.

#### How Sublimation Works (The Science Behind It)

Sublimation is a chemical process where a solid turns directly into a
gas without passing through a liquid phase. In printing:

1.  **Design Printed:** Your digital design is printed onto special
    transfer paper using sublimation inks (which contain heat-activated
    dyes).

2.  **Heat & Pressure:** The transfer paper is then placed in direct
    contact with the polyester fabric (or polyester-coated substrate)
    and subjected to high heat (typically 350-400°F / 175-200°C) and
    pressure.

3.  **Dye Infusion:** The heat causes the sublimation inks to turn into
    a gas, which then permanently infuses into the open pores of the
    polyester fabric fibers. As the fabric cools, the pores close,
    trapping the dyes within the fibers.

#### Advantages of Sublimation for Sportswear

1.  **Vibrant, Full-Color, All-Over Designs:**

    -   **Benefit:** Allows for unlimited colors, gradients,
        photographic images, and intricate details covering the entire
        garment (cut-and-sew sublimation). The design becomes part of
        the fabric, not a layer on top.

    -   **Example:** A football jersey with complex patterns, fading
        colors, and multiple sponsor logos seamlessly integrated into
        the design.

2.  **Unmatched Durability & Longevity:**

    -   **Benefit:** The dye is permanently infused into the fibers,
        meaning the print will never crack, peel, fade, or wash out,
        even with repeated stretching and washing.

    -   **Performance:** Maintains integrity throughout the garment''s
        lifespan.

3.  **Zero Hand Feel & Breathability:**

    -   **Benefit:** Because the dye becomes part of the fabric, there
        is no discernible texture or weight added to the garment. The
        fabric retains its original feel and breathability.

    -   **Performance:** Crucial for technical apparel where
        moisture-wicking and comfort are paramount.

4.  **No Color Limitations:**

    -   **Benefit:** Digital process means no extra cost for more
        colors, unlike screen printing.

5.  **Cost-Effective for Complex Designs:**

    -   **Benefit:** Once the initial setup is done, per-unit cost
        remains consistent regardless of the number of colors or
        complexity.

#### Disadvantages of Sublimation for Sportswear

1.  **Fabric Restriction:**

    -   **Challenge:** Only works effectively on polyester or
        high-polyester blend fabrics (typically 80% polyester or more).
        The higher the polyester content, the more vibrant the print.

    -   **Consideration:** Not suitable for natural fibers like cotton.

2.  **Color Limitations on Dark Fabrics (Direct Sublimation):**

    -   **Challenge:** Sublimation dyes are transparent. If printing
        directly onto a pre-dyed dark polyester fabric, the base color
        will show through and alter the print colors.

    -   **Solution:** For full-custom designs on dark fabrics,
        cut-and-sew sublimation (printing on white fabric, then cutting
        and sewing) is used, but this impacts lead time and cost.

3.  **White Creasing (with pre-made garments):**

    -   **Challenge:** If sublimating on a pre-made garment, any folds
        or creases in the fabric that are not flat against the transfer
        paper will result in white unprinted areas.

    -   **Solution:** Cut-and-sew sublimation avoids this entirely. For
        spot sublimation on existing garments, careful flat pressing is
        essential.

#### Ideal Applications & Best Suited Fabrics

-   **Ideal Applications:** Football jerseys, soccer uniforms,
    basketball uniforms, cycling jerseys, running wear, cricket
    uniforms, custom activewear, and any garment requiring full-color,
    intricate, durable, and breathable designs.

-   **Best Suited Fabrics:** 100% Polyester or high-polyester blends
    (80%+) for optimal color vibrancy and permanence.

## Exploring Screen Printing (Silk Screen Printing)

![The screen printing process step by step](ARTICLE_IMG:screen-printing-process.jpg)

Screen printing is a classic and highly versatile branding method,
renowned for its bold colors and durability, especially for
graphic-heavy designs.

#### How Screen Printing Works (The Stencil Method)

1.  **Design Separation:** The design is separated into individual color
    layers.

2.  **Screen Creation:** A mesh screen is prepared for each color. A
    light-sensitive emulsion is applied, and the design for that
    specific color is burned onto the screen, creating a stencil (areas
    where ink will pass through).

3.  **Ink Application:** The screen is placed over the garment. Ink is
    applied to the screen and a squeegee is used to push the ink through
    the stencil areas directly onto the fabric.

4.  **Curing:** Each layer of ink is typically cured (dried) with heat
    before the next color is applied, ensuring the ink adheres
    permanently and prevents smudging.

#### Advantages of Screen Printing for Sportswear

1.  **Vibrant & Opaque Colors:**

    -   **Benefit:** Produces very vivid, opaque colors that stand out,
        even on dark fabrics. Ideal for brand logos and bold graphics.

    -   **Performance:** Inks can be customized for specific fabric
        types and stretch.

2.  **Durability:**

    -   **Benefit:** With proper curing and quality inks, screen prints
        are very durable and can withstand numerous washes without
        significant fading or cracking (though some wear can occur over
        time, unlike sublimation).

    -   **Performance:** Good for team uniforms and activewear that see
        heavy use.

3.  **Cost-Effective for Bulk Orders:**

    -   **Benefit:** Once screens are set up, the per-unit cost
        decreases significantly with higher volumes, making it
        economical for large production runs.

4.  **Versatility with Fabric Types:**

    -   **Benefit:** Works well on a wide range of natural and synthetic
        fabrics, including cotton, polyester, cotton/poly blends, and
        even some nylons, using appropriate ink types (plastisol,
        water-based, silicone).

5.  **Specialty Ink Options:**

    -   **Benefit:** Can use specialty inks like puff, glitter,
        glow-in-the-dark, reflective, or high-density inks for unique
        effects.

#### Disadvantages of Screen Printing for Sportswear

1.  **Limited Color Palette & Complexity:**

    -   **Challenge:** Each color requires a separate screen and pass,
        increasing setup costs and production time. Designs with many
        colors, gradients, or photographic detail become very expensive
        or impractical.

    -   **Consideration:** Best for designs with 1-6 spot colors.

2.  **Hand Feel & Breathability Impact:**

    -   **Challenge:** The ink sits on top of the fabric. Large, solid
        prints can create a heavier hand feel and reduce the fabric''s
        breathability, especially on lightweight performance materials.

    -   **Solution:** Thinner ink layers, discharge inks (for cotton),
        or performance-specific inks can mitigate this.

3.  **Higher Setup Costs for Low MOQs:**

    -   **Challenge:** The cost of creating screens makes it less
        economical for very small runs or individual custom items.

4.  **Cracking & Fading Over Time:**

    -   **Challenge:** While durable, screen prints can eventually crack
        or fade with excessive stretching, washing, or harsh detergents,
        especially if not applied optimally.

#### Ideal Applications & Best Suited Fabrics

-   **Ideal Applications:** Team uniforms, promotional t-shirts,
    hoodies, tracksuits, shorts, gym wear, and any garment needing bold
    logos or graphics.

-   **Best Suited Fabrics:** Cotton, cotton/poly blends, polyester, some
    nylon, rayon. Polyester requires specific inks to prevent "dye
    migration" (where the dye from the fabric bleeds into the print).

## The Art of Embroidery

Embroidery offers a premium, textured, and sophisticated look, making it
a popular choice for logos and branding on quality sportswear.

#### How Embroidery Works (Stitching Your Design)

1.  **Digitization:** The design (logo, text) is converted into a
    digital file that embroidery machines can read. This file specifies
    stitch types, colors, and density.

2.  **Hooping:** The fabric area to be embroidered is secured in an
    embroidery hoop (frame) to keep it taut.

3.  **Stitching:** An industrial embroidery machine, using multiple
    needles and thread colors, precisely stitches the design onto the
    fabric according to the digitized pattern.

#### Advantages of Embroidery for Sportswear

1.  **Premium, High-Quality Look:**

    -   **Benefit:** Adds a professional, sophisticated, and high-end
        aesthetic that conveys quality and durability.

    -   **Perception:** Often associated with executive wear, club
        badges, and premium branding.

2.  **Exceptional Durability:**

    -   **Benefit:** Embroidery is extremely long-lasting. The threads
        are durable and resistant to fading, washing, and wear, often
        outlasting the garment itself.

    -   **Performance:** Maintains its integrity even after countless
        washes.

3.  **Textured & Dimensional Feel:**

    -   **Benefit:** The raised stitching provides a tactile,
        three-dimensional quality that makes logos stand out.

4.  **Works on Most Fabrics:**

    -   **Benefit:** Suitable for a wide range of fabrics, from cotton
        and poly/cotton blends to fleece, softshell, and heavier
        polyesters.

#### Disadvantages of Embroidery for Sportswear

1.  **Limited for Intricate Designs & Gradients:**

    -   **Challenge:** Very fine details, small text, gradients, or
        photographic images are difficult or impossible to reproduce
        accurately with stitching.

    -   **Consideration:** Best for solid logos, text, and simpler
        designs.

2.  **Impact on Hand Feel & Breathability (for large designs):**

    -   **Challenge:** Large embroidered areas can be stiff, heavy, and
        reduce the fabric''s breathability, potentially causing chafing
        on next-to-skin garments.

    -   **Consideration:** Best for smaller logos on areas like chest,
        sleeve, or caps, rather than large back designs on activewear.

3.  **Higher Cost & Setup Fees:**

    -   **Challenge:** Digitization (initial setup) fees apply, and
        per-unit costs are generally higher than printing, especially
        for complex or large designs due to thread count.

4.  **Can Pucker Fabric:**

    -   **Challenge:** Heavy embroidery on very thin or stretchy fabrics
        can sometimes cause puckering or distort the fabric.

    -   **Solution:** Proper backing and careful execution by
        experienced embroiderers can mitigate this.

#### Ideal Applications & Best Suited Fabrics

-   **Ideal Applications:** Polo shirts, jackets, hoodies, tracksuits,
    caps, bags, subtle branding on sleeves or chest of t-shirts.
    Excellent for team emblems, corporate logos, and premium
    merchandise.

-   **Best Suited Fabrics:** Polo pique, fleece, woven fabrics,
    softshell, mid-to-heavy weight jerseys.

## Other Key Sportswear Branding Methods

Beyond the big three, several other specialized branding methods offer
unique advantages for custom sportswear.

#### Heat Transfer Printing (Vinyl & Digital)

Heat transfer involves applying a pre-printed or cut design to fabric
using heat and pressure from a heat press.

-   **Vinyl Heat Transfers:** Designs are cut from rolls of colored
    vinyl material (e.g., PU vinyl, flock, glitter vinyl) using a
    plotter, weeded, and then heat-pressed onto the garment.

    -   **Pros:** Excellent for individual names and numbers on jerseys,
        vibrant single-color logos, special effects (flock, glitter),
        low MOQs, very durable if applied correctly.

    -   **Cons:** Can have a "plastic" feel, less breathable than
        sublimation, limited detail for complex logos, not ideal for
        large designs as it can feel heavy.

-   **Digital Heat Transfers (Transfer Paper):** Designs are printed
    onto special transfer paper using inkjet or laser printers, then
    heat-pressed onto the garment.

    -   **Pros:** Full-color, intricate details, low MOQs, good for
        photos.

    -   **Cons:** Often has a noticeable "transfer window" (the clear
        film around the design), less durable than vinyl transfers, can
        crack or peel over time, heavier hand feel.

**Ideal for:** Custom names/numbers on team uniforms, small run logos,
promotional items.

#### Silicone Logos & Badges

These are raised, rubberized logos that are either heat-pressed or sewn
onto garments.

-   **Pros:** Modern, high-tech, tactile, extremely durable, flexible,
    excellent for premium athletic wear. Offers a unique 3D effect.

-   **Cons:** Higher cost, limited color options (usually solid colors),
    less suited for intricate fine details.

-   **Ideal for:** Premium activewear, compression garments, outerwear,
    a modern alternative to embroidery for a subtle yet impactful brand
    statement.

#### Woven Labels & Hang Tags

These are crucial for comprehensive branding and product information.

-   **Woven Labels:** Small labels (neck labels, hem tags) sewn into the
    garment, providing brand name, sizing, care instructions, and
    country of origin.

    -   **Pros:** High-end, durable, soft against the skin, reinforces
        brand identity internally.

    -   **Cons:** Requires sewing, not a direct decoration method.

-   **Hang Tags:** Detachable tags attached to the garment, offering
    space for branding, product story, pricing, and care instructions.

    -   **Pros:** Excellent for retail presentation, provides additional
        marketing space, customizable in material, shape, and finish.

    -   **Cons:** Not a permanent part of the garment.

**Ideal for:** All custom sportswear as essential branding elements.

## Comparative Analysis: Sublimation vs. Screen Print vs. Embroidery

Choosing involves weighing several factors. Here''s a comparative
matrix.

#### A Side-by-Side Evaluation Matrix

<div class="table-scroll"><table>
<thead><tr><th>Feature</th><th>Sublimation Printing</th><th>Screen Printing</th><th>Embroidery</th></tr></thead>
<tbody>
<tr><td><strong>Fabric Type</strong></td><td>Polyester (80%+)</td><td>Most fabrics (cotton, poly, blends, nylon)</td><td>Most fabrics (polo, fleece, woven, mid-weight jerseys)</td></tr>
<tr><td><strong>Design Complexity</strong></td><td>Unlimited (gradients, photos, fine detail)</td><td>Low to medium (1-6 spot colors, bold graphics)</td><td>Low (solid logos, text, simple shapes)</td></tr>
<tr><td><strong>Color Options</strong></td><td>Unlimited full color (CMYK)</td><td>Limited spot colors (more colors = more cost)</td><td>Limited thread colors (solid, often shiny finish)</td></tr>
<tr><td><strong>Hand Feel</strong></td><td>None (part of fabric, no feel)</td><td>Noticeable (ink sits on top, can be heavy)</td><td>Textured/raised (thread, can be stiff if large)</td></tr>
<tr><td><strong>Breathability</strong></td><td>Full (fabric retains original breathability)</td><td>Reduced (large solid prints block fabric pores)</td><td>Reduced (dense stitching blocks fabric pores)</td></tr>
<tr><td><strong>Durability</strong></td><td>Excellent (will never crack, peel, fade)</td><td>Good (can crack/fade over time with wear/wash)</td><td>Excellent (very long-lasting, resistant to fading)</td></tr>
<tr><td><strong>Best For</strong></td><td>Full-coverage, intricate, high-performance designs</td><td>Bold graphics, simple logos, large runs on various fabrics</td><td>Premium logos, small details, structured garments, caps</td></tr>
<tr><td><strong>MOQ</strong></td><td>Moderate to high (often 50-100+)</td><td>Low to moderate (can be as low as 12-24, cost-effective at 50+)</td><td>Low to moderate (digitization cost, can be as low as 12-24)</td></tr>
<tr><td><strong>Cost</strong></td><td>Moderate (per-unit consistent with complexity)</td><td>Low to moderate (cost-effective for bulk, depends on colors)</td><td>Moderate to high (digitization + stitch count)</td></tr>
</tbody>
</table></div>

#### Cost Efficiency by Volume & Complexity

-   **Low Volume (1-24 units):** Heat transfer printing (vinyl or
    digital) is often most cost-effective for individual customization
    (names, numbers) or very small runs. Embroidery can also be an
    option for small logos despite higher per-unit cost.

-   **Medium Volume (25-200 units):** Screen printing becomes very
    competitive for designs with few colors. Sublimation can be
    cost-effective for complex, full-color designs if on polyester.
    Embroidery for logos remains viable.

-   **High Volume (200+ units):** Screen printing often offers the
    lowest per-unit cost for multi-color designs. Sublimation for
    full-coverage designs on polyester remains excellent value.

**Expert Tip:** Always get quotes for different methods and volumes. The
"cheapest" method upfront might not be the most cost-effective for
your specific needs over the long run.

## Matching Branding Method to Product & Sport

The best branding method is always context-dependent.

#### High-Performance Jerseys (Football, Cycling)

-   **Needs:** Lightweight, breathable, extremely durable, full-color
    designs for sponsor logos and team graphics.

-   **Best Method:** **Sublimation Printing.** It''s lightweight, won''t
    block breathability, is incredibly durable for intense activity, and
    allows for vibrant, complex designs across the entire garment.

-   **Alternative:** Spot **Heat Transfer Vinyl** for player
    names/numbers on sublimated jerseys (applied post-production).

#### Compression Wear & Sports Bras

-   **Needs:** Maximum stretch, second-skin feel, no chafing, high
    breathability.

-   **Best Method:** **Sublimation Printing** (for polyester blends)
    or **Silicone Logos.** Sublimation has no hand feel, maintaining
    fabric stretch and breathability. Silicone logos are flexible and
    durable, providing a premium, modern touch.

-   **Avoid:** Large screen prints or heavy embroidery, as they can
    restrict stretch, reduce breathability, and cause chafing.

#### Gym Wear & Fitness Apparel (T-shirts, Hoodies)

-   **Needs:** Versatility, comfort, durability, bold branding.

-   **Best Method:**

    -   **Screen Printing:** Excellent for bold logos, graphics, and
        text on cotton, poly/cotton, or polyester t-shirts and hoodies.
        Cost-effective for larger runs.

    -   **Embroidery:** For a premium, textured logo on polo shirts,
        hoodies, or jackets.

    -   **Heat Transfer Vinyl:** For individual customization or smaller
        runs.

-   **Why:** These garments have a broader range of fabric types and
    performance requirements, allowing for more flexibility in branding.

#### Outerwear & Jackets

-   **Needs:** Durability, weather resistance (often), professional
    appearance.

-   **Best Method:** **Embroidery.** Creates a high-end, durable, and
    classic look for logos on jackets, softshells, and tracksuits. It
    withstands outdoor elements well.

-   **Alternative:** **Silicone Logos** for a modern, weather-resistant
    badge. **Screen Printing** for very large back graphics on some
    materials.

#### Team Uniforms & Merchandise

-   **Needs:** Consistent branding, player customization, durability,
    cost-effectiveness.

-   **Best Method (for main jerseys):** **Sublimation** (if polyester)
    for full design, durability, and cost.

-   **Best Method (for names/numbers):** **Heat Transfer Vinyl.**

-   **Best Method (for merchandise like
    caps/hoodies):** **Embroidery** or **Screen Printing.**

-   **Why:** A combination of methods often provides the most efficient
    and effective solution for a full teamwear package.

## Best Practices for Preparing Your Artwork

High-quality branding starts with high-quality artwork.

#### Vector Files vs. Raster Files

-   **Vector Files (AI, EPS, SVG, PDF - if vector-based):**

    -   **Best for all methods (especially screen print, embroidery,
        vinyl).**

    -   **Pros:** Scalable to any size without loss of quality (crisp
        edges, no pixelation).

    -   **Cons:** Requires specialized software (Adobe Illustrator) to
        create.

-   **Raster Files (JPG, PNG, GIF, TIFF):**

    -   **Suitable for sublimation (if high-resolution) and digital heat
        transfers.**

    -   **Pros:** Good for photographic images and complex gradients.

    -   **Cons:** Pixelates when enlarged; resolution-dependent.

-   **Recommendation:** Always provide vector files for logos and text
    whenever possible. For sublimation, high-resolution (300 DPI or
    higher) raster images can also work.

#### Color Matching (Pantone)

-   **Specify Pantone Codes:** For screen printing, embroidery threads,
    and spot colors in digital designs, provide specific Pantone
    Matching System (PMS) codes. This ensures consistent color
    reproduction across different production runs and materials.

-   **Sublimation:** While full CMYK, Pantone references help ensure the
    closest possible match digitally.

#### Resolution & Detail

-   **Minimum Resolution:** For raster images used in sublimation or
    digital transfers, ensure a minimum resolution of 300 DPI (dots per
    inch) at the final print size to avoid blurry or pixelated results.

-   **Detail for Embroidery:** Avoid extremely fine lines or very small
    text for embroidery, as these details can get lost or become
    illegible when stitched.

## Common Mistakes in Sportswear Branding (and How to Avoid Them)

Avoiding these common errors can save time, money, and enhance your
brand''s image.

1.  **Choosing the Wrong Method for Fabric:**

    -   **Mistake:** Trying to sublimate on cotton or doing a heavy
        screen print on delicate, super-stretchy compression fabric.

    -   **Avoidance:** Always consult with your manufacturer about
        fabric compatibility and recommended methods for your specific
        garment.

2.  **Poor Artwork Quality:**

    -   **Mistake:** Submitting low-resolution raster images for
        vector-based methods, leading to blurry, jagged, or unprintable
        results.

    -   **Avoidance:** Provide high-quality vector artwork (AI, EPS) for
        logos and text. For raster, ensure 300 DPI at final print size.

3.  **Ignoring Hand Feel & Breathability:**

    -   **Mistake:** Applying a large, thick print to a
        high-performance, next-to-skin garment, making it uncomfortable
        or compromising performance.

    -   **Avoidance:** Consider the wearer''s experience. Opt for
        methods like sublimation or smaller, lighter prints for
        performance items.

4.  **Neglecting Durability for Use:**

    -   **Mistake:** Using a branding method that quickly cracks or
        fades after a few washes for a frequently worn team uniform.

    -   **Avoidance:** Match durability to expected wear. Sublimation
        and embroidery offer high durability; some heat transfers might
        be less robust for heavy use.

5.  **Not Accounting for MOQ & Cost:**

    -   **Mistake:** Insisting on embroidery for 500 units of a complex,
        full-back design, or screen printing for a single, full-color
        custom jersey.

    -   **Avoidance:** Understand the cost structures and MOQs of each
        method. Choose the most cost-effective option for your volume
        and design complexity.

6.  **Inconsistent Color Matching:**

    -   **Mistake:** Not providing Pantone codes, leading to variations
        in brand colors across different garments or production runs.

    -   **Avoidance:** Always provide clear Pantone references for your
        brand colors.

## Expert Tips for Optimizing Your Branding Strategy

-   **Consult Your Manufacturer Early:** Leverage your sportswear
    manufacturer''s expertise. They can advise on the best methods,
    suggest alternatives, and highlight potential issues early in the
    design process.

-   **Consider a Hybrid Approach:** Don''t limit yourself to one method.
    A combination of techniques (e.g., sublimation for jersey body, heat
    transfer for names/numbers, embroidery for caps) often yields the
    best results for a full collection.

-   **Think About Placement:** Strategic placement of your branding
    (e.g., small, discreet logos on compression wear, bold logos on
    outer layers) enhances both aesthetics and performance.

-   **Test Samples:** Always approve a physical sample of the branded
    garment before proceeding with mass production. This allows you to
    assess the quality, hand feel, and durability of the decoration.

-   **Factor in Fabric Stretch:** If your garment has high stretch,
    ensure the chosen decoration method (especially screen printing or
    heat transfer) can stretch with the fabric without cracking or
    distorting. Silicone inks or vinyl are good options here.

-   **Stay Updated on Innovations:** The apparel decoration industry is
    constantly evolving. Keep an eye on new inks, transfer types, and
    techniques that might offer better performance or unique aesthetics.

## FAQs: Your Sportswear Branding Questions Answered

Here are some frequently asked questions about sportswear branding
methods, providing quick answers to common concerns.

#### 1. What is the most durable branding method for custom sportswear?
**Sublimation printing** and **embroidery** are generally considered the
most durable methods. Sublimation dyes are permanently infused into the
fabric, while embroidery threads are incredibly resilient to wear and
washing.

**2. Which branding method is best for full-color, intricate designs on
sportswear?**
**Sublimation printing** is by far the best for full-color, intricate
designs, gradients, and photographic images, especially on polyester
fabrics, as the design becomes part of the fabric itself.

#### 3. Can I use screen printing on polyester sportswear?
Yes, **screen printing can be used on polyester**, but it requires
specialized inks (often with a "blocker" layer) to prevent "dye
migration," where the dye from the polyester fabric bleeds into and
discolors the screen print over time.

#### 4. Is embroidery breathable on sportswear?
Large, densely embroidered areas can reduce breathability and add
stiffness, potentially causing chafing on next-to-skin sportswear. For
smaller logos on less critical areas (like polo shirts, jackets), it''s
fine. **Sublimation** offers superior breathability for performance
wear.

**5. What is the most cost-effective branding method for large orders of
simple logos?**
**Screen printing** is often the most cost-effective method for large
bulk orders with designs that have a limited number of colors and
aren''t overly intricate, due to its efficient per-unit cost once
screens are set up.

#### 6. When should I choose heat transfer printing for sportswear?
**Heat transfer printing (especially vinyl)** is ideal for individual
customization (like player names and numbers on jerseys), small runs of
logos, or designs requiring special effects (e.g., reflective, glitter).
It''s also versatile across many fabrics.

**7. What is the main advantage of sublimation over screen printing for
performance sportswear?**
The main advantage is **zero hand feel and full breathability**.
Sublimation dyes the fabric fibers, preserving the material''s original
performance properties, unlike screen print which lays ink on top and
can block pores.

**8. How do I ensure consistent color for my brand''s logo across
different garments and methods?**
Always provide your manufacturer with **Pantone Matching System (PMS)
color codes**. This is the international standard for color
communication and helps ensure consistency across screen printing,
embroidery threads, and digital prints.

#### 9. Can I get a 3D effect for my logo on sportswear?
Yes, **embroidery** inherently provides a raised, textured 3D
effect. **Silicone logos** also offer a modern, tactile 3D look. Some
specialty screen printing inks (high-density, puff) can also create a
raised effect.

#### 10. What artwork format is best for sportswear branding?
**Vector files (AI, EPS, SVG)** are generally preferred for all methods,
especially screen printing, embroidery digitization, and vinyl
transfers, as they can be scaled infinitely without losing quality. For
sublimation, high-resolution (300 DPI) raster files can also work.

**11. What are woven labels and hang tags used for in sportswear
branding?**
**Woven labels** are sewn into the garment (e.g., neck, hem) for
permanent branding, sizing, and care instructions, adding a premium
feel. **Hang tags** are detachable tags for retail presentation, extra
branding, product story, and pricing. Both are crucial for comprehensive
branding.

**12. Can I apply multiple branding methods to one sportswear
garment?**
Yes, it''s very common and often recommended to use a **hybrid
approach**. For example, a sublimated jersey might have heat transfer
vinyl names and numbers. A jacket might feature an embroidered logo on
the chest and a screen-printed graphic on the back.

#### 12. Conclusion: Wear Your Brand with Pride

The choice of **sportswear branding methods** is a critical juncture in
the custom apparel journey. It''s where your brand''s visual identity
converges with the technical demands of athletic performance. Whether
you opt for the boundless vibrancy and durability of sublimation, the
classic boldness and versatility of screen printing, the premium texture
and longevity of embroidery, or the modern touch of silicone logos, each
method offers a unique set of advantages.

Your ultimate decision should be a strategic one, carefully weighing
your design''s complexity, your fabric''s composition, your budget, your
volume, and---most importantly---the expected performance and durability
required for the sport and the wearer. A well-chosen branding method not
only ensures your logo looks exceptional but also enhances the
garment''s functionality and reinforces your brand''s commitment to
quality.

As experts in custom sportswear manufacturing and decoration, we pride
ourselves on guiding our clients through this intricate selection
process. We understand the nuances of each technique and how they
interact with various technical fabrics, ensuring your brand is not just
seen, but remembered for its excellence.

Ready to bring your custom sportswear designs to life with the perfect
branding?

**Request a Quotation Today and Let''s Craft a Visually Stunning and
High-Performing Brand Statement!**
', '20 min read', false, true, '2026-06-01'::timestamptz) on conflict (slug) do nothing;

-- ============================================================
-- NOTE ON IMAGES:
-- product_images.url, gallery_items.image_url, and articles.cover_image
-- currently store the SAME relative reference the static files already
-- used. Images stay bundled with the app build for this phase — the
-- database is the source of truth for all product/gallery/article
-- METADATA now, while images remain fast, free-to-serve static assets.
--
-- To make images fully dynamic too (e.g. an admin uploads a new product
-- photo with no code deploy), migrate them to Supabase Storage and swap
-- these values for the resulting public Storage URLs. That's a clean,
-- optional follow-up phase — the schema already supports it with zero
-- changes (product_images.url just becomes a full https:// URL instead
-- of a relative one).
-- ============================================================
