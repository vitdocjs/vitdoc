import { getPackages } from "@manypkg/get-packages";
import { logger } from "@umijs/utils";
import { memoize } from "lodash-es";

export const getWorkspaceInfo: typeof getPackages = memoize((params) => {
  return getPackages(params);
});

export const isMonorepo = memoize(async (path: string) => {
  try {
    const workspaceInfo = await getWorkspaceInfo(path);
    return workspaceInfo.rootDir === path;
  } catch (e) {
    logger.info("Monorepo detection failed. Will use single package mode.");
    return false;
  }
});
