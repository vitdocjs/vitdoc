import { useMemoizedFn, useSafeState } from "ahooks";
import EventEmitter from "eventemitter3";
import { useContext, useEffect, useMemo } from "react";
import { useLocation, useMatch } from "react-router-dom";
import { VitDocMarkdownContext } from "../context";

declare global {
  interface Window {
    RuntimeModuleMap$: Record<string, (cb: any) => Promise<any>>;
    HotReloadRegister$: (p: string, EventEmitter) => void;

    HMRRegisterMap$: Record<string, EventEmitter>;
  }
}

function getEventEmitter(file) {
  return window.HMRRegisterMap$[file] ?? new EventEmitter();
}

function addRegistry(file, emitter) {
  // window.HMRRegisterMap$[file] = hmrEmitter;
  window.HotReloadRegister$(file, emitter);
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
  const [Module, setModule] = useSafeState<any>();

  const emitter = getEventEmitter(path);

  const setNewModule = useMemoizedFn((newModule) => {
    const Comp = cb(newModule);
    setModule(() => Comp);
  });

  useEffect(() => {
    emitter.once("update", setNewModule);
    return () => {
      emitter.off("update", setNewModule);
    };
  }, [Module]);

  useMemo(async () => {
    try {
      const cUrl = path;

      if (!window.RuntimeModuleMap$[cUrl]) {
        window.RuntimeModuleMap$[cUrl] = (cb) => {
          cb && cb(cUrl);
          return import(/* @vite-ignore */ cUrl);
        };
      }

      const result = await window.RuntimeModuleMap$[cUrl]?.((filePath) => {
        addRegistry(filePath, emitter);
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

export function useTypeFile(typeFile, type = "default"): any {
  return useAsyncImport(typeFile, (opts) => opts[type]);
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

export const useMarkdown = (route?: string) => {
  if (useContext(VitDocMarkdownContext).context) {
    return useContext(VitDocMarkdownContext).context;
  }
  if (!route) {
    route = useRoute().route;
  }

  const readmeFile = route.replace(".html", ".md");

  const mdInfo = useAsyncImport(readmeFile, (modules) => modules);

  if (!mdInfo) {
    return undefined;
  }

  if (mdInfo.error) {
    return mdInfo;
  }

  const { meta$, default: Markdown } = mdInfo;

  return {
    pathHash: meta$?.pathHash,
    Markdown,
    getModule(id: string) {
      const demo = meta$.demos.find((demo) => demo.id === id);
      if (!demo) return undefined;

      return {
        lang: "tsx",
        renderer: (...props) =>
          demo?.load().then((res) => res.default(...props)),
        content: demo.content,
        route: `/~${route}/${id}`,
        type: "demo" as any,
      };
    },
  };
};
