import type { IThemeLoadResult } from "dumi/dist/features/theme/loader";
import markdownTransformer, {
  type IMdTransformerResult,
} from "dumi/dist/loaders/markdown/transformer";
import fs from "fs";
import { ModuleGraph, Plugin } from "vite";
import { send, transformWithEsbuild } from "vite";
import {
  addUrlParams,
  cleanUrl,
  getAssetHash,
  getMD5,
  removeImportQuery,
  removeProcessCwd,
} from "../../utils";
import { isCSSLang, isInlineMeta, isJsx } from "../../utils/lang";
import { parseMarkdown } from "../../utils/markdown";
import { IDemoData, transformDemo } from "./demo/transform-demo";
import ReactTechStack from "./markdown/react-tech-statck";

const mdProxyRE = /markdown-proxy&id=(.+)$/;
const VIRTUAL_DEMO_KEY = "virtual:vitdoc/demo/";

export const isMarkdownProxy = (id) => mdProxyRE.test(id);
export const getDemoId = (id) => id.match(mdProxyRE)?.[1];

const mdjsx = () => {
  let markdownMap: Record<string, IDemoData> = {};
  let isBuild: boolean;
  let moduleGraph: ModuleGraph;

  function emit(
    this: any,
    id: string,
    opts: Pick<IThemeLoadResult, "builtins">,
    ret: IMdTransformerResult
  ) {
    const { demos, embeds, texts } = ret.meta;

    if (moduleGraph) {
      // moduleGraph.updateModuleInfo
    }

    // TODO:: declare embedded files as loader dependency, for re-compiling when file changed
    // embeds!.forEach((file) => this.addDependency(file));

    const pathHash = `_${getMD5(removeProcessCwd(id))}`;

    demos?.forEach((file) => {
      markdownMap[file.id] = {
        pathHash,
        filename: id,
        ...file,
      };
    });

    // import all builtin components, may be used by markdown content
    const code = `${Object.values(opts.builtins)
      .map((item) => `import ${item.specifier} from '${item.source}';`)
      .join("\n")}
import React from 'react';
import ReactDOM from 'react-dom';
import { DumiPage } from "${require.resolve("@vitdoc/ui")}";

const $$contentTexts = ${JSON.stringify(texts)};

function MarkdownContent() {
  return ${ret.content};
}

export default MarkdownContent;
`;

    return transformWithEsbuild(code, `${id}.jsx`);
  }

  return {
    name: "vite:markdown-jsx",
    config(resolvedConfig, { command }) {
      // store the resolved config
      isBuild = command === "build";
    },

    configureServer(_server) {
      const { middlewares, transformRequest } = _server;
      moduleGraph = _server.moduleGraph;

      middlewares.use(async (req, res, next) => {
        if (
          req.method !== "GET" ||
          (req.headers.accept || "").includes("text/html")
        ) {
          return next();
        }

        if (!isMarkdownProxy(req.url)) {
          return next();
        }

        return next();

        try {
          // const url = removeImportQuery(req.url);
          // const result = await transformRequest(url);
          // const mod = await moduleGraph.getModuleByUrl(req.url!);
          // mod &&
          //   moduleGraph.updateModuleInfo(
          //     mod,
          //     mod.importedModules,
          //     mod.importedBindings,
          //     new Set(),
          //     null,
          //     true
          //   );
          // return send(req, res, result.code, "js", {});
          const readmeMod = await moduleGraph.getModuleByUrl(cleanUrl(url));
          // const mod = await moduleGraph.getModuleByUrl(url);

          readmeMod &&
            (await moduleGraph.updateModuleInfo(
              readmeMod,
              new Set([...Array.from(readmeMod.importedModules), url]),
              null,
              new Set(),
              null,
              true
            ));

          return send(req, res, result.code, "js", {});
        } catch (e) {
          console.error(e);
          res.end();
        }
      });
    },

    async resolveId(id) {
      if (isMarkdownProxy(id)) {
        return id;
      }
      if (/\.md/.test(id)) {
        return id;
      }
    },
    async load(id) {
      const file = cleanUrl(id);

      if (isMarkdownProxy(id)) {
        const demoId = getDemoId(id);

        let demoInfo = markdownMap[demoId];

        if (!demoInfo) {
          await emitMarkdown.call(this, file, emit);
          demoInfo = markdownMap[demoId];
        }

        if (!demoId || !demoInfo) {
          return null;
        }

        const demoCode = await transformDemo(demoInfo);

        return demoCode;
      }

      if (!/\.md$/.test(id)) {
        return;
      }

      return emitMarkdown.call(this, id, emit);
    },
    async handleHotUpdate({ file, modules }) {
      modules[0].importers;
      console.log(
        "🚀 #### ~ handleHotUpdate ~ modules[0].importers",
        modules[0].importers
      );
    },

    transform(code, id) {
      if (!moduleGraph) {
        return;
      }
      if (isMarkdownProxy(id)) {
        const mod = moduleGraph.getModuleById(id);
        // @ts-ignore
      }
    },
  } as Plugin;
};
export default mdjsx;
async function emitMarkdown(this: any, id: any, emit) {
  let content = fs.readFileSync(id, "utf-8");

  const res = (await markdownTransformer(content, {
    cwd: process.cwd(),
    fileAbsPath: id,
    alias: {},
    techStacks: [new ReactTechStack()],
    resolve: {
      docDirs: ["docs"],
      atomDirs: [{ type: "component", dir: "src" }],
      codeBlockMode: "active",
    },
    routers: {},
  })) as IMdTransformerResult;

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
      },
    },
    res
  );
}
