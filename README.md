# 🌟 SOMEDAY — Life Blueprint & Precision Timeline Engine

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
