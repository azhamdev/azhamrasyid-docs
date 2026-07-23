/* ============================================================================
   Navigation model — flattens the chapter tree into a single ordered list so
   the Previous / Next buttons can walk it, and builds a lightweight search
   index over page titles + chapter names.
   ========================================================================== */

import { chapters } from '../site.config.js';

// A flat, reading-order list: [{ slug, title, chapter }, ...]
export const flatPages = chapters.flatMap((chapter) =>
  chapter.items.map((item) => ({
    slug: item.slug,
    title: item.title,
    chapter: chapter.title,
  })),
);

const indexBySlug = new Map(flatPages.map((page, i) => [page.slug, i]));

/** The slug of the very first page — used for the "/" landing redirect. */
export const firstSlug = flatPages[0]?.slug ?? null;

/** Look up a single page's metadata. */
export function getPage(slug) {
  const i = indexBySlug.get(slug);
  return i === undefined ? null : flatPages[i];
}

/** Returns { prev, next } neighbours for the Prev/Next pager (null at ends). */
export function getNeighbours(slug) {
  const i = indexBySlug.get(slug);
  if (i === undefined) return { prev: null, next: null };
  return {
    prev: i > 0 ? flatPages[i - 1] : null,
    next: i < flatPages.length - 1 ? flatPages[i + 1] : null,
  };
}

/** Simple, dependency-free search over page + chapter titles. */
export function searchPages(query) {
  const q = query.trim().toLowerCase();
  if (!q) return flatPages;
  return flatPages.filter(
    (page) =>
      page.title.toLowerCase().includes(q) ||
      page.chapter.toLowerCase().includes(q),
  );
}
