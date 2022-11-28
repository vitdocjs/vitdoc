import { useUnmount } from "ahooks";
import React from "react";
import {
  VitDocMarkdownContext,
  type VitDocMarkdownContextType,
} from "../../context";
import { useMarkdown } from "../../hooks/loaders";
import { mdRenderers } from "./renderers";

import "./index.scss";

export function MarkdownArea(props: VitDocMarkdownContextType) {
  const MarkdownContent = useMarkdown();

  const renderers = { ...mdRenderers, ...props.renderers };

  return MarkdownContent ? (
    <div className="markdown-area">
      <VitDocMarkdownContext.Provider
        value={{ context: MarkdownContent, renderers }}
      >
        <MarkdownContent.Markdown />
      </VitDocMarkdownContext.Provider>
    </div>
  ) : null;
}
