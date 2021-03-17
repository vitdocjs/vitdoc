import { useEffect, useMemo, useState } from "react";
import lscWindowConfig from "./lscConfig";

const { route } = lscWindowConfig;

export function useAsyncImport(
  path: string | string[],
  cb = ({ default: Comp }: any) => Comp
) {
  const [Component, setComponent] = useState();

  useMemo(async () => {
    const result = await (Array.isArray(path)
      ? Promise.all(path.map((p) => import(p)))
      : import(path));

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

export function useDocsComponent() {
  return useAsyncImport(`${route}/docs.tsx`);
}

export function useTypeFile() {
  return useAsyncImport(`${route}/index.tsx.type.json`);
}
