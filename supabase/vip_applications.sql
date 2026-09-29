-- VIP application submissions from vip-application.html.
-- Run in the Supabase SQL editor.

create table if not exists public.vip_applications (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  has_account     boolean not null,
  account_number  text,
  deposit_amount  text not null,
  full_name       text not null,
  email           text not null,
  phone           text not null,
  constraint account_number_required
    check (not has_account or coalesce(btrim(account_number), '') <> '')
);

alter table public.vip_applications enable row level security;

-- No policies on purpose: anon/authenticated can't touch this table.
-- Only the server-side function (api/vip-application.js) writes to it,
-- using the service role key, which bypasses RLS.
