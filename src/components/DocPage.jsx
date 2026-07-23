import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar.jsx';
import TableOfContents from './TableOfContents.jsx';
import Pagination from './Pagination.jsx';
import MarkdownRenderer from './MarkdownRenderer.jsx';
import NotFound from './NotFound.jsx';
import { getMarkdown } from '../lib/content.js';
import { extractToc } from '../lib/toc.js';
import { getPage } from '../lib/navigation.js';

/**
 * A single documentation page: the 3-column reading layout. The `slug` route
 * param picks the Markdown file; everything else (title, chapter, TOC,
 * neighbours) is derived from it.
 */
export default function DocPage() {
  const { slug } = useParams();
  const markdown = getMarkdown(slug);
  const page = getPage(slug);
  const toc = useMemo(() => extractToc(markdown), [markdown]);

  if (!markdown || !page) return <NotFound slug={slug} />;

  return (
    <div className="shell">
      <aside className="sidebar-rail">
        <Sidebar />
      </aside>

      <main className="main">
        {/* key={slug} remounts the article on navigation, replaying the
            enter animation each time. */}
        <motion.article
          key={slug}
          className="article"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{page.chapter}</p>
          <MarkdownRenderer markdown={markdown} />
          <Pagination slug={slug} />
        </motion.article>
      </main>

      <aside className="toc-rail">
        <TableOfContents toc={toc} />
      </aside>
    </div>
  );
}
