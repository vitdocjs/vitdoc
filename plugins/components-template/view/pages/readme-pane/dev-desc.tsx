import lscWindowConfig from "../../utils/lscConfig";
// import HighLight from "@alife/intl-comp-highLighter";
import * as React from "react";

declare const window: any;

const { Alert } = window.antd;

export function DevDescription() {
  const host = lscWindowConfig.remotePublicPath
    .replace(/^https?:\/\/(dev.)?/, "")
    .replace(/\d+\.\d+\.\d+\/$/, "");

  const whistleStr = `/(dev.)?${host}.+/(.+)/ http://127.0.0.1:${lscWindowConfig.port}/$2`;
  const comboStr = `/g.alicdn.com/\\?\\?code/npm/@alife/intl-comp.+/ combo2://true`;

  return (
    <>
      <b className="block-title">Whistle</b>
      你可以通过以下代理规则进行该组件代理调试
      <div lang="bash">{`${whistleStr}\n${comboStr}`}</div>
      <b className="block-title">Publish</b>
      <div>
        在发布之前，请确保已经完成 <b>单元测试</b> 及{" "}
        <b>组件Props类型定义及注释</b>
      </div>
      你可以通过以下命令来进行组件自动化部署 <b>NPM</b> 及 <b>线上CDN</b>
      <div lang="bash">lsc publish</div>
      <Alert
        style={{ margin: "10px 0" }}
        message="注意：请勿手动执行 tnpm publish"
        type="warning"
      />
    </>
  );
}
