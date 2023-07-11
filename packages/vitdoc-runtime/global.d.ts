declare module "virtual:vitdoc-layouts" {
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

declare module "virtual:vitdoc-builtins" {
  import React from "react";

  export const DumiDemo: React.ComponentType<any>;

  export const DumiPage: React.ComponentType<any>;

  export const renderers: Record<string, React.ComponentType<any>>;
}
