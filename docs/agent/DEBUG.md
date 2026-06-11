# DEBUG

Read this first when something breaks. One hypothesis → one change → one verification.

## Error → layer routing

| Error pattern | Layer | First file to open |
|---|---|---|
| `ReferenceError: renderDraft is not defined` | Render / Draft Room | `index.html` ~line 1475 (switchTab call) and `#draftRoot` placeholder ~line 998 |
| Nation missing flag / blank flag | Data — code mismatch | `ALL_NATIONS` (~line 1053), confirm `code` field; check flagcdn URL pattern |
| Player has wrong color | Data — `ci` index | `DRAFT[player].ci` should be 0–5, matching `COLORS` array order |
| Leaderboard points wrong | Scoring | `getPlayerPoints` (~line 1228), check `nationPoints[name]` for each of the 8 |
| Game not appearing in ticker | Fetch | `fetchESPN()` (~line 1399), check ESPN response for that date; `OFFSEASON` flag |
| ESPN name not matching | Normalization | `ESPN_OVERRIDES` (~line 1180), add lowercase → canonical mapping |
| Bracket slot shows "Best 3rd" forever | Bracket resolution | `computeBracketResolved()` (~line 1267); group must have all 6 games complete |
| KO winner stays null after a draw | Shootout data | `koWinner()` (~line 1257) needs `g.shootoutWinner` — `fetchESPN` doesn't set it |
| Nation appears in two draft cards | Data integrity | Search `DRAFT` for duplicate name across `nations[]` arrays |
| Tab click does nothing | UI | `switchTab` (~line 1468); verify `data-tab` attribute on button |
| Destiny stats blank | Destiny | `computePlayerDestiny()` (~line 1900-ish in Destiny module); requires `DESTINY_PLAYER` set |

## Known failure patterns

### `renderDraft is not defined`

- **Trigger:** Clicking the "Draft Room" tab.
- **Root cause:** `switchTab('draft', ...)` calls `renderDraft()` which is not implemented. CSS for `.dr-*` exists; JS does not.
- **Workaround until built:** Comment out the `renderDraft()` call in `switchTab` (~line 1475) or leave the tab disabled.

### Live game stuck at "FT" but bracket doesn't advance

- **Cause:** Group not complete (need 6 games per group) or KO match ended in draw with no `shootoutWinner` field.
- **Verify:** Inspect `allGames` in console — filter by `round === 'Group X'`, count `status === 'Final'`. If 6 and bracket still wrong, check tiebreaker math in `compareGroupStanding`.

### "Alive" count looks wrong

- **Root cause:** `nationElim` is never populated. `getPlayerAlive` counts `!isElim(name)` which is always true.
- **Fix path:** Populate `nationElim[name] = true` inside `computeBracketResolved()` when a nation:
  - Finishes group play 4th, OR
  - Finishes group play 3rd but not in top-8 third-place, OR
  - Loses a KO match.

### Page loads but leaderboard / chart / cards are hidden

- **Cause:** `applyEmptyStateVisibility()` (~line 2388) hides those sections until `DRAFT_COMPLETE === true`.
- **`DRAFT_COMPLETE` is true** as soon as any player has at least one nation. If all `nations[]` arrays are empty, the empty-state banner shows instead.
- **Workaround for testing:** Temporarily seed one player's `nations[]` with a single test entry.

### Flag broken for England / Scotland / Wales

- **Cause:** flagcdn uses subdivision codes for home nations. England is `gb-eng`, Scotland `gb-sct`, Wales `gb-wls`, Northern Ireland `gb-nir`.
- Only England qualifies for 2026; verify code is `gb-eng` lowercase.

## Console debugging snippets

```js
// Inspect current standings for a group
GROUPS_MAP['A'].map(n => ({
  name: n.name,
  pts: nationPoints[n.name] || 0,
  gd: (nationGF[n.name]||0) - (nationGA[n.name]||0)
})).sort((a,b) => b.pts - a.pts || b.gd - a.gd);

// Which player owns a nation?
findOwner('Brazil');

// Force a render after console changes
render();

// See raw ESPN response for a date
fetch(`${ESPN_SB}?dates=20260611&limit=100`).then(r=>r.json()).then(console.log);
```

## Reset checklist when "everything looks wrong"

1. Hard reload (Cmd+Shift+R) — module-level diff state (`_prevPlayerPts`) doesn't survive.
2. Check `OFFSEASON` and `MOCK_MODE` flags (lines 1046–1048).
3. Confirm `squads.js` loaded — `typeof SQUADS === 'object'` in console.
4. Confirm no nation name typos — `Object.keys(SQUADS).length === 48` should hold.

---

## 2026-06-11 — Mexico opener win not scored (ESPN status + round parsing)

**Symptom:** Mexico beat South Africa 2-0 (tournament opener, FT) but banked 0 points; game rendered as upcoming.

**Root cause (two bugs in `fetchESPN` parse loop, index.html ~3240):**
1. `finished` required `status.type.name === 'STATUS_FINAL'`. ESPN **soccer** returns `STATUS_FULL_TIME` (STATUS_FINAL is US sports). So no soccer game could ever tally.
2. `round` fell back to `ev.name` ("South Africa at Mexico") because `comp.notes` is empty in the live feed. `tallyFinishedGame` routes on the substring "group" → group games would have hit the KNOCKOUT branch (wrong GF/GA buckets, wrong draw scoring).

**Fix:**
1. `finished = status.type.completed === true`; `live = status.type.state === 'in'` (covers 1H/HT/2H/ET/pens; postponed stays not-finished).
2. When notes are empty or look like a matchup (`/\s+at\s+/`), derive round from `ev.season.slug === 'group-stage'` (or GROUP_DATES) → `Group <letter>` via `getNation()`, else `ev.name`.

**Verified:** jsdom harness (`/tmp/debug_test_mexico_points.js`) runs the real page against live ESPN: `{pts:3, wins:1, gf:2, ga:0, gfko:null, round:"Group A"}` → PASS. SW cache bumped v14→v15.

**Pattern:** never trust ESPN `status.type.name` string matching across sports — use `completed` / `state`. Never trust `notes[]` to be populated on the live scoreboard feed.
