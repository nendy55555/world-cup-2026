# ADR Log

Append entries chronologically. Each entry: `## YYYY-MM-DD — Title` then Context / Decision / Consequences.

---

## 2026-05-22 — Initial documentation scaffold

**Context:** Project existed as `index.html` + `squads.js` with no `docs/agent/`. First Cowork session running on this codebase.

**Decision:** Adopt the standard `docs/agent/` structure (QUICKSTART, SESSION-STATE, ARCH, DECISIONS, DEBUG, DEPLOY, QA, reference/, decisions/). Mirror the layout used in other Cowork projects.

**Consequences:** Future sessions start by reading SESSION-STATE + QUICKSTART. Decisions logged here on creation, not retroactively.

---

## 2026-05-22 — Vanilla stack, no build, no backend

**Context:** Single-file tracker for 6 friends, 5-week tournament window.

**Decision:** Stay on vanilla HTML/CSS/JS in one file. No framework, no bundler, no server.

**Consequences:**
- Zero toolchain to maintain.
- No type safety, no tests, no module system.
- Draft state must be hand-edited into `DRAFT` literal until persistence is added.

---

## 2026-05-22 — ESPN scoreboard as live-data source

**Context:** Need free, no-auth match data for the tournament window.

**Decision:** Use `site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard` per-date. Maintain `ESPN_OVERRIDES` table for name normalization.

**Consequences:**
- No quota concerns.
- Schema drift risk if ESPN changes shape — single point of failure in `fetchESPN`.
- Shootout winners not exposed by scoreboard endpoint; `ESPN_SUM` declared but never called.
