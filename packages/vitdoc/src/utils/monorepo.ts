import { getPackages } from "@manypkg/get-packages";
import { memoize } from "lodash-es";
import { resolve } from "path";

export const getWorkspaceInfo = memoize((params) => {
  return getPackages(params);
});

export const isMonorepo = memoize(async (path: string) => {
  const workspaceInfo = await getWorkspaceInfo(path);
  return workspaceInfo.rootDir !== resolve(path);
});
