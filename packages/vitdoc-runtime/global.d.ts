
declare module "virtual:vitdoc-template" {
  import React from "react";
  /**
   * apply for all routes
   */
  export const GlobalLayout: () => React.ReactNode;
  /**
   * apply for doc routes
   */
  export const DocLayout: () => React.ReactNode;
  /**
   * apply for demo routes /~demos/:id
   */
  export const DemoLayout: () => React.ReactNode;
}
