<p align="center">
  <a href="https://vitdocjs.github.io" target="_blank" rel="noopener noreferrer">
    <img src="./logo.svg" alt="Logo for project">
  </a>
</p>

<br/>
<p align="center">
    <a href="https://npmjs.com/package/vitdoc"><img src="https://img.shields.io/npm/v/vitdoc.svg" alt="npm package"></a>
    <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vitdoc.svg" alt="node compatibility"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/%3C/%3E-TypeScript-0072C4.svg" alt="TypeScript"></a>
    <a href="http://npmjs.com/vitdoc"><img src="http://img.shields.io/npm/dm/vitdoc.svg?style=flat-square" alt="NPM Downloads"></a>
</p>

<p align="center">
  <a href="https://stackblitz.com/edit/vitejs-vite-9ljkzv?file=src%2FREADME.md"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>
</p>

基于 [Vite](https://github.com/vitejs/vite)，使用 `markdown` 编写 React 组件文档，自动提取组件接口定义。

启发于：[dumi](https://github.com/umijs/dumi)、[Histoire](https://github.com/histoire-dev/histoire)

[English](./README_EN.md) | 简体中文

## Features

- **`Vite`** 内核，高效极速的开发体验
- 使用 `Markdown` 写法，让你快速为项目编写说明文档的同时，自动生成预览，在调试的同时生成文档
- 自动分析 `TypeScript` 类型定义并生成 API 文档
- 自动根据 `.md` 文件目录生成菜单导航

##### Markdown

![Markdown](http://md.xiaobe.top/static/1.gif)

##### TypeScript Types

![TypeScript Types](http://md.xiaobe.top/static/2.gif)

## Usage & Guide

你可以查看 `examples` 目录下的项目，便于你快速开始使用。

```bash
$ npm install -g vitdoc
$ cd ../examples/demo
$ vitdoc
```

## More Details

- [【Video: 早早聊】如何使用 Vite 高效打造团队组件资产](https://www.bilibili.com/video/BV1ad4y1A773/)
- [Vite + React 组件开发深入实践](https://juejin.cn/post/6971244304828203021)
- [这一年我的对组件的思考](https://juejin.cn/post/6844904065684652045)
