# Test Cases

No automated tests. This file enumerates scenarios to verify manually.

## Data integrity

| # | Scenario | Expected |
|---|---|---|
| D1 | All 6 players have 8 nations after draft | `Object.values(DRAFT).every(p => p.nations.length === 8)` |
| D2 | All 48 nations drafted exactly once | `Object.values(DRAFT).flatMap(p => p.nations).length === 48` and `new Set(...).size === 48` |
| D3 | Picks 1–48 all present | `Object.values(DRAFT).flatMap(p => p.picks).sort((a,b)=>a-b)` equals `[1..48]` |
| D4 | Every drafted name matches `ALL_NATIONS` | `Object.values(DRAFT).flatMap(p => p.nations).every(n => NATION_MAP[n.toLowerCase()])` |
| D5 | Color indices unique 0–5 | `new Set(Object.values(DRAFT).map(p => p.ci)).size === 6` |
| D6 | SQUADS keys match ALL_NATIONS names | `ALL_NATIONS.every(n => SQUADS[n.name])` |
| D7 | SQUADS has no extra keys | `Object.keys(SQUADS).length === 48` |

## Scoring

| # | Scenario | Expected |
|---|---|---|
| S1 | Win adds 3 pts | After processing a `STATUS_FINAL` game with non-tied score, winning nation's `nationPoints += 3` |
| S2 | Draw adds 1 pt each | Tied `STATUS_FINAL` adds 1 to both `nationPoints` |
| S3 | KO games count toward `nationPoints` but NOT `nationGF/GA` | Goals from `Round of 16+` matches excluded from group tiebreakers |
| S4 | Live game shows score but doesn't add points | `nationLive[name] = {hs, as}` set, `nationPoints` unchanged |
| S5 | Player total = sum of 8 nations | `getPlayerPoints('Thomas')` equals sum of `nationPoints` for Thomas's 8 nations |

## Bracket resolution

| # | Scenario | Expected |
|---|---|---|
| B1 | Group with 6 finals → standings filled | `bracketResolved['1A']..'4A'` all set |
| B2 | Group with <6 finals → standings null | Slots labeled by `SEED_LABELS` |
| B3 | Group tiebreaker: pts → GD → GF → name | `compareGroupStanding(a,b)` matches manual sort |
| B4 | Third-place ranking pulls top 8 across all groups | `bracketResolved['3T1']..'3T8'` populated only when all 12 groups complete |
| B5 | R32 winner advances to R16 | `koWinner(R32 match)` populates `bracketResolved.W{N}`, used in next round |
| B6 | KO draw with no shootoutWinner stalls | `bracketResolved.W{N}` stays unset; downstream rounds blocked |
| B7 | Champion populated when final is Final | `bracketResolved.CHAMPION` set |

## Rendering

| # | Scenario | Expected |
|---|---|---|
| R1 | Empty draft → empty state banner | `applyEmptyStateVisibility` hides leaderboard, cards, chart |
| R2 | One pick made → all sections show | `DRAFT_COMPLETE = true`, banner hidden |
| R3 | Player score increases between renders | `.scored` class added + `scoreJump` animation runs |
| R4 | Bracket re-render after group completion | Group-letter cards transition from "in progress" to final standings |
| R5 | Live game in ticker | Card has `.live` class with pulsing animation |
| R6 | Destiny mode on | Bracket fades non-player paths, stats panel populated |

## ESPN integration

| # | Scenario | Expected |
|---|---|---|
| E1 | ESPN reachable, finals exist | Status bar "Live" or "Idle", games populate ticker |
| E2 | ESPN unreachable | `console.warn`, page stays usable with stale data |
| E3 | Unknown ESPN name | Game silently skipped; check `ESPN_OVERRIDES` |
| E4 | OFFSEASON = true | No network calls, no auto-refresh |
| E5 | MOCK_MODE = true | 9 mock games render in ticker + leaderboard |

## Responsive

| # | Viewport | Expected |
|---|---|---|
| V1 | 1280px | Full desktop layout, all sections side-by-side where applicable |
| V2 | 1024px | Nation chips swap to abbreviations |
| V3 | 768px | Tab nav still sticky, cards stack |
| V4 | 600px | Mobile layout, no horizontal scroll |
| V5 | 400px | All content still readable, no overflow |

## Edge cases

| # | Scenario | Expected |
|---|---|---|
| X1 | Click Draft Room tab | **Currently throws ReferenceError** — known broken |
| X2 | Click refresh button rapidly | Disabled for 3s after each click |
| X3 | Nation with no `NATION_COLOR` entry | Bar chart segment uses fallback color |
| X4 | Player drafts nation that ends up not playing | (Shouldn't happen; all 48 ALL_NATIONS qualify) |
| X5 | England flag | Renders `gb-eng.png` not `en.png` |
