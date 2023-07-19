import React, { ReactNode, useContext } from "react";
import {
  VitDocMarkdownContext,
  type VitDocMarkdownContextType,
} from "../../context";
import { useMarkdown } from "../../hooks/loaders";
import { mdRenderers } from "./renderers";
import classNames from "classnames";

import "./index.scss";

export function MarkdownArea() {
  const MarkdownContent = useContext(VitDocMarkdownContext);
  return <MarkdownContent.context.Markdown />;
}

export function MarkdownProvider(
  props: Pick<VitDocMarkdownContextType, "renderers" | "DemoProvider"> & {
    route?: string;
    children: ReactNode;
  }
) {
  const { data: MarkdownContent } = useMarkdown(props.route);

  const renderers = { ...mdRenderers, ...props.renderers };

  return MarkdownContent ? (
    <div className={classNames("markdown-area", MarkdownContent.pathHash)}>
      <VitDocMarkdownContext.Provider
        value={{
          context: MarkdownContent,
          renderers,
          DemoProvider: props.DemoProvider,
        }}
      >
        {props.children}
      </VitDocMarkdownContext.Provider>
    </div>
  ) : null;
}
