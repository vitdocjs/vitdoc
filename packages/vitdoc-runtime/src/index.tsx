import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { useRouteMap } from "@vitdoc/ui";

const DumiPage = React.lazy(() =>
  import("virtual:vitdoc-builtins").then((r) => {
    return {
      default: () => <r.DumiPage renderers={r.renderers} />,
    };
  })
);

if (/^#\/~\//.test(location.hash)) {
  // Pure mode
  import("./pure").then(({ PureDoc }) => {
    ReactDOM.render(<PureDoc />, document.querySelector("#component-root"));
  });
} else {
  const App = ({ GlobalLayout, DocLayout }) => {
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
              <Route key={route} path={route} element={<DocLayout />}>
                <Route
                  index
                  element={
                    <Suspense fallback="Loading...">
                      <DumiPage />
                    </Suspense>
                  }
                />
              </Route>
            );
          })}
          <Route
            path="*"
            element={<Navigate to={routes[0]} replace={true} />}
          />
        </Route>
      </Routes>
    );
  };

  import("virtual:vitdoc-layouts").then((components) => {
    ReactDOM.render(
      <HashRouter>
        <App {...components} />
      </HashRouter>,
      document.querySelector("#component-root")
    );
  });
}
