import type { IParsedBlockAsset } from "dumi/dist/assetParsers/block";
import { resolveMainComponent, removeProcessCwd } from "../../../utils";

export type IDemoData = {
  id: string;
  lang?: string;
  filename: string;
  pathHash: string;
  component: string;
  asset: IParsedBlockAsset["asset"];
  sources: IParsedBlockAsset["sources"];
};

export async function transformDemo(demo: IDemoData) {
  const replaceExport = (code) => {
    const reg = /import .+ from .+;/g;

    let regRes: RegExpExecArray | null;
    let lastReg: RegExpExecArray | null;
    while ((regRes = reg.exec(code))) {
      lastReg = regRes;
    }

    const prependSetWrap = (code) =>
      `export const setWrap$ = (f, s) => {try{ s.wrap && ($_REF.wrap = s.wrap)}catch(e){}}; ${code}`;

    const codeSegment = (code) => {
      if (code.includes("export default")) {
        return prependSetWrap(code);
      }

      code = `export default function(mountNode){ ${code} };export const IS_FN_DEMO$ = true;`;

      return prependSetWrap(code);
    };

    if (!lastReg!) {
      return code;
    }

    const lastIndex: number = lastReg.index + lastReg[0].length;

    return `${code.slice(0, lastIndex)};${codeSegment(code.slice(lastIndex))}`;
  };

  function appendMeta(code: string) {
    const content = Object.values(demo.asset?.dependencies || {})[0]?.value;
    return `
      ${code}
      export const content$ = ${JSON.stringify({ value: content })};
    `;
  }

  let code = demo.component;

  if (code.includes("webpackChunkName")) {
    code = `import React,{ Suspense } from 'react';
    const DemoComponent = ${code};
    export default () => <Suspense fallback='Loading...'><DemoComponent /></Suspense>;`;
  } else {
    code = replaceExport(code);
  }

  code = appendMeta(code);

  return code;
}

export function addWrapCode(code, demo) {
  let mainModuleId = resolveMainComponent(demo.filename);

  if (!!mainModuleId) {
    mainModuleId = removeProcessCwd(mainModuleId);
  }
  const hasReactRender = /(createElement\(|jsx\()/.test(code);
  if (!hasReactRender) return code;

  const renderMethod = /React.createElement\(/.test(code)
    ? "React.createElement"
    : "jsx";

  if (renderMethod === "jsx") {
    // JSX-RUNTIME MODE
    const matchInfo = code.match(/import {(.+)jsx(.+)}([ ,])?.+?;/);
    if (!matchInfo) {
      return code;
    }
    const { index: matchedIndex, "0": matchedContent } = matchInfo;
    const index = matchedIndex + matchedContent.length;
    const before = code.slice(0, index);
    const after = code.slice(index);
    const replacedAfter = after.replace(/jsx\(/g, "jsx_vitdoc_$(");
    let wrappedReact = `var $_REF = { wrap: null };
      var jsx_vitdoc_$ = (Comp,...rest) => {
        const wrap = $_REF.wrap;
        let NextComp = Comp;

        if(Object.values($_Component).includes(NextComp) && wrap) {
          NextComp = wrap(Comp, { React: { createElement: jsx, jsx: jsx } });
        }

        return jsx(NextComp, ...rest);
      }; `;

    return `${before}
      ${mainModuleId
        ? `import * as $_Component from '${mainModuleId}';`
        : `const $_Component = {};`
      }
      ${wrappedReact}
      ${replacedAfter}
      `;
  } else {
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
      ${mainModuleId
        ? `import * as $_Component from '${mainModuleId}';`
        : `const $_Component = {};`
      }
      ${wrappedReact}
      ${after}
      `;

    return code;
  }
}
