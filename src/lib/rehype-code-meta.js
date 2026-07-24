/**
 * Pins down what the author actually wrote on a fence, as plain attributes:
 *
 *   data-meta — the info string (```js title="app.js"), which lives on the
 *     hast node's `data` and would otherwise be lost: rehype-raw re-serializes
 *     the tree to HTML and parses it back, keeping attributes but not `data`.
 *   data-lang — the declared language. rehype-highlight runs with `detect`, so
 *     afterwards every block carries a `language-*` class, including guesses;
 *     only a class present *now* was written by hand.
 *
 * Must therefore run before both of those plugins.
 */
export default function rehypeCodeMeta() {
  return (tree) => walk(tree);
}

function walk(node) {
  if (node.type === 'element' && node.tagName === 'code') {
    const classes = node.properties?.className;
    const list = Array.isArray(classes) ? classes : String(classes || '').split(/\s+/);
    const declared = list.find((c) => c.startsWith('language-'));
    const extra = {};

    if (node.data?.meta) extra['data-meta'] = node.data.meta;
    if (declared) extra['data-lang'] = declared.slice('language-'.length);

    node.properties = { ...node.properties, ...extra };
  }
  if (Array.isArray(node.children)) node.children.forEach(walk);
}
