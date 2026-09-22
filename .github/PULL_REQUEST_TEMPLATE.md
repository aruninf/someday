## What does this PR do?

## How to test?
1. `python3 -m http.server 8000`
2. Open http://localhost:8000
3. Tested tabs:
- [ ] reality
- [ ] vault
- [ ] blueprint
- [ ] sprint
- [ ] weekly
- [ ] contract

## Checklist
- [ ] No `package.json` / bundler / framework added (static SPA only)
- [ ] Globals kept (`window.myFunc = myFunc`), no `import/export`
- [ ] Called `lucide.createIcons()` / `refreshIcons()` after DOM changes
- [ ] Tested EN + HI language toggle
- [ ] Tested mobile width + signature pad (if touched)
- [ ] No console errors
- [ ] i18n: added both `en` + `hi` strings (if UI text added)
- [ ] Life grid still fast (if touched `updateLifeGrid`)

Closes #(issue number)
