import type { Root } from "hast";
import path from "path";
import get from "lodash/get";
import type { Transformer } from "unified";
import { removeProcessCwd, resolveMainComponent } from "../../../utils";
import { stringifyEval } from "./eval-stringify";

let visit: typeof import("unist-util-visit").visit;
let SKIP: typeof import("unist-util-visit").SKIP;

(async () => {
  ({ visit, SKIP } = await import("unist-util-visit"));
})();

/**
 * rehype plugin for extract fallback description from markdown content
 */
export default function rehypeDemo(opts: {
  cwd: string;
  fileAbsPath: string;
}): Transformer<Root> {
  return async (tree, vFile: any) => {
    function emitDemo(demoId: any) {
      const route = removeProcessCwd(opts.fileAbsPath, opts.cwd);
      const loadFile = `${route}?markdown-proxy&id=${demoId}`;

      const loadFn = `{id: '${loadFile}', load: () => import('${loadFile}') }`;

      const matchedDemo = vFile.data.demos?.find((demo) => demo.id === demoId);
      if (matchedDemo) matchedDemo.load = loadFn;

      return loadFn;
    }

    visit<Root, "element">(tree, "element", (node) => {
      if (node.tagName === "DumiDemo") {
        const demoId = get(node, 'data["$demo-prop-value-key"].demo.id', "");

        const loadFn = emitDemo(demoId);

        node.JSXAttributes = [
          ...(node.JSXAttributes || []),
          {
            type: "JSXAttribute",
            name: "load",
            value: loadFn,
          },
        ];

        return SKIP;
      }

      if (node.tagName === "DumiDemoGrid") {
        const demos = get(node, 'data["$demo-prop-value-key"]', "");
        const items = demos.map((demo) => {
          const demoId = get(demo, "demo.id", "");
          demo.load = emitDemo(demoId);

          return demo;
        });
        node.JSXAttributes = [
          {
            type: "JSXAttribute",
            name: "items",
            value: stringifyEval(items, "load"),
          },
        ];
      }
    });
  };
}
