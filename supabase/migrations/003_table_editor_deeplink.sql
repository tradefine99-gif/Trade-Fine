-- ============================================================
-- Table Editor deep-link support — additive migration
-- ============================================================
-- Run this AFTER 002_lead_email_notifications.sql.
-- Adds exactly one function, changes nothing else.
--
-- Why this exists: Supabase Studio's Table Editor URLs are of the
-- form /project/{ref}/editor/{table_id}?filter=id:eq:{value} — but
-- {table_id} is the table's internal Postgres OID, not its name, and
-- Supabase doesn't expose that anywhere via the REST API. The only
-- place that number lives is Postgres's own catalog (pg_class), so
-- this function reads it directly and hands it back over RPC.
--
-- The OID is stable for the life of the table (it only changes if the
-- table is dropped and recreated, which schema.sql never does), so
-- the send-quote-emails function can safely fetch it once and reuse
-- it for the "View Lead In Supabase" button in every owner email.
-- ============================================================

create or replace function get_table_oid(table_name text)
returns bigint
language sql
stable
security definer
set search_path = public
as $$
  select (quote_ident('public') || '.' || quote_ident(table_name))::regclass::oid::bigint;
$$;

-- Only the service role (used exclusively inside the Edge Function,
-- never sent to the browser) can call this. It's harmless information
-- either way — just a table's internal id number, nothing about
-- data — but there's no reason to expose it to `anon` at all.
revoke all on function get_table_oid(text) from public;
revoke all on function get_table_oid(text) from anon;
grant execute on function get_table_oid(text) to service_role;
