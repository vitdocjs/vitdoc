import { parse } from "extract-typescript-types";
import path from "path";

const fileName = process.argv[2];

const componentDoc = parse([path.resolve(process.cwd(), fileName)]).map(
  (item) => {
    let { block, mtime, method, props, ...rest } = item;
    Object.values(props).forEach((item) => delete item.parent);
    return {
      props,
      ...rest,
    };
  }
);

process.send(componentDoc);
