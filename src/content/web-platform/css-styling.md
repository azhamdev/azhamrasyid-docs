# Styling with CSS

CSS — Cascading Style Sheets — controls how your HTML looks. Color, spacing, size, layout, motion: all of it lives in CSS. The HTML says *what* something is; the CSS says *how it should appear*.

## Rules, selectors, and properties

A CSS rule targets some elements and declares how they should look:

```css
p {
  color: #333;
  line-height: 1.6;
}
```

- The **selector** (`p`) chooses which elements the rule applies to.
- Each **declaration** sets one **property** to a **value** (`color: #333`).

You can select by element (`p`), by class (`.note`), or by id (`#header`). Classes are the everyday workhorse:

```html
<p class="note">Handle with care.</p>
```

```css
.note {
  border-left: 2px solid black;
  padding-left: 12px;
}
```

## The box model

Every element is a rectangular box with four layers, from the inside out:

![A box model diagram: content surrounded by padding, then a border, then margin.](https://placehold.co/1000x520/0a0a0a/ffffff/png?text=content+%C2%B7+padding+%C2%B7+border+%C2%B7+margin)

- **Content** — the text or image itself.
- **Padding** — space *inside* the border, around the content.
- **Border** — the edge of the box.
- **Margin** — space *outside* the border, between this box and others.

One setting saves endless headaches — make width include padding and border:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

## Layout with flexbox

Modern layout is done with **flexbox** and **grid**. Flexbox arranges items in a row or column and distributes space between them:

```css
.toolbar {
  display: flex;
  align-items: center;      /* vertical alignment */
  justify-content: space-between; /* horizontal spacing */
  gap: 12px;
}
```

That single rule handles the kind of navigation bar you see at the top of most sites — logo on the left, actions on the right, evenly spaced.

## Responsive design

Screens vary from phones to monitors. **Media queries** let one stylesheet adapt:

```css
.sidebar {
  display: block;
}

@media (max-width: 640px) {
  .sidebar {
    display: none; /* hide the sidebar on narrow screens */
  }
}
```

> **Design in one color first.** Get the spacing, sizing, and layout right in plain black and white before adding color. Structure that reads clearly without color reads even better with it.

You can now structure and style a page. Time to make it *do* things — on to [Values & Variables](/values-and-variables).
