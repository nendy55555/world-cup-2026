# API Schema — ESPN Scoreboard

Single external data source. No auth required.

## Endpoint

```
GET https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=YYYYMMDD&limit=100
```

Called per-date from `fetchESPN()` (~line 1399), iterating the last 6 dates from `ALL_DATES` that are ≤ today.

## Declared but unused

```
https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/summary
```

Stored in `ESPN_SUM` constant. Never invoked. Was likely intended to fetch shootout winners and detailed match data — currently `koWinner()` reads `shootoutWinner` but `fetchESPN()` never sets it.

## Response shape (relevant fields only)

```js
{
  events: [
    {
      id: "<string>",
      date: "<ISO string>",
      competitions: [
        {
          competitors: [
            {
              homeAway: "home" | "away",
              score: "<string>",          // ESPN returns score as string
              team: { displayName: "<string>" }
            },
            { /* the other team */ }
          ],
          status: {
            type: {
              name: "STATUS_FINAL"
                  | "STATUS_IN_PROGRESS"
                  | "STATUS_HALFTIME"
                  | "STATUS_EXTRA_TIME"
                  | "STATUS_PENALTY"
                  | "STATUS_SCHEDULED"
            },
            displayClock: "67'"           // when in progress
          },
          notes: [
            { headline: "Group A" | "Round of 16" | etc. }
          ]
        }
      ]
    },
    // ...
  ]
}
```

## Parsing notes

- `competitors[0]` is **not guaranteed** to be the home team — check `homeAway` field.
- `score` is a string; coerce with `Number()` or `parseInt`.
- `notes[0].headline` is how round is identified ("Group A", "Round of 16", "Quarterfinal", "Semifinal", "Final", "3rd Place").
- Status `STATUS_FINAL` triggers points calculation. Anything else is live or upcoming.
- ESPN does not expose shootout winners in this endpoint — KO ties stall the bracket today.

## Name normalization

ESPN team names diverge from our canonical list. Lookup path:
1. `matchNation(espnName)` lowercases input.
2. Checks `ESPN_OVERRIDES[lowercased]` first.
3. Falls back to `NATION_MAP[lowercased]`.
4. Returns `null` if no match — game is skipped.

**Add a new mapping when:** a game appears in ESPN but doesn't show in the ticker. Open dev tools, log raw `team.displayName` values, add lowercase → canonical to `ESPN_OVERRIDES` (~line 1180).

Current overrides (May 2026 snapshot):
- `'united states'` → `'USA'`
- `'korea republic'` → `'South Korea'`
- `'côte d\'ivoire'` → `'Ivory Coast'`
- `'democratic republic of congo'` → `'DR Congo'`
- (more — see code)

## Error handling

Errors are swallowed:

```js
catch (e) { console.warn('ESPN fetch failed:', dateStr, e); }
```

No retry, no UI surface beyond the status bar string. Add proper error display if reliability becomes an issue mid-tournament.

## Rate / quotas

No documented quota. Used by other public consumers without issue. The March Madness sibling project uses the same pattern.

## Refresh cadence

- `OFFSEASON = true` → no fetches.
- During tournament: 60s when any `live: true` game exists, 120s otherwise. See `scheduleRefresh()` (~line 2404).
- Manual refresh button disables for 3s after click.
