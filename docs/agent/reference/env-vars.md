# Env Vars & Config Flags

No `.env` file. All configuration lives as module-level constants in `index.html`. Edit and reload.

## Flags

| Constant | Location | Type | Default | Effect |
|---|---|---|---|---|
| `OFFSEASON` | line 1046 | `boolean` | `true` | When true, `fetchESPN()` early-returns and `scheduleRefresh()` is skipped. Set to `false` once tournament starts (Jun 11, 2026). |
| `MOCK_MODE` | line 1048 | `boolean` | `false` | When true, overrides `OFFSEASON` and uses hardcoded `getMockGames()` (9 fake matches) for UI testing. |
| `PTS_WIN` | line 1218 | `number` | `3` | Points per win. |
| `PTS_DRAW` | line 1218 | `number` | `1` | Points per draw. |

## Endpoints

| Constant | Location | Value |
|---|---|---|
| `ESPN_SB` | line 1334 | `https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard` |
| `ESPN_SUM` | line 1335 | `https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/summary` (declared, unused) |

## Date arrays

| Constant | Location | Value |
|---|---|---|
| `GROUP_DATES` | line 1338 | YYYYMMDD strings, Jun 11–27, 2026 |
| `KNOCKOUT_DATES` | line 1338 | YYYYMMDD strings, Jun 28–Jul 19, 2026 |
| `ALL_DATES` | line 1338 | concatenation |

Update these if FIFA shifts the calendar.

## Tournament cutover

When tournament starts:
1. Set `OFFSEASON = false`.
2. Confirm `MOCK_MODE = false`.
3. Confirm `ALL_DATES` covers all match days.
4. Commit + push.

## External assets (no config, hardcoded URLs)

- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:...&family=JetBrains+Mono:...`
- Flag images: `https://flagcdn.com/w{40|80|20}/{code}.png`

If either CDN goes down, the page degrades but stays usable (system font fallback, missing flag images).
