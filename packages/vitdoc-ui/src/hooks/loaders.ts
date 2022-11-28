import { useEffect, useMemo, useRef, useState } from "react";
import { cleanUrl } from "../utils/config";
import { isCSSLang, isJsx, isTypes } from "../utils/lang";
import { useLocation, useMatch, useMatches } from "react-router-dom";

declare global {
  interface Window {
    RuntimeModuleMap$: Record<string, (cb: any) => Promise<any>>;
    HotReloadRegister$: (p: string, cb: () => void) => void;
  }
}

function addRegistry(file, fn) {
  window.HotReloadRegister$?.(file, fn);
}

export function useRoute() {
  const { pathname: route } = useMatch(useLocation().pathname)!;

  return { route };
}

export class ModuleLoadError extends Error {}

export function useAsyncImport(
  path: string,
  cb = ({ default: Comp }: any) => Comp
) {
  const [Module, setModule] = useState<any>();

  useMemo(async () => {
    try {
      const setNewModule = (newModule) => {
        const Comp = cb(newModule);
        setModule(() => Comp);
      };
      const cUrl = path;

      if (!window.RuntimeModuleMap$[cUrl]) {
        window.RuntimeModuleMap$[cUrl] = (cb) => {
          cb && cb(cUrl);
          return import(/* @vite-ignore */ cUrl);
        };
        // throw `'${cUrl}' is not in runtime module map...`;
      }

      const result = await window.RuntimeModuleMap$[cUrl]?.((filePath) => {
        addRegistry(filePath, setNewModule);
      });

      setNewModule(result);
    } catch (e) {
      console.error(`Load module ${path} error:`, e);
      setModule({
        error: new ModuleLoadError(
          [
            `Please make sure follow files exist in your project`,
            `-  ${path}`,
          ].join("\n")
        ),
      });
    }
  }, [path]);

  return Module;
}

export function useTypeFile(): any {
  const { route } = useRoute();

  const typeFile = route.replace(".md", ".tsx.type");

  return useAsyncImport(typeFile, ({ default: property }) => {
    return property;
  });
}

export function useRouteMap(): any {
  const flatRouteMap = (tree) => {
    const result: any[] = [];
    tree.forEach((child) => {
      if (Array.isArray(child.children)) {
        result.push(...flatRouteMap(child.children));
      } else {
        result.push(child);
      }
    });
    return result;
  };
  return useAsyncImport(`/route-map.json`, ({ default: items }) => ({
    ...items,
    flattenRoutes: flatRouteMap(items.tree),
  }));
}

export function useComponentInfo(): any {
  return useAsyncImport(`/package.json`, ({ default: packageInfo }) => {
    const packageName = packageInfo.name;
    const packageVersion = packageInfo.version;
    const registry = (
      packageInfo.publishConfig?.registry || "https://npmjs.com"
    ).replace("registry.", "");
    return {
      packageName,
      packageVersion,
      registry,
      npmLink: `${registry}/package/${packageName}/v/${packageVersion}`,
      logo: packageInfo.componentConfig?.logo,
    };
  });
}

export type ModuleInfo = {
  content: string;
  route: string;
  lang: string;
  type: "api" | "demo";
  renderer: () => any;
};
export type MarkdownResult = ReturnType<typeof useMarkdown>;

export const useDemo = (id: string, route?: string) => {
  if (!route) {
    route = location.hash.replace("#", "");
  }
  // const readmeFile = route.replace(".html", ".md");

  const results: any = useAsyncImport(`${route}?markdown-proxy&id=${id}`);

  return results;
};

export const useMarkdown = (route?: string) => {
  if (!route) {
    route = useRoute().route;
  }

  const readmeFile = route.replace(".html", ".md");

  const results: any = useAsyncImport(readmeFile);

  return results;
};
