# RBE WaveLab website — local candidate

English static product/learning site. **Desktop V1.0.0 is published on GitHub; Phase 3B owner approval authorizes the official website deployment.** The runtime stable manifest enables only the exact verified official installer CTA. Actual hosted deployment evidence and timestamps are recorded separately from this source snapshot. The parent root documents are required build inputs. Keep this directory inside its reviewed public-document snapshot. Desktop source is not needed.

## Current PC: exact quick start

Open PowerShell in this `website` directory. `Run-Website.ps1` selects the existing compatible bundled Node on this PC, changes only process-local environment and restores it when done.

```powershell
.\Run-Website.ps1 -Action Install
.\Run-Website.ps1 -Action Dev
```

Open **http://127.0.0.1:4321/RBE-WaveLab/**. Ctrl+C stops the owned preview/dev server. Keep Windows execution/security policies unchanged. A compatible Node may also be passed explicitly with `-NodePath`.

```powershell
.\Run-Website.ps1 -Action Check
.\Run-Website.ps1 -Action Test
.\Run-Website.ps1 -Action Build
.\Run-Website.ps1 -Action Validate
.\Run-Website.ps1 -Action Audit
.\Run-Website.ps1 -Action ReleaseFixtures
.\Run-Website.ps1 -Action BrowserTest
.\Run-Website.ps1 -Action Preview
```

BrowserTest expects the local preview running in another terminal; it uses installed Edge, not a downloaded browser. Playwright outputs go to `.local/`, outside committed source. Run ReleaseFixtures only in an isolated copied fixture because it temporarily changes that copy's manifest and restores it; never use it on the authoritative P1 preparation source. It does not contact or click fake release assets.

## A different permitted computer

Install a security-maintained Node version satisfying `>=22.23.4` from its official source, under that computer's own permissions. The website task did not install a global runtime. The current PC's default Node22.17.0 is too old. Then:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'
$env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD='1'
npm ci
npm run check
npm test
npm run build
npm run validate
npm run audit:delivery
npm run preview
# Separate terminal, with Edge available:
npm run test:browser
```

For the separate root-base fixture, run `npm run test:base-build`.

No tokens, account or remote repository is required to build/read the site. The dependency install needs registry access; the built site's own assets are local. External GitHub/reference links require internet when followed.

## Configuration and ownership

`SITE_URL=https://ahmedrabie-23.github.io`, `BASE_PATH=/RBE-WaveLab` are the defaults. For a later approved custom domain, set its exact origin and `BASE_PATH=/`, rebuild and retest. Do not add CNAME/change DNS now. `src/data/release.json` is the sole website installer-action authority. `src/data/published-release.json` records the actual desktop Release ID/timestamp/assets and real full-download verification; website publication timestamp remains null. `activation-manifest.pending.json` is a non-imported activation proposal with ownerApproved=false: it deliberately cannot be used as an approved stable runtime manifest. Phase 3B approval now authorizes the runtime stable/ownerApproved=true transition after fresh full public asset verification. Preserve the historical pending proposal unchanged; it is not imported. Clearly labeled isolated local fixtures may simulate true to test activation/suspension; they never constitute owner approval. Source maps are disabled. Fonts and media are local; no analytics, cookies or mandatory account.

Generated paths: node_modules, dist, .astro and .local. Preserve the source/parent policy files, lockfile and rights notices. Never run broad recursive cleanup. Inspect free storage before regenerating caches. No system-wide environment changes are required. The runner enables Node's system-CA trust for its own process tree and restores NODE_OPTIONS afterward; it does not disable TLS verification or alter Windows trust/security settings.

## Maintenance

- [Content editing](CONTENT_MAINTENANCE.md)
- [Media replacement](MEDIA_REPLACEMENT.md)
- [Future publication checklist](PUBLICATION_CHECKLIST.md)
- [Website source rights](LICENSE.txt) / [educational expression](CONTENT_RIGHTS.md)
- [Bundled independent notices](public/third-party-notices.txt)

Internal planning, actual test reports and capture evidence are intentionally outside this future public directory. Future deployment is separately authorized, manual, and not triggered by this local build.
