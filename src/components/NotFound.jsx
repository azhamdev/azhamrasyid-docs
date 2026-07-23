import { Link } from 'react-router-dom';
import { firstSlug } from '../lib/navigation.js';

/** Shown when a URL points at a slug with no matching Markdown file. */
export default function NotFound({ slug }) {
  return (
    <div className="notfound">
      <p className="notfound-code">404</p>
      <h1>Page not found</h1>
      <p className="notfound-text">
        {slug ? (
          <>
            There’s no page at <code>/{slug}</code> yet.
          </>
        ) : (
          'That page doesn’t exist.'
        )}
      </p>
      <Link to={`/${firstSlug}`} className="notfound-link">
        Back to the introduction →
      </Link>
    </div>
  );
}
