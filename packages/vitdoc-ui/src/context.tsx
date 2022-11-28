import React from "react";

export type VitDocMarkdownContextType = {
  context?: any;
  renderers?: Record<string, React.ComponentType<any>>;
};

export const VitDocMarkdownContext =
  React.createContext<VitDocMarkdownContextType>({});
