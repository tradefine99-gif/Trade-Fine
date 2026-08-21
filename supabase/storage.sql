-- ============================================================
-- TradeFine — Supabase Storage setup
-- Run this AFTER schema.sql. Creates one public bucket for photos
-- attached to customer review submissions (the optional "upload a
-- logo/photo" field in the Leave a Review form).
--
-- Nothing else on the site needs Storage right now — product, gallery,
-- and article images stay bundled with the app build (see the note at
-- the bottom of seed.sql for why, and how to migrate them later if
-- you want those fully CMS-managed too).
-- ============================================================

insert into storage.buckets (id, name, public)
values ('review-photos', 'review-photos', true)
on conflict (id) do nothing;

-- Public (anon) can upload a new file — needed for the review form to
-- work without a login. They can only ADD files, never list, overwrite,
-- or delete existing ones.
create policy "public can upload review photos"
  on storage.objects for insert
  to anon
  with check (bucket_id = 'review-photos');

-- Public can view uploaded photos (needed to actually display them once
-- a review is approved).
create policy "public can view review photos"
  on storage.objects for select
  to anon
  using (bucket_id = 'review-photos');
