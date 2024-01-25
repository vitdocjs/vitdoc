import { type IMdTransformerResult } from "dumi/dist/loaders/markdown/transformer";
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
import remarkStyle from "./remarkStyle";
import jiti from "jiti";

const markdownTransformer = jiti(import.meta.url, {
  interopDefault: true,
})("dumi/dist/loaders/markdown/transformer");

export async function transformMarkdown(
  this: any,
  { id, cwd, emitDemo, builtins, alias, pluginContainer }
) {

  let content = await pluginContainer('modifyMarkdown', [fs.readFileSync(id, "utf-8"), id])

  content = appendTypes(content, () => resolveMainComponent(id, cwd));

  const res = (await markdownTransformer(content, {
    cwd: process.cwd(),
    fileAbsPath: id,
    locales: [],
    alias,
    techStacks: [new ReactTechStack()],
    extraRemarkPlugins: [
      remarkCardBlock,
      [remarkStyle, { cwd: process.cwd(), fileAbsPath: id }],
    ],
    extraRehypePlugins: [
      [rehypeAPI, { cwd: process.cwd(), fileAbsPath: id }],
      [rehypeDemo, { cwd: process.cwd(), fileAbsPath: id, emitDemo }],
    ],
    // @ts-ignore
    resolve: {
      docDirs: [],
      atomDirs: [],
      codeBlockMode: "active",
    },
    // @ts-ignore
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

    const route = removeProcessCwd(id);
    const pathHash = `_${getMD5(route)}`;

    const styles = (ret.meta.styles as any[]) ?? [];

    const meta = {
      filename: id,
      pathHash,
      frontmatter,
      demos: demos?.map((infos: any) => {
        const { asset, id } = infos as any;
        const assets: any[] = Object.values(asset?.dependencies || {});
        return { id, style: assets[0]?.value, load: infos.load };
      }),
    };

    styles?.forEach((style) => {
      emitDemo?.({
        filename: id,
        pathHash,
        ...style,
      });
    });

    demos?.forEach((demo) => {
      emitDemo?.({
        filename: id,
        pathHash,
        ...demo,
      });
    });

    // import all builtin components, may be used by markdown content
    let code = `${Object.values(opts.builtins)
      .map((item) => `import ${item.specifier} from '${item.source}';`)
      .join("\n")}
import React from 'react';

const $$contentTexts = ${JSON.stringify(texts)};
export const meta$ = ${stringifyEval(meta)};

${styles
        .map((style) => `import '${id}?markdown-proxy&id=${style.id}.scss';`)
        .join("\n")}

function MarkdownContent() {
  return ${ret.content};
}

export default MarkdownContent;
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
