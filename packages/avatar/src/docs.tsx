import React from "react";
import ReactDOM from "react-dom";
import IComponent from "./index";

export default function (Component: typeof IComponent, mountNode) {
  /** DOCS_START 请将Demo生成方法都写在以下区块内，用于生成README **/

  const props = {
    text: "Person1",
    img: "https://img.alicdn.com/tfs/TB1hS7aAi_1gK0jSZFqXXcpaXXa-400-400.jpg",
  };

  ReactDOM.render(
    <div>
      <Component {...props} />
    </div>,
    mountNode
  );

  /** DOCS_END **/
}
