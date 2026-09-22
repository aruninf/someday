# someday

Bilingual (Hinglish + English) life-in-weeks + goal-action SPA. Pure static site on GitHub Pages. Life grid, vault, blueprints, sprint timer, weekly goals, future-self contract. Syncs to Google Sheets via Apps Script.

## Quick commands

```bash
python3 -m http.server 8000   # preview on :8000 (CDN scripts need internet)
```

No install / build step. Do not add `package.json`, bundlers, or frameworks.

## Architecture

- **Production** — no backend, pure static SPA on GitHub Pages (`main` branch, `/ (root)`)
- `index.html` — all markup + CDN scripts (Tailwind, Lucide, Tone.js, canvas-confetti). Entry point.
- `app.js` — all logic, globals only (~2000 lines, single file). `index.html` calls functions via inline `onclick="..."`.
- `style.css` — custom CSS (`glass-panel`, `weeks-grid`, `week-square`, tab/timer styles). Inputs/selects overridden with `!important`.
- `google-apps-script.gs` — Google Apps Script for production (token-gated sync proxy + key vault + audit)
- Tab router is `switchTab(id)` in `app.js` with ids: `reality` (life grid), `vault`, `blueprint`, `sprint`, `weekly`, `contract`. Tab sections are `#tab-<id>` with `.tab-content` / `.active` classes.
- `CURATED_VAULT` (8 items) + `TRANSLATIONS` dict are the content source. Vault items are `{en, hi}` objects; default lang is `hi` (`someday_lang`).

## Google Sheets integration

### Production (Apps Script)

Browser POSTs/GETs to a Google Apps Script web app URL (see `SHEET_DB_SETUP.md`):

1. Open the sheet → Extensions > Apps Script → paste `google-apps-script.gs`
2. Run `ensureTabs` once (grant permission) — creates all tabs
3. Add a row in tab `sync_keys`: `key_id=web-1`, `token=<long random 32+>`, `active=TRUE`
4. Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone with the link)
5. Copy Web App URL → paste in the app's Cloud Sync panel (reality tab) + token → Enable → Sync now
6. After ANY `.gs` change: Manage deployments > Edit > New version

Frontend sync layer (offline-first, localStorage stays source of truth):
- Anonymous device ID (`someday_device_id`) sent as `user_id` — multi-browser safe
- Push debounced ~2s after every save (`scheduleSheetPush` hooked into `saveJSON` + `updateLifeGrid`); pull on load when enabled; last-write-wins via `updated_at`
- `Content-Type: text/plain` for POST to avoid Apps Script CORS preflight

### Sheet structure

- **Collection tabs** (one per type): `profiles | blueprints | contracts | weekly_targets | achievements | life_events`
- Headers (4 columns): `user_id | id | updated_at | payload`
- **Key vault**: `sync_keys` with headers `key_id | token | active | note` (server fetches active tokens, cached 5 min; revoke via `active=FALSE`, no redeploy)
- **Audit**: `sync_log` (`timestamp | user_id | action | detail`, auto-trimmed to 1000 rows)
- Styled header row (bold, cyan theme), frozen header

### Security

- Timing-safe token compare, per-user rate limits (60 pulls / 30 pushes per min), request caps (200 rows, 50KB/row), strict `user_id` validation, redacted errors, `LockService` on writes
- Service-account JSON is NEVER used by the app and must stay OFF git (see `.gitignore`)

## i18n

- Static text via `data-i18n` / `data-i18n-placeholder` attributes; dynamic lists re-render on `setLanguage()` (`updateLifeGrid`, `renderVaultItems`, `renderBlueprints`, `renderWeeklyTargets`, `renderPastAchievements`, `updateSprintSelect`)
- If you add UI text, add both `en` + `hi` entries

## Persistence

All `localStorage`, keys in `STORAGE_KEYS` in `app.js`: `someday_blueprints`, `someday_contracts`, `someday_weekly_targets`, `someday_past_achievements`, `someday_life_events`, `someday_birthdate`, `someday_lifespan`, `someday_parent_age`, `someday_visits_year`, `someday_lang` (+ `someday_sheet_url/token/enabled/device_id/last_sync` for Cloud Sync). Seed defaults for weekly targets / achievements exist in code. Handle corrupt JSON gracefully (see `loadJSON`).

## Sprint timer & signature pad

- Sprint timer is `setInterval(1000)` + SVG ring `#timer-progress-ring` (`stroke-dasharray 263.89`); ambient sound uses Tone.js synth, guarded by `isAmbientPlaying`
- Signature pad canvas must be resized when `contract` tab opens (`resizeSignatureCanvas(true)` in `switchTab`) — hidden canvas has zero size

## Testing

No tests / CI by design. Manual checklist (see `CONTRIBUTING.md`):
- Tabs `reality/vault/blueprint/sprint/weekly/contract` all switch; grid renders + tooltip + event modal; vault filter + adopt; blueprint add/toggle; sprint ring; weekly add/complete; contract sign/save
- EN + HI toggle, mobile width, no console errors, icons render
- Sync mock: `node /tmp/sheet-mock-test.js` (not committed)

## Key conventions

- **No ES modules.** Keep functions global (`window.setLanguage = setLanguage` pattern); do not refactor to `import/export`.
- **Keep `updateLifeGrid()` cheap.** Renders `lifespan * 52` divs (default 4160), rebuilds whole grid on input change. Prefer `DocumentFragment`, event delegation, debouncing.
- **After DOM changes call `lucide.createIcons()`** (or `refreshIcons()`) or icons render blank.
- **Icons**: Lucide only. No emoji for UI icons.
- **Deploy**: GitHub Pages from `main`, `/ (root)`. Push to `main` = live at `https://aruninf.github.io/someday/`.
