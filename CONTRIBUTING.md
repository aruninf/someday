# Contributing to SOMEDAY

Thanks for your interest in contributing! This is a **pure static SPA** — no build, no bundler, no package manager. Keep it simple and fast.

Live demo: https://aruninf.github.io/someday/

## Quick start (30 seconds)

```bash
git clone https://github.com/aruninf/someday.git
cd someday
python3 -m http.server 8000
# open http://localhost:8000
```

> CDN scripts (Tailwind, Lucide, Tone.js, canvas-confetti) require internet. Just open `index.html` also works, but the local server is recommended.

No `npm install`, no build step. Do **not** add `package.json`, bundlers, or frameworks.

## Files

- `index.html` — all markup + CDN scripts. Entry point.
- `app.js` — all logic, globals only (~1769 lines, single file).
- `style.css` — custom CSS (`glass-panel`, `weeks-grid`, `week-square`, tab/timer styles).
- `AGENTS.md` — repo rules for AI agents / contributors.

## Rules that will get your PR merged faster

1. **No ES modules.** `index.html` calls functions via inline `onclick="..."`. Keep functions global, e.g.:
   ```js
   window.setLanguage = setLanguage;
   ```
   Do not refactor to `import` / `export`.

2. **Keep `updateLifeGrid()` cheap.** It renders `lifespan * 52` divs (default 4160) and rebuilds the whole grid on every input change. Prefer `DocumentFragment`, event delegation, debouncing, minimal DOM writes.

3. **After DOM changes call `lucide.createIcons()`** (or `refreshIcons()`) or icons render blank.

4. **Signature pad:** canvas must be resized when `contract` tab opens (`resizeSignatureCanvas(true)` in `switchTab`) — hidden canvas has zero size. Test on mobile.

5. **Sprint timer:** `setInterval(1000)` + SVG ring `#timer-progress-ring` (`stroke-dasharray 263.89`). Ambient sound uses Tone.js, guarded by `isAmbientPlaying`.

6. **Styling:** Tailwind CDN classes inline + `style.css` overrides inputs/selects with `!important`. Check `style.css` before fighting form styles.

7. **i18n:** default lang is `hi` (`someday_lang`). Static text via `data-i18n` / `data-i18n-placeholder`. Dynamic lists re-render on `setLanguage()` (`updateLifeGrid`, `renderVaultItems`, `renderBlueprints`, `renderWeeklyTargets`, `renderPastAchievements`, `updateSprintSelect`). If you add UI text, add both `en` + `hi` entries.

8. **Persistence:** all `localStorage`, keys in `STORAGE_KEYS` in `app.js`:
   `someday_blueprints`, `someday_contracts`, `someday_weekly_targets`, `someday_past_achievements`, `someday_life_events`, `someday_birthdate`, `someday_lifespan`, `someday_parent_age`, `someday_visits_year`, `someday_lang`. Handle corrupt JSON gracefully (see `loadJSON`).

## Good first issues

Pick one, no permission needed — just open a PR:

- [ ] Debounce `updateLifeGrid()` on input + use `DocumentFragment` / event delegation (perf)
- [ ] Keyboard-accessible week squares (`button` roles, `tabindex`, Enter/Space to open modal)
- [ ] ARIA for tabs, timer, modals (`aria-selected` already partially done in `switchTab`)
- [ ] Export / Import localStorage backup as JSON (all `someday_*` keys)
- [ ] Complete missing `hi` translations / fix hardcoded `Age/Week/Event` fallbacks in `updateLifeGrid()`
- [ ] CDN fallback toast when Lucide / Tone.js / confetti fails to load (offline-friendly)
- [ ] Mobile nav + signature pad touch polish
- [ ] Social preview image (`og:image`) + PWA manifest (static only, no build)

See `README.md` → Roadmap for full context.

## PR process

1. Fork → branch: `feat/short-name` or `fix/short-name`.
2. Keep diffs small, one feature per PR.
3. Preview locally with `python3 -m http.server 8000`, test EN + HI toggle, test mobile width.
4. Fill the PR template, link the issue.
5. One approval → squash-merge. Push to `main` = live on GitHub Pages.

No tests / CI by design. Manual check is the test:
- [ ] Tabs: `reality`, `vault`, `blueprint`, `sprint`, `weekly`, `contract` all switch
- [ ] Life grid renders, tooltip + event modal works
- [ ] Vault filter + adopt, Blueprint add/toggle, Sprint timer ring, Weekly add/complete, Contract sign/save
- [ ] No console errors, icons render

Questions? Open a `feature_request` issue. Be kind — see `CODE_OF_CONDUCT.md`.
