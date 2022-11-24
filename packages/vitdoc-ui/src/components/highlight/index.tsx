import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-light";

import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import less from "react-syntax-highlighter/dist/esm/languages/prism/less";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";

import "./index.scss";

SyntaxHighlighter.registerLanguage("jsx", tsx);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("less", less);

interface IProps {
  /**
   * language
   */
  lang: string;

  /**
   * children string
   */
  children: string;
}

export function HighLighter({ lang, children }: IProps) {
  const [copied, setCopied] = useState(false);
  return (
    <div className={`code-pane language-${lang}`}>
      <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
        <span className="icon-copy">{copied ? "Copied !" : "Copy"}</span>
      </CopyToClipboard>
      <SyntaxHighlighter language={lang} useInlineStyles={false}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

HighLighter.registerLanguage = SyntaxHighlighter.registerLanguage;

export default HighLighter;
