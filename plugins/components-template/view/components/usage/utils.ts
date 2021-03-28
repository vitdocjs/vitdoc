export type JSONReactElement = {
  type: string;
  props?: any;
  children?: null | string | JSONReactElement[] | any;
};

export function jsonToJSX(json: JSONReactElement): string {
  const propsString = json.props
    ? Object.keys(json.props)
        .filter(
          prop =>
            typeof prop !== "function" && prop.includes("__eval_") === false
        )
        .reduce((propString, prop) => {
          const value =
            typeof json.props[prop] === "string"
              ? `"${json.props[prop].toString()}"`
              : `{${JSON.stringify(
                  json.props[`__eval_${prop}`] || json.props[prop],
                  null,
                  2
                )}}`;

          propString += ` ${prop.toString()}=${value}${
            value.includes("\n") ? "\n" : ""
          }`;
          return propString;
        }, "")
    : "";
  if (Array.isArray(json.children)) {
    return `<${json.type} ${propsString}>
  ${json.children.map(jsonToJSX).join("\r\n")}
</${json.type}>`;
  } else if (!!json.children) {
    return `<${json.type}${propsString}>${json.children}</${json.type}>`;
  } else {
    return `<${json.type}${propsString} />`;
  }
}
