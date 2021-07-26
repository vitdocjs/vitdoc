import * as React from "react";
import * as ReactDOM from "react-dom";
import mtopHook from "@alife/mtop-mock-hook";
import ReadmePane from "./pages/readme-pane";
import RouterSwitch from "./pages/router-switch";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useRouteMap } from "./utils/loaders";

mtopHook();

export function App() {
  const { routes } = useRouteMap() || {};

  if (!routes) {
    return "";
  }

  return (
    <Switch>
      {routes.map((route) => {
        return (
          <Route path={route}>
            <div style={{ display: "flex" }} className="code-box-demo">
              <RouterSwitch />
              <ReadmePane key={`${route}_readme_pane`} />
            </div>
          </Route>
        );
      })}
      <Redirect to={routes[0]} />
    </Switch>
  );
}

const basename = document
  .getElementsByTagName("base")[0]!
  .href.replace(location.origin, "");

ReactDOM.render(
  <Router basename={basename}>
    <App />
  </Router>,
  document.querySelector("#component-root")
);
