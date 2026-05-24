# DEPLOY

## Current state (2026-05-22)

- Repo: `nendy55555/world-cup-2026` (public, GitHub)
- Hosting: GitHub Pages — pending Pages config + DNS CNAME
- Database: Supabase project `world-cup-2026` (URL: `gyqbvnxybnjaxjqecqud.supabase.co`)
- Domain: `worldcup.thomasnendick.com` (configured in `CNAME` file, awaiting DNS CNAME at registrar)

## Supabase

| Asset | Value |
|---|---|
| Project URL | `https://gyqbvnxybnjaxjqecqud.supabase.co` |
| Publishable key | `sb_publishable_n3MKjp_X9HGPDZpGHJkNaA_PJYVYDb-` (safe client-side) |
| Tables | `rooms` (see `reference/data-models.md`) |
| RLS | Open — anyone can select/insert/update rooms |
| Realtime | Enabled on `rooms` table via `supabase_realtime` publication |

Both Supabase creds are baked into `index.html` in the `SUPABASE_CONFIG` block. The publishable key is designed for client-side use; access control is enforced by RLS policies. To rotate: regenerate in Supabase dashboard → API Keys, replace the value in `SUPABASE_CONFIG`, commit + push.

## Target setup (mirror March Madness)

The sibling March Madness project (`nendy55555/MMD-2026`) is live at `marchmadness.thomasnendick.com`. Replicate that pattern:

| Asset | Suggested value |
|---|---|
| GitHub repo | `nendy55555/world-cup-2026` (or similar) |
| Hosting | GitHub Pages (free, static, custom domain support) |
| Domain | `worldcup.thomasnendick.com` (subdomain CNAME → `nendy55555.github.io`) |
| Branch | `main` deploys directly (no build step) |

## First-time deploy procedure

```bash
cd "/Users/thomasnendick/Documents/Claude/Projects/World Cup Draft"

git init
git add .
git commit -m "Initial commit: FIFA 2026 World Cup draft tracker"

# Create the repo on GitHub (web UI or gh CLI), then:
git remote add origin git@github.com:nendy55555/world-cup-2026.git
git branch -M main
git push -u origin main
```

Then in GitHub repo settings:
1. Settings → Pages → Source: `main` branch, `/ (root)`.
2. Custom domain: `worldcup.thomasnendick.com`.
3. Add a `CNAME` file at repo root with the same value (GH Pages does this for you when you save).

DNS at the registrar:
- Add CNAME record: `worldcup` → `nendy55555.github.io`.
- Wait 5–10 min for propagation, then enforce HTTPS in repo settings.

## Re-deploy procedure (after first setup)

```bash
cd "/Users/thomasnendick/Documents/Claude/Projects/World Cup Draft"
git add -A
git commit -m "<one-line change summary>"
git push
```

GitHub Pages picks up the push and republishes within ~60 seconds.

## Pre-deploy checklist

- [ ] No `console.log` debugging spam in `index.html`.
- [ ] `OFFSEASON` flag set correctly (`true` before Jun 11, 2026; `false` once tournament starts).
- [ ] `MOCK_MODE` set to `false`.
- [ ] All 6 players' `DRAFT[*].nations[]` finalized after draft completes.
- [ ] `squads.js` updated to latest official rosters (FIFA deadline: Jun 4, 2026).
- [ ] Spot-check: open in private window to confirm no localStorage assumption sneaked in.

## Rollback

GitHub Pages serves whatever's at `HEAD` of `main`. To roll back:

```bash
git revert <bad-commit-sha>
git push
```

Or hard-reset and force-push (only if no one else is committing):

```bash
git reset --hard <good-commit-sha>
git push --force
```

## What does not work in production today

- **Draft Room tab** throws ReferenceError. Either build `renderDraft()` before deploy or disable the tab.
- **No persistence**, so a published page can only show the hardcoded `DRAFT`. Edit + commit + push to update picks.
