/* ============================================================================
   THE ONE FILE YOU EDIT TO MANAGE CONTENT.

   - `site`      : branding shown in the top bar.
   - `chapters`  : the left-hand navigation. Order here = order in the sidebar
                   and the order the Previous / Next buttons walk through.

   Each item's `slug` must match a Markdown file name under src/content/,
   e.g. slug 'installation'  ->  src/content/<any-folder>/installation.md
   Slugs must be unique across the whole site.
   ========================================================================== */

export const site = {
  name: 'Frontend Foundations',
  tagline: 'Build for the web, from first principles.',
  // Shown in the top-left. Kept as text for a clean, wordmark-style logo.
  logoText: 'FF',
  repoUrl: 'https://github.com/', // optional: link the "GitHub" button somewhere real
};

export const chapters = [
  {
    title: 'Getting Started',
    items: [
      { slug: 'introduction', title: 'Introduction' },
      { slug: 'how-this-works', title: 'How This Guide Works' },
      { slug: 'setup', title: 'Setting Up Your Machine' },
    ],
  },
  {
    title: 'The Web Platform',
    items: [
      { slug: 'how-the-web-works', title: 'How the Web Works' },
      { slug: 'html-structure', title: 'Structure with HTML' },
      { slug: 'css-styling', title: 'Styling with CSS' },
    ],
  },
  {
    title: 'JavaScript Essentials',
    items: [
      { slug: 'values-and-variables', title: 'Values & Variables' },
      { slug: 'functions', title: 'Functions' },
      { slug: 'the-dom', title: 'Working with the DOM' },
    ],
  },
  {
    title: 'Thinking in Components',
    items: [
      { slug: 'components', title: 'Components & Props' },
      { slug: 'state-and-events', title: 'State & Events' },
    ],
  },
  {
    title: 'Neurologi',
    items: [
      { slug: 'pengantar-neurologi', title: 'Pengantar Neurologi' },
      { slug: 'anatomi-sistem-saraf', title: 'Anatomi Sistem Saraf' },
      { slug: 'neuron-dan-sinaps', title: 'Neuron dan Sinaps' },
      { slug: 'pemeriksaan-neurologis', title: 'Pemeriksaan Neurologis' },
      { slug: 'penyakit-neurologis-umum', title: 'Penyakit Neurologis Umum' },
    ],
  },
];
