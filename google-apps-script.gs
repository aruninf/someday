// ============================================================
// Google Apps Script — SOMEDAY Sheet DB (secure sync proxy)
// ============================================================
// SETUP:
// 1. Open your Google Sheet (spreadsheet `someday-db`)
// 2. Extensions > Apps Script > paste this entire script
// 3. Run `ensureTabs` once (grant permission) — creates all tabs below
// 4. Add a row in tab `sync_keys`: key_id=web-1, token=<long random 32+>,
//    active=TRUE (generate: python3 -c "import secrets; print(secrets.token_urlencoded(32))")
//    Optional fallback: Project Settings > Script Properties > SYNC_TOKEN
// 5. Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone with the link)
// 6. Copy the Web App URL → paste in the app's Cloud Sync panel (reality tab)
// 7. After ANY change here: Manage deployments > Edit > New version
//
// KEYS ARE FETCHED FROM THE SHEET (tab `sync_keys`, cached 5 min):
// rotate/revoke without redeploy (active=FALSE). Never commit tokens to git.
// Service-account JSON is NOT used here and must stay OFF git (see .gitignore).
//
// Tabs (auto-created): profiles | blueprints | contracts | weekly_targets |
//   achievements | life_events | sync_keys (key vault) | sync_log (audit)
// Data headers: user_id | id | updated_at | payload
//
// API (Content-Type: text/plain to avoid Apps Script CORS preflight):
//   GET  ?action=health
//   GET  ?action=pull&user_id=DEVICE_UUID&token=KEY
//   POST { token, user_id, type, rows:[...] } or { token, user_id, type:"all", data:{...} }
// ============================================================

const TABS = ['profiles', 'blueprints', 'contracts', 'weekly_targets', 'achievements', 'life_events'];
const HEADERS = ['user_id', 'id', 'updated_at', 'payload'];
const KEYS_TAB = 'sync_keys';
const KEYS_HEADERS = ['key_id', 'token', 'active', 'note'];
const LOG_TAB = 'sync_log';
const LOG_HEADERS = ['timestamp', 'user_id', 'action', 'detail'];
const TOKEN_CACHE_KEY = 'someday_active_tokens_v1';
const TOKEN_CACHE_SECS = 5 * 60;
const MAX_ROWS_PER_REQUEST = 200;
const MAX_PAYLOAD_CHARS = 50 * 1024;
const MAX_ID_CHARS = 128;
const MAX_USER_CHARS = 64;
const RATE_WINDOW_SECS = 60;
const RATE_MAX_PULL = 60;
const RATE_MAX_PUSH = 30;

function ensureTabs() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  TABS.forEach(function (name) { ensureTab_(ss, name, HEADERS); });
  ensureTab_(ss, KEYS_TAB, KEYS_HEADERS);
  ensureTab_(ss, LOG_TAB, LOG_HEADERS);
}

function ensureTab_(ss, name, headers) {
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    styleHeader_(sh, headers);
  } else if (sh.getLastRow() === 0) {
    styleHeader_(sh, headers);
  }
  return sh;
}

// ─── Helpers ─────────────────────────────────────────────────
function styleHeader_(sh, headers) {
  sh.getRange(1, 1, 1, headers.length).setValues([headers]);
  const headerRange = sh.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#083344');
  headerRange.setFontColor('#67E8F6');
  headerRange.setHorizontalAlignment('center');
  sh.setFrozenRows(1);
  for (let i = 1; i <= headers.length; i++) sh.autoResizeColumn(i);
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// --- Keys fetched from the sheet (cached) + Script-Property fallback --------
function fetchActiveTokens_() {
  const tokens = [];
  const primary = PropertiesService.getScriptProperties().getProperty('SYNC_TOKEN') || '';
  if (primary) tokens.push(primary);
  try {
    const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(KEYS_TAB);
    if (sh && sh.getLastRow() >= 2) {
      const vals = sh.getRange(2, 1, sh.getLastRow() - 1, KEYS_HEADERS.length).getValues();
      vals.forEach(function (r) {
        const active = String(r[2]).toUpperCase() === 'TRUE' || r[2] === true;
        const tok = String(r[1] || '');
        if (active && tok.length >= 16) tokens.push(tok);
      });
    }
  } catch (e) { /* sheet unreadable — fall back to primary only */ }
  return tokens;
}

function getActiveTokens() {
  try {
    const cache = CacheService.getScriptCache();
    const hit = cache.get(TOKEN_CACHE_KEY);
    if (hit) return JSON.parse(hit);
    const tokens = fetchActiveTokens_();
    cache.put(TOKEN_CACHE_KEY, JSON.stringify(tokens), TOKEN_CACHE_SECS);
    return tokens;
  } catch (e) {
    return fetchActiveTokens_();
  }
}

function safeEqual_(a, b) {
  const x = String(a || ''), y = String(b || '');
  if (!x || !y || x.length !== y.length) return false;
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x.charCodeAt(i) ^ y.charCodeAt(i);
  return diff === 0;
}

function isAuthorized(token) {
  const list = getActiveTokens();
  for (let i = 0; i < list.length; i++) {
    if (safeEqual_(token, list[i])) return true;
  }
  return false;
}

// --- Rate limiting (per user_id + action, CacheService) ----------------------
function checkRate_(userId, action) {
  try {
    const cache = CacheService.getScriptCache();
    const key = 'rl_' + action + '_' + String(userId).slice(0, 32);
    const max = action === 'push' ? RATE_MAX_PUSH : RATE_MAX_PULL;
    let n = parseInt(cache.get(key) || '0', 10);
    if (n >= max) return false;
    cache.put(key, String(n + 1), RATE_WINDOW_SECS);
    return true;
  } catch (e) { return true; /* fail open if cache unavailable */ }
}

// --- Audit log (trimmed to last ~1000 rows) -----------------------------------
function audit_(userId, action, detail) {
  try {
    const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(LOG_TAB);
    if (!sh) return;
    sh.appendRow([new Date().toISOString(), String(userId || '').slice(0, MAX_USER_CHARS), String(action), String(detail || '').slice(0, 200)]);
    if (sh.getLastRow() > 1001) sh.deleteRows(2, sh.getLastRow() - 1001);
  } catch (e) { /* logging must never break the request */ }
}

function validUser_(u) {
  return typeof u === 'string' && u.trim().length > 0 && u.length <= MAX_USER_CHARS && /^[A-Za-z0-9._-]+$/.test(u.trim());
}

function sanitizeRows_(rows) {
  const clean = [];
  const list = Array.isArray(rows) ? rows.slice(0, MAX_ROWS_PER_REQUEST) : [];
  for (let i = 0; i < list.length; i++) {
    const r = list[i] || {};
    const id = String(r.id || '').slice(0, MAX_ID_CHARS);
    if (!id) continue;
    let payloadStr = '';
    try { payloadStr = JSON.stringify(r.payload !== undefined ? r.payload : null); }
    catch (e) { continue; }
    if (payloadStr.length > MAX_PAYLOAD_CHARS) continue;
    clean.push({ id: id, updated_at: String(r.updated_at || new Date().toISOString()).slice(0, 64), payload: JSON.parse(payloadStr) });
  }
  return clean;
}

function readTab(name, userId) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  if (!sh || sh.getLastRow() < 2) return [];
  const vals = sh.getRange(2, 1, sh.getLastRow() - 1, HEADERS.length).getValues();
  const out = [];
  vals.forEach(function (r) {
    if (String(r[0]) !== String(userId)) return;
    try {
      out.push({ id: String(r[1]), updated_at: String(r[2]), payload: JSON.parse(String(r[3] || 'null')) });
    } catch (e) { /* skip corrupt row */ }
  });
  return out;
}

