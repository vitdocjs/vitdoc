import React from "react";
import ReactDOM from "react-dom";
import ReadmePane from "./pages/readme-pane";
import RouterSwitch from "./pages/router-switch";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useRouteMap } from "./utils/loaders";

import "antd/dist/antd.min.css";

export function App() {
  const { routes } = useRouteMap() || {};

  if (!routes) {
    return null;
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

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#component-root")
);
