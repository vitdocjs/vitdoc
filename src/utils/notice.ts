import lscWindowConfig from "./lscConfig";

// @ts-ignore
const { notification } = window.antd;

export function errorNotice(msg: string, options?: { title?: string }) {
  console.error(msg);

  lscWindowConfig.env === "development" &&
    false &&
    notification.error({
      message: options!.title!,
      description: msg
    });
}
