const { parse } = require("extract-typescript-types");
const path = require("path");
const mapValues = require("lodash/mapValues");

const fileName = process.argv[2];

const componentDoc = parse([path.resolve(process.cwd(), fileName)]).map(
  (item) => {
    let { block, mtime, method, props, ...rest } = item;
    props = mapValues(props, ({ parent, ...rest }) => rest);
    return {
      props,
      ...rest,
    };
  }
);

process.send(componentDoc);
