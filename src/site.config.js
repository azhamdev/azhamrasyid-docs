/* ============================================================================
   THE ONE FILE YOU EDIT TO MANAGE CONTENT.

   - `site`      : branding shown in the top bar.
   - `chapters`  : the left-hand navigation. Order here = order in the sidebar
                   and the order the Previous / Next buttons walk through.

   A chapter holds pages directly in `items`, and/or groups them into
   sub-chapters via `sections` (each section = { title, items }). Reading order
   is: a chapter's direct items first, then its sections in order.

   Each item's `slug` must match a Markdown file name under src/content/,
   e.g. slug 'installation'  ->  src/content/<any-folder>/installation.md
   Slugs must be unique across the whole site.
   ========================================================================== */

export const site = {
  name: 'Azham Rasyid Docs',
  tagline: 'Build for the web, from first principles.',
  // Shown in the top-left. Kept as text for a clean, wordmark-style logo.
  logoText: 'ARD',
  repoUrl: 'https://github.com/', // optional: link the "GitHub" button somewhere real
};

export const chapters = [
  {
    title: 'Introduction',
    items: [
      { slug: 'about-me', title: 'About Me' },
      { slug: 'preparation', title: 'Preparation' },
    ],
  },
  {
    title: 'Pemrograman Website',
    items: [
      {
        slug: 'pengenalan-pemrograman-website',
        title: 'Pengenalan Pemrograman Website',
      },
    ],
    sections: [
      {
        title: 'HTML',
        items: [{ slug: 'html-dasar', title: 'Dasar HTML' }],
      },
      {
        title: 'CSS',
        items: [{ slug: 'css-dasar', title: 'Dasar CSS' }],
      },
      {
        title: 'JavaScript',
        items: [{ slug: 'javascript-dasar', title: 'Dasar JavaScript' }],
      },
    ],
  },
  {
    title: 'Pemrograman Aplikasi Perangkat',
    items: [
      {
        slug: 'pengenalan-aplikasi-perangkat',
        title: 'Pengenalan Aplikasi Perangkat',
      },
    ],
    sections: [
      {
        title: 'Mobile',
        items: [{ slug: 'android-dasar', title: 'Dasar Aplikasi Android' }],
      },
      {
        title: 'Desktop',
        items: [{ slug: 'desktop-dasar', title: 'Dasar Aplikasi Desktop' }],
      },
      {
        title: 'Lintas Platform',
        items: [{ slug: 'flutter-dasar', title: 'Dasar Flutter' }],
      },
    ],
  },
];
