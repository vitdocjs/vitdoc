import mergeWith from "lodash/mergeWith";
import flatten from "lodash/flatten";

export async function asyncFlatten<T>(arr: T[]): Promise<T[]> {
  do {
    arr = flatten(await Promise.all(arr)) as any;
  } while (arr.some((v: any) => v?.then));
  return arr;
}

export function deepMerge(a, b) {
  return mergeWith(a, b, (objValue: any, srcValue: any) => {
    if (Array.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  });
}
