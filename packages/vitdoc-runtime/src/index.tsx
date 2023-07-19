import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./main";
import Pure from "./pure";

createRoot(document.querySelector("#component-root")!).render(
  <HashRouter>
    <Routes>
      <Route path="~/*" element={<Pure />} />
      <Route path="*" element={<Main />} />
    </Routes>
  </HashRouter>
);
