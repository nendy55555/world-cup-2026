# ARCH — World Cup Draft

## Shape

Single-page, single-file vanilla web app. No build, no framework, no backend.

```
index.html (2,443 lines)
├── <style> (lines 9–857)        — all CSS, ~850 lines
├── <body> markup (859–1006)     — tabs: Standings, Draft Room, Bracket, Nations
└── <script> (1020–2441)         — data + logic + render
        ↑
squads.js (1,118 lines)          — loaded just before inline <script>
```

## Data flow

```
                      ┌────────────────────────┐
                      │  Hardcoded constants   │
                      │  - DRAFT (line 1034)   │
                      │  - ALL_NATIONS         │
                      │  - R32_PAIRS           │
                      │  - SQUADS (squads.js)  │
                      └──────────┬─────────────┘
                                 ▼
   ┌──────────────────┐    ┌──────────────────┐
   │  ESPN API        │───▶│  fetchESPN()     │
   │  scoreboard      │    │  parses events   │
   │  (per-day)       │    │  normalizes      │
   └──────────────────┘    └────────┬─────────┘
                                    ▼
                       ┌────────────────────────┐
                       │  Game-state buckets    │
                       │  - allGames[]          │
                       │  - nationPoints/Wins/  │
                       │    Draws/GF/GA/Live    │
                       └──────────┬─────────────┘
                                  ▼
                       ┌────────────────────────┐
                       │ computeBracketResolved │
                       │  → bracketResolved     │
                       │   (1A..3T8 → R32 → F)  │
                       └──────────┬─────────────┘
                                  ▼
                       ┌────────────────────────┐
                       │  render() pipeline     │
                       │  - progress strip      │
                       │  - ticker              │
                       │  - leaderboard         │
                       │  - bar chart           │
                       │  - draft cards         │
                       │  - groups + bracket    │
                       │  - nations pool        │
                       └────────────────────────┘
```

All state is recomputed from `DRAFT` + `allGames` on every render. There is no mutation of derived state outside `fetchESPN` + `computeBracketResolved`.

## Modules (functional groupings inside the inline script)

| Group | Lines | Purpose |
|---|---|---|
| Constants & data | 1028–1177 | DRAFT, COLORS, ALL_NATIONS, R32_PAIRS, NATION_COLOR, ABBR |
| Helpers | 1179–1233 | flag, getNation, matchNation, findOwner, scoring accessors |
| Bracket resolution | 1235–1331 | computeBracketResolved, koWinner, compareGroupStanding |
| Fetch layer | 1333–1465 | ESPN endpoints, GROUP_DATES, fetchESPN, mock games |
| Tab + main render | 1467–1500 | switchTab, renderTournamentProgress |
| Ticker | 1502–1580 | renderTicker |
| Leaderboard / chart | 1582–1690 | renderLeaderboard, renderBarChart |
| Draft cards | 1692–1732 | renderDraftCards |
| Groups grid | 1734–1765 | renderGroupsGrid |
| **Destiny mode** | 1767–2106 | FIFA_RANK, path projection, overlay rendering |
| Bracket render | 2109–2239 | renderBracket, renderKnockoutBracket |
| Nations pool | 2241–2331 | toggleNationCard, renderNationsPool |
| Lifecycle | 2333–2440 | updateStatus, render, scheduleRefresh, DOMContentLoaded |

## Rendering model

- **String concatenation → `innerHTML`** (no virtual DOM, no template engine).
- Each render function is idempotent: rebuild the whole subtree from current state.
- `IntersectionObserver` adds `.visible` to `.reveal` elements for fade-in.
- Score increments are detected by diffing `_prevPlayerPts` (module-level) and pulsing a `.scored` class for one animation cycle.

## Tabs

Sticky nav at top. `switchTab(id, btn)` toggles `.tab-pane.active`. Bracket and Draft Room are lazy-rendered on first activation. Bracket is also re-rendered on every `render()` call when `#tab-bracket` is active.

## Refresh policy

- `OFFSEASON = true` → `fetchESPN` early-returns; `scheduleRefresh()` skipped.
- During tournament: 60s interval when any live game exists, 120s otherwise.
- Manual button disables itself for 3s after click.

## Critical invariants

1. **Nation names match exactly** across `DRAFT`, `ALL_NATIONS`, `SQUADS`, `NATION_COLOR`, `ABBR`, `FIFA_RANK`. ESPN strings get normalized via `ESPN_OVERRIDES` + `matchNation()`.
2. **`DRAFT[*].nations.length` should be 8** post-draft. Some logic (bar chart, alive count) assumes this.
3. **Each nation is owned by exactly one player.** `findOwner()` returns the first match; duplicate picks would silently misattribute points.
4. **`bracketResolved` is rebuilt from scratch every render** — never mutated incrementally.

## Off-limits without coordination

- Renaming any nation key (cascades across 6 maps + ESPN override table).
- Changing the `DRAFT` shape (`nations[]`, `picks[]`, `ci`, `trophies`) without updating draft cards, leaderboard, Destiny.
- Touching `R32_PAIRS` — current mapping is an approximation of FIFA's third-place rule; changing it shifts the entire knockout layout.

## Planned but not built

- `renderDraft()` — referenced by `switchTab`, never defined. ~150 lines of CSS for `.dr-*` UI exist as scaffolding.
- Elimination derivation — `nationElim` initialized but never written.
- Persistence layer — draft, Destiny selection, expanded cards all reset on reload.
- Shootout winner ingestion — `koWinner()` reads `g.shootoutWinner`, `fetchESPN()` never sets it.
