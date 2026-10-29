-- Clients no longer choose pages / CRM features; they accept a fixed scope instead.
-- pages and crm_needs stay for older rows but are no longer written.

alter table public.onboarding_submissions
  add column if not exists scope_version text,
  add column if not exists scope_accepted_at timestamptz,
  add column if not exists owns_domain boolean,
  add column if not exists preferred_domain text;
