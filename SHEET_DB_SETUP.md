# Google Sheet DB setup (`someday-db`)

Static-safe backend: the SPA (GitHub Pages) never touches the service account.
It talks to an **Apps Script Web App** bound to your sheet. Offline-first:
localStorage is the source of truth, Sheet is backup + cross-device copy.

Spreadsheet: `1z3mBA_027IG_0txOIn6pquFYMJa7sozO15WNH5XpjZM` (tab `someday-db` is fine —
the script auto-creates its own tabs and leaves yours alone).

## 1. Create tabs ✅ DONE (seeded 2026-09-22, no action needed)

All 8 tabs + styled cyan headers already exist in the sheet (created via service
account, same schema `ensureTabs` would make). Skip to step 3. Re-running
`ensureTabs` later is harmless.

Open the sheet → Extensions → Apps Script → paste `google-apps-script.gs` → Save → Run
`ensureTabs` once (grant permission). It creates:

`profiles | blueprints | contracts | weekly_targets | achievements | life_events`
`+ sync_keys (key vault) + sync_log (audit)`

Data headers: `user_id | id | updated_at | payload`
Keys headers: `key_id | token | active | note`

## 2. Keys ✅ DONE (row `web-1` already in `sync_keys`, active=TRUE)

Your token was handed over in chat — save it in a password manager. To rotate:
edit the `token` cell in `sync_keys` (takes effect within ~5 min, no redeploy).
To add a device: new row `key_id=web-2`, `active=TRUE`.

In tab `sync_keys`, add one row per device/key:

| key_id | token | active | note |
|---|---|---|---|
| web-1 | `<long-random-32+>` | TRUE | main browser |

- Generate: `python3 -c "import secrets; print(secrets.token_urlencoded(32))"`.
- The server reads active tokens from this tab (cached 5 min) + optional
  Script-Property `SYNC_TOKEN` fallback. Revoke anytime: `active=FALSE`.
- Old `action:"init"` endpoint is removed — keys can only be added by a sheet
  editor, never over the public web app URL.

## 3. Secure deploy

Deploy → New deployment → Web app:
- Execute as: **Me** (script uses YOUR sheet access; viewers get nothing extra)
- Who has access: **Anyone with the link** (required so GitHub Pages can fetch —
  the token gate is the real access control, the link is not secret)
- Copy the `/exec` URL. After ANY `.gs` change: Manage deployments → Edit →
  **New version** (else the old code keeps serving).

## 4. Connect the app

Open the app → reality tab → **Cloud Sync — Google Sheet**:
- Paste `/exec` URL + token → Enable → Save → **Sync now**.
- Device ID (`dev-…`) is auto-created in localStorage and sent as `user_id`,
  so multiple browsers share one sheet without overwriting each other.
- Pull runs on load when enabled; pushes are debounced ~2s after every save.
- Conflicts: last-write-wins per row via `updated_at`.

## 5. What I still need from you to finish testing

- [ ] The `/exec` URL + token (paste in the app UI yourself — do NOT commit them)
- [ ] Confirm read/write works (Sync now → check Sheet rows appear)
- [ ] Optional: rename/keep `someday-db` tab — script tabs are separate, no clash

## Security notes

- Hardened server: timing-safe token compare, per-user rate limits
  (60 pulls / 30 pushes per min), request caps (200 rows, 50KB/row),
  strict `user_id` validation, redacted errors (`unauthorized`/`bad request`
  only — tokens and stack traces never echoed), `LockService` on writes,
  append-only `sync_log` audit (auto-trimmed to 1000 rows).
- `gen-lang-client-*.json` (service account) is **NOT used** by this pattern and must
  **never** be committed or pasted into frontend code — it contains a private key.
  It stays in `~/Downloads`, ignored via `.gitignore`. Delete it if you don't need
  direct Sheets API access elsewhere.
- Frontend uses `Content-Type: text/plain` for POST to avoid Apps Script CORS preflight.
  Tokens live only in the user's own browser localStorage + the private sheet.
