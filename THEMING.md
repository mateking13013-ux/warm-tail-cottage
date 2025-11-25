# Theming and Content Guide

Use the CSS custom properties in `style.css` to retheme the site for different puppy breeds or brand directions. Most color choices are centralized in the `:root` block.

## Quick retheme steps
- Pick a palette: primary (buttons/links), accent (highlight), neutrals for surfaces and borders.
- In `style.css`, update the variables under `/* Theme tokens for easy retheming */`:
  - Core brand: `--primary`, `--primary-dark`, `--accent`
  - Surfaces/borders: `--surface`, `--surface-soft`, `--surface-tint`, `--surface-muted`, `--border`, `--border-strong`
  - Text: `--ink`, `--muted`, `--text-subtle`, `--text-highlight`
  - Gradients/highlights: `--gradient-rose`, `--gradient-gold`, `--gradient-warm-start`, `--gradient-warm-mid`, `--bg-warm`
  - Supporting: `--accent-soft`, `--accent-rose`, `--cream`, `--soft-cream`, `--table-header`, `--table-total`, `--shadow`
- Refresh and check hero, cards, tables, and footer to confirm contrast and readability. Tweak `--border` and `--text-subtle` first if things feel too light or dark.

## Suggested palette swaps (examples)
- Deep Blue: `--primary: #1d4ed8; --primary-dark: #1e3a8a; --accent: #22d3ee`
- Forest: `--primary: #166534; --primary-dark: #14532d; --accent: #a3e635`
- Ember: `--primary: #b91c1c; --primary-dark: #7f1d1d; --accent: #f97316`

## Updating copy for a new breed
- Search/replace breed terms and kennel name where needed. Helpful commands:
  - `rg "Dobermann" .`
  - `rg "Night Watch Companions" .`
- Update hero badges, headings, FAQs, and contact info to match the new breed and story.
- Swap images in `public/images/` and update `alt` text for accuracy.

## Optional: alternate theme class
To keep multiple palettes, add a class on `<body>` (e.g., `class="theme-forest"`) and override only the variables you want:

```css
.theme-forest {
    --primary: #166534;
    --primary-dark: #14532d;
    --accent: #a3e635;
}
```

This leaves the rest of the tokens intact while switching the main colors.
