import { ModuleInfo, ModuleLoadError } from "./hooks/loaders";

export type RendererProps = {
  error?: ModuleLoadError;
  pathHash: string;
  value: string;
  getModule: (content: string) => ModuleInfo | undefined;
};
