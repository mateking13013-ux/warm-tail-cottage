# Night Watch Companions (Static HTML)

This repo now serves a fully static site (plain HTML/CSS/JS) for the Night Watch Companions landing page—no Next.js, build tools, or Node dependencies required.

## How to view
- Open `index.html` directly in your browser, or serve the folder with any static server (e.g. `python -m http.server`).
- Styles live in `style.css`; interactions (smooth scroll, form handling demo) are in `script.js`.
- For a dedicated listing, open `available-puppies.html` to see the detailed available puppies page (responsive, wide layout).

## Customizing
- Colors and theme tokens are defined at the top of `style.css` (`--primary` etc.).
- Hero images use remote URLs—swap them in `index.html` if you prefer local assets.

## Notes
- All Next.js/prisma configs and packages were removed to keep the project 100% static HTML/CSS/JS.
