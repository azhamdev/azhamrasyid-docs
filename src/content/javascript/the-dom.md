# Working with the DOM

When the browser loads your HTML, it builds a live, in-memory model of the page called the **DOM** — the Document Object Model. JavaScript can read and change that model, and the page updates instantly. This is where static pages become interactive.

## Finding elements

To change something, you first have to select it. The modern tool is `querySelector`, which takes a CSS selector:

```js
// The first element matching the selector.
const title = document.querySelector('h1');

// Every match, as a list you can loop over.
const items = document.querySelectorAll('.item');
```

## Reading and changing content

Once you have an element, you can read or replace what's inside it:

```js
const title = document.querySelector('h1');

title.textContent = 'Updated heading';   // change the text
title.classList.add('highlight');        // add a CSS class
title.setAttribute('data-seen', 'true'); // set an attribute
```

Prefer `textContent` when you're setting plain text — it's safe and fast. You'll reach for other tools only when you specifically need to insert HTML.

## Responding to events

An **event** is something that happens on the page: a click, a keypress, a form submission. You react to events by registering a **listener** — a function the browser calls when the event fires:

```js
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('The button was clicked.');
});
```

The function you pass runs every time the event happens. This pattern — *select an element, listen for an event, do something* — is the heartbeat of interactive pages.

## A complete example

Here's a working counter. Read it top to bottom; every line uses something from this chapter and the last.

```html
<button id="tally">Clicked 0 times</button>
```

```js
const button = document.querySelector('#tally');
let count = 0;

button.addEventListener('click', () => {
  count += 1;
  button.textContent = `Clicked ${count} times`;
});
```

Click the button and the label updates. That's the full loop: state (`count`) changes, and the DOM re-renders to match.

## The pattern behind everything

Notice the shape of that example, because it never really changes:

1. Keep some **state** (a value that can change — here, `count`).
2. Listen for **events** that should change it.
3. **Update the DOM** so what's on screen matches the state.

Doing this by hand for a whole app gets tedious fast — keeping the DOM in sync with your state is a lot of bookkeeping. That's exactly the problem the next chapter solves.

Let's raise the level of abstraction: [Components & Props](/components).
