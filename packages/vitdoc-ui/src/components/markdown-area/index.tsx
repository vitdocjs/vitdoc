import { useCreation, useMemoizedFn } from "ahooks";
import mapValues from "lodash/mapValues";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkDirective from "remark-directive";
import remarkFrontMatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { MarkdownResult } from "../../utils/loaders";
import { ComponentBlock } from "../component-area";
import { PropertyArea } from "../property-area";
import { remarkCodeBlock } from "./plugins";
import { mdRenderers } from "./renderers";

import "./index.scss";

export function MarkdownArea({
  data: res,
  renderers,
}: {
  data: MarkdownResult;
  renderers?: Record<string, React.ComponentType<any>>;
}) {
  if (!res) {
    return null;
  }

  const { modules, content } = res;

  const getModule = useMemoizedFn((value) => {
    return modules.find(({ content }) => content === value);
  });

  const nextRenderers = useCreation(() => {
    return mapValues(
      {
        ...mdRenderers,
        "component-block": ComponentBlock,
        "property-code": (props) => (
          <PropertyArea
            {...props}
            renderer={getModule(props.value)?.renderer}
          />
        ),
        ...renderers,
      },
      (fn) => (props) => fn({ ...props, modules, getModule })
    );
  }, [renderers]);

  const markdownElements = useCreation(
    () => (
      // @ts-ignore
      <ReactMarkdown
        className="markdown-body"
        plugins={[
          remarkDirective,
          remarkGfm,
          remarkFrontMatter as any,
          remarkCodeBlock,
        ]}
        allowDangerousHtml={true}
        renderers={nextRenderers}
      >
        {content}
      </ReactMarkdown>
    ),
    [content, modules]
  );

  return <div className="markdown-area">{markdownElements}</div>;
}
