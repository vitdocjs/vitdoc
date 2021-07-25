interface IWindowConfig {
  route: string;
  readmePath: string;
}
export const queryRE = /\?.*$/;
export const hashRE = /#.*$/;

export const cleanUrl = (url) => url.replace(hashRE, "").replace(queryRE, "");

// @ts-ignore
const pageConfig: IWindowConfig = window["pageConfig"];

export default pageConfig;
