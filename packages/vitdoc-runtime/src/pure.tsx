import {
  ComponentArea,
  useDemo,
  useMarkdown,
  useRoute,
  useRouteMap,
} from "@vitdoc/ui";
import React from "react";
import { Route, Routes, useParams } from "react-router";
import { HashRouter as Router } from "react-router-dom";

export function Demo() {
  const { "*": index } = useParams();

  const route = useRoute()
    .route.replace(/^\/~/, "")
    .replace(new RegExp(`/${index}$`), "");

  const demoInfo = useDemo(index!, route);

  if (!demoInfo) {
    return null;
  }

  const { getModule, pathHash, value } = demoInfo;

  const { renderer } = getModule(value)!;

  return (
    <ComponentArea pathHash={pathHash} content={value} renderer={renderer} />
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
