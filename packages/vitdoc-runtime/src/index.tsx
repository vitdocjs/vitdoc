import React from "react";
import ReactDOM from "react-dom";

if (/^#\/~\//.test(location.hash)) {
  // Pure mode
  import("./pure").then(({ PureDoc }) => {
    ReactDOM.render(<PureDoc />, document.querySelector("#component-root"));
  });
} else {
  import("virtual:vitdoc-template").then(({ mount }) => {
    mount({ container: document.querySelector("#component-root") });
  });
}
