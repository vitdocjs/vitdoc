import { MarkdownResult, ModuleInfo } from "./utils/loaders";
import { ReactNode } from "react";

export type RendererProps = MarkdownResult & {
  value: string;
  getModule: (content: string) => ModuleInfo | undefined;
  children?: ReactNode;
};
