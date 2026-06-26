# SESSION-STATE

_Last updated: 2026-06-18_

## 2026-06-18 — Opta-style lineup tooltip + club crests + first-game XI lock

**Goal:** enlarge the Nations-tab lineup tooltip and give it the Opta look — club crest above each player with name below — and add real club logos for every player. Then base the shown XIs on each team's first played game.

**Tooltip restyle (`index.html` CSS + `lineupTipHtml`):**
- Panel widened 260px→344px, max-height 420→580. The SVG pitch is now an SVG **background** (`.nlt-pitch-wrap` / `.nlt-pitch-bg`, viewBox 230×188, `preserveAspectRatio=none`) with an absolutely-positioned **HTML marker layer** (`.nlt-markers` / `.nlt-mk`) on top, so async-loaded crests can swap in over each position.
- New `pitchPositionsOverlay(formation)` — y range compressed (GK .84, lines .70→.13) vs the old dot-only `pitchPositionsForFormation` (still defined, now unused) so labels stay inside the grass.
- Each starter renders as **crest + surname** on the pitch. The club TEXT label was dropped from the pitch (it overlapped on 4-5-wide lines, verified in-browser); club names live in the roster list below, which now also shows a small crest per row.

**Club crest engine (hybrid — `index.html`, block before `lineupTipHtml`):**
- `clubLogoUrl` / `crestHtml` / `crestImgFail` / `clubInitials` / `clubHue` / `_crestEsc`. squads.js only stores club NAMES, so crests resolve **lazily on hover** (not at bulk render — that would flood the API): `ensureClubLogosFor(nation)` is called from the hover handler in `installLineupTipPositioner`, queues that nation's clubs, `_flushClubLogos` fetches TheSportsDB `searchteams.php` (free key "3"), caches `strBadge+'/small'` in `localStorage['wcb-club-logos-v1']`, then `_paintResolvedCrests()` swaps resolved monograms→`<img>` in place (no full re-render).
- `CLUB_LOGO_ALIASES` is the curated "static" half of the hybrid — maps our squad spellings to TheSportsDB names (Inter→Inter Milan, Brighton and Hove Albion→Brighton, Al Sadd→Al Sadd SC, etc.).
- Robust fallback: unresolved or failed logos render a styled **monogram** disc (club initials, hue-hashed). Feature never looks broken even if the API is unreachable.
- `data-nation` added to `.nation-card-hdr` so the hover handler knows which nation to resolve.

**First-game XI lock (`refreshActualLineups`):** ingestion now keeps each nation's **earliest** kickoff XI (`kt < prev.kickoffMs`) instead of the latest, per "starting squads based on their first game." Cache key bumped `wcb-actual-xi-v1`→`v2` so it re-ingests from ESPN. Teams not yet played keep their `PROJECTED_LINEUPS`.

**Verified in real browser (Claude-in-Chrome, example.com sandbox):** injected the actual functions + CSS, rendered Netherlands 4-3-3. Confirmed: (1) TheSportsDB fetch succeeds with CORS + key "3"; all test clubs incl. aliased ones resolve a badge; (2) crests paint on pitch AND roster (Liverpool, Inter, Barça, City, Spurs, Brighton, Corinthians, Aston Villa); (3) `/small` badge variant loads; (4) after dropping the pitch club label, no overlap on the back line. Screenshot reviewed.

**Constraints this session:** workspace shell was down (disk space) and server-side web_fetch strips query params through TheSportsDB's redirect, so I could NOT pre-bake badge URLs into a static map or fetch 48 real first-match XIs from the sandbox. The crest engine resolves live in the browser instead (cached after first hover); first-game XIs populate via the existing in-browser ESPN pipeline. Pre-baking a static `CLUB_LOGOS` map + hard-baking first-match XIs into squads.js are good follow-ups for when the shell/network is available.

**Not changed:** mobile still hides the tooltip (`@media max-width:720px`) — hover-only feature; a tap-to-open mobile variant is a possible next step.

**PUSH PENDING:** sandbox has no GitHub creds — Thomas must `git push` from his Mac. Also bump `sw.js` CACHE_VERSION on next deploy so clients pick up the new build.

## 2026-06-12 — FIX: random flags missing (Iraq, Norway…) + tile sort

**Missing flags root cause (2 compounding bugs):** (1) sw.js `cacheFirst` only cached `res.ok` responses, but cross-origin `<img>` fetches are no-cors → opaque (status 0, ok=false), so flagcdn images were NEVER cached and every render re-hit the network; (2) inline `onerror="this.style.opacity='.15'"` permanently dimmed a flag on a single transient failure. Codes verified correct (iq/no/cw/ht all 200 on flagcdn).
**Fix:** `cacheFirst` now also caches `res.type==='opaque'`; SW v18→v19. All 6 inline onerror handlers replaced with `flagRetry(img)` (index.html, defined next to `flag()`): retry 1 = same URL after 700ms, retry 2 = w80 variant, then dim. Node harness: ALL PASS (retry escalation + sw assertions), `node --check sw.js` clean.

