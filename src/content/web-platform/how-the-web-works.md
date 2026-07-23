# How the Web Works

Before writing more code, it helps to know what happens between typing a web address and seeing a page. The whole system is simpler than it looks: someone asks for a document, and a server sends it back.

![A diagram showing a browser sending a request to a server and receiving an HTML response.](https://placehold.co/1200x500/0a0a0a/ffffff/png?text=Request+%E2%86%92++Server++%E2%86%92+Response)

## Clients and servers

The web runs on a conversation between two roles:

- A **client** asks for things. Your browser is a client.
- A **server** answers. It's a computer, always on, waiting for requests.

When you visit a site, your browser (the client) sends a **request** to a server. The server replies with a **response** — usually an HTML document, plus the images, styles, and scripts it references.

## What a URL is made of

A web address packs several pieces into one line:

```text
https://example.com/guide/setup?theme=dark
└─┬─┘   └────┬────┘└────┬─────┘└────┬────┘
scheme     host        path       query
```

- **Scheme** — the protocol, almost always `https` (the secure web).
- **Host** — which server to talk to.
- **Path** — which resource on that server you want.
- **Query** — optional extra parameters.

## The request–response cycle

Loading a page is a short, ordered sequence:

1. You enter a URL or click a link.
2. The browser finds the server's address (a **DNS** lookup turns the host name into a number).
3. The browser sends an HTTP request to that server.
4. The server sends back an HTTP response — a status code plus the content.
5. The browser **renders** the HTML into the page you see.

### Status codes

Every response carries a three-digit code. You'll meet these constantly:

| Code | Meaning |
| --- | --- |
| 200 | OK — here's what you asked for. |
| 301 | Moved — the resource lives at a new URL now. |
| 404 | Not found — no resource at that path. |
| 500 | Server error — something broke on their end. |

## Rendering the page

The HTML that arrives is just text. The browser reads it top to bottom, builds a tree of elements (the **DOM**), applies any CSS to decide how each element looks, and runs any JavaScript to make it interactive. Those three languages — HTML, CSS, and JavaScript — are the entire front end, and they're the subject of the next three chapters.

Let's start with structure: [Structure with HTML](/html-structure).
