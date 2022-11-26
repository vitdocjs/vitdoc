import React from "react";
import ReactMarkdown from "react-markdown";
import "./index.scss";
import { ComponentBlock } from "../component-area";
import { useCreation, useMemoizedFn } from "ahooks";
import { PropertyArea } from "../property-area";
import remarkFrontMatter from "remark-frontmatter";
import remarkDirective from "remark-directive";
import { remarkCodeBlock } from "./plugins";
import { mdRenderers } from "./renderers";

export function MarkdownArea({ data: res }) {
  if (!res) {
    return null;
  }

  const { modules, content, error, pathHash } = res;

  const getModule = useMemoizedFn((value) => {
    return modules.find(({ content }) => content === value);
  });

  const componentBlock = useMemoizedFn((props) => {
    const module = getModule(props.value.trim());
    if (!module) {
      return null;
    }
    return (
      <ComponentBlock
        {...props}
        error={error}
        pathHash={pathHash}
        route={module.route}
        renderer={module.renderer}
      />
    );
  });

  const propertyCode = useMemoizedFn((props) => (
    <PropertyArea {...props} renderer={getModule(props.value).renderer} />
  ));

  const markdownElements = useCreation(
    () => (
      // @ts-ignore
      <ReactMarkdown
        className="markdown-body"
        plugins={[remarkDirective, remarkFrontMatter as any, remarkCodeBlock]}
        allowDangerousHtml={true}
        renderers={{
          ...mdRenderers,
          "component-block": componentBlock,
          "property-code": propertyCode,
        }}
      >
        {content}
      </ReactMarkdown>
    ),
    [content, modules]
  );

  return <div className="markdown-area">{markdownElements}</div>;
}
