---
title: 'Intro to vite'
type: 'lesson'
order: 3
description: "What is vite and does it work?"
links: {
  "vite website": "https://vite.dev/",
  "esbuld website": https://esbuild.github.io/",
  "rollup website": "https://rollupjs.org/introduction/",
  "babel website": "https://babeljs.io/",
  "oxc website": "https://oxc.rs/",
  "collection of vite plugins": "https://github.com/vitejs/awesome-vite",
}
---

## What is vite?

Vite is a fast, unified web build tool.

It aims to provide a smooth development experience through:

- Instant server start
- Fast hot-module reloading
- Handling TypeScript, JSX and CSS out of the box
- A rich ecosystem of plugins

For production it:

- source maps
- handles tree shaking, code-splitting
- minification and bundling
- assets versioning

## How vite works?

Under the hood vite uses a couple of popular existing tools:

- esbuild
- rollup
- terser

> **NOTE**: there is an ongoing effort from the vite team to
> reimplement the tools used internally in rust. See [oxc](https://oxc.rs/)

## During development

![dev init](../../assets/vite-dev-init.svg)
![dev transform](../../assets/vite-dev-transform.svg)
![dev hmr](../../assets/vite-dev-hmr.svg)

## Production builds

![prod init](../../assets/vite-prod-init.svg)
![prod rollup](../../assets/vite-prod-rollup.svg)
![prod optimization](../../assets/vite-prod-optimization.svg)
![prod output](../../assets/vite-prod-output.svg)

<class-note>

We'll explore how each of the vite stages works in more practical details soon!

</class-note>