function upsertRows(name, userId, rows) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  const last = sh.getLastRow();
  const index = {};
  if (last >= 2) {
    const vals = sh.getRange(2, 1, last - 1, 3).getValues();
    vals.forEach(function (r, i) { index[String(r[0]) + '|' + String(r[1])] = i + 2; });
  }
  let n = 0;
  rows.forEach(function (row) {
    const key = String(userId) + '|' + row.id;
    const payload = JSON.stringify(row.payload);
    if (index[key]) sh.getRange(index[key], 3, 1, 2).setValues([[row.updated_at, payload]]);
    else sh.appendRow([String(userId), row.id, row.updated_at, payload]);
    n++;
  });
  return n;
}

function doGet(e) {
  ensureTabs();
  const action = (e && e.parameter && e.parameter.action) || 'health';
  if (action === 'health') return jsonResponse({ ok: true, service: 'someday-db', secure: true });
  if (action === 'pull') {
    const userId = String((e.parameter.user_id || '')).trim();
    const token = String(e.parameter.token || '');
    if (!validUser_(userId)) return jsonResponse({ ok: false, error: 'bad request' });
    if (!isAuthorized(token)) { audit_(userId, 'pull', 'denied'); return jsonResponse({ ok: false, error: 'unauthorized' }); }
    if (!checkRate_(userId, 'pull')) return jsonResponse({ ok: false, error: 'rate limited' });
    const data = {};
    TABS.forEach(function (t) { data[t] = readTab(t, userId); });
    audit_(userId, 'pull', 'ok');
    return jsonResponse({ ok: true, data: data });
  }
  return jsonResponse({ ok: false, error: 'bad request' });
}

function doPost(e) {
  ensureTabs();
  const lock = LockService.getScriptLock();
  try { lock.waitLock(15000); } catch (err) { /* proceed anyway */ }
  try {
    let body = {};
    try { body = JSON.parse((e && e.postData && e.postData.contents) || '{}'); }
    catch (err) { return jsonResponse({ ok: false, error: 'bad request' }); }
    const userId = String(body.user_id || '').trim();
    if (!validUser_(userId)) return jsonResponse({ ok: false, error: 'bad request' });
    if (!isAuthorized(body.token)) { audit_(userId, 'push', 'denied'); return jsonResponse({ ok: false, error: 'unauthorized' }); }
    if (!checkRate_(userId, 'push')) return jsonResponse({ ok: false, error: 'rate limited' });
    let total = 0;
    if (body.type === 'all' && body.data) {
      TABS.forEach(function (t) {
        if (t === 'profiles' || !body.data[t]) return;
        total += upsertRows(t, userId, sanitizeRows_(body.data[t]));
      });
      if (body.data.profiles) total += upsertRows('profiles', userId, sanitizeRows_(body.data.profiles));
    } else if (body.type && TABS.indexOf(body.type) !== -1) {
      total += upsertRows(body.type, userId, sanitizeRows_(body.rows));
    } else {
      return jsonResponse({ ok: false, error: 'bad request' });
    }
    audit_(userId, 'push', 'upserted=' + total);
    return jsonResponse({ ok: true, upserted: total });
  } catch (err) {
    return jsonResponse({ ok: false, error: 'server error' });
  } finally {
    try { lock.releaseLock(); } catch (err2) { /* ignore */ }
  }
}
