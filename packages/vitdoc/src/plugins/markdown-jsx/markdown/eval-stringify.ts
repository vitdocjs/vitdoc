export function stringifyEval(items: object, key = "load"): string {
  const v: string[] = [];
  let str = JSON.stringify(items, (targetKey, value) => {
    if (key === targetKey) {
      v.push(value);
    }
    return value;
  });
  v.forEach((value) => {
    // remove "" let it can be parsed by eval
    str = str.replace(`"${value}"`, `${value}`);
  });
  return str;
}
