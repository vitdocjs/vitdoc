import { useMemo, useState } from "react";
import { cleanUrl } from "./config";
import keyBy from "lodash/keyBy";
import { isCSSLang, isJsx } from "../../../utils/lang";
import { useRouteMatch } from "react-router-dom";

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
  const { url: route } = useRouteMatch();

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
      const cUrl = cleanUrl(path);

      if (!window.RuntimeModuleMap$[cUrl]) {
        throw `'${cUrl}' is not in runtime module map...`;
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

  const typeFile = route.replace(".md", ".tsx.type$.json");

  return useAsyncImport(typeFile, ({ default: properties }) => {
    const { default: compProps } = keyBy(properties, "exportName");
    return compProps || properties?.[0];
  });
}

export function useRouteMap(): any {
  return useAsyncImport(`/route-map.json`);
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

export function useMarkdown() {
  const [renderIndex, setRenderIndex] = useState(0);

  const { route } = useRoute();

  const readmeFile = route.replace(".html", ".md");

  const results: any = useAsyncImport(
    readmeFile,
    ({ default: packageInfo }) => {
      return packageInfo;
    }
  );

  if (results?.error) {
    return results;
  }

  let moduleMap;
  if (results) {
    const styleModules = results.modules.filter(({ lang }) => isCSSLang(lang));
    moduleMap = results.modules.reduce((previousValue, currentValue) => {
      if (!isJsx(currentValue.lang)) {
        return previousValue;
      }
      return Object.assign(previousValue, {
        [currentValue.sourcesContent.trim()]: () => {
          currentValue.load();
          styleModules.forEach((mod) => {
            mod.load();
          });
        },
      });
    }, {});

    if (renderIndex === undefined) {
      setRenderIndex(0);
    }
  }

  if (!results) {
    return null;
  }

  const renderer = Object.values(moduleMap)?.[renderIndex || 0];

  let error: ModuleLoadError | undefined;

  return {
    error,
    content: results.content,
    moduleMap,
    renderer,
    setRenderIndex: setRenderIndex,
  };
}
