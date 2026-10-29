-- Pay-first onboarding: the project brief moves to phase 2, so products is no longer collected here.
alter table public.onboarding_submissions alter column products drop not null;
