import { isInlineMeta, isJsx, isTypes } from "./../../../utils/lang";
import type { Root } from "hast";
import type { Transformer } from "unified";

let visit: typeof import("unist-util-visit").visit;
let EXIT: typeof import("unist-util-visit").EXIT;
let toString: typeof import("hast-util-to-string").toString;

// workaround to import pure esm module
(async () => {
  ({ visit, EXIT } = await import("unist-util-visit"));
  ({ toString } = await import("hast-util-to-string"));
})();

/**
 * rehype plugin for extract fallback description from markdown content
 */
export function remarkCardBlock(this: any): Transformer<Root> {
  return (tree) => {
    const modules: any = [];
    let prevModules: any[] = [];
    const endBlock = () => {
      if (!prevModules.length) {
        return;
      }

      // if (prevModules.length === 1 && prevModules[0].type === "code") {
      //   modules.push(...prevModules);
      //   prevModules = [];
      //   return;
      // }

      modules.push(
        {
          type: "html",
          value: `<CardBlock type="cardBlock">`,
        },
        ...(prevModules || []).concat({
          type: "html",
          value: `</CardBlock>`,
        })
      );
      prevModules = [];
    };

    (tree.children as any[]).forEach((node) => {
      if (node.type === "thematicBreak") {
        endBlock();
        return;
      }

      if (node.type === "code" && isJsx(node.lang) && isTypes(node.value)) {
        // 类型定义
        modules.push(...prevModules, {
          ...node,
          type: "propertyCode",
        });
        prevModules = [];
        return;
      }
      prevModules.push(node);

      if (/^<code/.test(node.children?.[0]?.value)) {
        // <code .... />
        return endBlock();
      }
      if (
        node.type === "code" &&
        isJsx(node.lang) &&
        !isInlineMeta(node.meta)
      ) {
        endBlock();
        return;
      }
    });

    if (!!prevModules.length) {
      endBlock();
    }

    tree.children = modules;

    return tree;
  };
}
