import { withCustomConfig } from "extract-typescript-types";
import path from "path";
import { loadConfig } from "tsconfig-paths";

const fileName = process.argv[2];

const config = loadConfig();

const componentDoc = withCustomConfig(config.configFileAbsolutePath, {})
  .parse([path.resolve(process.cwd(), fileName)])
  .map((item) => {
    let { block, mtime, method, props, ...rest } = item;
    Object.values(props).forEach((item) => delete item.parent);
    return {
      props,
      ...rest,
    };
  });

process.send(componentDoc);
