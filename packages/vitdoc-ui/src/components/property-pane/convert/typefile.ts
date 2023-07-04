import get from "lodash/get";
import set from "lodash/set";
import { BLOCK_PROPS } from "./const";

export interface ITypeDesc {
  displayName: string;
  props: Record<
    string,
    {
      defaultValue: null | string;
      description: string;
      name: string;
      parent: Record<string, any>;
      type: {
        name: string;
      };
    }
  >;
  tags: Record<string, string>;
}

const DEFAULT_VISION_CONFIG = {
  category: "*",
  icon: "//img.alicdn.com/tfs/TB1whTmvAL0gK0jSZFxXXXWHVXa-200-200.svg",
  isContainer: false,
};

const STRING = "string";
const NUMBER = "number";
const BOOL = "boolean";

const Normal_Types = [STRING, NUMBER, BOOL];

const Null_TYPES = ["undefined", "null"];

const Composite_Types = [
  "any",
  "any[]",
  "string[]",
  "number[]",
  "object",
  "object[]",
];

const isNotEnumTypes = (types: string = "") => {
  return types
    .split("|")
    .some((str) => Normal_Types.concat(Composite_Types).includes(str.trim()));
};

const isNumberTypes = (types: string = "") => {
  return types
    .split("|")
    .every((str) => [NUMBER].concat(Null_TYPES).includes(str.trim()));
};

const isTextTypes = (types: string = "") => {
  return types
    .split("|")
    .every((str) => [STRING, NUMBER].concat(Null_TYPES).includes(str.trim()));
};

const isBoolTypes = (types: string = "") => {
  return types
    .split("|")
    .every((str) => [BOOL].concat(Null_TYPES).includes(str.trim()));
};

const strToObj = (str) => {
  try {
    return JSON.parse(str);
  } catch (error) {
    return str;
  }
};

