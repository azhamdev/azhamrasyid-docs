import { Link } from 'react-router-dom';
import { getNeighbours } from '../lib/navigation.js';
import { ArrowLeftIcon, ArrowRightIcon } from './icons.jsx';
import './Pagination.css';

/** The Previous / Next footer that walks the flattened chapter order. */
export default function Pagination({ slug }) {
  const { prev, next } = getNeighbours(slug);

  return (
    <nav className="pager" aria-label="Pagination">
      {prev ? (
        <Link to={`/${prev.slug}`} className="pager-card prev">
          <span className="pager-eyebrow">
            <ArrowLeftIcon width={15} height={15} />
            Previous
          </span>
          <span className="pager-title">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link to={`/${next.slug}`} className="pager-card next">
          <span className="pager-eyebrow">
            Next
            <ArrowRightIcon width={15} height={15} />
          </span>
          <span className="pager-title">{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
