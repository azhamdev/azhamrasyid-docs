import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import { common } from 'lowlight';
import dart from 'highlight.js/lib/languages/dart';
import { HashIcon } from './icons.jsx';
import CodeBlock from './CodeBlock.jsx';
import rehypeCodeMeta from '../lib/rehype-code-meta.js';

/* rehype-slug gives every heading a stable `id`; we reuse it for the hover
   anchor link, matching the ids the TOC generates. */
function Heading({ level, id, children }) {
  const Tag = `h${level}`;
  return (
    <Tag id={id}>
      {id && (
        <a href={`#${id}`} className="heading-anchor" aria-label="Link to this section">
          <HashIcon />
        </a>
      )}
      {children}
    </Tag>
  );
}

/* Internal links (/slug) use the router for instant navigation; external
   links open safely in a new tab. */
function Anchor({ href = '', children }) {
  if (href.startsWith('/')) return <Link to={href}>{children}</Link>;
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  }
  return <a href={href}>{children}</a>;
}

/* Images render as captioned figures (using spans so they stay valid inside a
   paragraph) with lazy loading. Alt text doubles as the caption. */
function Figure({ src, alt }) {
  return (
    <span className="md-figure">
      <img src={src} alt={alt || ''} loading="lazy" />
      {alt && <span className="md-figcaption">{alt}</span>}
    </span>
  );
}

const components = {
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => <Heading level={3} {...props} />,
  a: Anchor,
  img: Figure,
  pre: CodeBlock,
};

export default function MarkdownRenderer({ markdown }) {
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        // rehypeCodeMeta must precede rehypeRaw (which drops hast `data`);
        // rehypeRaw then turns inline HTML (e.g. <kbd>) into real nodes,
        // then headings get ids, then code gets highlighted.
        rehypePlugins={[
          rehypeCodeMeta,
          rehypeRaw,
          rehypeSlug,
          // `dart` isn't in lowlight's common set, so Flutter snippets would
          // otherwise render with no highlighting at all. `languages` REPLACES
          // the default set rather than extending it — hence spreading common.
          [
            rehypeHighlight,
            { detect: true, ignoreMissing: true, languages: { ...common, dart } },
          ],
        ]}
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
