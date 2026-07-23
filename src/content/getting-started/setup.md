# Setting Up Your Machine

You can write your first webpage with tools you already have. This page gets you a comfortable setup in about ten minutes.

## The two tools you actually need

Everything in the first chapters requires only:

1. A **web browser** — Chrome, Firefox, Edge, or Safari. You have one already.
2. A **text editor** — where you'll write code.

That's it. No installs, no accounts, no build tools. Those come later, and only when they earn their place.

## Installing a code editor

[Visual Studio Code](https://code.visualstudio.com) is free, fast, and the most common editor in the industry. Download it, install it, and open it.

Two optional extensions make a real difference early on:

- **Prettier** — formats your code automatically so it stays tidy.
- **Live Server** — reloads the page in your browser every time you save.

## Your first file

Create a folder for your work, then a file inside it called `index.html`. Paste this in:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My first page</title>
  </head>
  <body>
    <h1>It works.</h1>
    <p>I made this.</p>
  </body>
</html>
```

Open the file in your browser — double-click it, or right-click and choose **Open with**. You should see a heading and a line of text.

> If you installed Live Server, right-click `index.html` in VS Code and choose **Open with Live Server** instead. Now every save updates the page instantly.

## The developer tools

Every browser ships with a built-in inspector. Open it with <kbd>F12</kbd>, or right-click anything on a page and choose **Inspect**. You'll live in two tabs:

- **Elements** — the live HTML and CSS of the page.
- **Console** — messages, errors, and a place to run JavaScript.

Get comfortable opening these now. When something doesn't work, they're the first place you look.

With your tools ready, let's look at what actually happens when you open a webpage — [How the Web Works](/how-the-web-works).
