import { useMemoizedFn, useRequest } from "ahooks";
import identity from "lodash/identity";
import { useEffect } from "react";
import { useLocation, useMatch } from "react-router-dom";

declare global {
  interface Window {
    RuntimeModuleMap$: Record<string, () => Promise<any>>;
  }
}

export function useRoute() {
  const { pathname: route } = useMatch(useLocation().pathname)!;

  return { route };
}

export class ModuleLoadError extends Error {}

const loadedMap = {};
export function useLoadModule<T>(
  payload: { id: string; load: () => Promise<any> } | undefined,
  format: (data: any) => T = identity
) {
  const dealWithResult = useMemoizedFn((data) => {
    const result = format(data);

    loadedMap[payload!.id] = result;

    return result;
  });

  const actions = useRequest<T, any>(
    () => {
      return payload!.load().then((res) => {
        import("virtual:vitdoc-hmr")
          .then(({ accept }) => {
            accept?.(payload!.id).on((newModule) => {
              actions.mutate(dealWithResult(newModule));
            });
          })
          .catch(() => {});

        return dealWithResult(res);
      });
    },
    {
      ready: !!payload,
    }
  );

  actions.data = actions.data ?? (payload?.id && loadedMap[payload.id]);
  if (actions.data && !!actions.loading) {
    actions.loading = false;
  }

  return actions;
}

export function useAsyncImport<T>(
  path: string,
  cb: Parameters<typeof useLoadModule<T>>[1]
): ReturnType<typeof useLoadModule<T>> {
  return useLoadModule(
    {
      id: path,
      load:
        window.RuntimeModuleMap$[path] ??
        ((() => import(/* @vite-ignore */ path)) as any),
    },
    cb
  );
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
  }))?.data;
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
  })?.data;
}

export type ModuleInfo = {
  content: string;
  route: string;
  lang: string;
  type: "api" | "demo";
  renderer: () => any;
};
export type MarkdownResult = ReturnType<typeof useMarkdown>;

export function useDemo(load: Parameters<typeof useLoadModule>[0] | undefined) {
  const actions = useLoadModule(load, (res) => {
    const content = res.content$.value;
    const route = load!.id.replace(/(.+\.md)\?.+/, "$1");
    const demoId = load!.id.replace(/.+markdown-proxy&id=(.+)/, "$1");
    return {
      lang: "tsx",
      renderer: async (...props) => {
        res.setWrap$?.(...props);
        return res.default(...props);
      },
      content,
      route: `/~${route}/${demoId}`,
      type: "demo" as any,
    };
  });

  useEffect(actions.refresh, [load]);

  return actions;
}

export const useMarkdown = (route?: string) => {
  if (!route) {
    route = useRoute().route;
  }

  const readmeFile = route.replace(".html", ".md");

  return useAsyncImport(readmeFile, (modules) => {
    const { meta$, default: Markdown } = modules;

    return {
      pathHash: meta$?.pathHash,
      frontmatter: meta$?.frontmatter,
      Markdown,
      getModule(id: string): Parameters<typeof useDemo>[0] | undefined {
        const demo = meta$.demos.find((demo) => demo.id === id);
        if (!demo) return undefined;

        return demo.load;
      },
    };
  });
};
