create extension if not exists pgcrypto;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and is_admin = true
  );
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text not null,
  email text not null unique,
  role text not null check (role in ('user', 'company')),
  company_name text,
  is_admin boolean not null default false,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.assessment_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  questionnaire_type text not null check (questionnaire_type in ('empresarial', 'religioso', 'esportivo')),
  primary_profile text not null,
  secondary_profile text not null,
  total_answers integer not null,
  result jsonb not null,
  submitted_at timestamptz not null default timezone('utc', now())
);

alter table public.profiles enable row level security;
alter table public.assessment_reports enable row level security;

create policy "profiles_select_own_or_admin"
on public.profiles
for select
using (id = auth.uid() or public.is_admin());

create policy "profiles_insert_own"
on public.profiles
for insert
with check (id = auth.uid());

create policy "profiles_update_own_or_admin"
on public.profiles
for update
using (id = auth.uid() or public.is_admin())
with check (id = auth.uid() or public.is_admin());

create policy "reports_select_own_or_admin"
on public.assessment_reports
for select
using (user_id = auth.uid() or public.is_admin());

create policy "reports_insert_own"
on public.assessment_reports
for insert
with check (user_id = auth.uid());

create index if not exists assessment_reports_user_id_idx
  on public.assessment_reports (user_id, submitted_at desc);
