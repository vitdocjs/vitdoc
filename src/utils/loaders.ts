import { useMemo, useState } from "react";
import lscWindowConfig, { addUrlParams, cleanUrl } from "./lscConfig";
import keyBy from "lodash/keyBy";
import { getDocsSource } from "./strings";

const { route } = lscWindowConfig;

const registryMap: Record<
  string,
  Array<(hash: string, payload?: any) => void>
> = {};
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
    const { url, hash } = payload;
    if (url in registryMap) {
      console.log(`[vite] hot updated: ${url}`);
      registryMap[url].forEach((fn) => fn(hash, payload));
    }
  });
}

export function useAsyncImport(
  path: string | string[],
  cb = ({ default: Comp }: any) => Comp
) {
  const [Component, setComponent] = useState();
  const [hash, update] = useState("");

  useMemo(async () => {
    const paths = Array.isArray(path) ? path : [path];

    const result = await Promise.all(
      paths.map((p) => {
        addRegistry(cleanUrl(p), update);
        return import(
          /* @vite-ignore */
          addUrlParams(p, { hash: `${hash}` })
        );
      })
    );

    const Comp = cb(Array.isArray(path) ? result : result[0]);

    setComponent(() => Comp);
  }, [hash]);

  return Component;
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
  const rootPath = route.replace(/(.+packages\/.+)\/.+/, "$1");
  return useAsyncImport(
    `${rootPath}/package.json?import`,
    ({ default: packageInfo }) => {
      return {
        packageName: packageInfo.name,
        packageVersion: packageInfo.version,
      };
    }
  );
}
