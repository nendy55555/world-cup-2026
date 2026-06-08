-- ============================================================
-- World Cup Draft — Supabase backend setup
-- Run this ONCE in a fresh Supabase project: SQL Editor → New query → paste → Run
-- Recreates the `rooms` table the live multiplayer draft needs.
-- ============================================================

-- 1) Table the app reads/writes (matches the mp* functions in index.html)
create table if not exists public.rooms (
  id              text primary key,
  state           jsonb default '{}'::jsonb,
  host_browser_id text,
  claimed_names   jsonb default '{}'::jsonb,
  updated_at      timestamptz default now()
);

-- 2) Realtime needs the FULL row in change payloads (so guests get the new state)
alter table public.rooms replica identity full;

-- 3) Row Level Security ON, with permissive policies for the anon/publishable key.
--    (Friend-group app: anyone with the room link can read/insert/update that room.)
alter table public.rooms enable row level security;

drop policy if exists "rooms_select" on public.rooms;
drop policy if exists "rooms_insert" on public.rooms;
drop policy if exists "rooms_update" on public.rooms;

create policy "rooms_select" on public.rooms
  for select using (true);

create policy "rooms_insert" on public.rooms
  for insert with check (true);

create policy "rooms_update" on public.rooms
  for update using (true) with check (true);

-- 4) Add the table to the Realtime publication so postgres_changes fire
do $$
begin
  if not exists (
    select 1 from pg_publication where pubname = 'supabase_realtime'
  ) then
    create publication supabase_realtime;
  end if;
end $$;

alter publication supabase_realtime add table public.rooms;
