import React, { useEffect, useRef } from "react";
import { useMarkdown } from "../../hooks/loaders";

import "./index.scss";

export function MarkdownArea({
  renderers,
}: {
  renderers?: Record<string, React.ComponentType<any>>;
}) {
  const ref = useRef<any>();
  const renderMarkdown = useMarkdown();

  useEffect(() => {
    if (renderMarkdown) {
      renderMarkdown({ container: ref.current });
    }
  }, [renderMarkdown]);

  return <div className="markdown-area" ref={ref} />;
}
