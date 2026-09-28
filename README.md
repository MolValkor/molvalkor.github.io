# MolValkor Forge (AI project hub)

Plain static site, no build step. Open `index.html` directly or host the folder as-is (e.g. GitHub Pages).

- Rename the site: edit `SITE_NAME` in `js/site.js` (the only place the name lives).
- Games: `play/<slug>.html` are verbatim copies of each single-file game.
- Thumbnails: `img/<slug>.webp` (800x500, captured with headless Chromium).
- Saves are per-browser localStorage (keys: `runeforge-v2-progress`, `gom_save_v304`, `cinderwell_save_v8`).
