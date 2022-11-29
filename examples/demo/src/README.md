---
title: Welcome
order: 0
---

# 快速上手

## 环境准备

:::info{title="环境准备"}
Vite 需要 [Node.js](https://nodejs.org/en/) 版本 14.18+，16+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。
:::

## 方式 1： 仓库模板初始化

你可以直接使用 [vitdoc-template](https://github.com/vitdocjs/vitdoc-template) 进行仓库初始化，访问 https://github.com/vitdocjs/vitdoc-template 了解更多。

该模板中已经为你提供一些组件和文档用法，完成初始化后即可按照以下步骤进行开发：

```bash
$ npm i
$ npm run dev
```

## 方式 2：已有项目开始

### 步骤 1：进入项目目录

```bash
cd vitdoc-starter
```

### 步骤 2：安装 vitdoc

```bash
yarn add -D vitdoc
```

### 步骤 3：在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

```json
{
  "scripts": {
    "docs:dev": "vitdoc",
    "docs:build": "vitdoc build"
  }
}
```

### 步骤 4：创建你的第一篇文档

```bash
mkdir components
echo '# Hello Vitdoc' > components/README.md
```

### 步骤 5：在本地启动服务器来开发你的文档网站

```bash
yarn docs:dev
```

---

#### Welcome to the React Component Library

```tsx
import { Title as Component } from '.';
import React from 'react';
import ReactDOM from 'react-dom';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Component
      title="Training Material"
      subTitle="Ensure that you meet our campaign criteria.\n Click on the respective image below to unlock tips on how to soar this 12.12 !"
    />
    <Component
      title="PREPARE FOR 12.12 WITH 6 KEY FOCUS"
      subTitle="Ensure that you meet our campaign criteria.<br /> Click on the respective image below to unlock tips on how to soar this 12.12 !"
    />
    <Component
      theme={{ isMobile: true }}
      title="PREPARE FOR 12.12 WITH 6 KEY FOCUS"
      subTitle="Ensure that you meet our campaign criteria.<br /> Click on the respective image below to unlock tips on how to soar this 12.12 !"
    />
  </div>
);
```
