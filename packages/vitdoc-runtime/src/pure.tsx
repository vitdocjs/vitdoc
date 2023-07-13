import { MarkdownProvider, useRouteMap } from "@vitdoc/ui";
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { DumiDemo, renderers } from "virtual:vitdoc-builtins";
import { DemoLayout } from "virtual:vitdoc-layouts";

export default function PureDoc() {
  let { routes } = useRouteMap() || {};
  const { pathname } = useLocation();
  const demoId = pathname.replace(/^\/~/, "");

  if (!routes) {
    return null;
  }

  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            key={route}
            path={`${route}/*`}
            element={
              <MarkdownProvider route={route} renderers={renderers}>
                <DemoLayout />
              </MarkdownProvider>
            }
          >
            <Route
              path="*"
              element={
                <DumiDemo
                  demo={{ id: demoId }}
                  previewerProps={{
                    demoUrl: pathname,
                    pure: true,
                  }}
                />
              }
            />
          </Route>
        );
      })}
      <Route path="*" element={<Navigate to={routes[0]} replace={true} />} />
    </Routes>
  );
}
