# SESSION-STATE

_Last updated: 2026-05-23_

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
