# DECISIONS

Rationale behind structural choices. Append-only; see `decisions/adr-log.md` for the timeline.

## Stack

**Vanilla HTML/CSS/JS, single file, no build step.**

- Why: project is a personal/group tracker for 6 friends, not a product. Zero build complexity means edit-save-reload, no toolchain to maintain over the 5-week tournament window.
- Constraint: keeps deploy trivial — drop two files on any static host.
- Tradeoff: no module system, no type checks, no tests. Acceptable at this scope.

## No backend, no database

- Why: state is small (6 players × 8 nations), tournament is short, no multi-user editing planned.
- Implication: draft picks must be hand-edited into `DRAFT` literal until/unless a persistence layer is added.

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
