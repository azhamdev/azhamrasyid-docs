# Structure with HTML

HTML — HyperText Markup Language — is how you describe the *structure and meaning* of content. Not how it looks (that's CSS) or how it behaves (that's JavaScript), but what each piece **is**: a heading, a paragraph, a list, a link.

## Elements and tags

An element is usually an opening tag, some content, and a closing tag:

```html
<p>This is a paragraph.</p>
```

Some elements are self-closing because they hold no content, like an image:

```html
<img src="cat.jpg" alt="A sleeping cat" />
```

Elements can carry **attributes** — extra information written as `name="value"` inside the opening tag. Above, `src` says where the image lives and `alt` describes it for people who can't see it.

## The shape of a document

Every page shares the same skeleton:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Information about the page, not shown in the body. -->
    <meta charset="utf-8" />
    <title>Page title shown in the browser tab</title>
  </head>
  <body>
    <!-- Everything the visitor actually sees. -->
    <h1>A heading</h1>
    <p>Some text.</p>
  </body>
</html>
```

- `<head>` holds **metadata** — the title, character set, links to styles.
- `<body>` holds the **visible content**.

## Common elements

You'll reach for a small set constantly:

- **Headings** — `<h1>` through `<h6>`, in order of importance. One `<h1>` per page.
- **Paragraphs** — `<p>` for blocks of text.
- **Links** — `<a href="...">` to send people elsewhere.
- **Images** — `<img>` with a required `alt` description.
- **Lists** — `<ul>` (unordered) or `<ol>` (ordered), containing `<li>` items.

```html
<h2>Ingredients</h2>
<ul>
  <li>Flour</li>
  <li>Water</li>
  <li>Salt</li>
</ul>
```

## Semantic HTML

You could build an entire page out of one generic element, the `<div>`. Don't. Elements that describe their purpose — called **semantic** elements — make your page easier to style, easier to navigate with a keyboard or screen reader, and easier for search engines to understand.

```html
<header>Site name and navigation</header>
<main>
  <article>The primary content</article>
</main>
<footer>Copyright and links</footer>
```

> **Rule of thumb** — Reach for the element that means what you intend. Use a `<button>` for actions, a `<nav>` for navigation, and a heading for a heading. Save `<div>` for when nothing more specific fits.

Structure alone looks plain. Next we make it beautiful with [Styling with CSS](/css-styling).
