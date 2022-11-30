import {
  ComponentArea,
  useDemo,
  useMarkdown,
  useRoute,
  useRouteMap,
} from "../";
import React from "react";
import { Route, Routes, useParams } from "react-router";
import { HashRouter as Router } from "react-router-dom";

export function Demo() {
  const { "*": index } = useParams();

  const route = useRoute()
    .route.replace(/^\/~/, "")
    .replace(new RegExp(`/${index}$`), "");

  const { data: demoInfo } = useMarkdown(route);
  const { getModule, pathHash } = demoInfo ?? {};
  const load = getModule?.(index!);

  const { data } = useDemo(load);

  if (!demoInfo || !data) {
    return null;
  }

  return (
    <ComponentArea
      pathHash={pathHash}
      content={data.content}
      renderer={data.renderer}
    />
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
