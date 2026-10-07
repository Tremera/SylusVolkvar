# Sylus Volkvar — lore site

A small static site for the Sylus Volkvar bot. Plain HTML, CSS and JS, no build step.

## Files
- `index.html` — the page
- `style.css` — all styling (both modes)
- `script.js` — pup/wolf toggle, fridge rules, lore filters and search
- `lore.js` — **the lore entries and Ara's fridge rules. Edit this file to add or change lore.**
- `images/sylus.jpg` — his portrait (pup mode)
- `images/sylus-wolf.jpg` — his portrait (wolf mode)

## Editing lore
Open `lore.js` and copy any `{ ... }` block. Fields:
- `group`: `places`, `past` (shows as "The family"), `habits` (shows as "His things") or `people`
- `title`: the entry name
- `text`: the entry text
- `secret: true` (optional): blacked out until the visitor clicks "Threaten his people"

Fridge rules are at the bottom of `lore.js`:
- `rule`: Ara's rule
- `reply`: Sylus's reply in marker
- `broken: true` (optional): already stamped BROKEN when the page loads

## Chat links
In `index.html`, near the bottom, replace the two `href="#"` links with your Janitor AI and Tipsy bot links.

## Publishing on GitHub Pages
1. Upload everything in this folder (keep the `images` folder) to a repo.
2. Repo **Settings → Pages → Source: Deploy from a branch**, pick `main` and `/ (root)`.
3. Your site will be at `https://<your-username>.github.io/<repo-name>/`.
