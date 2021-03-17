import IComponent from "./index";
import React from "react";
import ReactDOM from "react-dom";

export default function (Component: typeof IComponent, mountNode) {
  /** DOCS_START 请将Demo生成方法都写在以下区块内，用于生成README及Riddle **/

  ReactDOM.render(
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Component
        width={200}
        height={200}
        src="https://img.alicdn.com/tfs/TB1FQjmef1H3KVjSZFBXXbSMXXa-291-163.png"
      />
      <br />
      <Component
        width={400}
        height={200}
        mode={"aspectFit"}
        src="https://img.alicdn.com/tfs/TB1FQjmef1H3KVjSZFBXXbSMXXa-291-163.png"
      />
      <br />
      <Component
        width={600}
        height={200}
        mode={"aspectFill"}
        src="https://img.alicdn.com/tfs/TB1jHkBmNv1gK0jSZFFXXb0sXXa-1440-343.png"
      />
      <br />
      <Component
        width={600}
        height={200}
        mode={"aspectFill"}
        src="https://img.alicdn.com/tfs/TB1Y_XacrY1gK0jSZTEXXXDQVXa-1416-813.png"
      />
    </div>,
    mountNode
  );

  /** DOCS_END **/

  return Component;
}
