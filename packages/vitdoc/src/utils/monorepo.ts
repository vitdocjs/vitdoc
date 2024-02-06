import { getPackages } from "@manypkg/get-packages";
import { memoize } from "lodash-es";

export const getWorkspaceInfo: typeof getPackages = memoize((params) => {
  return getPackages(params);
});

export const isMonorepo = memoize(async (path: string) => {
  const workspaceInfo = await getWorkspaceInfo(path);
  return workspaceInfo.rootDir !== path;
});
