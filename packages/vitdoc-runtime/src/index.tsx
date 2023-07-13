import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

const Pure = lazy(() => import("./pure"));
const Main = lazy(() => import("./main"));

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route
        path="~/*"
        element={
          <Suspense fallback="Loading...">
            <Pure />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback="Loading...">
            <Main />
          </Suspense>
        }
      />
    </Routes>
  </HashRouter>,
  document.querySelector("#component-root")
);
