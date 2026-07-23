# Values & Variables

JavaScript is the language that makes pages interactive. It runs inside every browser, responding to clicks, updating content, and talking to servers. This chapter covers the essentials; it starts with the smallest pieces — values and the names we give them.

## Values and types

A **value** is a piece of data. Every value has a **type**, and a handful cover almost everything:

| Type | Example | Used for |
| --- | --- | --- |
| String | `'hello'` | Text |
| Number | `42`, `3.14` | Numbers, whole or decimal |
| Boolean | `true`, `false` | Yes / no, on / off |
| Null | `null` | Deliberately nothing |
| Undefined | `undefined` | Not yet assigned |

You can check any value's type with the `typeof` operator:

```js
typeof 'hello'; // 'string'
typeof 42;      // 'number'
typeof true;    // 'boolean'
```

## Declaring variables

A **variable** is a name that points at a value. Declare one with `const` when the binding won't be reassigned, and `let` when it will:

```js
const name = 'Ada';   // won't change
let score = 0;        // will change
score = score + 10;   // now 10
```

Prefer `const` by default. Reach for `let` only when you truly need to reassign. You'll see `var` in older code — you can safely ignore it in anything new.

## Working with strings

Strings hold text. Join them together with **template literals** — backticks with `${}` placeholders:

```js
const first = 'Ada';
const last = 'Lovelace';
const full = `${first} ${last}`; // 'Ada Lovelace'
```

Strings come with useful built-in operations:

```js
'hello'.toUpperCase();   // 'HELLO'
'  trim me  '.trim();    // 'trim me'
'a,b,c'.split(',');      // ['a', 'b', 'c']
```

## Numbers and math

Numbers support the arithmetic you'd expect, plus a remainder operator:

```js
10 + 5;   // 15
10 / 4;   // 2.5
10 % 3;   // 1  — the remainder after dividing
```

## Making decisions

Code branches with `if` / `else`, comparing values to produce a boolean:

```js
const hour = 20;

if (hour < 12) {
  console.log('Good morning');
} else if (hour < 18) {
  console.log('Good afternoon');
} else {
  console.log('Good evening');
}
```

> **Always compare with `===`,** not `==`. The triple-equals checks value *and* type and avoids a long list of surprising conversions. The same goes for `!==` over `!=`.

Values are the nouns of a program. Next come the verbs — [Functions](/functions).
