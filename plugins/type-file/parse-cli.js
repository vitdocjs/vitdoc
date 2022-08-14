// import * as parser from "react-docgen-typescript-loader-add-tag/dist/docgen-typescript.js";
const parser = require("react-docgen-typescript-loader-add-tag/dist/docgen-typescript");
const path = require("path");
const mapValues = require("lodash/mapValues");

const fileName = process.argv[2];


const componentDoc = parser
  // @ts-ignore
  .withCompilerOptions({
    jsx: 2, // react
    module: 1, // commonjs
    target: 99,
  })
  .parse([path.resolve(process.cwd(), fileName)])
  .map((item) => {
    let { block, mtime, method, props, ...rest } = item;
    props = mapValues(props, ({ parent, ...rest }) => rest);
    return {
      props,
      ...rest,
    };
  });

// console.log(JSON.stringify(componentDoc));
process.send(componentDoc);
