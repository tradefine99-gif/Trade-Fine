-- ============================================================
-- Lead email notifications — additive migration
-- ============================================================
-- Run this AFTER schema.sql has already been applied once.
-- Safe to run on a live project: only adds columns (IF NOT EXISTS)
-- and replaces one policy definition — no data is touched, no
-- existing table/column is dropped or renamed.
--
-- Purpose: give the new send-quote-emails Edge Function somewhere
-- to record whether the owner/customer notification emails for a
-- lead actually went out, so email delivery failures are visible
-- and queryable instead of silent.
-- ============================================================

alter table leads
  add column if not exists email_notification_status text
    not null default 'pending'
    check (email_notification_status in ('pending', 'sent', 'failed')),
  add column if not exists customer_email_status text
    not null default 'pending'
    check (customer_email_status in ('pending', 'sent', 'failed')),
  add column if not exists notification_error text,
  add column if not exists updated_at timestamptz not null default now();

-- Keep updated_at honest on every row change (the Edge Function uses
-- the service role and could set it manually, but a trigger means it's
-- correct even if a future admin panel updates a row directly).
create or replace function set_leads_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists leads_set_updated_at on leads;
create trigger leads_set_updated_at
  before update on leads
  for each row
  execute function set_leads_updated_at();

-- ------------------------------------------------------------
-- Tighten the public insert policy so the new columns can only
-- ever be inserted at their safe defaults. Without this, a direct
-- REST call (bypassing the React app entirely) could insert a lead
-- with email_notification_status = 'sent' to make it look like a
-- notification went out when it never did.
-- ------------------------------------------------------------
drop policy if exists "public can submit a lead" on leads;

create policy "public can submit a lead"
  on leads for insert
  to anon
  with check (
    status = 'new'
    and email_notification_status = 'pending'
    and customer_email_status = 'pending'
    and notification_error is null
  );

-- No UPDATE policy is granted to `anon` here (same as before this
-- migration) — RLS defaults to deny, so the public site still cannot
-- modify a lead once submitted, including these new status columns.
-- Only the Edge Function (using the service_role key, which bypasses
-- RLS entirely) can update them after attempting to send email.
