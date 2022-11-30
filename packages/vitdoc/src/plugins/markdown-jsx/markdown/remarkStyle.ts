import type { Root } from "mdast";
import type { Transformer } from "unified";
import { removeProcessCwd } from "../../../utils";

let visit: typeof import("unist-util-visit").visit;
let SKIP: typeof import("unist-util-visit").SKIP;

(async () => {
  ({ visit, SKIP } = await import("unist-util-visit"));
})();

/**
 * rehype plugin for extract fallback description from markdown content
 */
export default function remarkStyle(opts: {
  cwd: string;
  fileAbsPath: string;
}): Transformer<Root> {
  const route = removeProcessCwd(opts.fileAbsPath, opts.cwd);
  return async (tree, vFile: any) => {
    visit<Root, "code">(tree, "code", (node, i, parent) => {
      if (/[ls]?css$/.test(node.lang ?? "")) {
        if (!node.meta) {
          vFile.data.styles = [
            ...(vFile.data.styles ?? []),
            {
              lang: node.lang,
              id: `${route
                .replace(/[\/\.]/g, "-")
                .replace(/^-/, "")}-style-${i}`,
              component: node.value,
            },
          ];
          parent?.children.splice(i, 1);
        }
      }
    });
  };
}
