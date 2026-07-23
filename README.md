# Frontend Foundations — a minimalist docs app

A no-database documentation site for sharing course material. Content is plain
Markdown — one file per topic — read straight from disk by Vite. Built with
React, React Router, and Framer Motion.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
```

Build for production and preview the output:

```bash
npm run build
npm run preview
```

## How it's organized

```
src/
├── site.config.js        ← EDIT THIS to manage chapters, order, and branding
├── content/              ← your Markdown, one .md file per topic (by chapter)
│   ├── getting-started/
│   ├── web-platform/
│   ├── javascript/
│   └── components/
├── lib/                  ← content loader, TOC parser, prev/next navigation
├── hooks/                ← theme, active-heading, scroll progress, media query
├── components/           ← Sidebar, TableOfContents, TopBar, Pagination, Search…
└── styles/               ← globals.css (design tokens) + markdown.css (prose)
```

## Adding a new page

1. Create a Markdown file, e.g. `src/content/javascript/loops.md`. Start it with
   a single `# Title` and use `##` / `###` for sections (these become the
   "On this page" outline automatically).
2. Register it in `src/site.config.js` under the right chapter:

   ```js
   { slug: 'loops', title: 'Loops' }
   ```

   The `slug` must match the file name (without `.md`) and be unique. Its
   position in the config sets its place in the sidebar and the Prev/Next order.

That's the whole workflow — no database, no admin panel, no rebuild step in dev.

## Features

- **Three-column reading layout** — chapters left, content center, page outline right.
- **Live "On this page"** outline that follows your scroll position.
- **Previous / Next** navigation that walks the chapters in order.
- **⌘K / Ctrl-K search** across all pages.
- **Light / dark** theme (strict black & white), remembered between visits.
- **Reading-progress bar** and smooth page/interaction animations.
- Fully **responsive**, with an animated mobile drawer.

## Deploying

`npm run build` produces a static site in `dist/` you can host anywhere
(Netlify, Vercel, GitHub Pages, any static host). Because it's a single-page
app, configure your host to fall back to `index.html` for unknown routes so deep
links like `/setup` resolve correctly.

## Swapping in your own content

This starter ships with a sample web-development curriculum. To make it yours:

1. Replace the folders under `src/content/` with your own `.md` files.
2. Rewrite `chapters` in `src/site.config.js` to match.
3. Update `site.name`, `tagline`, and `logoText` at the top of that same file.
