import type { IParsedBlockAsset } from "dumi/dist/assetParsers/block";
import path from "path";
import { normalizePath, transformWithEsbuild } from "vite";
import { removeProcessCwd } from "../../../utils";

export type IDemoData = {
  filename: string;
  pathHash: string;
  id: string;
  component: string;
  asset: IParsedBlockAsset["asset"];
  sources: IParsedBlockAsset["sources"];
};

export async function transformDemo(demo: IDemoData) {
  let mainModuleId = Object.keys(demo.sources ?? {})[0] ?? "";

  if (!/^\./.test(mainModuleId)) {
    mainModuleId = `./${mainModuleId}`;
  }

  const replaceReact = (code) => {
    const matchInfo = code.match(/import React([ ,])?.+?;/);
    if (!matchInfo) {
      return code;
    }
    const { index: matchedIndex, "0": matchedContent } = matchInfo;
    const index = matchedIndex + matchedContent.length;
    const before = code.slice(0, index);
    const after = code.slice(index);

    const reactCode = before.replace(/import React([ ,])?/, (d, matchInfo) => {
      return `import React$${matchInfo}`;
    });

    let wrappedReact = `
      const React = {...React$};

      const beforeCreateElement = React.createElement;
      var $_REF = { wrap: null };
      React.createElement = (Comp,...rest) => {
        const wrap = $_REF.wrap;
        let NextComp = Comp;

        if(Object.values($_Component).includes(NextComp) && wrap) {
          NextComp = wrap(Comp, { React: React$ });
        }

        return beforeCreateElement(NextComp, ...rest);
      }; `;

    return `${reactCode}
      ${
        mainModuleId
          ? `import * as $_Component from '${mainModuleId}';`
          : `const $_Component = {};`
      }
      ${wrappedReact}
      ${after}
      `;
  };

  const replaceExport = (code) => {
    const reg = /import .+ from .+;/g;

    let regRes: RegExpExecArray | null;
    let lastReg: RegExpExecArray | null;
    while ((regRes = reg.exec(code))) {
      lastReg = regRes;
    }

    const prependSetWrap = (code) =>
      `export const setWrap$ = (f, s) => s.wrap && ($_REF.wrap = s.wrap); ${code}`;

    const codeSegment = (code) => {
      if (code.includes("export default")) {
        return prependSetWrap(code);
      }

      code = `export default function(mountNode){ ${code} };`;

      return prependSetWrap(code);
    };

    if (!lastReg!) {
      return code;
    }

    const lastIndex: number = lastReg.index + lastReg[0].length;

    return `${code.slice(0, lastIndex)};${codeSegment(code.slice(lastIndex))}`;
  };

  function appendMeta(code: string) {
    return `
      ${code}
      export const content$ = ${JSON.stringify({ value: demo.component })};
    `;
  }

  let code = demo.component;

  if (code.includes("webpackChunkName")) {
    code = `import React,{ Suspense } from 'react';
    const DemoComponent = ${code};
    export default () => <Suspense fallback='Loading...'><DemoComponent /></Suspense>;`;
  } else {
    code = replaceReact(code);
    code = replaceExport(code);
    code = appendMeta(code);
  }

  return transformWithEsbuild(code, `${demo.filename}.tsx`, {
    sourcefile: demo.filename,
  });
}
