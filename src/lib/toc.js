/* ============================================================================
   Table-of-contents extraction ("On this page").

   We scan the raw Markdown for level-2 and level-3 headings and generate the
   same ids that rehype-slug produces when rendering, so clicking a TOC entry
   scrolls to the matching heading. Both sides use github-slugger, so the ids
   line up exactly (including duplicate-heading suffixes like "-1").
   ========================================================================== */

import GithubSlugger from 'github-slugger';

/**
 * @param {string} markdown raw markdown source
 * @returns {{ id: string, text: string, depth: 2 | 3 }[]}
 */
export function extractToc(markdown) {
  if (!markdown) return [];

  const slugger = new GithubSlugger();
  const headings = [];
  let inFence = false;

  for (const line of markdown.split('\n')) {
    // Skip fenced code blocks so `## comments` inside code aren't treated
    // as headings.
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;

    const depth = match[1].length; // 2 or 3
    // Strip inline markdown (emphasis, code ticks, links) for clean labels.
    const text = match[2]
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/[*_]/g, '')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .trim();

    headings.push({ id: slugger.slug(text), text, depth });
  }

  return headings;
}
