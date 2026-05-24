/**
 * World Cup Boyz — service worker
 *
 * Strategy:
 *   • HTML (index.html, /, ?league=…)      → network-first, fall back to cache.
 *     Reason: when we ship a deploy, users must see the new bundle on next reload.
 *   • Static co-deployed assets (squads.js, icons, manifest) → stale-while-revalidate.
 *     Reason: rare changes; instant load + background update.
 *   • External assets (fonts, flagcdn)     → cache-first (immutable enough).
 *   • ESPN API + Supabase API/Realtime     → BYPASS the SW entirely.
 *     Reason: live data must always hit the network; SW must not break websockets.
 *
 * Bump CACHE_VERSION on any breaking SW change to evict old caches.
 */

const CACHE_VERSION  = 'wcb-v1-2026-05-22';
const STATIC_CACHE   = `${CACHE_VERSION}-static`;
const EXTERNAL_CACHE = `${CACHE_VERSION}-external`;

// Files to precache on install — keeps the app shell installable.
const PRECACHE = [
  './',
  './index.html',
  './squads.js',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon-32.png',
];

// Hosts where realtime/live data lives — never cache, never intercept.
const BYPASS_HOSTS = [
  'site.api.espn.com',
  'api.espn.com',
  'cdn.espn.com',
  'a.espncdn.com',
  '.supabase.co',
  '.supabase.in',
];

// External hosts whose responses we CAN cache (immutable URLs).
const CACHEABLE_EXTERNAL_HOSTS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'flagcdn.com',
  'esm.sh',          // versioned ESM modules (e.g. @supabase/supabase-js@2)
];

function isBypass(url) {
  return BYPASS_HOSTS.some(h => url.hostname === h || url.hostname.endsWith(h));
}
function isCacheableExternal(url) {
  return CACHEABLE_EXTERNAL_HOSTS.some(h => url.hostname === h || url.hostname.endsWith(h));
}
function isSameOrigin(url) {
  return url.origin === self.location.origin;
}
function isHtmlRequest(request) {
  if (request.mode === 'navigate') return true;
  const accept = request.headers.get('accept') || '';
  return accept.includes('text/html');
}

// ── INSTALL: precache the app shell ──────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: drop stale caches from previous versions ───────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter(k => !k.startsWith(CACHE_VERSION)).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── FETCH: route by URL ──────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle GETs. Anything else (Supabase POST/PATCH, ESPN preflight, etc.) → passthrough.
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch (_) { return; }

  // Skip non-http(s) (chrome-extension, data:, etc.)
  if (!url.protocol.startsWith('http')) return;

  // Live data hosts → bypass entirely
  if (isBypass(url)) return;

  // ── HTML / navigation → network-first ──────────────────────────────
  if (isSameOrigin(url) && isHtmlRequest(req)) {
    event.respondWith(networkFirst(req, STATIC_CACHE));
    return;
  }

  // ── Same-origin static assets → stale-while-revalidate ─────────────
  if (isSameOrigin(url)) {
    event.respondWith(staleWhileRevalidate(req, STATIC_CACHE));
    return;
  }

  // ── Cacheable external assets (fonts, flags) → cache-first ─────────
  if (isCacheableExternal(url)) {
    event.respondWith(cacheFirst(req, EXTERNAL_CACHE));
    return;
  }

  // Everything else → passthrough (don't intercept)
});

// ── STRATEGIES ───────────────────────────────────────────────────────

async function networkFirst(req, cacheName) {
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.ok) {
      const cache = await caches.open(cacheName);
      cache.put(req, fresh.clone()).catch(()=>{});
    }
    return fresh;
  } catch (_) {
    const cached = await caches.match(req, { ignoreSearch: true });
    if (cached) return cached;
    // Last resort: hand back the cached app shell so the UI still loads offline.
    const shell = await caches.match('./index.html');
    if (shell) return shell;
    throw _;
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  const network = fetch(req).then((res) => {
    if (res && res.ok) cache.put(req, res.clone()).catch(()=>{});
    return res;
  }).catch(() => null);
  return cached || network || fetch(req);
}

async function cacheFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  if (cached) return cached;
  const res = await fetch(req);
  if (res && res.ok) cache.put(req, res.clone()).catch(()=>{});
  return res;
}

// ── MESSAGE: allow the page to force-update ──────────────────────────
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
