import RequireJS from "@alife/intl-require-js";
import lscWindowConfig from "./lscConfig";
const get = require("lodash/get");
const flatten = require("lodash/flatten");

let { externals } = lscWindowConfig;
if (Array.isArray(externals)) {
  externals = flatten(externals.map(Object.values));
}

Object.values(externals).map(external => {
  const amdName =
    typeof external === "string" ? external : get(external, "amd");

  if (amdName) {
    RequireJS.define(amdName, () => window[amdName]);
  }
});

export default RequireJS;
