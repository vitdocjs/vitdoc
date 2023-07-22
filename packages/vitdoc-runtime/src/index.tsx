import { ReactRender } from "@vitdoc/ui";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./main";
import Pure from "./pure";

ReactRender(
  <HashRouter>
    <Routes>
      <Route path="~/*" element={<Pure />} />
      <Route path="*" element={<Main />} />
    </Routes>
  </HashRouter>,
  document.querySelector("#component-root")!
);
