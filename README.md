# World Cup 2026 — Bracket Boyz Draft Tracker

Live site: **[worldcup.thomasnendick.com](https://worldcup.thomasnendick.com)**

Snake-draft tracker for 6 players splitting the 48 FIFA 2026 World Cup nations. Built as a single static HTML file with live ESPN scoreboard data + Supabase realtime sync for the draft.

## Players

Thomas · Andrew · Paul · Carson · Rudger · Shaq

## Format

- 6 players × 8 nations = 48 nations (the entire World Cup field)
- Snake draft order
- Scoring: 3 pts win, 1 pt draw, 0 pts loss
- Group stage + knockout combined

## Stack

- Vanilla HTML/CSS/JS, single file (`index.html`)
- `squads.js` for per-nation rosters
- ESPN public soccer scoreboard for live games, odds, broadcasts
- flagcdn.com for flags
- Supabase Realtime DB for multiplayer draft sync (room-based)
- GitHub Pages for hosting

## Run locally

```bash
open index.html
# or
python3 -m http.server 8000
```

## Documentation

See [`docs/agent/`](docs/agent/) — `QUICKSTART.md`, `ARCH.md`, `DECISIONS.md`, `DEPLOY.md`, `DEBUG.md`, `SESSION-STATE.md`.

## Sister project

[March Madness Bracket Boyz](https://marchmadness.thomasnendick.com) — same pattern, basketball edition.
