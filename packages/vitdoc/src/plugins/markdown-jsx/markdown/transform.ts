import markdownTransformer, {
  type IMdTransformerResult,
} from "dumi/dist/loaders/markdown/transformer";
import fs from "fs";
import ReactTechStack from "./react-tech-statck";

import type { IThemeLoadResult } from "dumi/dist/features/theme/loader";
import { transformWithEsbuild } from "vite";
import { getMD5, removeProcessCwd, resolveMainComponent } from "../../../utils";
import { remarkCardBlock } from "./remarkCardBlock";
import rehypeAPI from "./rehypeAPI";
import { appendTypes } from "../utils";
import rehypeDemo from "./rehypeDemo";
import { stringifyEval } from "./eval-stringify";

export async function transformMarkdown(
  this: any,
  { id, cwd, emitDemo, builtins }
) {
  const route = removeProcessCwd(id, cwd);
  let content = fs.readFileSync(id, "utf-8");

  content = appendTypes(content, () => resolveMainComponent(id, cwd));

  const res = (await markdownTransformer(content, {
    cwd: process.cwd(),
    fileAbsPath: id,
    alias: {},
    techStacks: [new ReactTechStack()],
    extraRemarkPlugins: [remarkCardBlock],
    extraRehypePlugins: [
      [rehypeAPI, { cwd: process.cwd(), fileAbsPath: id }],
      [rehypeDemo, { cwd: process.cwd(), fileAbsPath: id, emitDemo }],
    ],
    resolve: {
      docDirs: [],
      atomDirs: [],
      codeBlockMode: "active",
    },
    routers: {},
  })) as IMdTransformerResult;

  function emit(
    this: any,
    id: string,
    opts: Pick<IThemeLoadResult, "builtins">,
    ret: IMdTransformerResult
  ) {
    const { demos, texts, frontmatter } = ret.meta;

    // TODO:: declare embedded files as loader dependency, for re-compiling when file changed
    // embeds!.forEach((file) => this.addDependency(file));

    const pathHash = `_${getMD5(removeProcessCwd(id))}`;

    const meta = {
      filename: id,
      pathHash,
      frontmatter,
      demos: demos?.map((infos: any) => {
        const { asset, id } = infos as any;
        const assets: any[] = Object.values(asset?.dependencies || {});
        return { id, content: assets[0]?.value, load: infos.load };
      }),
    };

    demos?.forEach((demo) => {
      emitDemo?.({
        filename: id,
        pathHash,
        ...demo,
      });
    });

    // import all builtin components, may be used by markdown content
    const code = `${Object.values(opts.builtins)
      .map((item) => `import ${item.specifier} from '${item.source}';`)
      .join("\n")}
import React from 'react';
import ReactDOM from 'react-dom';

const $$contentTexts = ${JSON.stringify(texts)};
export const meta$ = ${stringifyEval(meta)};


function MarkdownContent() {
  return ${ret.content};
}

export default MarkdownContent;

if(import.meta.hot) {
	import.meta.hot.accept((newModule)=>{
		globalThis.$VitDocUpdateHMRNewModule$?.("${route}", newModule);
	});
}

`;

    return transformWithEsbuild(code, `${id}.jsx`);
  }

  return emit.call(
    this,
    id,
    {
      builtins,
    },
    res
  );
}
