<p align="center">
  <a href="https://vitdocjs.github.io" target="_blank" rel="noopener noreferrer">
    <img src="./logo.svg" alt="Logo for project">
  </a>
</p>

<p align="center">
    <a href="https://npmjs.com/package/vitdoc"><img src="https://img.shields.io/npm/v/vitdoc.svg" alt="npm package"></a>
    <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vitdoc.svg" alt="node compatibility"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/%3C/%3E-TypeScript-0072C4.svg" alt="TypeScript"></a>
    <a href="http://npmjs.com/vitdoc"><img src="http://img.shields.io/npm/dm/vitdoc.svg?style=flat-square" alt="NPM Downloads"></a>
</p>

<p align="center">
  <a href="https://stackblitz.com/edit/vitdoc?file=src/README.md"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>
</p>
<p align="center">
  <a href="https://app.codeanywhere.com/#https://github.com/vitdocjs/vitdoc"><img src="https://codeanywhere.com/img/open-in-codeanywhere-btn.svg" alt=""></a>
</p>

Based on [Vite](https://github.com/vitejs/vite), use `markdown` to write React component documentation, and automatically extract component interface definitions.

Inspired by [dumi](https://github.com/umijs/dumi)、[Histoire](https://github.com/histoire-dev/histoire)


English | [简体中文](./README_CN.md)

## Features

- **`Vite`** kernel, efficient and fast development experience.
- Using the `Markdown` writing, you can quickly write documentation for the project, automatically generate a preview, and generate documents while debugging.
- Automatically analyze `TypeScript` type definitions and generate API documentation.
- Automatically generate menu navigation based on `.md` file directory.

##### Write documentation by markdown

![Markdown](http://md.xiaobe.top/static/1.gif)

##### Extract ts interface

![TypeScript Types](http://md.xiaobe.top/static/2.gif)

## Usage & Guide

You can check out the projects in the `examples` directory for a quick start.

```bash
$ npm install -g vitdoc
$ cd ../examples/demo
$ vitdoc
```

## More Details

- [[Bilibili] Why do Vitdoc?](https://www.bilibili.com/video/BV1ad4y1A773/)
- [[Article] Increase team performance by doing components](https://juejin.cn/post/6971244304828203021)
- [[Article] Use Vite to make a react component inspiration](https://juejin.cn/post/6844904065684652045)
