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

const path = "/packages/Image/index.html";
const srcPath = "src";

// @ts-ignore
const lscWindowConfig: ILscWindowConfig = {
  route: cleanUrl(path).replace(/\/[^/]+?$/, `/${srcPath}`),
};

export default lscWindowConfig;
