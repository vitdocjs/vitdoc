declare module "virtual:vitdoc-layouts" {
  import React from "react";
  /**
   * apply for all routes
   */
  export const GlobalLayout: React.ComponentType<any>;
  /**
   * apply for doc routes
   */
  export const DocLayout: React.ComponentType<any>;
  /**
   * apply for demo routes /~demos/:id
   */
  export const DemoLayout: React.ComponentType<any>;
}

declare module "virtual:vitdoc-builtins" {
  import React from "react";

  export const DumiDemo: React.ComponentType<any>;

  export const DumiPage: React.ComponentType<any>;

  export const renderers: Record<string, React.ComponentType<any>>;
}
