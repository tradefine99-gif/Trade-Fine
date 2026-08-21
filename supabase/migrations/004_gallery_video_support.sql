-- ============================================================
-- 004: Video support for gallery_items
--
-- Purpose: the client provided real factory floor video (sublimation
-- printing, embroidery) that is far more convincing proof of
-- manufacturing capability than any still photo. This migration adds
-- three nullable columns so a gallery_items row can represent either
-- an image (existing behaviour, unaffected) or a short video clip with
-- its own poster frame — additive only, no existing data is touched.
--
-- Storage convention:
--   image_url  -> resolved via src/lib/localImages.js (bundled asset)
--   poster_url -> same resolver, used as the grid tile + <video poster>
--   video_url  -> a plain absolute path served from /public/videos/,
--                 e.g. '/videos/sublimation-printing.mp4' (NOT bundled
--                 by Vite — videos are large enough that we serve them
--                 as static files rather than import.meta.glob assets)
-- ============================================================

alter table gallery_items
  add column if not exists media_type text not null default 'image'
    check (media_type in ('image', 'video')),
  add column if not exists video_url text,
  add column if not exists poster_url text;

-- A video row must carry a poster (used for the grid tile and as the
-- <video poster> fallback) and a video_url; image rows are unaffected
-- since media_type defaults to 'image' and this check only fires for
-- video rows.
alter table gallery_items
  add constraint gallery_items_video_requires_poster
    check (media_type <> 'video' or (poster_url is not null and video_url is not null));
