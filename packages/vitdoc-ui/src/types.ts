import { ModuleInfo } from "./hooks/loaders";

export type RendererProps = {
  pathHash: string;
  value: string;
  getModule: (content: string) => ModuleInfo | undefined;
};
