import { createContext, useContext, useMemo, useState } from "react";
import lscWindowConfig, { cleanUrl } from "./lscConfig";
import keyBy from "lodash/keyBy";
import { getDocsSource } from "./strings";
import { isCSSLang, isJsx } from "../../../utils/lang";

const { route } = lscWindowConfig;

declare global {
  interface Window {
    pageConfig?: { route?: string; readmePath?: string };
    RuntimeLoadMap$: Record<string, Promise<any>>;
    RegistryMap$: (p: string, cb: () => void) => void;
  }
}

function addRegistry(p, fn) {
  if (!!window.RegistryMap$) {
    window.RegistryMap$(p, fn);
  }
}

export class ModuleLoadError extends Error {}

export function useAsyncImport(
  path: string | string[],
  cb = ({ default: Comp }: any) => Comp
) {
  const [Module, setModule] = useState<any>();
  const [params, update] = useState({});

  useMemo(async () => {
    const paths = Array.isArray(path) ? path : [path];

    try {
      const result = await Promise.all(
        paths.map((p) => {
          const cUrl = cleanUrl(p);
          addRegistry(cUrl, update);
          if (!window.RuntimeLoadMap$[cUrl]) {
            console.error(
              `Load Module '${p}' not defined in window.RuntimeLoadMap$. `
            );
          }
          // @ts-ignore
          return window.RuntimeLoadMap$[cUrl];
        })
      );

      const Comp = cb(Array.isArray(path) ? result : result[0]);

      setModule(() => Comp);
    } catch (e) {
      console.error(`Load module ${paths.join(",")} error:`, e);
      setModule({
        error: new ModuleLoadError(
          [
            `Please make sure follow files exist in your project`,
            ...paths.map((path) => `   -  ${path}`),
          ].join("\n")
        ),
      });
    }
  }, [params]);

  return Module;
}

export function useComponents() {
  return useAsyncImport(
    [`${route}/index.tsx`, `${route}/docs.tsx`],
    (results) => {
      return results.map(({ default: C }) => C);
    }
  );
}

export function useRealComponent() {
  return useAsyncImport(`${route}/index.tsx`);
}

export function useDocsSourceCode(split: string = "") {
  const raw: any = useAsyncImport(`${route}/docs.tsx?raw`);

  if (!raw) {
    return;
  }

  const content = split ? raw.split(split)[1] : raw;

  return getDocsSource(content);
}

export function useDocsComponent() {
  return useAsyncImport(`${route}/docs.tsx`);
}

export function useTypeFile(): any {
  return useAsyncImport(
    `${route}/index.tsx.jsxType.json`,
    ({ default: properties }) => {
      const { default: compProps } = keyBy(properties, "exportName");
      return compProps || properties[0];
    }
  );
}

export function useRouteMap(): any {
  return useAsyncImport(`/route-map`);
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
      npmLink: `${registry}/${packageName}@${packageVersion}`,
      logo: packageInfo.componentConfig?.logo,
    };
  });
}

export const RendererContext = createContext<{
  renderIndex?: number;
  setRenderIndex: (index: number) => void;
}>({
  setRenderIndex: () => {},
});

let moduleMap;
let moduleCache;
export function useMarkdown() {
  const { renderIndex, setRenderIndex } = useContext(RendererContext);

  const results: any = useAsyncImport(
    window.pageConfig?.readmePath || location.pathname.replace(".html", ".md"),
    ({ default: packageInfo }) => {
      return packageInfo;
    }
  );

  if (results?.error) {
    return results;
  }

  // let moduleMap = moduleMaps[results?.hash];

  if (results && results !== moduleCache) {
    moduleCache = results;
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
  if (!results?.modules?.length) {
    error = new ModuleLoadError(
      "You should add some code block in your .md file.\n Support `jsx` or `tsx` language for now."
    );
  }

  return {
    error,
    content: results.content,
    moduleMap,
    renderer: renderer,
    setRenderIndex: setRenderIndex,
  };
}
