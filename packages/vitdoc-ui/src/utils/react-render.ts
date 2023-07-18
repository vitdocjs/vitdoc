import { ReactNode } from "react";
import { createRoot } from "react-dom/client";

export function ReactRender(ele: ReactNode, root: HTMLElement) {
  createRoot(root).render(ele);
}
