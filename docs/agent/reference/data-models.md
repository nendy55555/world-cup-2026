# Data Models

Authoritative shapes for every global/module-level data object. Cross-reference before changing any data layer.

---

## `DRAFT` (index.html ~line 1034)

Player-keyed object. Mutable in principle, hardcoded in practice.

```js
const DRAFT = {
  Thomas: { nations: [], picks: [], trophies: 0, ci: 0 },
  Andrew: { nations: [], picks: [], trophies: 0, ci: 1 },
  Paul:   { nations: [], picks: [], trophies: 0, ci: 2 },
  Carson: { nations: [], picks: [], trophies: 0, ci: 3 },
  Rudger: { nations: [], picks: [], trophies: 0, ci: 4 },
  Shaq:   { nations: [], picks: [], trophies: 0, ci: 5 },
};
```

| Field | Type | Meaning |
|---|---|---|
| `nations` | `string[]` | Drafted nation names. Length 0 (pre) or 8 (post). Must match `ALL_NATIONS[].name`. |
| `picks` | `number[]` | Snake-draft overall pick numbers (1–48), parallel to `nations`. |
| `trophies` | `number` | Career trophy counter. Cosmetic only. |
| `ci` | `number` | Color index into `COLORS` (0–5). Drives `.pc{N}` class. |

**Invariants:**
- `nations` and `picks` must be the same length.
- Union of all 6 `nations` arrays = 48 unique names = `ALL_NATIONS.map(n => n.name)`.
- `ci` values are 0–5, each used exactly once.

---

## `DRAFT_COMPLETE` (line 1042)

```js
let DRAFT_COMPLETE = Object.values(DRAFT).some(p => p.nations.length > 0);
```

Boolean. Becomes `true` as soon as **any** player has at least one nation. Drives empty-state visibility. Not recomputed after page load.

---

## `COLORS` (line 1029)

```js
const COLORS = ['#f5a623', '#60a5fa', '#34d399', '#f87171', '#a78bfa', '#fb923c'];
```

Index → hex. Must align with `DRAFT[*].ci`. Exposed in CSS via `.pc0`–`.pc5` and `--pc` custom property.

---

## `ALL_NATIONS` (line 1053) — 48 entries

```js
[{ name, code, conf, group, host? }, ...]
```

| Field | Type | Notes |
|---|---|---|
| `name` | `string` | Canonical display name. Used as map key everywhere. |
| `code` | `string` | flagcdn ISO code, lowercase. `gb-eng` for England. |
| `conf` | `'UEFA' \| 'CONMEBOL' \| 'CONCACAF' \| 'AFC' \| 'CAF' \| 'OFC'` | Confederation. |
| `group` | `'A'..'L'` | One of 12 groups. |
| `host` | `boolean?` | Optional. True only for Canada, USA, Mexico. |

---

## `NATION_MAP` (line 1116)

```js
const NATION_MAP = Object.fromEntries(ALL_NATIONS.map(n => [n.name.toLowerCase(), n]));
```

Lookup: lowercase nation name → nation object. Built once at load.

---

## `GROUPS_MAP` (line 1122)

```js
{ A: [nation, nation, nation, nation], B: [...], ..., L: [...] }
```

Group letter → 4 nation objects in `ALL_NATIONS` order.

---

## `R32_PAIRS` (line 1135) — 16 entries

```js
[
  ['1A','2D'], ['1B','2E'], ['1C','2F'], ['1D','2A'],
  ['1E','2B'], ['1F','2C'], ['1G','2J'], ['1H','2K'],
  ['1I','2L'], ['1J','2G'], ['1K','2H'], ['1L','2I'],
  ['3T1','3T2'], ['3T3','3T4'], ['3T5','3T6'], ['3T7','3T8'],
]
```

Seed format:
- `1A`..`1L` = group winner
- `2A`..`2L` = group runner-up
- `3T1`..`3T8` = top-8 third-place overall ranking

**Caveat:** approximation of FIFA's conditional third-place rule. See DECISIONS.md.

---

## `SEED_LABELS` (line 1143)

```js
{ '3T1': 'Best 3rd', '3T2': '2nd Best 3rd', ..., '3T8': '8th Best 3rd' }
```

Used for unresolved bracket slots.

---

## `NATION_COLOR` (line 1149)

```js
{ 'Argentina': '#75aadb', 'Brazil': '#fcd116', ..., }
```

Nation name → hex. Drives stacked bar chart segments.

---

## `ABBR` (line 1166)

