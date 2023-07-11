import { ComponentType, ReactNode } from "react";
import { ModuleInfo, ModuleLoadError } from "./hooks/loaders";

export type RendererProps = {
  error?: ModuleLoadError;
  title?: ReactNode;
  pathHash: string;
  demoid: string;
  getModule: (content: string) => ModuleInfo | undefined;
  DemoProvider?: ComponentType;
};
