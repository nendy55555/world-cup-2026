# DECISIONS

Rationale behind structural choices. Append-only; see `decisions/adr-log.md` for the timeline.

## Multi-league support (2026-05-22)

Two independent drafts share one HTML file: `main` (6 players × 8 nations) and `squad` (4 players × 12 nations). One canonical 48-team `ALL_NATIONS` pool serves both.

- **Why one file over two URLs:** keeps shared state (ALL_NATIONS, FIFA_RANK, WORLD_CUP_ODDS, ESPN match strip, bracket UI) in lockstep across leagues. Forking into `/main/` and `/squad/` would double maintenance and risk drift. URL hash routing (`#league=squad`) gives the same shareability without the duplication.
- **Why a header dropdown and URL hash, not separate URLs:** UX is more discoverable (the pill switcher signals "this site has two drafts"), and the hash still gives shareable deep links. Best of both.
- **Why namespace localStorage keys with `::leagueId`:** each league must be a clean swap — switching leagues should not show another league's picks. The `::` separator keeps human inspection of devtools easy and lets us grep clearly.
- **Why migrate legacy keys on boot:** the existing single-league user already has `wcb-draft-v1` in localStorage. Auto-migrating to `wcb-draft-v1::main` preserves their state without manual action.
- **Why scope MP rooms but not MP browser ID:** browser ID identifies the device across leagues (sensible — one human, two leagues). Claimed player name is per-league (Thomas in main is a different "slot" from Thomas in squad). Room IDs prefixed with league in the URL prevent cross-league room collisions, even though they share the Supabase `rooms` table.
- **Why pin `#league=<id>` to every share link:** without it, sharing a `#d=...` link from squad league would decode into main league's renderer (wrong DRAFT_ROUNDS, wrong roster). Pinning the league removes that footgun entirely.
- **Tradeoff accepted:** the multi-league config is hardcoded in the `LEAGUES` object — adding a third league means editing source. Acceptable because (a) the file is already direct-edit, (b) league setup is rare (once per friend group per tournament), (c) generalizing further would add complexity that doesn't pay off.

## Stack

**Vanilla HTML/CSS/JS, single file, no build step.**

- Why: project is a personal/group tracker for 6 friends, not a product. Zero build complexity means edit-save-reload, no toolchain to maintain over the 5-week tournament window.
- Constraint: keeps deploy trivial — drop two files on any static host.
- Tradeoff: no module system, no type checks, no tests. Acceptable at this scope.

## ~~No backend, no database~~ → Supabase (added 2026-05-22)

- Original stance: state is small (6 players × 8 nations), tournament is short, no multi-user editing planned.
- Updated: added Supabase Realtime as the multiplayer sync layer so all 6 players can draft from their own browsers with picks syncing live.
- See "Multiplayer sync — Supabase" below for full rationale.

## Multiplayer sync — Supabase Realtime + Postgres (2026-05-22)

- **Why Supabase over Firebase:** Postgres-native means simpler schema (one `rooms` table holds everything as JSONB), easier to query/inspect, and Supabase Realtime ships row-level postgres_changes streams that are simpler to reason about than Firebase's tree-snapshot model. Also keeps the option open to expand into a "real" backend later without switching providers.
- **Why not Firebase (initial design):** original plan called for Firebase RTDB; we had the code wired up but never enabled. User explicitly chose Supabase 2026-05-22 when faced with the deploy decision.
- **Schema:** single `rooms` table — `(id text PK, state jsonb, host_browser_id text, claimed_names jsonb, updated_at timestamptz)`. `state` holds the entire draftState object; `claimed_names` maps playerName → `{browserId, lastSeen}` for sticky name claims.
- **Auth model:** none. Publishable (anon) key + open RLS policies. Acceptable because: (a) only friends share the 6-char room code, (b) state is low-stakes draft picks, (c) Supabase publishable keys are designed for this. If griefing becomes a problem, swap to a Postgres function that enforces "only the picker for the current pick can mutate state".
- **Race handling on claim:** read-then-write race window is acceptable for a 6-person friend league. If two players claim the same name simultaneously, the Realtime channel surfaces the conflict within ~100ms and last-writer-wins. Not worth an RPC function for this scope.
- **Why JSONB for state:** the existing `draftState` object is already JSON-serializable. Storing it whole means no schema migration when we add fields; tradeoff is no Postgres-side queries on draft contents, which we don't need.
- **Realtime publication:** `alter publication supabase_realtime add table rooms` enables postgres_changes streaming for the rooms table. Subscriptions filter by `id=eq.<roomId>` so each browser only sees its own room.

## ESPN public scoreboard for live data

- Why: free, no auth, well-known shape, used successfully by the March Madness sibling project.
- Endpoint: `site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=YYYYMMDD`.
- Tradeoff: ESPN nation names diverge from canonical (e.g. "Korea Republic", "United States", "Côte d'Ivoire") — handled by `ESPN_OVERRIDES` lookup.
- Not chosen: FIFA official API (no public access), Sportmonks/SportsDataIO (paid).

## flagcdn.com for flag images

- Why: free, ISO-code addressable, multiple sizes, no auth.
- Code mapping is ISO 3166-1 alpha-2 lowercase; England uses `gb-eng` (subdivision code).

## Snake draft, 8 nations × 6 players = 48

- Locked by user requirement: every World Cup nation owned by exactly one player.
- Snake order is conventional for fairness across draft positions.

## Scoring: 3 pts win / 1 pt draw / 0 pts loss

- Standard football league scoring.
- Group + knockout points both count. KO goals deliberately excluded from GF/GA tiebreakers (group standings only).

## Group tiebreaker simplification

- Order: Points DESC → GD DESC → GF DESC → Name ASC.
- Omits FIFA's head-to-head, fair-play, and drawing-of-lots tiebreakers.
- Rationale: head-to-head adds complexity; lots are non-deterministic. Approximation is "good enough" for the league-style tracker — actual FIFA standings are reflected once ESPN reports the official seedings.

## R32 pairing table is approximated

- FIFA's actual third-place qualification rule depends on which 8 of 12 groups produce qualifying third-place finishers (conditional table).
- Implemented as fixed mapping of top-8 overall third-place rank → R32 slots.
- Will be wrong for some scenarios. Comment in code (line 1131–1134) acknowledges this.

## Destiny mode projection math

- **Ceiling:** each alive nation gets `(groupRem × 3) + (5 − koDepth) × 3` (assume wins all remaining).
- **Realistic:** per-group `clamp(0.5, 2.5, 2.0 − rank/30)` expected pts; per-KO `pWin = clamp(0.18, 0.7, 0.7 − rank × 0.012)` with geometric sum across remaining rounds.
- FIFA_RANK is a manual snapshot (line 1773), not fetched live.

## Player color palette (`COLORS`)

- 6 hex values: `#f5a623, #60a5fa, #34d399, #f87171, #a78bfa, #fb923c`.
- Order locked to player draft order via `ci` index. Don't reshuffle without updating every `.pc0`–`.pc5` reference.

## Off-limits / ruled out

- **Frameworks** (React, Vue, Svelte) — overkill for a single-file tracker.
- **Build tools** (Vite, esbuild, webpack) — same.
- **Auth / multi-user editing** — out of scope; if needed later, replace `DRAFT` constant with a fetched JSON.
- **Local file save dialog for picks** — possible later if persistence becomes a need.
