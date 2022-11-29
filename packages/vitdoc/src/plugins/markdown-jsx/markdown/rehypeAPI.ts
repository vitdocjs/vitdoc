import type { Root } from "hast";
import path from "path";
import type { Transformer } from "unified";
import { removeProcessCwd, resolveMainComponent } from "../../../utils";

let visit: typeof import("unist-util-visit").visit;
let SKIP: typeof import("unist-util-visit").SKIP;

(async () => {
  ({ visit, SKIP } = await import("unist-util-visit"));
})();

/**
 * rehype plugin for extract fallback description from markdown content
 */
export default function rehypeAPI(opts: {
  cwd: string;
  fileAbsPath: string;
}): Transformer<Root> {
  return async (tree, vFile: any) => {
    const markdownFile = opts.fileAbsPath;

    visit<Root, "element">(tree, "element", (node) => {
      if (node.tagName === "API") {
        if (!node.properties) {
          node.properties = {};
        }
        node.properties.src = (() => {
          let file;
          if (node.properties.src) {
            file = path.resolve(
              path.dirname(markdownFile),
              node.properties.src as string
            );
          } else {
            file = resolveMainComponent(markdownFile);
          }
          file = removeProcessCwd(file, opts.cwd);

          if (!file) return file;

          if (!file.endsWith(".type")) {
            file = file + ".type";
          }

          return file;
        })();
        node.properties.type = node.properties.type ?? `default`;

        vFile.data.apis = [...(vFile.data.apis ?? []), node.properties];

        node.JSXAttributes = [
          {
            type: "JSXAttribute",
            name: "load",
            value: `{id: '${node.properties.src}', load: () => import('${node.properties.src}') }`,
          },
        ];

        return SKIP;
      }
    });
  };
}