```js
{ 'Argentina': 'ARG', 'Brazil': 'BRA', ..., }
```

Nation name → 3-letter code for `.nc-abbr` chips.

---

## `ESPN_OVERRIDES` (line 1180)

```js
{
  'united states': 'USA',
  'korea republic': 'South Korea',
  'côte d\'ivoire': 'Ivory Coast',
  'democratic republic of congo': 'DR Congo',
  ...
}
```

Lowercase ESPN string → canonical nation name. Add new mappings here when `matchNation()` fails.

---

## Game-state buckets (line 1204) — rebuilt on every `fetchESPN`

```js
let nationPoints = {};   // { [name]: int } cumulative tournament pts
let nationWins   = {};   // { [name]: int }
let nationDraws  = {};   // { [name]: int }
let nationElim   = {};   // { [name]: bool } — INITIALIZED, NEVER WRITTEN
let nationLive   = {};   // { [name]: { hs, as } } in-progress score
let nationGF     = {};   // { [name]: int } group-stage goals for
let nationGA     = {};   // { [name]: int } group-stage goals against
let allGames     = [];   // normalized game objects
let todayGames   = [];   // live + today subset
let currentRound = '';   // latest round name
let totalCompleted = 0;
```

---

## Game object shape

```js
{
  id: string,               // ESPN event id
  date: string,             // ISO date
  homeTeam: string,         // canonical nation name
  awayTeam: string,
  homeScore: number|null,
  awayScore: number|null,
  status: string,           // 'Final' | 'LIVE 67"' | upcoming clock | etc.
  round: string,            // 'Group A' | 'Round of 16' | ...
  isDraw: boolean,
  live: boolean,
  upcoming: boolean,
  shootoutWinner?: string,  // read by koWinner(), never set today
}
```

---

## `bracketResolved` (line 1216)

Map of seed → nation name. Rebuilt by `computeBracketResolved()`.

| Key shape | Meaning |
|---|---|
| `1A`..`4L` | Group standings positions (1st through 4th). |
| `3T1`..`3T8` | Top-8 third-place ranking. |
| `W1`..`W16` | R32 winners. |
| `R16W1`..`R16W8` | R16 winners. |
| `QFW1`..`QFW4` | Quarterfinal winners. |
| `SFW1`, `SFW2` | Semifinal winners. |
| `CHAMPION` | Final winner. |

---

## `SQUADS` (squads.js)

```js
const SQUADS = {
  'Argentina': { status: 'tba', gk: [], def: [], mid: [], att: [] },
  'Brazil': {
    status: 'official',
    gk:  [{ name, club }, ...],
    def: [{ name, club }, ...],
    mid: [{ name, club }, ...],
    att: [{ name, club }, ...],
  },
  // ... 48 keys total
};
```

| Field | Type | Notes |
|---|---|---|
| `status` | `'official' \| 'provisional' \| 'tba'` | Only `official` and `tba` currently in use. |
| `gk`, `def`, `mid`, `att` | `{name, club}[]` | Position groups. Empty when `tba`. |

**Invariants:**
- 48 keys, exact match to `ALL_NATIONS[].name`.
- Player names + clubs are strings; no nulls.
- Total players per nation ≤ 26 (FIFA roster cap).

---

## `FIFA_RANK` (line 1773)

```js
{ 'Argentina': 1, 'France': 2, 'Spain': 3, ..., 'New Zealand': 87 }
```

Manual snapshot, ~May 2026. Lookup falls back to 30 for missing keys. Used only in Destiny "Realistic" projection.

---

## Destiny state (line 1788)

```js
let DESTINY_ON = false;
let DESTINY_PLAYER = null;          // string | null
let DESTINY_PROJECTION = 'ceiling'; // 'ceiling' | 'realistic'
```

---

## `NATION_OPEN` (line 2243)

```js
let NATION_OPEN = new Set();
```

Nation names currently expanded in Nations tab. Lost on reload.

---

## Constants

| Name | Value | Location |
|---|---|---|
| `PTS_WIN` | `3` | line 1218 |
| `PTS_DRAW` | `1` | line 1218 |
| `OFFSEASON` | `true` | line 1046 |
| `MOCK_MODE` | `false` | line 1048 |
| `GROUP_DATES` | YYYYMMDD strings, Jun 11–27 | line 1338 |
| `KNOCKOUT_DATES` | YYYYMMDD strings, Jun 28–Jul 19 | line 1338 |
| `ALL_DATES` | `[...GROUP_DATES, ...KNOCKOUT_DATES]` | line 1338 |
