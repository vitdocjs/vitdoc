import { MarkdownProvider, useRouteMap } from "@vitdoc/ui";
import React, { ComponentType } from "react";
import { Navigate, Route, Routes } from "react-router";
import { DumiPage, renderers } from "virtual:vitdoc-builtins";
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
                <MarkdownProvider route={route} renderers={renderers}>
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
