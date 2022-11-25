import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import { PureDoc } from "./pure";

import { Renderer } from "./renderer";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="~/*" element={<PureDoc />} />
      <Route path="*" element={<Renderer />} />
    </Routes>
  </Router>,
  document.querySelector("#component-root")
);
