---
title: 'Our sample project'
type: 'exercise'
order: 1
description: "Intoducing the basic version of the project we are going to imporove. It's nothing special ..for now"
hideTableOfContents: true
links: {
  "Workshop playground": "https://github.com/debel/js-toolchain-workshop-playground/tree/main",
}
---

## Getting started

 Clone and explore the [playground](https://github.com/debel/js-toolchain-workshop-playground) repository.

## The playground structure

The `no-tools` directory contains a simple example of a `personal blog` project:

- a main page
- a couple of blog posts
- a shared menu
- minor styling
- a couple of JS modules

<hr style="display: inherit !important" />

The `vite-vanilla` directory contains a similar example, but using vite
to build the site. It also makes use of some sample custom vite plugins.

<hr style="display: inherit !important" />

The `custom-vite-plugins` directory contains a couple of sample vite plugins to demonstrate what we can do using vite and how to use the plugin hooks:

| Plugin | Description |
| -------------- | --------------- |
| pipes-in-dev | allows using the [JS pipes syntax proposal]() |
| code-preview-loader | allows importing files a code preview component directly |
| comptime | a very simple implementation of executing code at build time (using babel) |
| cron-workflows | allows defining bits of work that need to be executing at set intervals (demonstrates the post build step) |
| svg diagram | a loader for a simplified text-to-diagram tool |

<hr style="display: inherit !important" />

The `meta-frameworks` directory explores a couple of frameworks that use vite internally.

- astro: great for static site generation
- fresh: preact, server-side rendering, island-based architecture
- solid: focused on fine-grained reactivity
- svelte: uses a complex complier that avoids big runtime dependencies
- tanstack-start: a example using React

<class-note>

Of course, you are free to work on your own project

</class-note>
