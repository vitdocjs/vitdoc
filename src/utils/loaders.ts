import { createContext, useContext, useMemo, useState } from "react";
import lscWindowConfig, { addUrlParams, cleanUrl } from "./lscConfig";
import keyBy from "lodash/keyBy";
import { getDocsSource } from "./strings";
import { runEsModuleCode } from "./esmodule";

const { route } = lscWindowConfig;

const registryMap: Record<string, Array<(payload?: any) => void>> = {};
const registryHashMap: Record<string, any> = {};
function addRegistry(p, fn) {
  if (!registryMap[p]) {
    registryMap[p] = [];
  }
  registryMap[p].push(fn);
}

// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.on("packages-update", (payload) => {
    const { url, ...restPayload } = payload;

    if (url in registryMap) {
      console.log(`[vite] hot updated: ${url}`);
      registryMap[url].forEach((fn) => {
        registryHashMap[url] = restPayload;
        fn(restPayload);
      });
    }
  });
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
          addRegistry(cleanUrl(p), update);
          const hashParams = registryHashMap[p] || {};
          return import(
            /* @vite-ignore */
            addUrlParams(p, hashParams)
          );
        })
      );

      const Comp = cb(Array.isArray(path) ? result : result[0]);

      setModule(() => Comp);
    } catch (e) {
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
    `${route}/index.tsx.type.json`,
    ({ default: properties }) => {
      const { default: compProps } = keyBy(properties, "exportName");
      return compProps;
    }
  );
}

export function useComponentInfo(): any {
  return useAsyncImport(`/package.json?import`, ({ default: packageInfo }) => {
    return {
      packageName: packageInfo.name,
      packageVersion: packageInfo.version,
    };
  });
}

export const RendererContext = createContext<{
  renderIndex?: number;
  setRenderIndex: (index: number) => void;
}>({
  setRenderIndex: () => {},
});

let moduleMaps = {};
export function useMarkdown() {
  const { renderIndex, setRenderIndex } = useContext(RendererContext);

  const results: any = useAsyncImport(
    /\.md$/.test(location.pathname) ? location.pathname : `${route}/README.md`,
    ({ default: packageInfo }) => {
      return packageInfo;
    }
  );

  if (results?.error) {
    return results;
  }

  let moduleMap = moduleMaps[results?.hash];

  if (!moduleMap && results) {
    moduleMap = results.modules.reduce(
      (previousValue, currentValue) =>
        Object.assign(previousValue, {
          [currentValue.sourcesContent.trim()]: () => {
            runEsModuleCode(currentValue.code);
          },
        }),
      {}
    );
    moduleMaps = { [results.hash]: moduleMap };
    if (renderIndex === undefined) {
      setRenderIndex(0);
    }
  }

  if (!results) {
    return null;
  }

  const renderer = Object.values(moduleMap)?.[renderIndex || 0];

  return {
    content: results.content,
    moduleMap,
    renderer: renderer,
    setRenderIndex: setRenderIndex,
  };
}
