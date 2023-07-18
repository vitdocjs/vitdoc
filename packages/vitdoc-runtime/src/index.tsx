import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

const Pure = lazy(() => import("./pure"));
const Main = lazy(() => import("./main"));

createRoot(document.querySelector("#component-root")!).render(
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
  </HashRouter>
);