**Tile sort (same session, earlier):** standings nation chips + mobile flag strip now sort by `getTeamPointsLive` DESC, eliminated last, stable ties (draft order). `sortedNations` in `renderLeaderboard`.

**Needs push** (sandbox can't write .git): commit index.html, sw.js, docs.

## 2026-06-11 — Live refresh audit + foreground catch-up

Verified end-to-end (jsdom, 7/7): boot arms 30s/120s poll loop, standings re-render each cycle with live provisional points, SW never caches ESPN. Patched the one gap: `visibilitychange` foreground catch-up (mobile timers freeze in background; now refetches on return if data >25s old). `sw.js` v15→v16. Details in DEBUG.md.

---

## 2026-06-11 — FIX: live scoring never tallied (first real match day)

Mexico 2-0 South Africa (FT) showed as upcoming, 0 pts. Two bugs in `fetchESPN`: (1) finished-check used `STATUS_FINAL` but ESPN soccer sends `STATUS_FULL_TIME` — now uses `status.type.completed`/`state`; (2) empty `notes[]` made `round` fall back to the matchup string, which would mis-route group games to KO scoring — now derives `Group <X>` from `season.slug`/GROUP_DATES. Verified with jsdom harness against live ESPN (PASS: 3 pts, Group A, group GF/GA buckets). `sw.js` v14→v15. Details in DEBUG.md.

---

## 2026-06-08 — Daily Recap Digest (Standings)

**Goal:** auto-posted "what happened yesterday" card at the top of Standings — biggest point movers, eliminations, lead changes — hideable, matching the warm-forest aesthetic. Plus a scheduled morning push.

**Card (`index.html`):**
- New `#recapCard` slot is the first child of `#tab-standings` (above the draft-pending banner). Stays `display:none` until finished games exist, so it's invisible pre-kickoff and pre-draft.
- `buildDailyRecap()` finds the most-recent local calendar day with a finished game, then diffs standings **entering** vs **after** that day. Diff is derived purely from finished games (no persisted snapshots): `_standingsAsOf(cutoffMs)` saves the live nation maps, replays `tallyFinishedGame` over games with `kickoff < cutoff`, runs `computeBracketResolved()` for the elim set at that cutoff, reads per-player pts/GD, then **restores** all globals. Single-source-of-truth scoring + elimination, no logic duplication.
- Surfaces: biggest movers (player chip + `+N` + nations that played, winners highlighted), eliminations attributed to owners (`findOwner`), lead change (`_leaderOf` before vs after). Headline mimics the spec: "Thomas +6 (Spain, Brazil) · Shaq's France crashed out · new leader Paul."
- **Hideable:** `✕` → `dismissRecap()` stores recap day-key in `wcb-recap-collapsed-v1::<leagueId>` and collapses to a slim "📅 Daily Recap · <date> ▾" pill; `expandRecap()` clears it. Per-day so a NEW game day's recap reappears fresh, reversible in one tap (no dead-end). Hard kill-switch: `const RECAP_ENABLED`.
- CSS `.recap-card` (before `.sec-lbl`): bg3→bg2 gradient, gold→terracotta→wine left rail, Anton title, sage deltas, wine elim strip, gold crown lead line, collapsed-pill variant, reduced-motion-aware entrance.
- `renderDailyRecap()` wired into `render()`, `scheduleRefresh()`, `forceRefresh()` right after `computeBracketResolved()`. `sw.js` v11→v12.

**Verification:** node harness extracted the REAL shipped functions and ran them over 3-day mock games (group + KO crossing the day boundary): 11/11 pass — +6 mover, winning nations flagged, idle player excluded, two owner-attributed eliminations, lead change Thomas→Paul, correct recap day, globals fully restored. Both inline `<script>` blocks still parse.

**Scheduled task `wc-daily-recap`** (daily 08:05 local, `0 8 * * *`): self-contained prompt fetches yesterday's ESPN finals, attributes to owners from `EMBEDDED_DRAFTS`, applies the scoring rules, delivers a punchy recap to Thomas; outputs a single "no matches finished yesterday" line on off-days → covers "every morning in group stage, game days only after." Emits the no-recap line June 8–10 until kickoff.

**Open follow-up:** scheduled digest reaches Thomas in Cowork only (no group push to friends' phones / live-site notification — needs the deferred Supabase edge function + VAPID work).

---

## 2026-06-08 — Live points swing (in-flight scoring)

**Goal:** leaderboard total swings live as goals go in. A nation winning a live game banks a provisional +3 ("if it ended now"); the board re-tallies every poll and animates the change.

**What shipped (index.html + sw.js):**
- `nationPtsLive={}` map (sibling to `nationPoints`). `provisionalPts(my,opp)` = win 3 / draw 1 / loss 0. Populated in the live branch of BOTH `applyMockGames` + `fetchESPN` (reset alongside the other nation* maps).
- Getters: `getTeamPointsLive(n)` = banked + in-play, `getTeamLivePts(n)` = in-play only, `getPlayerPointsLive` / `getPlayerLivePts`.
- **Display layer switched to live points:** leaderboard (sort + `.lbscore` + nation chips), bar chart (totals + segments), draft cards. **Untouched / still finished-only:** `compareGroupStanding`, `computeBracketResolved`, group standings tables, destiny projections — seeding must not be polluted by live games.
- Leaderboard row: new `▲ +N live` pulsing pill (`.lb-live`) on the name row when a player has in-play points; `.lbscore.has-live` tints the total green; live chip pts green via `.nc-pts-live` / `.dteam-pts-live`.
- Swing animation: `_prevPlayerPts` now tracks the LIVE total so a goal that flips a result fires it. Gain → green `.scored` pulse + `vibe([40,30,60])`; loss → red `.scored-down` dip (new `scoreDip` keyframe). `_animateCountUp()` counts the big number up/down over 650ms (easeOutCubic).
- Live refresh cadence 60s→30s while games run (`scheduleRefresh`).
- Empty-state (`applyEmptyStateVisibility`): bar chart now appears once a live game has provisional points, not just finished ones.
- sw.js CACHE_VERSION v10→**v11**-2026-06-08.

**Verified:** all 3 inline `<script>` blocks `node --check` clean; sw.js clean; 10/10 provisional-point unit tests pass (banked+live layering, win/draw/loss, player aggregation, equalizer swing 6→4). Browser smoke test skipped (Playwright not installed locally) — change is additive/display-only.

**Note for KO rounds (June 27+):** a live KO game level at the whistle shows provisional 1 each (`provisionalPts` draw case). Fine for group stage; revisit if you want live KO draws to read differently.

---

## 2026-06-07 — Projected XI refresh (final pre-tournament friendlies)

**Goal:** re-review all 48 `PROJECTED_LINEUPS` in `squads.js` against each team's final pre-WC friendly (June 3-9 window) + beat-writer projected-XI articles, and refresh the team tooltips. WC kicks off June 11.

**Method:** 6 parallel research agents (8 teams each) blended last-friendly XIs with preview articles. Many teams rotated heavily in their last friendly, so those XIs were weighted against previews, not taken literally. Every proposed name validated against the 26-man `SQUADS` roster before writing — names not in-squad were corrected to the squad spelling or reverted to baseline (caught: Qatar Al-Oui→Al-Alawi / Ahmed→Al-Amin, Sweden Filip→Gustaf Lagerbielke + Hugo Larsson→Karlstrom, Jordan Fakhoury→Al-Fakhouri).

**Changed (14 of 48):** Mexico (Vasquez/Fidalgo/Quinones in, Edson Alvarez & S.Gimenez out), Canada (→4-4-2, Laryea/Ali Ahmed), Qatar (→4-3-3, Al-Haydos/Madibo/Hatem out), Brazil (Wesley RB for Danilo), Turkiye (Deniz Gul 9 for Kerem Akturkoglu), Ecuador (Hincapie for Felix Torres), Sweden (→3-4-2-1 under Potter, Nordfeldt GK, Isak+Gyokeres together), Spain (Ferran Torres+Olmo for injured Yamal+Nico Williams), France (Upamecano for injured Saliba), Senegal (Sadio Mane in for Ismaila Sarr), Norway (Heggem for Ostigard), Argentina (Otamendi for Lisandro Martinez), Jordan (Obaid/Abu Taha/Al-Fakhouri), DR Congo (Moutoussamy+Bakambu). **Other 34 re-confirmed unchanged.**

**Flags (low/medium confidence — revisit if news firms up):** Spain (Yamal/N.Williams fitness), France (Saliba may return), Canada (Davies hamstring doubt for opener), Sweden (Potter shape unsettled), Qatar formation, Morocco (new coach Ouahbi, 4-2-3-1 — left at baseline), Ghana (new coach Queiroz trialing 3-4-3 — left at baseline), Haiti/Croatia (thin data — baseline kept).

**Files changed:** `squads.js` (14 XIs + `PROJECTED_LINEUPS_UPDATED='2026-06-07'` const), `sw.js` (CACHE_VERSION v5→v6). Validation: all 48 pass `projectedXI()` with 11 in-squad players, no dupes.

**Next session start:** if more June friendlies/team-news land before June 11, re-run the same agent pass; re-examine the baseline-kept flags above. Deploy = push to github.com/nendy55555/world-cup-2026 (live worldcup.thomasnendick.com).

---

## 2026-05-23 — Mobile-native upgrades pass (latest)

**Goal:** make the app feel native on mobile, not just responsive. Touch gestures, haptics, offline handling, deep-linking, scroll/keyboard polish.

**Eight features shipped, in two chunks.**

### Chunk A — quick wins

1. **Hash routing for tab deep-links** (`switchTab` + `_parseHashParams` + `_writeHashParams` + `applyTabFromHash`)
   - `VALID_TABS = ['standings','draft','bracket','nations']`
   - `switchTab(id, btn, opts)` updates `#tab=<id>` via `history.replaceState` (no back-stack pollution). When called with `{fromHash:true}` it skips the hash write to avoid loops.
   - `applyTabFromHash()` runs on boot + on every `hashchange`. PWA shortcuts in `manifest.webmanifest` (`#tab=draft`, `#tab=standings`) now actually open the right tab.
   - Plays nice with existing `#league=` and `#room=` params (parser preserves all keys).

2. **Haptic feedback** (`vibe(pattern)`)
   - `navigator.vibrate` wrapper. No-op on iOS Safari (no Web Vibration API), works on Android Chrome.
   - Patterns: pick made `[40,30,60]`, **draft complete** `[60,40,60,40,120]` (celebration), undo `[20,30,20]`, nation tap `[8]`, tab switch `[8]`, pull-to-refresh trigger `[15,25,15]`.
   - `HAPTICS_KEY = 'wcb-haptics-enabled'` localStorage flag (default on). `setHapticsEnabled(false)` to disable — no UI toggle yet.

3. **Offline / online detection** (`initOfflineDetection` + `.offline-banner`)
   - Fixed pill at top-center. Red gradient when offline ("Offline · scores paused"), brief green pulse on reconnect ("Back online ✓"), then hides.
   - On `online` event during live tournament (`!OFFSEASON`), auto-fires `forceRefresh()`.
   - Pure dynamic — banner is created on first call, no markup to maintain.

4. **iOS scroll polish + `prefers-reduced-motion`**
   - `overscroll-behavior:contain` on `.dboard-wrap`, `.bracket-wrap`, `.ticker-scroll`, `.avail-grid`, `.recent-list`, `.dr-order-list` (no nested rubber-band).
   - `overscroll-behavior-y:contain` on `body` (no whole-page bounce hiding the bottom tab nav).
   - `@media (prefers-reduced-motion: reduce)` block: cuts animation durations to 0.001ms, explicitly kills the busy infinite ones (`hdr-icon`, `otc-banner.live`, `bteam.live`, `lbrow.lead`, `mp-bar-dot`, `dboard-otc-dot`, `tcard.live`).

### Chunk B — bigger features

5. **Swipe between tabs** (`initSwipeNav`)
   - Touch-only (gated on `'ontouchstart' in window`). touchstart on `.main`, touchend computes delta. Threshold: ≥60px horizontal, ≤45px vertical drift, ≤500ms duration.
   - Wraps around: swipe left on Nations → Standings. Swipe right on Standings → Nations.
   - Bails on elements with their own horizontal scroll (`.dboard-wrap`, `.bracket-wrap`, `.ticker-scroll`, `.dr-order-list`) and on form controls — so swiping inside the draft board scrolls the board, not the tabs.
   - New CSS: `.tab-pane.swipe-in-from-right` / `.swipe-in-from-left` keyframe slide-in for the new pane.

6. **Pull-to-refresh** (`initPullToRefresh`)
   - Only fires when `scrollY ≤ 1`, `!OFFSEASON`, and not already refreshing.
   - Damped (`dy * 0.55`) so it feels rubbery. Threshold 80px → "Release to refresh" → spinner → `forceRefresh()` → 600ms grace before hiding.
   - Indicator is a fixed pill at top, dark gradient when pulling, green with spinner when refreshing.
   - Haptic buzz `[15,25,15]` when user crosses threshold and releases.

7. **Keyboard handling** (`initKeyboardHandling`)
   - Adds mobile-keyboard hints to all `.avail-search` and `.dr-name-input`: `inputmode`, `autocomplete=off`, `autocorrect=off`, `autocapitalize`, `spellcheck=false`, `enterkeyhint` (search/done).
   - On `focusin` of any input/textarea/select, uses `visualViewport` API to detect if the focused element is hidden by the iOS keyboard. If so, scrolls it 80px above the keyboard edge.
   - Re-runs after every `renderDraft()` so dynamically-rendered inputs pick up the attrs.

8. **Bracket + Nations tab — mobile pass** (CSS only, scoped to `@media(max-width:640px)`)
   - Bracket: `min-width:900px → 680px`, smaller fonts (`.bteam` `.6rem`, `.bflag` 14×10), edge fade mask on `.bracket-wrap`, negative-margin bleed under page padding.
   - Groups grid: forced to 1 column on small phones (was `repeat(auto-fill,minmax(155px,1fr))`).
   - Nation card open view: tighter padding, smaller squad pos badges (22×16, .5rem).

### Boot order (DOMContentLoaded)

```
initOfflineDetection()    // banner element + online/offline listeners
initDraftOnBoot()
await initMultiplayerOnBoot()
updateHeaderForLeague()
updateLeagueSwitcherActive()
await render()
applyTabFromHash()        // honor #tab= on first paint
initSwipeNav()            // touch listeners on .main
initPullToRefresh()       // doc-level touch listeners
initKeyboardHandling()    // input attr decoration + focusin handler
setupReveal()
if(!OFFSEASON) scheduleRefresh()
```

### Verified

- 3 inline `<script>` blocks parse (`new Function(code)` for each).
- CSS braces balance: 860/860 in main style block.
- `sw.js` passes `node --check`.
- All 7 new top-level functions present and unique in the file.

### What I didn't ship

- **Push notifications** ("your turn to pick"): needs Supabase edge function + VAPID keys + permission flow. ~half-day lift. Worth doing before tournament if MP usage takes off.
- **Portrait orientation lock during active draft**: decided against — locks frustrate users more than help. iOS doesn't honor `screen.orientation.lock()` in standalone PWAs anyway.
- **Haptics toggle UI**: localStorage flag exists, just no settings screen.
- **Pull-to-refresh per-tab**: currently doc-level (fires on every tab when scrolled to top). Works fine but a Bracket-specific or Standings-specific variant would be tighter.

## 2026-05-23 — Polish batch: pitch diagram, elim derivation, kickoff countdown

**4-chunk polish pass shipped:**

1. **Deploy audit.** Git remote `nendy55555/world-cup-2026` has only the initial commit (`f9579b3`). All local work — multi-league, Supabase rewire, PWA assets, projected XI tooltip, the changes from this session — is committed locally but **not pushed**. Bash sandbox can't auth to GitHub from here, so user needs to `git push origin main` from their own Terminal. DNS at `worldcup.thomasnendick.com` also unresolved (no CNAME at registrar yet).
2. **`nationElim` derivation populated.** Inside `computeBracketResolved()`: position-4 of any completed group → eliminated; once all 12 groups close, bottom 4 of the 12 third-placed teams → eliminated; knockout losers (incl. shootouts via `g.shootoutWinner`) → eliminated. Detects "group complete" by checking each team in the group has 3 finished matches. Becomes critical Jun 27 (R32 kickoff).
3. **2D pitch diagram in lineup tooltip.** `pitchPositionsForFormation()` maps any formation string ("4-3-3", "4-2-3-1", "3-4-2-1", "3-5-2", etc.) to 11 (x,y) unit-coord positions; first slot is GK, then back-line to front-line. SVG pitch with grass gradient + mowing stripes + boxes + center circle, player dots colored by line (GK gold, DEF red, MID blue, FWD red), surnames stroked under each dot. `lineLastName()` handles "Vinicius Junior" → "Vinicius", "Mac Allister" → "Allister", etc. Tooltip width bumped to 260px to fit cleanly.
4. **Kickoff countdown.** Live ticker in the draft-pending banner counting down to `2026-06-11T16:00:00Z`. Renders 4 monospace cells (D/H/M/S) with gold-on-navy chrome matching the existing "Kicks Off" pill. Self-stops at zero, flips to a pulsing "⚽ Tournament Live" pill. Hooked into both `render()` and the post-state-restore visibility pass; timer cleared when banner hides post-draft.

## 2026-05-22 — PWA install support

**Goal:** make the site installable to home screen on iOS/Android so it launches full-screen like a native app, with offline-friendly asset caching.

**New files at repo root:**

- `manifest.webmanifest` — name "World Cup Boyz — FIFA 2026", short_name "WC Boyz", `display:standalone`, `orientation:portrait`, theme/bg `#061a0e` (pitch). Icons: 192, 512 (both `any` + `maskable`), and the SVG source. Two app shortcuts: "Draft Room" (`#tab=draft`) and "Standings" (`#tab=standings`) — long-press on Android home icon to access.
- `sw.js` — versioned cache (`wcb-v1-2026-05-22`). Routing:
  - HTML / navigation → **network-first** (so deploys ship to users on next reload, never stale).
  - Same-origin static (squads.js, icons, manifest) → **stale-while-revalidate**.
  - `fonts.googleapis.com` / `fonts.gstatic.com` / `flagcdn.com` / `esm.sh` → **cache-first**.
  - `.supabase.co` / `.supabase.in` / `*.espn.com` / `*.espncdn.com` → **bypass entirely** (live data must hit network; SW must not interfere with Supabase realtime websockets).
  - Non-GET methods (Supabase POST/PATCH, ESPN preflight) → passthrough.
  - Offline fallback: if HTML fetch fails, serves cached `index.html` shell.
- `icon.svg` — original source (Trionda-style ball: red/green/blue blades, white sphere, FIFA center mark, on rounded green pitch background).
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` (180×180), `favicon-32.png` — rasterized via cairosvg from icon.svg.

**`index.html` changes:**

- Head: added `<link rel="manifest">`, `<link rel="icon">` (SVG + PNG fallbacks), `<link rel="apple-touch-icon">`, `<meta name="apple-mobile-web-app-title" content="WC Boyz">`.
- Body bottom: new `<script>` block that registers `sw.js` (scope `./`), guarded by `'serviceWorker' in navigator` + https-or-localhost check (so `file://` and HTTP dev don't choke). Auto-promotes new SW versions and reloads once when the new SW takes control — users get the latest build on first reload after deploy without manual cache clear.

**Multi-league compatibility:**

- `start_url` is `./index.html` (no hash). The app's existing league-resolution order (`#league=` → `localStorage` → `'main'`) handles the install flow correctly: if user installed from `#league=squad`, their localStorage preference carries over.
- Shortcuts use `#tab=draft` / `#tab=standings`. **Caveat:** the existing tab system uses `switchTab()` on click; if `#tab=` hash routing isn't wired up yet, shortcuts will just open the default tab. Low priority follow-up.

**Verified:**
- `node --check sw.js` → OK.
- All 3 inline `<script>` blocks parse cleanly.
- `manifest.webmanifest` is valid JSON.
- Local `python3 -m http.server` serves all 9 new files with 200 status.
- SW manually traced: BYPASS_HOSTS suffix-match correctly catches `gyqbvnxybnjaxjqecqud.supabase.co` and `site.api.espn.com`.

**How to install on phone (test instructions):**

1. iPhone Safari: load `worldcup.thomasnendick.com` → tap Share → "Add to Home Screen". Icon = soccer ball on green pitch.
2. Android Chrome: a prompt should appear after one visit; otherwise menu → "Install app".

**Deferred:**
- Hash-routing for `#tab=draft` shortcut deep-link (manifest already declares them — `switchTab()` just needs to read `location.hash` on load).
- Offline UI affordance (toast: "you're offline, scores will resume when reconnected"). Right now the page just shows stale data with no signal.
- Push notifications (e.g. "your turn to pick"). Big lift; would need Supabase edge function + VAPID keys.

## 2026-05-22 — Projected XI hover tooltip

- **`PROJECTED_LINEUPS` in `squads.js`** — formation + 11 positional starters for all 48 qualified nations. Sources: BBC, The Athletic, ESPN, Goal, Reuters, federation press, recent friendlies (Mar/Jun 2026 windows), AFCON 2025. Compiled by three parallel research agents split by confederation.
- **`projectedXI(name)` helper** — buckets the XI into GK/DEF/MID/FWD. For 4-part formations (4-2-3-1, 3-4-2-1) the last two parts are grouped as FWD so wide attackers display under "Forwards" instead of "Midfield." Enriches each player with their club from `SQUADS` where available.
- **`lineupTipHtml(name)` + CSS in `index.html`** — absolute-positioned tooltip rendered into every `.nation-card`, shown on `:hover` when card is not `.open`. Bottom-row cards flip above via `:nth-last-child(-n+4)`. Suppressed on touch-only devices (`@media (hover:none)`). Click-to-expand still works for the full squad view.

## 2026-05-22 — Multi-League Support

Added a second draft on the same single-page app. Two leagues coexist with full state isolation.

- **`LEAGUES` config** (top of script, just after `COLORS`): single source of truth. `main` = 6×8 (Thomas, Andrew, Paul, Carson, Rudger, Shaq). `squad` = 4×12 (Thomas, Tiny, TyoungIII, doyersbeast). Both leagues consume the same 48-team `ALL_NATIONS` pool.
- **Active league resolution** on boot: `#league=<id>` (URL hash) → `localStorage[LEAGUE_KEY]` → `DEFAULT_LEAGUE_ID` ('main').
- **Storage namespacing:** `_keyDraftStore()`, `_keyPickingAs()`, `_keyClaimedName()` → keys like `wcb-draft-v1::main` and `wcb-draft-v1::squad`. One-time migration runs at script load: legacy `wcb-draft-v1` → `wcb-draft-v1::main` (idempotent, only writes if the scoped key is empty).
- **`DRAFT_ROUNDS` and `DEFAULT_NAMES` are now `let`**, reassigned by `applyLeagueGlobals()` on every league switch.
- **`switchLeague(id)`:** disconnects any open MP room (rooms are scoped per-league), strips `room=` from hash, swaps `currentLeagueId`, rewrites hash via `_setHashParam`, reloads draft state, refreshes header chrome + all tracker views.
- **Header switcher:** `.league-pill-group` with two pills (OG6 · 6×8 / Squad · 4×12) — pill style matches the FIFA red/blue gradient when active. CSS lives next to `.hdr-badges` rules. Mobile-tuned at 680px.
- **Hash format:** `#league=<id>&d=<base64>` and `#league=<id>&room=<id>` (league always pinned). `mpRoomUrl` and `copyShareLink` updated. `hashchange` listener triggers `switchLeague` on back/forward navigation.
- **Helper extracted:** `_gatherSetupNames()` replaces three duplicate `for(let i=0; i<6; i++)` loops in `commitStartDraft` / `randomizeOrder` / `mpStartLiveRoom`. Loop bound is now `DEFAULT_NAMES.length`.
- **COLORS extended to 8 slots** to leave headroom for future league sizes.
- **Verified:** `node --check` passes on the extracted inline JS; a logic harness confirmed legacy-key migration, league switching, state isolation between leagues, and round-trip persistence (switch out → switch back → picks intact).

## Completed earlier this session

- **Git initialized + first commit.** Repo lives at `nendy55555/world-cup-2026` (public). README, CNAME, .gitignore added.
- **Supabase project created (`world-cup-2026`).** Schema deployed: `rooms(id, state, host_browser_id, claimed_names, updated_at)` with bump-updated_at trigger, open RLS policies (anyone can select/insert/update), and `supabase_realtime` publication includes the table.
- **Multiplayer sync rewired Firebase → Supabase.** Replaced `FIREBASE_CONFIG` block with `SUPABASE_CONFIG` (creds baked in — publishable key is safe client-side). Replaced `mpLoadFirebase` with `mpLoadSupabase` (ESM dynamic import of `@supabase/supabase-js@2`). Rewrote `mpConnectToRoom`/`mpDisconnect`/`mpPushState`/`mpClaimIdentity`/`mpReleaseIdentity` to use postgrest CRUD + realtime postgres_changes channel filtered on `id=eq.<roomId>`. All UX preserved: buzzer, gold toast, host-only undo/reset, room URL hash, recent-picks feed.
- **Docs updated:** DECISIONS.md (Supabase rationale), DEPLOY.md (Supabase config + GH Pages target), this file.

## In-flight

- **Phase 1 (GitHub Pages + DNS):** repo exists. Needs Pages enabled in repo settings + CNAME at registrar.
- **Phase 4 (pre-tournament cleanup):** not yet started.

## Outstanding for live deploy

1. Repo Settings → Pages → Source `main` / `/ (root)` → Custom domain `worldcup.thomasnendick.com`.
2. DNS at registrar: CNAME `worldcup` → `nendy55555.github.io`.
3. Verify HTTPS provisions (~5 min after DNS propagates).
4. End-to-end test: open `worldcup.thomasnendick.com` on two browsers, start a multiplayer room via `Host Live Multiplayer Draft`, confirm picks sync.

## Unresolved issues (carryover)

2. **`nationElim` never populated.** Object stays `{}` so `isElim()` always returns false; eliminated nations render as alive. Not blocking until group stage ends (Jun 27).
3. ~~No persistence~~ — RESOLVED via Supabase multiplayer.
4. ~~No deploy target~~ — IN PROGRESS (repo exists, pending Pages config + DNS).
5. ~~Draft pool stale~~ — RESOLVED earlier this session.
6. **Stale `wcb-draft-v1` localStorage** may reference dropped nations. Action: each player clear localStorage and re-run draft from the corrected pool.

## Files modified this session

- `index.html` — Firebase → Supabase rewire (~280 lines replaced).
- `README.md` — new.
- `CNAME` — new.
- `.gitignore` — new.
- `docs/agent/DECISIONS.md` — added Supabase rationale.
- `docs/agent/SESSION-STATE.md` — this file.
- `docs/agent/DEPLOY.md` — updated for Supabase + GH Pages target.

## Decisions made this session

- **Hosting:** GitHub Pages mirror of `nendy55555/MMD-2026`. Subdomain `worldcup.thomasnendick.com`.
- **Database:** Supabase (Postgres + Realtime) over Firebase. Single `rooms` table, JSONB state, open RLS for friend-league scope. See DECISIONS.md.
- **Publishable key shipped client-side.** Standard Supabase pattern; access control is enforced by RLS policies (currently open for this app's scope).

## Start next session by

1. **Verify deploy is live** at `worldcup.thomasnendick.com`. If DNS hasn't propagated, run `dig worldcup.thomasnendick.com +short`.
2. **End-to-end multiplayer smoke test** — host a room in one browser, join from another, confirm picks sync within ~500ms.
3. **Phase 4 cleanup** — fix `nationElim` derivation so alive count works once group stage ends.
4. **Squads.js maintenance** — fill the remaining ~18 `tba` nations as final 26-player lists drop (FIFA deadline Jun 4, 2026).

## 2026-06-11 — Go-live fix
- **Bug:** box scores not updating live. Root cause: `OFFSEASON = true` (index.html ~line 2294) made `scheduleRefresh()` early-return, so no auto-polling ever started.
- **Fix:** `OFFSEASON = false`; sw.js CACHE_VERSION → wcb-v14-2026-06-11. Auto-refresh now: 30s when a game is live, 120s otherwise. Pull-to-refresh gate also unblocked.
- **Verified:** node --check on both inline scripts; ESPN scoreboard confirms June 11 slate (MEX 2-0 RSA FT).
- **Commit 8b36aab** also swept in previously uncommitted Daily Recap work from the working tree.
- **PUSH PENDING:** sandbox has no GitHub creds — Thomas must `git push` from Mac.
- **Deploy note (2026-06-11):** commit `8b36aab` could not be pushed from the sandbox (no GitHub creds) — Thomas pushes manually from his Mac. Live site stays on the pre-tournament build until `git push origin main` runs.

- 2026-06-11: Bar chart fixed — segments now striped in each nation's flag colors (NATION_COLORS map + nationBarBg()), heights converted px→% so bars no longer overflow card/section on mobile; mobile chart heights raised (210-230px); "0 trophies" hidden on draft cards (shows only when >0).

- 2026-06-11: Daily Recap now re-renders on league switch (added renderDailyRecap() to refreshTrackerAfterDraftChange). NOTE: change is STAGED but uncommitted — sandbox cannot delete .git/HEAD.lock (mount blocks unlink). On Mac: rm .git/HEAD.lock .git/index.lock, then commit+push.

- 2026-06-11: Actual Starting XI auto-refresh (Nations-tab tooltip). (1) squads.js: MEX/RSA/KOR/CZE PROJECTED_LINEUPS replaced with real Matchday-1 XIs (ESPN summary rosters, positional GK→def→mid→fwd L→R); PROJECTED_LINEUPS_UPDATED='2026-06-11'; projectedXI(nation, override) now accepts an override. (2) index.html: new block before lineupTipHtml — refreshActualLineups() runs at the end of every fetchESPN, fetches summary?event=<id> for played games (once per event, capped 8/cycle), converts rosters via _espnSideToXI (position band+L/R sort into formation rows), maps names to squads.js spelling via _squadNameFor (accent-normalize → last-name → edit-distance≤2 fuzzy for romanization drift e.g. Gi-Hyuk→Ki-hyuk), stores per-nation latest XI in localStorage 'wcb-actual-xi-v1' (global, not league-scoped), re-renders nations pool on change. Tooltip header becomes "Starting XI vs OPP · Jun 11" (.nlt-hdr-sub CSS) when actual XI exists; unplayed teams keep "Projected XI". sw.js → wcb-v17. Verified: node syntax both files, all 48 XIs ⊆ squads + unique 11, converter output for today's 4 teams exactly matches the hand-written squads.js entries.

- 2026-06-12: Andrew/Ronaldopo stuck on "Draft Pending" — he'd opened a stale pre-draft MP room link (#room=k1bdn9, created May 27, 0 picks) and mpApplyRemoteState blindly clobbered the embedded USC draft. Fix 1 (live, no deploy needed): PATCHed rooms.k1bdn9 state in Supabase to the EMBEDDED_DRAFTS.main payload (48 picks) — realtime pushes it to his open tab. RLS has no DELETE policy, so update-in-place instead of delete. Fix 2 (root cause, commit 17c3852): mpApplyRemoteState now ignores any remote room state with fewer picks than the embedded completed draft and restores the embedded board; sw.js v17→v18. Harness 3/3 PASS. PUSH PENDING from Mac.
