# QUICKSTART — World Cup Draft

Single-file static web app tracking a 6-player snake draft of the 48 FIFA 2026 World Cup nations.

## Stack

- **Frontend:** Vanilla HTML/CSS/JS — no framework, no build step, no bundler.
- **Data:** Inline JS object (`DRAFT`, `ALL_NATIONS`) + sibling `squads.js`.
- **External API:** ESPN public soccer scoreboard (no auth).
- **External assets:** Google Fonts (Inter, JetBrains Mono), flagcdn.com.
- **Persistence:** None — all state hardcoded in `index.html`.

## Run locally

```bash
# Just open the file. No server needed.
open "/Users/thomasnendick/Documents/Claude/Projects/World Cup Draft/index.html"

# Or serve via Python if you want fetch() to respect CORS more cleanly:
cd "/Users/thomasnendick/Documents/Claude/Projects/World Cup Draft" && python3 -m http.server 8000
```

## File map

| File | Purpose |
|---|---|
| `index.html` | Everything: styles, markup, app logic (~2,443 lines) |
| `squads.js` | Per-nation player rosters (~1,118 lines) loaded before inline `<script>` |
| `docs/agent/` | This documentation set |

## Task routing — read these before touching code

| Task type | Read first |
|---|---|
| Architecture change / new module | `ARCH.md` |
| Adding a dependency or library | `DECISIONS.md` |
| Deploy / domain / hosting | `DEPLOY.md` |
| Bug fix / debugging | `DEBUG.md` |
| Editing data shape (DRAFT, ALL_NATIONS, SQUADS, games) | `reference/data-models.md` |
| ESPN API / live game parsing | `reference/api-schema.md` |
| Env vars / config flags | `reference/env-vars.md` |
| Testing / QA | `QA.md` + `reference/test-cases.md` |
| Box score flag missing for a team | `reference/flag-coverage.md` |

## Current state snapshot (May 22, 2026)

- **Draft not yet executed** — `DRAFT[*].nations = []` for all 6 players.
- **Tournament not yet started** — `OFFSEASON = true` gates all ESPN fetches.
- **Draft Room tab is broken** — `renderDraft()` referenced but not defined → ReferenceError when tab clicked.
- **No deploy target** — no git remote, no domain.

See `SESSION-STATE.md` for current in-flight work and next priority.

## Players

Thomas, Andrew, Paul, Carson, Rudger, Shaq — color indices 0–5 (orange, blue, green, red, purple, orange-2).

## Scoring

- 3 points per win, 1 point per draw, 0 per loss.
- KO goals deliberately excluded from GF/GA tiebreakers.
- Each player drafts 8 unique nations (48 ÷ 6 = 8). Snake order.
