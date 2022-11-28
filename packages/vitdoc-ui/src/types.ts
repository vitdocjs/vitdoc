import { ModuleInfo, ModuleLoadError } from "./hooks/loaders";

export type RendererProps = {
  error?: ModuleLoadError;
  pathHash: string;
  demoid: string;
  getModule: (content: string) => ModuleInfo | undefined;
};
