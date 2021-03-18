import * as React from "react";
import * as ReactDOM from "react-dom";
import mtopHook from "@alife/mtop-mock-hook";
import ReadmePane from "./pages/readme-pane";

mtopHook();

ReactDOM.render(
  <>
    <ReadmePane />
  </>,
  document.querySelector("#lsc-comp-root")
);
