import React from "react";

export type VitDocMarkdownContextType = {
  renderers?: Record<string, React.ComponentType<any>>;
};

export const VitDocMarkdownContext = React.createContext<VitDocMarkdownContextType>({});
