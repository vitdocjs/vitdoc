import { IDumiTechStack } from "dumi/dist/types";

export default class ReactTechStack implements IDumiTechStack {
  name = "react";

  isSupported(...[, lang]: Parameters<IDumiTechStack["isSupported"]>) {
    return ["jsx", "tsx"].includes(lang);
  }

  transformCode(...[raw, opts]: Parameters<IDumiTechStack["transformCode"]>) {
    return raw;
  }
}
