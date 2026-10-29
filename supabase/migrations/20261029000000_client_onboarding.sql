-- Client onboarding for the custom website + CRM package (clivellora.com/onboarding).
-- All access goes through the Next.js API using the service role key, so RLS is on
-- with no policies: the public anon key can neither read nor write these rows.

create table if not exists public.onboarding_submissions (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  created_at timestamptz not null default now(),
  status text not null default 'new' check (status in ('new', 'payment_verified', 'in_progress', 'completed', 'rejected')),

  -- Company & contact
  company_name text not null,
  contact_name text not null,
  contact_position text,
  email text not null,
  phone text not null,
  company_address text,
  current_website text,

  -- Project brief
  products text not null,
  pages text[] not null default '{}',
  crm_needs text[] not null default '{}',
  brand_assets_link text,
  target_launch date,
  notes text,

  -- Payment
  package_name text not null,
  base_amount numeric(12, 2) not null,
  needs_official_receipt boolean not null default false,
  tax_rate numeric(5, 4) not null default 0,
  tax_amount numeric(12, 2) not null default 0,
  total_amount numeric(12, 2) not null,
  billing_name text,
  billing_address text,
  billing_tin text,
  payment_reference text,
  receipt_path text not null,

  consent_at timestamptz not null,
  user_agent text
);

create index if not exists onboarding_submissions_created_at_idx
  on public.onboarding_submissions (created_at desc);

alter table public.onboarding_submissions enable row level security;

-- Private bucket for bank-transfer receipts. Limits are enforced by Storage itself.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'payment-receipts',
  'payment-receipts',
  false,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif', 'application/pdf']
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;
