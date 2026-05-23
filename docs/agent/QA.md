# QA

Manual checklist. No automated tests exist.

## Smoke test (every change)

1. Open `index.html` in browser.
2. No console errors on load (one expected: `renderDraft is not defined` if Draft Room tab clicked).
3. All four tabs render: Standings, Draft Room (empty), Bracket, Nations.
4. Header pitch SVG renders.
5. Status bar shows "Offseason" (or live state during tournament).

## After editing `DRAFT`

1. Each player's `nations[]` has exactly 8 entries (post-draft) or 0 (pre-draft).
2. No duplicate nation names across players — every nation owned by exactly one drafter.
3. All nation names match `ALL_NATIONS[].name` exactly (case-sensitive). Verify in console:
   ```js
   Object.values(DRAFT).flatMap(p => p.nations).every(n => NATION_MAP[n.toLowerCase()]);
   ```
4. `picks[]` length matches `nations[]` length and contains valid 1–48 integers with no duplicates.
5. Leaderboard renders 6 rows with player colors `pc0`–`pc5`.
6. Draft cards render 6 cards with 8 nation chips each.

## After editing `squads.js`

1. `Object.keys(SQUADS).length === 48`.
2. Every key in SQUADS matches an `ALL_NATIONS[].name`.
3. Every entry has shape `{status, gk[], def[], mid[], att[]}`.
4. Every player has `{name, club}` shape (no nulls, no extra fields).
5. Total per squad ≤ 26 (`squadTotal(SQUADS[name])` ≤ 26).
6. Spot-check 2–3 nations in the Nations tab — click to expand, verify positions render in order GK → DEF → MID → ATT.

## After editing styles

1. Resize browser to 1280, 1024, 768, 600, 400 — no horizontal scrollbars, no broken layouts.
2. Header gradient + pitch watermark visible at all sizes.
3. Tab nav stays sticky on scroll.
4. Score pulse animation runs (force by changing `_prevPlayerPts[player]` in console).

## During tournament (live mode)

1. Set `OFFSEASON = false`, reload.
2. Status bar transitions to "Live" / "Idle" appropriately.
3. Ticker shows live → upcoming → completed in that visual order.
4. Bracket starts filling in after group stage games complete.
5. Refresh button disables for 3s after click.
6. Auto-refresh interval drops to 60s when any game shows `live: true`.

## ESPN response shape sanity

In console:
```js
fetch(`${ESPN_SB}?dates=20260611&limit=100`)
  .then(r => r.json())
  .then(j => j.events.forEach(e => {
    const c = e.competitions[0];
    console.log(c.competitors.map(x => x.team.displayName).join(' vs '));
  }));
```
- If any name doesn't match `ALL_NATIONS`, add it to `ESPN_OVERRIDES`.

## Pre-tournament cutover checklist

- [ ] All 48 squads filled in `squads.js` (no `status:'tba'` remaining).
- [ ] Final draft committed to `DRAFT` literal.
- [ ] `OFFSEASON = false`.
- [ ] `MOCK_MODE = false`.
- [ ] Live deploy URL works on phone (touch targets, mobile breakpoints).
- [ ] Test ESPN endpoint returns data for opening match date (Jun 11, 2026).
