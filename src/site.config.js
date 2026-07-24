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
    title: 'Algoritma Dasar',
    items: [
      { slug: 'algoritma-pengenalan', title: 'Pengenalan Algoritma' },
    ],
    sections: [
      {
        title: 'Rekursi & Perulangan',
        items: [
          {
            slug: 'algoritma-rekursi-perulangan',
            title: 'Rekursi & Perulangan',
          },
        ],
      },
      {
        title: 'Angka & Teks',
        items: [{ slug: 'algoritma-angka-teks', title: 'Angka & Teks' }],
      },
      {
        title: 'Pencarian & Pengurutan',
        items: [
          {
            slug: 'algoritma-pencarian-pengurutan',
            title: 'Pencarian & Pengurutan',
          },
        ],
      },
      {
        title: 'Praktik & Ringkasan',
        items: [{ slug: 'algoritma-praktik', title: 'Praktik & Ringkasan' }],
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
  {
    title: 'Bisnis Digital',
    items: [
      {
        slug: 'pengenalan-bisnis-digital',
        title: 'Pengenalan Bisnis Digital',
      },
    ],
    sections: [
      {
        title: 'Fondasi (Dasar)',
        items: [
          {
            slug: 'bisnis-digital-konsep-model',
            title: 'Konsep & Model Bisnis Digital',
          },
          {
            slug: 'bisnis-digital-ekosistem-peluang',
            title: 'Ekosistem & Peluang Pasar',
          },
        ],
      },
      {
        title: 'Kehadiran Digital (Dasar)',
        items: [
          {
            slug: 'bisnis-digital-website-toko-online',
            title: 'Membangun Website & Toko Online',
          },
          {
            slug: 'bisnis-digital-media-sosial-konten',
            title: 'Media Sosial & Pemasaran Konten',
          },
        ],
      },
      {
        title: 'Pemasaran Digital (Menengah)',
        items: [
          {
            slug: 'bisnis-digital-strategi-pemasaran',
            title: 'Strategi & Funnel Pemasaran',
          },
          {
            slug: 'bisnis-digital-seo-iklan',
            title: 'SEO & Iklan Berbayar',
          },
        ],
      },
      {
        title: 'Monetisasi & Data (Menengah)',
        items: [
          {
            slug: 'bisnis-digital-monetisasi-pembayaran',
            title: 'Model Pendapatan & Pembayaran',
          },
          {
            slug: 'bisnis-digital-analitik-data',
            title: 'Analitik & Keputusan Berbasis Data',
          },
        ],
      },
      {
        title: 'Skala & Praktik (Menengah)',
        items: [
          {
            slug: 'bisnis-digital-otomasi-skala',
            title: 'Otomasi & Skalabilitas',
          },
          {
            slug: 'bisnis-digital-studi-kasus-praktik',
            title: 'Studi Kasus & Rencana Aksi',
          },
        ],
      },
    ],
  },
];
