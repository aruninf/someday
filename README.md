# 🌟 SOMEDAY — Life Blueprint & Precision Timeline Engine

![static](https://img.shields.io/badge/static-HTML%20%2B%20JS%20%2B%20CSS-blue)
![no-build](https://img.shields.io/badge/no%20build-required-brightgreen)
![license](https://img.shields.io/badge/license-MIT-green)
![pages](https://img.shields.io/badge/GitHub%20Pages-live-blueviolet)

A premium, interactive single-page application designed to eliminate procrastination and turn dreams into reality. The app features a precision **Life-in-Weeks Matrix**, a **Someday Vault** for curated aspirations, a **15-Minute Micro-Sprint Engine** with ambient synthesizers, a **Weekly Targets & Wall of Wins** tracker, and a **Future Self Commitment Contract** with digital signature capabilities.

---

## 🚀 Live Demo & Deployment
This application is built as a pure, lightweight client-side SPA (Single Page Application) with zero build steps or server requirements. It is optimized to be deployed instantly on **GitHub Pages**.

* **Repository Link**: [https://github.com/aruninf/someday](https://github.com/aruninf/someday)
* **GitHub Pages URL**: [https://aruninf.github.io/someday](https://aruninf.github.io/someday)

---

## ✨ Features & Architecture

### 📅 1. Precision Life-in-Weeks Matrix ("Mera Time")
* **Mathematical Accuracy**: Computes the exact number of weeks lived down to the day level, dynamically accounting for leap years, monthly calendars, and target lifespans.
* **Responsive Visual Matrix**: A 52-column responsive CSS grid representing a "1 row = 1 year" visual timeline of your entire lifespan.
* **Native Tooltips**: Hovering over any week square pops up its exact calendar date range and any logged milestone event right under the cursor.
* **Interactive Event Logger**: Clicking any square opens a modal to record relationships, creative wins, adventures, career events, or custom milestones, styled with glowing drop shadows.

### 💡 2. The Someday Vault
* **Curated Wishlist**: Structured database of 8 curated bucket-list aspirations (Digital detoxes, elder interviews, nature campings, art, cooking recipes, writing pocket books) categorized with specific target times, impacts, and actionable steps.
* **Custom Dreams**: Add your own aspirations with custom category badges and initial 15-minute micro-steps.

### ⚡ 3. 15-Minute Micro-Sprint Engine
* **Friction Buster**: Combats overthinking by committing you to just a 15-minute start on any active plan.
* **Ambient Soundscape**: An inline synthesizer powered by **Tone.js** that generates a soothing focus tone on demand.
* **Interactive Timer**: An SVG radial countdown ring showing remaining time with focus notifications and victory chimes upon completion.

### 🏆 4. Weekly Targets & Wall of Wins
* **Week-on-Week Goals**: Set specific focus targets (Health, Relationship, Learning, Creative, Work) mapped to specific days of the week.
* **Wall of Wins (My Wins)**: Celebrate achievements! Completed weekly goals are transferred to a permanent gallery with custom-mapped Lucide icons (`trophy`, `star`, `heart`, `shield`).

### ✍️ 5. Future Self Contract
* **Digital Commitment**: Write letters to your future self sealing a promise.
* **Signature Pad**: Integrates an HTML5 `<canvas>` digital signature pad to ink your signature, fully optimized for high-DPI screens and mobile touches.

---

## 🛠️ Tech Stack & Integrations
1. **Core**: HTML5 (Semantic Structure) & JavaScript (ES6+ App Architecture).
2. **Styling**: TailwindCSS CDN & Custom Vanilla CSS (`style.css` for grid aspect-ratios, custom scrollbars, animations, and typography).
3. **Icons**: Lucide Icons CDN (Fully vectorized SVGs).
4. **Audio**: Tone.js CDN (Synthesizer frequencies).
5. **VFX**: Canvas Confetti CDN (Victory celebrations).
6. **Storage**: LocalStorage (Serialized structures for events, plans, targets, past achievements, and user parameters).
7. **Cloud Sync**: Google Sheets via Apps Script (offline-first backup + cross-device sync, see below).

---

## 📊 Google Sheets Integration (Production)

No backend — data syncs from the browser to a Google Apps Script web app URL (offline-first, localStorage stays source of truth).

### Setup

1. Open your Google Sheet
2. Extensions > Apps Script > paste contents of `google-apps-script.gs`
3. Run `ensureTabs` once (grant permission) — creates all tabs
4. Add a row in tab `sync_keys`: `key_id=web-1`, `token=<long random 32+>`, `active=TRUE`
5. Deploy > New deployment > **Web app** (Execute as: Me, Who has access: Anyone with the link)
6. Copy Web App URL → paste in the app's **Cloud Sync panel** (reality tab) + token → Enable → Sync now
7. Full guide: `SHEET_DB_SETUP.md`

### Sheet structure

- **Collection tabs** (one per type): `profiles | blueprints | contracts | weekly_targets | achievements | life_events`
- Headers (4 columns): `user_id | id | updated_at | payload`
- **Key vault**: `sync_keys` (`key_id | token | active | note`) — tokens fetched server-side, cached 5 min; revoke via `active=FALSE`, no redeploy
- **Audit**: `sync_log` (`timestamp | user_id | action | detail`, auto-trimmed to 1000 rows)
- Styled header row (bold, cyan theme), frozen header

---

## 📦 Deployment on GitHub Pages

1. **Initialize Git & Push**:
    ```bash
    git init
    git add .
    git commit -m "Initial commit - Production refactored codebase"
    git branch -M main
    git remote add origin https://github.com/aruninf/someday.git
    git push -u origin main -f
    ```
2. **Activate GitHub Pages**:
    * Go to your repository on GitHub: `https://github.com/aruninf/someday`
    * Click on **Settings** -> **Pages**.
    * Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
    * Under **Branch**, select **main** and set the folder to `/ (root)`.
    * Click **Save**.
    * Your app will be live at `https://aruninf.github.io/someday/` within minutes!

---

## 🤝 Contribute — open to contributors!

New here? You can ship your first PR in 5 minutes. No build, no npm.

```bash
git clone https://github.com/aruninf/someday.git
cd someday
python3 -m http.server 8000
# open http://localhost:8000
```

- Read `CONTRIBUTING.md` (static-SPA rules: globals only, `lucide.createIcons()` after DOM changes, keep `updateLifeGrid()` cheap).
- Be kind: see `CODE_OF_CONDUCT.md`.
- License: MIT (`LICENSE`).
- Pick an issue: `bug_report` / `feature_request` templates in `.github/ISSUE_TEMPLATE/`.

## 🗺️ Roadmap & enhancement ideas

Thought-through, contributor-sized, no framework needed:

### Performance / core
- Debounce `updateLifeGrid()` + `DocumentFragment` / event delegation (4160 divs rebuilt on every input today in `app.js:638`).
- Virtualize / lazy-render year rows for 80–100yr lifespans.
- Export / Import all `someday_*` localStorage keys as JSON backup.

### Accessibility / UX
- Keyboard-accessible week squares, focus-visible states, `prefers-reduced-motion` for pulse/confetti.
- Full ARIA for tabs (`switchTab` in `app.js:591` already sets `aria-selected`), timer, modals.
- Toast fallback when CDN (Lucide / Tone.js / confetti) fails offline.

### Product polish
- Complete `hi` translations (fallbacks like `Age/Week/Event` still hardcoded in `updateLifeGrid`).
- PWA manifest + static service worker for offline (still no build).
- `og:image` social preview, mobile signature-pad polish (`resizeSignatureCanvas`).

### Good first issues
1. Debounce life-grid inputs
2. Keyboard + ARIA for grid / tabs
3. JSON backup export/import
4. Finish `en`+`hi` strings
5. CDN-failure toast
6. `og:image` + manifest

Open a PR with `Closes #<issue>` — small diffs merge fastest.
