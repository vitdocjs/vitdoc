declare module "virtual:vitdoc-hmr" {
  export const accept: (file: string) => {
    emit: (newModule: any) => void;
    on: (cb: (newModule: any) => void) => () => void;
  };

  export const waitForOneFile: () => Promise<ReturnType<typeof accept>>;
}

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
