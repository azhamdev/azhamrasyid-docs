/* ============================================================================
   Markdown loader — the "no database" part.

   Vite's import.meta.glob reads every .md file under src/content/ at build
   time and inlines the raw text. `eager: true` means it's all available
   synchronously, so pages render instantly with no fetch/loading state.
   ========================================================================== */

const files = import.meta.glob('../content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

// Map every file to its slug (the file name without extension), e.g.
// '../content/getting-started/introduction.md' -> 'introduction'.
const bySlug = {};
for (const path in files) {
  const slug = path.split('/').pop().replace(/\.md$/, '');
  bySlug[slug] = files[path];
}

/** Returns the raw Markdown string for a slug, or null if it doesn't exist. */
export function getMarkdown(slug) {
  return bySlug[slug] ?? null;
}

/** All slugs that have a backing .md file — used to validate the config. */
export function getAvailableSlugs() {
  return Object.keys(bySlug);
}
