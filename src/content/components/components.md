# Components & Props

Updating the DOM by hand works for a counter. For a real interface — hundreds of elements that change as data changes — it becomes unmanageable. **Component libraries** like React solve this by letting you describe *what the UI should look like for a given set of data*, and handling the DOM updates for you.

This app you're reading right now is built that way.

## What a component is

A component is a function that returns some markup. In React, that markup is written in **JSX** — HTML-like syntax inside JavaScript:

```jsx
function Greeting() {
  return <h1>Hello, world!</h1>;
}
```

You then use it like a custom HTML tag:

```jsx
<Greeting />
```

Components are the building blocks of the interface. A page is components inside components: a `Page` holds an `Article`, which holds `Paragraph`s and a `CodeBlock`, and so on.

## Props: passing data in

A component becomes reusable when it accepts inputs. Those inputs are called **props** — think of them like function arguments:

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

Now the same component renders different output depending on what you pass:

```jsx
<Greeting name="Ada" />
<Greeting name="Grace" />
```

Inside JSX, the curly braces `{name}` drop a JavaScript value into the markup — the same idea as a template literal, but for elements.

## Composing components

Because components are just functions returning markup, you assemble them like Lego:

```jsx
function Card({ title, body }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

function Feed() {
  return (
    <div>
      <Card title="First post" body="Hello there." />
      <Card title="Second post" body="Another one." />
    </div>
  );
}
```

Write `Card` once, use it everywhere. Change it once, and every card updates.

## Rendering lists

Most interfaces display lists of data. Combine `map` from the [Functions](/functions) chapter with components to turn an array into markup:

```jsx
function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
}
```

The `key` gives each item a stable identity so the library can update the list efficiently when the data changes. Always provide one when rendering a list.

> **Think in components.** Before building a screen, sketch it and draw boxes around the repeating and reusable parts. Each box is probably a component.

Components describe structure. To make them *interactive*, they need memory — [State & Events](/state-and-events).
