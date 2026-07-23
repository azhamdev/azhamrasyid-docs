# State & Events

Components that only display props are static. To respond to a user — a click, a typed character, a toggle — a component needs **state**: data it remembers between renders and can change over time.

## The useState hook

In React, you add state with `useState`. It hands back the current value and a function to update it:

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

Compare this to the hand-written DOM counter from the [Working with the DOM](/the-dom) chapter. There, you manually updated the button's text. Here, you just change `count` — and React re-renders the component to match. You describe *what* the UI should be; the library handles *how* to update the screen.

## How a render works

When you call `setCount`, three things happen, in order:

1. React updates the stored state value.
2. React calls your component function again with the new value.
3. React compares the new markup to the old and changes only what differs in the real DOM.

That third step is why this scales: you never touch the DOM directly, and only the parts that actually changed get updated.

## Handling events

Events attach right in the JSX with `on`-prefixed props. The most common are `onClick`, `onChange`, and `onSubmit`:

```jsx
function NameField() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <p>Hello, {name || 'stranger'}.</p>
    </div>
  );
}
```

As you type, `onChange` fires, `setName` updates the state, the component re-renders, and the greeting stays in sync — automatically. This is the payoff for everything so far.

## Rules of state

A few habits keep state predictable:

- **Never modify state directly.** Call the setter (`setCount`), don't reassign the variable. That's how React knows to re-render.
- **Keep state minimal.** Store the smallest source of truth and compute the rest during render.
- **Lift state up** when two components need the same data — move it to their closest shared parent and pass it down as props.

> **State down, events up.** Data flows *down* the component tree as props; changes flow *up* as events that update state near the top. Hold onto this one idea and large apps stay understandable.

## Where to go next

You've now walked the whole path — from a plain HTML file to interactive, component-based interfaces. That's the foundation every modern framework builds on.

From here, the best next step is to **build something small and finish it**: a to-do list, a tip calculator, a page that fetches and shows data. You have every concept you need. The rest is reps.

Thanks for reading. Head back to the [Introduction](/introduction) any time, or use search to revisit a topic.
