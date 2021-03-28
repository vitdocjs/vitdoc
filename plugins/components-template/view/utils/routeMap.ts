import lscWindowConfig from "./lscConfig";
import { errorNotice } from "./notice";

const { LibraryName, isLibraryComponent } = lscWindowConfig;

const library: Record<string, any> = window[LibraryName];

let RouteMap = {};

if (isLibraryComponent) {
  RouteMap = Object.entries(library).reduce((prev, [key, component]) => {
    const docsPath = component.__docsPath;
    if (component.displayName !== key) {
      const msg = `[COMP] 检测到${component.displayName}.DisplayName (${key}.DisplayName)与Export的Name不同，请返回修改,否则会导致部分功能异常！`;
      errorNotice(msg, { title: "组件DisplayName异常" });
    }

    if (!docsPath) {
      return prev;
    }

    const route = docsPath.replace(/(.+)?\/docs\/(.+)\.js$/, "docs/$2");
    return Object.assign(prev, { [route]: key });
  }, {});
}

export default RouteMap;
