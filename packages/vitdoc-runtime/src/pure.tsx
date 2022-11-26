import { ComponentArea, useMarkdown, useRoute, useRouteMap } from "@vitdoc/ui";
import React from "react";
import { Route, Routes, useParams } from "react-router";
import { HashRouter as Router } from "react-router-dom";

export function Demo() {
  const { "*": index } = useParams();

  const route = useRoute()
    .route.replace(/^\/~/, "")
    .replace(new RegExp(`/${index}$`), "");

  const markdown = useMarkdown(route);
  if (!markdown) {
    return null;
  }

  const { pathHash, error } = markdown;

  return (
    <Routes>
      {markdown.modules
        .filter(({ type }) => type === "demo")
        .map(({ content, renderer }, index) => {
          const demoPath = `${index}`;
          return (
            <Route
              key={demoPath}
              path={demoPath}
              element={
                <ComponentArea
                  pathHash={pathHash}
                  error={error}
                  content={content}
                  renderer={renderer}
                />
              }
            />
          );
        })}
    </Routes>
  );
}

export function PureDoc() {
  let { tree: menuData, routes } = useRouteMap() || {};

  if (!routes) {
    return null;
  }

  routes = routes.map((route) => `/~${route}`);

  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route}
              path={`${route}/*`}
              element={
                <div style={{ display: "flex" }} className="code-box-demo">
                  <Demo />
                </div>
              }
            />
          );
        })}
        {/* <Route path="*" element={<Navigate to={routes[0]} replace={true} />} /> */}
      </Routes>
    </Router>
  );
}
