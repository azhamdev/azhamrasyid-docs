import { useEffect, useState } from 'react';

/**
 * Tracks which heading is currently in view so the "On this page" list can
 * highlight it. Uses IntersectionObserver with a top-weighted rootMargin so a
 * heading becomes active a little before it reaches the very top of the screen.
 *
 * @param {string[]} ids  heading ids to watch, in document order
 * @returns {string|null} the id of the active heading
 */
export function useActiveHeading(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    if (!ids.length) return;

    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry);
          else visible.delete(entry.target.id);
        }
        // Of everything currently on screen, pick the highest one (smallest
        // top offset). Falls back gracefully when nothing is intersecting.
        if (visible.size > 0) {
          const top = [...visible.values()].sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
          setActiveId(top.target.id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: [0, 1] },
    );

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
    // Re-run when the set of ids changes (i.e. on page change).
  }, [ids.join('|')]); // eslint-disable-line react-hooks/exhaustive-deps

  return activeId;
}