const filterQuotaMarkAndUndefined = (typeStr): string[] =>
  typeStr
    .split("|")
    .map((val) => val.replace(/"/g, "").trim())
    .filter((val) => val !== "undefined");

const REGEXP_ISMultipleTypes = /\S+(\[\])?\s*\|/g;
const REGEXP_ISFunction = /\(.*\)\s*=>\s*.+/;
const REGEXP_ISObject = /^\{.+}/;

const REGEXP_IType = /<\S+>/;
const REGEXP_ISArray = /{.+}\[]$/;

class VisionSchemaTransfer {
  defaultVisionConfig: any;

  types: ITypeDesc;

  transformProps(propType) {
    const defaultConfig = this.defaultVisionConfig;

    const { configure: defaultConfigure = [] } = defaultConfig;

    const { name, description } = propType;

    const defaultValue = VisionSchemaTransfer.getDefaultPropByTypes(propType);

    const type = get(propType, "type.name");
    const tags: Record<string, any> = Object.entries(
      propType.tags || {}
    ).reduce(
      (previousValue, [key, value]) => set(previousValue, key, strToObj(value)),
      {}
    );

    if (tags.vision === false) {
      return null;
    }

    // vision.config.json 中的配置
    const visionJsonConfig = defaultConfigure.find(
      (configure) => configure.name === name
    );
    const setterInfo = VisionSchemaTransfer.getSetterByTSType(type);
    if (!setterInfo) {
      return false;
    }

    // Vision在注释中的配置项
    const visionDocsConfig = get(tags, "vision");

    return {
      name: name,
      tip: description,
      defaultValue,
      ...setterInfo,
      ...visionJsonConfig,
      ...visionDocsConfig,
    };
  }

  /**
   * Get Object Type
   * { image: string; href?: string; }
   * @param typeStr String
   * @return {{}}
   */
  static getObjectTypes(typeStr) {
    if (!/^{.+}$/.test(typeStr.trim())) {
      return typeStr;
    }
    const reg = /(\w+)\??: ([\w\[\]]+|{.+});/g;

    let regResult,
      result = {};
    while ((regResult = reg.exec(typeStr))) {
      const [, key, value] = regResult;
      result[key] = value;
    }

    return result;
  }

  static getSetterByTSType(tsType) {
    const typeStr = `${tsType}`.trim();

    let result;

    [
      this.getNumberSetterByTypes.bind(this),
      this.getBoolSetterByTypes.bind(this),
      this.getTextSetterByTypes.bind(this),
      // this.getActionSetterByTypes.bind(this),
      // this.getListSetterByTypes.bind(this),
      this.getChoiceSetterByTypes.bind(this),
      this.getSelectSetterByTypes.bind(this),
    ].some((fn) => {
      const item = fn(typeStr);
      if (item) {
        result = item;
      }
      return item;
    });

    return result;
  }

  static getBoolSetterByTypes(types) {
    return isBoolTypes(types) && { setter: "BoolSetter" };
  }

  static getNumberSetterByTypes(types) {
    return isNumberTypes(types) && { setter: "NumberSetter" };
  }

  static getTextSetterByTypes(types) {
    return isTextTypes(types) && { setter: "TextSetter" };
  }

  static getListSetterByTypes(typeStr) {
    if (REGEXP_ISArray.test(typeStr)) {
      const typeItemStr = typeStr.replace(/\[]$/, "").trim();
      const resultType = this.getObjectTypes(typeItemStr);
      const configure =
        resultType instanceof Object
          ? Object.entries(resultType).map(([key, item]) => ({
              name: key,
              setter: this.getSetterByTSType(item),
            }))
          : undefined;
      return {
        setter: "ListSetter",
        checkField: null,
        configure,
      };
    }
    return typeStr;
  }

  static getChoiceSetterByTypes(typeStr) {
    if (
      !REGEXP_ISFunction.test(typeStr) &&
      !REGEXP_ISObject.test(typeStr) &&
      !REGEXP_IType.test(typeStr) &&
      REGEXP_ISMultipleTypes.test(typeStr) &&
      !isNotEnumTypes(typeStr) &&
      filterQuotaMarkAndUndefined(typeStr).length <= 3
    ) {
      return {
        setter: "ChoiceSetter",
        options: filterQuotaMarkAndUndefined(typeStr),
      };
    }
    return false;
  }

  static getSelectSetterByTypes(typeStr) {
    if (
      !REGEXP_ISFunction.test(typeStr) &&
      !REGEXP_ISObject.test(typeStr) &&
      !REGEXP_IType.test(typeStr) &&
      REGEXP_ISMultipleTypes.test(typeStr) &&
      !isNotEnumTypes(typeStr)
    ) {
      return {
        setter: "SelectSetter",
        options: typeStr
          .split("|")
          .map((val) => val.replace(/"/g, "").trim())
          .filter((val) => val !== "undefined")
          .map((val) => {
            return {
              text: val,
              value: val,
            };
          }),
      };
    }
    return false;
  }

  static getDefaultPropByTypes(propType) {
    let defaultValue = get(propType, "defaultValue.value");
    try {
      if (!defaultValue) {
        return defaultValue;
      }
      // 'undefined' in global => true !! OMG!
      defaultValue = new Function(
        "global",
        `return ("" + ${defaultValue}) in global ? (""+${defaultValue}) : ${defaultValue}`
      )(globalThis);
    } catch (e) {}

    return defaultValue;
  }

  blockProps: string[];

  constructor(
    types: ITypeDesc,
    options?: {
      defaultConfig?: any;
      blockProps?: string[];
    }
  ) {
    this.types = types;
    const { defaultConfig = {}, blockProps = BLOCK_PROPS } = options || {};
    this.blockProps = blockProps;

    this.defaultVisionConfig = Object.assign(
      {},
      DEFAULT_VISION_CONFIG,
      defaultConfig as any
    );
  }

  transformTypeSchema(): any {
    const defaultVisionConfig = this.defaultVisionConfig;

    const { displayName, props = {}, tags = {} } = this.types;
    const isVisionContainer = tags["vision.isContainer"];

    const configure = Object.values(props)
      .filter((prop) => !this.blockProps.includes(get(prop, "name", "")))
      .map(this.transformProps.bind(this))
      .filter(Boolean) as any[];

    const restConfigs: any[] = configure.filter(
      (config: any) => config.setter !== "ActionSetter" && config
    ) as any[];

    let isContainer;
    if (isVisionContainer !== undefined) {
      // 解析出来的true是 'true' 需要JSON.parse一下
      isContainer = JSON.parse(isVisionContainer);
    } else {
      isContainer = Object.keys(props).includes("elements") || false;
    }

    return Object.assign({}, defaultVisionConfig, {
      componentName: displayName,
      // defaultProps,
      isContainer,
      configure: restConfigs,
    });
  }
}

/**
 * 根据TypeFile生成VisionConfig
 * @param typeDesc
 * @param options
 * @return {any}
 */
export function buildVisionFromTypes(
  typeDesc,
  options?: {
    defaultConfig?: any;
    blockProps?: string[];
  }
): any {
  return new VisionSchemaTransfer(typeDesc, options).transformTypeSchema();
}
