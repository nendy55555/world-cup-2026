# Flag Coverage — Box Score

Every team that shows up in the match strip (the "box score" on the Standings tab) must render a flag. This doc explains how that's guaranteed and how to extend coverage when ESPN starts returning a team name we haven't mapped yet.

## Resolution chain

`flagFor(teamName, fallbackLogo, w)` in `index.html` resolves a team to an `<img src>` by trying, in order:

1. **`getNation(name)`** — exact match in `ALL_NATIONS`. Returns the flagcdn URL we use everywhere else in the app.
2. **`FLAG_CODE_MAP[name]`** — exact (case-insensitive) match against the curated map of every real 2026 WC team plus known ESPN variants. Returns a flagcdn URL.
3. **`FLAG_CODE_MAP` substring match** — handles things like `Republic of Korea` matching `South Korea`.
4. **TBD-slot placeholder** — names like `Group A Winner`, `Round of 32 1 Winner`, `Quarterfinal 3 Winner`, `Semifinal 2 Winner`, `Third Place Group A/B/C/D/F` resolve to a dashed-border placeholder SVG so the card still has a flag-shaped slot.
5. **ESPN's own `team.logo`** — fetchESPN passes this through as `g.homeLogo` / `g.awayLogo`. Used only when nothing above hits.
6. **`?` placeholder + console.warn** — last resort. `_logUnknownTeams()` runs after every fetch and logs any team that fell through, so we know to extend `FLAG_CODE_MAP`.

The `<img onerror>` is also wired to swap to the placeholder if the chosen URL 404s.

## To add a team

1. Watch the browser console after refresh for `[flag-coverage] No flag mapping for: [...]`.
2. Open `index.html`, find the `FLAG_CODE_MAP` constant (search for `BOX SCORE FLAG COVERAGE`).
3. Append `'ESPN Display Name':'isocode'` — match the case ESPN uses.
4. `isocode` is the flagcdn slug. Usually ISO 3166-1 alpha-2 lowercase (`dz`, `cv`, `qa`, `tn`, `ba`, `cz`, `gh`, `ht`, `no`, `se`, `cw`). UK sub-regions use `gb-eng`, `gb-sct`, `gb-wls`, `gb-nir`.
5. Reload — the warn should disappear and the flag should render.

If flagcdn doesn't have a slug for an obscure code, the ESPN logo fallback (`team.logo`) will still render a country crest so the card stays balanced. No code change needed for that path.

## Why this is robust

- The match strip is the only place a "random" team name from ESPN flows into the UI; everything else uses `DRAFT` or `ALL_NATIONS`, both of which are local data.
- `_logUnknownTeams()` is a *runtime* self-check — it surfaces gaps the moment they appear, instead of failing silently with a blank flag slot.
- The placeholder SVG is a data-URL so it works offline and doesn't add a network round-trip.

## Audit log

- **2026-05-22:** Initial coverage built. Pulled all 33 scheduled WC dates from ESPN, dumped every unique team displayName (104 total — 48 real teams + 56 TBD bracket slots). Added 12 real qualifiers missing from `ALL_NATIONS` (Algeria, Bosnia-Herzegovina, Cape Verde, Curacao, Czechia, Ghana, Haiti, Norway, Qatar, Scotland, Sweden, Tunisia) and 3 ESPN name variants (`Türkiye`, `Congo DR`, `United States`) to `FLAG_CODE_MAP`. TBD slots now render the dashed placeholder.
