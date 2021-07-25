import * as React from "react";
import * as ReactDOM from "react-dom";
import mtopHook from "@alife/mtop-mock-hook";
import ReadmePane from "./pages/readme-pane";
import RouterSwitch from "./pages/router-switch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

mtopHook();

export function App() {
  return (
    <div style={{ display: "flex" }} className="code-box-demo">
      <RouterSwitch />
      <ReadmePane />
    </div>
  );
}

const basename = document
  .getElementsByTagName("base")[0]!
  .href.replace(location.origin, "");

ReactDOM.render(
  <Router basename={basename}>
    <Switch>
      <Route path="*">
        <App />
      </Route>
    </Switch>
  </Router>,
  document.querySelector("#component-root")
);
