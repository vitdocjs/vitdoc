import React from "react";
import {
  VitDocMarkdownContext,
  type VitDocMarkdownContextType,
} from "../../context";
import { useMarkdown } from "../../hooks/loaders";
import { mdRenderers } from "./renderers";
import classNames from "classnames";

import "./index.scss";

export function MarkdownArea(props: VitDocMarkdownContextType) {
  const { data: MarkdownContent } = useMarkdown();

  const renderers = { ...mdRenderers, ...props.renderers };

  return MarkdownContent ? (
    <div className={classNames("markdown-area", MarkdownContent.pathHash)}>
      <VitDocMarkdownContext.Provider
        value={{ context: MarkdownContent, renderers }}
      >
        <MarkdownContent.Markdown />
      </VitDocMarkdownContext.Provider>
    </div>
  ) : null;
}
