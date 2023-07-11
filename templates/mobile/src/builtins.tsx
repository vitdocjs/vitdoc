import { IframeComponentBlock } from "./iframe-component-block";
import React from "react";
import { MarkdownArea } from "@vitdoc/ui";

export { DumiDemo } from "./components/component-area";

export function DumiPage() {
  return (
    <MarkdownArea
      renderers={{
        "code-block": IframeComponentBlock,
      }}
    />
  );
}
