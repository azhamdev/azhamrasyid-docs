# Functions

A **function** is a reusable block of code. You define it once, give it a name, and run it whenever you need it — often with different inputs each time. Functions are how programs stay organized instead of turning into one long, unrepeatable script.

## Defining and calling

Here's a function that takes an input, does something, and returns a result:

```js
function greet(name) {
  return `Hello, ${name}!`;
}

greet('Ada'); // 'Hello, Ada!'
```

- `name` is a **parameter** — a placeholder for whatever you pass in.
- `'Ada'` is an **argument** — the actual value on this call.
- `return` hands a value back to whoever called the function.

## Arrow functions

Modern JavaScript has a shorter syntax, the **arrow function**. It's especially common for small, one-line helpers:

```js
const square = (n) => n * n;

square(5); // 25
```

When the body is a single expression, the result is returned automatically — no `return` keyword needed.

## Why functions matter

Say you greet users in three places. Without a function, you'd write the same string-building logic three times, and fix bugs three times. With one, you write it once:

```js
const greet = (name) => `Welcome back, ${name}.`;

greet('Ada');
greet('Grace');
greet('Katherine');
```

This idea — **don't repeat yourself** — is one of the most valuable habits in programming.

## Functions that take functions

In JavaScript, functions are values. You can store them in variables, pass them as arguments, and return them. Passing a function to another function is everywhere in real code — most obviously when working with lists:

```js
const numbers = [1, 2, 3, 4];

// `map` runs the function you give it on every item.
const doubled = numbers.map((n) => n * 2); // [2, 4, 6, 8]

// `filter` keeps only the items where the function returns true.
const evens = numbers.filter((n) => n % 2 === 0); // [2, 4]
```

`map` and `filter` are worth memorizing early — you'll use them constantly, especially once you're building interfaces from data.

## Scope

Variables declared inside a function are private to it. They exist while the function runs and disappear afterward:

```js
function counter() {
  let count = 0; // only visible inside counter
  count += 1;
  return count;
}
```

This is a feature, not a limitation. Keeping variables local prevents different parts of a program from stepping on each other.

> **Keep functions small and named for what they do.** A function called `calculateTotal` that only calculates a total is easy to trust, test, and reuse.

Functions give us behavior. Now let's connect that behavior to the page itself — [Working with the DOM](/the-dom).
