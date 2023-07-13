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


export interface IPreviewerProps {
  /**
   * title of current demo
   */
  title?: string;
  /**
   * description of current demo
   */
  description?: string;
  /**
   * filename of current demo
   */
  filename?: string;
  /**
   * use iframe to render demo
   */
  iframe?: boolean | number;
  /**
   * debug mark (will only render in dev by default)
   */
  debug?: boolean;
  /**
   * url for render current demo in a single page
   */
  demoUrl: string;
  /**
   * disable demo content padding
   */
  compact?: boolean;
  /**
   * add transform property for handle absolute/fixed position element
   */
  transform?: boolean;
  /**
   * background color for demo content
   */
  background?: string;
  [key: string]: any;
}