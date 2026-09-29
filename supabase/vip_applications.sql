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

-- The public site may only insert. No select/update/delete for anon,
-- so submissions can't be read back with the public key.
create policy "anon can submit vip applications"
  on public.vip_applications
  for insert
  to anon
  with check (true);
