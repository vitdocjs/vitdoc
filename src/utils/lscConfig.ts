interface ILscWindowConfig {
  env: "development" | "production";
  LibraryName: string;
  route: string;
  isLibraryComponent: boolean;
  publicPath: string;
  remotePublicPath: string;
  port: string;
  packageName: string;
  packageVersion: string;
  mockPath: string;
  externals: Record<string, string | { amd: string }>;
}
export const queryRE = /\?.*$/;
export const hashRE = /#.*$/;

export const cleanUrl = (url) => url.replace(hashRE, "").replace(queryRE, "");

export const addUrlParams = (url: string, params: Record<string, string>) => {
  const paramsStr = Object.entries(params).reduce(
    (previousValue, [key, val]) => (previousValue + val ? `${key}=${val}` : ""),
    ""
  );

  if (!paramsStr) {
    return url;
  }

  return /[?|&]/.test(url) ? `${url}&${paramsStr}` : `${url}?${paramsStr}`;
};

const path = location.pathname;
const srcPath = "src";

// @ts-ignore
const lscWindowConfig: ILscWindowConfig = {
  route: `${cleanUrl(path)}/${srcPath}`,
};

export default lscWindowConfig;
