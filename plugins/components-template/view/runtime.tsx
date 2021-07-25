import * as React from "react";
import * as ReactDOM from "react-dom";
import mtopHook from "@alife/mtop-mock-hook";
import ReadmePane from "./pages/readme-pane";
import RouterSwitch from "./pages/router-switch";

mtopHook();

ReactDOM.render(
  <div style={{ display: "flex" }} className="code-box-demo">
    <RouterSwitch />
    <ReadmePane />
  </div>,
  document.querySelector("#component-root")
);
