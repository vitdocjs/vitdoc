import fs from "fs";
import {
  addUrlParams,
  cleanUrl,
  getAssetHash,
  getMD5,
  removeImportQuery,
  removeProcessCwd,
  resolveMainComponent,
} from "../../utils";
import { isCSSLang, isInlineMeta, isJsx } from "../../utils/lang";
import { send, transformWithEsbuild } from "vite";
import { appendTypes } from "./utils";
import { parseMarkdown } from "../../utils/markdown";
import markdownTransformer, {
  type IMdTransformerResult,
} from "dumi/dist/loaders/markdown/transformer";
import type { IMdLoaderOptions } from "dumi/dist/loaders/markdown";
import ReactTechStack from "./markdown/react-tech-statck";
import type { IThemeLoadResult } from "dumi/dist/features/theme/loader";
import { IDemoData, transformDemo } from "./demo/transform-demo";

const mdProxyRE = /markdown-proxy&id=(.+)$/;
const VIRTUAL_DEMO_KEY = "virtual:vitdoc/demo/";

export const isMarkdownProxy = (id) => mdProxyRE.test(id);
export const getDemoId = (id) => id.match(mdProxyRE)?.[1];

const mdjsx = () => {
  let markdownMap: Record<string, IDemoData> = {};
  let isBuild: boolean;

  function emit(
    this: any,
    id: string,
    opts: Pick<IThemeLoadResult, "builtins">,
    ret: IMdTransformerResult
  ) {
    const { demos, embeds, texts } = ret.meta;

    // TODO:: declare embedded files as loader dependency, for re-compiling when file changed
    // embeds!.forEach((file) => this.addDependency(file));

    demos?.forEach((file) => {
      markdownMap[file.id] = {
        filename: id,
        ...file,
      };
    });

    // import all builtin components, may be used by markdown content
    return `${Object.values(opts.builtins)
      .map((item) => `import ${item.specifier} from '${item.source}';`)
      .join("\n")}
import React from 'react';
import ReactDOM from 'react-dom';
import { DumiPage } from "${require.resolve("@vitdoc/ui")}";

const $$contentTexts = ${JSON.stringify(texts)};

function MarkdownContent({ container }) {
  return ReactDOM.render(${ret.content}, container);
}

export default MarkdownContent;
`;
  }

  return {
    name: "vite:markdown-jsx",
    config(resolvedConfig, { command }) {
      // store the resolved config
      isBuild = command === "build";
    },

    configureServer(_server) {
      const { middlewares, moduleGraph, transformRequest } = _server;

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

        try {
          const url = removeImportQuery(req.url);
          const result = await transformRequest(url);
          const readmeMod = await moduleGraph.getModuleByUrl(cleanUrl(url));
          // const mod = await moduleGraph.getModuleByUrl(url);

          // readmeMod &&
          await moduleGraph.updateModuleInfo(
            readmeMod,
            new Set([...Array.from(readmeMod.importedModules), url]),
            null,
            new Set(),
            null,
            true
          );

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

      const getMainModuleId = async () => {
        return resolveMainComponent(
          { pluginContainer: { resolveId: this.resolve } },
          id
        ).then((res) => (res ? res.id : ""));
      };

      if (isMarkdownProxy(id)) {
        const demoId = getDemoId(id);

        const demoInfo = markdownMap[demoId];

        if (!demoId || !demoInfo) {
          return null;
        }

        return transformDemo(demoInfo);
      }

      if (!/\.md$/.test(id)) {
        return;
      }

      let content = fs.readFileSync(id, "utf-8");
      const pathHash = `_${getMD5(removeProcessCwd(id))}`;

      // content = await appendTypes(id, content, getMainModuleId);

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

      const code = emit.call(
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

      return transformWithEsbuild(code, `${id}.jsx`);

      // const demos = res.meta.demos || [];
      // demos.forEach((item) => {
      //   const params = `markdown-proxy&index=${item.id}`;
      //   let moduleID = addUrlParams(id, params);
      //   isBuild &&
      //     this.emitFile({
      //       type: "chunk",
      //       id: moduleID,
      //       importer: id,
      //     });
      // });

      return { code: `export default ${JSON.stringify(res)}` };

      let moduleIds = {};
      const promises = parseMarkdown(content)
        .children.filter(({ type, meta, lang = "" }) => {
          if (type !== "code") return false;
          if (!isJsx(<string>lang) && !isCSSLang(<string>lang)) return false;

          if (isInlineMeta(meta)) return false;

          return true;
        })
        .map(async (item, index) => {
          let content = <string>item.value || "";
          let lang = item.lang;

          if (isCSSLang(lang)) {
            content = `.${pathHash}{ ${content} }`;
            if (lang === "css") {
              lang = "scss";
            }
          }

          const fileName = `${index}.${lang}`;

          markdownMap[`${file}_${fileName}`] = content;

          const params = `markdown-proxy&index=${fileName}`;
          let moduleID = addUrlParams(id, params);

          isBuild &&
            this.emitFile({
              type: "chunk",
              id: moduleID,
              importer: id,
            });

          moduleIds[index] = moduleID;

          return {
            lang,
            sourcesContent: content,
          };
        });

      const modules = await Promise.all(promises);

      const hash = getAssetHash(content);

      return {
        code: `
        const modules = {
          ${Object.entries(moduleIds).reduce(
            (prev, [k, v]) =>
              prev.concat(`${k}: function () { 
                return import('${v}').then(res => { 
                  const fn = res.default;
                  res.setWrap$?.apply(null, arguments);
                  return typeof fn === 'function' && fn.apply(null, arguments); 
                });
              },`),
            ""
          )}
        }

        const exportModules = ${JSON.stringify({
          pathHash,
          hash,
          content,
          modules,
        })}
  
        exportModules.modules.forEach((item,index)=>{
          item.load = modules[index];
        })
        
        export default exportModules;
        `,
      };
    },
  } as any;
};
export default mdjsx;
