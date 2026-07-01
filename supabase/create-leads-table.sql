create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  company_name text,
  website_url text,
  service_interest text,
  message text,
  source text not null default 'website_contact'
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_source_idx on public.leads (source);
create index if not exists leads_email_idx on public.leads (email);

alter table public.leads enable row level security;
