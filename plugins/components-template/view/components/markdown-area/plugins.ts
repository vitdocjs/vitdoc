import isEmpty from "lodash/isEmpty";
import { isJsx } from "../../../../utils/lang";

export function remarkFrontMatter() {
  return (tree, _file) => {
    const modules: any = [];
    let prevModules: any[] = [];
    (tree.children as any[]).forEach((node) => {
      if (node.type === "thematicBreak") {
        modules.push(...prevModules);
        prevModules = [];
        return;
      }
      prevModules.push(node);
      if (node.type === "code" && isJsx(node.lang)) {
        modules.push({
          type: "component-block",
          children: prevModules,
        });
        prevModules = [];
        return;
      }
    });
    if (!isEmpty(modules)) {
      tree.children = modules;
    }
    return tree;
  };
}
