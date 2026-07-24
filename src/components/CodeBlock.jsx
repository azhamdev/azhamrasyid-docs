import { useEffect, useRef, useState } from 'react';
import { CheckIcon, ChevronDownIcon, CopyIcon, WrapIcon } from './icons.jsx';
import './CodeBlock.css';

/* Blocks longer than this collapse behind a "show all" toggle so a 200-line
   listing never buries the prose that follows it. */
const COLLAPSE_AT = 26;

/* Languages where a line gutter is noise rather than a reference. */
const NO_GUTTER = new Set(['bash', 'sh', 'shell', 'zsh', 'console', 'text', 'plaintext']);

const LANG_NAMES = {
  bash: 'Terminal',
  sh: 'Terminal',
  shell: 'Terminal',
  zsh: 'Terminal',
  console: 'Terminal',
  js: 'JavaScript',
  javascript: 'JavaScript',
  jsx: 'JSX',
  ts: 'TypeScript',
  typescript: 'TypeScript',
  tsx: 'TSX',
  html: 'HTML',
  xml: 'XML',
  css: 'CSS',
  scss: 'SCSS',
  json: 'JSON',
  yaml: 'YAML',
  yml: 'YAML',
  md: 'Markdown',
  markdown: 'Markdown',
  py: 'Python',
  python: 'Python',
  dart: 'Dart',
  kotlin: 'Kotlin',
  java: 'Java',
  php: 'PHP',
  sql: 'SQL',
  csharp: 'C#',
  cpp: 'C++',
  go: 'Go',
  rust: 'Rust',
  ruby: 'Ruby',
  swift: 'Swift',
};

/* Flatten a hast subtree back to its source text — this is what the copy
   button puts on the clipboard, so it must be the code, not the markup. */
function hastText(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value;
  if (Array.isArray(node.children)) return node.children.map(hastText).join('');
  return '';
}

/* Same idea for the React tree, used when no hast node is available. */
function reactText(children) {
  if (children == null || typeof children === 'boolean') return '';
  if (typeof children === 'string' || typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(reactText).join('');
  if (children.props?.children) return reactText(children.props.children);
  return '';
}

/* Fence info string: ```js title="app.js"  — or just ```js app.js */
function parseTitle(meta = '') {
  const quoted = /(?:title|file|filename)\s*=\s*["']([^"']+)["']/.exec(meta);
  if (quoted) return quoted[1];
  const bare = meta.trim().split(/\s+/)[0];
  return bare && /\.[a-z0-9]+$/i.test(bare) ? bare : '';
}

async function writeClipboard(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* falls through to the legacy path below (denied permission, http, …) */
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:-9999px;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/**
 * Replaces the plain <pre> emitted by react-markdown with a framed block:
 * a header naming the language (or file), a copy button, a line gutter, and
 * wrap / expand affordances that only appear when the code needs them.
 */
export default function CodeBlock({ node, children, ...rest }) {
  const bodyRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [wrapped, setWrapped] = useState(false);
  const [overflows, setOverflows] = useState(false);

  const codeNode = node?.children?.find((c) => c.tagName === 'code');

  /* rehypeCodeMeta parked the fence info on attributes; rehype-raw's
     round-trip renames them to the hast-normalised camelCase form. */
  const props = codeNode?.properties || {};
  const lang = props.dataLang || props['data-lang'] || '';
  const title = parseTitle(props.dataMeta || props['data-meta'] || codeNode?.data?.meta);

  const code = (codeNode ? hastText(codeNode) : reactText(children)).replace(/\n$/, '');
  const lineCount = code ? code.split('\n').length : 0;

  const label = title || LANG_NAMES[lang] || lang.toUpperCase() || 'Code';
  const showGutter = lineCount > 1 && !NO_GUTTER.has(lang);
  const collapsible = lineCount > COLLAPSE_AT;
  const collapsed = collapsible && !expanded;

  /* The wrap toggle is only meaningful when a line actually runs off the
     edge, so measure instead of always showing it. */
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return undefined;
    const measure = () => setOverflows(el.scrollWidth > el.clientWidth + 1);
    measure();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [code, wrapped]);

  useEffect(() => {
    if (!copied) return undefined;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  async function handleCopy() {
    if (await writeClipboard(code)) setCopied(true);
  }

  return (
    <div className="code-block" data-lang={lang || undefined}>
      <div className="code-head">
        <span className={`code-label${title ? ' is-file' : ''}`}>{label}</span>
        {title && lang && <span className="code-lang">{LANG_NAMES[lang] || lang}</span>}

        <div className="code-actions">
          {(overflows || wrapped) && (
            <button
              type="button"
              className={`code-btn${wrapped ? ' is-on' : ''}`}
              onClick={() => setWrapped((w) => !w)}
              aria-pressed={wrapped}
              title={wrapped ? 'Disable line wrapping' : 'Wrap long lines'}
            >
              <WrapIcon />
              <span className="visually-hidden">Toggle line wrapping</span>
            </button>
          )}
          <button type="button" className="code-btn code-copy" onClick={handleCopy}>
            {copied ? <CheckIcon /> : <CopyIcon />}
            <span className="code-copy-text">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      <div
        ref={bodyRef}
        className={`code-body${showGutter ? ' has-gutter' : ''}${
          collapsed ? ' is-collapsed' : ''
        }${wrapped ? ' is-wrapped' : ''}`}
      >
        {showGutter && (
          <span className="code-gutter" aria-hidden="true">
            {Array.from({ length: lineCount }, (_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </span>
        )}
        <pre {...rest}>{children}</pre>
      </div>

      {collapsible && (
        <button
          type="button"
          className={`code-expand${expanded ? ' is-open' : ''}`}
          onClick={() => setExpanded((e) => !e)}
        >
          <ChevronDownIcon />
          {expanded ? 'Show less' : `Show all ${lineCount} lines`}
        </button>
      )}

      <span aria-live="polite" className="visually-hidden">
        {copied ? 'Code copied to clipboard' : ''}
      </span>
    </div>
  );
}
