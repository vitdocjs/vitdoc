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
  <a href="https://stackblitz.com/edit/vitdoc?file=src/README.md"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>
</p>

基于 [Vite](https://github.com/vitejs/vite)，使用 `markdown` 编写 React 组件文档，自动提取组件接口定义。

启发于：[dumi](https://github.com/umijs/dumi)、[Histoire](https://github.com/histoire-dev/histoire)

[English](./README_EN.md) | 简体中文

## 功能

- **`Vite`** 内核，高效极速的开发体验
- 使用 `Markdown` 写法，让你快速为项目编写说明文档的同时，自动生成预览，在调试的同时生成文档
- 自动分析 `TypeScript` 类型定义并生成 API 文档
- 自动根据 `.md` 文件目录生成菜单导航

##### 通过markdown写文档

![Markdown](http://md.xiaobe.top/static/1.gif)

##### 提取ts类型

![TypeScript Types](http://md.xiaobe.top/static/2.gif)

## 用法 & 指南

你可以查看 `examples` 目录下的项目，便于你快速开始使用。

```bash
$ npm install -g vitdoc
$ cd ../examples/demo
$ vitdoc
```

## 了解跟多

- [【哔哩哔哩】为什么做 Vitdoc ?](https://www.bilibili.com/video/BV1ad4y1A773/)
- [通过做好组件增加团队效能](https://juejin.cn/post/6844904065684652045)
- [用Vite做React组件的灵感](https://juejin.cn/post/6971244304828203021)
