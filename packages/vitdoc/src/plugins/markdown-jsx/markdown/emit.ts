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

export async function transformMarkdown(this: any, { id, cwd, emitDemo }) {
  const route = removeProcessCwd(id, cwd);
  let content = fs.readFileSync(id, "utf-8");

  content = appendTypes(content, () => resolveMainComponent(id, cwd));

  const res = (await markdownTransformer(content, {
    cwd: process.cwd(),
    fileAbsPath: id,
    alias: {},
    techStacks: [new ReactTechStack()],
    extraRemarkPlugins: [remarkCardBlock],
    extraRehypePlugins: [[rehypeAPI, { cwd: process.cwd(), fileAbsPath: id }]],
    resolve: {
      docDirs: ["docs"],
      atomDirs: [{ type: "component", dir: "src" }],
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
    const { demos, texts } = ret.meta;

    // TODO:: declare embedded files as loader dependency, for re-compiling when file changed
    // embeds!.forEach((file) => this.addDependency(file));

    const pathHash = `_${getMD5(removeProcessCwd(id))}`;

    const meta = {
      filename: id,
      pathHash,
      demos: demos?.map(({ id, component: content }) => ({ id, content })),
    };

    demos?.forEach((demo) => {
      emitDemo?.(demo);
    });

    // import all builtin components, may be used by markdown content
    const code = `${Object.values(opts.builtins)
      .map((item) => `import ${item.specifier} from '${item.source}';`)
      .join("\n")}
import React from 'react';
import ReactDOM from 'react-dom';
import { DumiPage } from "${require.resolve("@vitdoc/ui")}";

const $$contentTexts = ${JSON.stringify(texts)};
export const meta$ = ${JSON.stringify(meta)};

${demos
  ?.map(
    (demo, index) =>
      `meta$.demos[${index}].load = () => import('${route}?markdown-proxy&id=${demo.id}');`
  )
  .join("\n")}


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
      builtins: {
        DumiDemo: {
          specifier: "{ DumiDemo }",
          source: require.resolve("@vitdoc/ui"),
        },
        DumiDemoGrid: {
          specifier: "{ DumiDemoGrid }",
          source: require.resolve("@vitdoc/ui"),
        },
        Link: {
          specifier: "{ Link }",
          source: require.resolve("@vitdoc/ui"),
        },
        defaultUI: {
          specifier: "{ HighLighter as SourceCode, CardBlock, Container, API }",
          source: require.resolve("@vitdoc/ui"),
        },
      },
    },
    res
  );
}
