import { MarkdownProvider, useRouteMap } from "@vitdoc/ui";
import React, { ComponentType } from "react";
import { Navigate, Route, Routes } from "virtual:vitdoc-router";
import { DumiPage, renderers, DemoProvider } from "virtual:vitdoc-builtins";
import { DocLayout, GlobalLayout } from "virtual:vitdoc-layouts";

export const MainApp: ComponentType<any> = () => {
  const { tree: menuData, routes } = useRouteMap() || {};

  menuData?.forEach((item) => (item.icon = <span>📦</span>));

  if (!routes) {
    return null;
  }

  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        {routes.map((route) => {
          return (
            <Route
              key={route}
              path={route}
              element={
                <MarkdownProvider
                  key={route}
                  route={route}
                  renderers={renderers}
                  DemoProvider={DemoProvider}
                >
                  <DocLayout />
                </MarkdownProvider>
              }
            >
              <Route index element={<DumiPage />} />
            </Route>
          );
        })}
        <Route path="*" element={<Navigate to={routes[0]} replace={true} />} />
      </Route>
    </Routes>
  );
};

export default MainApp;
