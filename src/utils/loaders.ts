import { useMemo, useState } from "react";
import lscWindowConfig from "./lscConfig";
import keyBy from "lodash/keyBy";
import { getDocsSource } from "./strings";

const { route } = lscWindowConfig;

export function useAsyncImport(
  path: string | string[],
  cb = ({ default: Comp }: any) => Comp
) {
  const [Component, setComponent] = useState();

  useMemo(async () => {
    const result = await (Array.isArray(path)
      ? Promise.all(
          path.map(
            (p) =>
              import(
                /* @vite-ignore */
                p
              )
          )
        )
      : import(
          /* @vite-ignore */
          path
        ));

    const Comp = cb(result);

    setComponent(() => Comp);
  }, []);

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
    `${rootPath}/package.json`,
    ({ default: packageInfo }) => {
      return {
        packageName: packageInfo.name,
        packageVersion: packageInfo.version,
      };
    }
  );
}
