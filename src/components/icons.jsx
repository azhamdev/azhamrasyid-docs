/* Minimal inline SVG icons. All stroke with currentColor so they inherit the
   monochrome theme automatically. */

const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const SunIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
  </svg>
);

export const MoonIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export const SearchIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const MenuIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const CloseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const ArrowLeftIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export const ArrowRightIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const HashIcon = (p) => (
  <svg {...base} width={15} height={15} {...p}>
    <path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" />
  </svg>
);

export const GithubIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 20 4.8a4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.6 0C7 .9 5.9 1.2 5.9 1.2A4.9 4.9 0 0 0 5.8 4.8 5.2 5.2 0 0 0 4.4 8.4c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V21" />
  </svg>
);

export const CopyIcon = (p) => (
  <svg {...base} width={14} height={14} {...p}>
    <rect x="9" y="9" width="12" height="12" rx="2.5" />
    <path d="M15 5.5A2.5 2.5 0 0 0 12.5 3h-7A2.5 2.5 0 0 0 3 5.5v7A2.5 2.5 0 0 0 5.5 15" />
  </svg>
);

export const CheckIcon = (p) => (
  <svg {...base} width={14} height={14} {...p}>
    <path d="m4 12.5 5 5L20 6.5" />
  </svg>
);

export const ChevronDownIcon = (p) => (
  <svg {...base} width={14} height={14} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const WrapIcon = (p) => (
  <svg {...base} width={14} height={14} {...p}>
    <path d="M3 6h18M3 18h7" />
    <path d="M3 12h14a3.5 3.5 0 0 1 0 7h-3" />
    <path d="m16 16-2 3 2 3" />
  </svg>
);

export const CornerReturnIcon = (p) => (
  <svg {...base} width={14} height={14} {...p}>
    <path d="M9 10 4 15l5 5" />
    <path d="M20 4v7a4 4 0 0 1-4 4H4" />
  </svg>
);

/* --- Latihan koding ------------------------------------------------------ */

export const CodeIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m8 17-5-5 5-5M16 7l5 5-5 5M14 4l-4 16" />
  </svg>
);

export const BulbIcon = (p) => (
  <svg {...base} width={16} height={16} {...p}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.8.9.9 1.5l.1.7h5.2l.1-.7c.1-.6.4-1.1.9-1.5A6 6 0 0 0 12 3z" />
  </svg>
);

export const BookIcon = (p) => (
  <svg {...base} width={14} height={14} {...p}>
    <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19v16H5.5A1.5 1.5 0 0 0 4 20.5z" />
    <path d="M4 16.5A1.5 1.5 0 0 1 5.5 15H19" />
  </svg>
);

export const PlayIcon = (p) => (
  <svg {...base} width={14} height={14} {...p}>
    <path d="M7 4.5v15l12-7.5z" />
  </svg>
);

export const RefreshIcon = (p) => (
  <svg {...base} width={14} height={14} {...p}>
    <path d="M20 11A8 8 0 0 0 6.3 6.3L4 8.5" />
    <path d="M4 4v4.5h4.5" />
    <path d="M4 13a8 8 0 0 0 13.7 4.7L20 15.5" />
    <path d="M20 20v-4.5h-4.5" />
  </svg>
);
