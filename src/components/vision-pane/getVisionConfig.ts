import lscWindowConfig from "../../utils/lscConfig";
// import RequireJS from "../../utils/RequireJS";
import VisionTransfer from "@alife/json-2-vision";

export function getPublicPrefix() {
  const { publicPath } = lscWindowConfig;

  let prefix = window.location.origin;
  if (/^http/.test(publicPath)) {
    prefix = publicPath;
  } else {
    prefix += publicPath;
  }
  return prefix;
}
const React = window.React;
import pipe from 'lodash/flow';

const GROUP_COMPOSITE = ['composite', 'group'];

const VisionUiHelper: any = window["VisualEngineUtils"];

export function translateByUIType(setter: { uiType: string } & any) {
  const { uiType, configure = [], ...restProps } = setter;

  const Setter = VisionUiHelper[uiType];

  return Setter
    ? React.createElement(Setter, {
      configure: configure.map(getSetter),
      ...restProps,
    })
    : null;
}

export function getComponent(
  setter: string | ({ uiType: string } & any) | React.ComponentClass,
  floor: number,
): React.ReactElement | null {
  if (typeof setter === 'string') {
    let Setter = VisionUiHelper[setter];
    if (floor === 1 && VisionUiHelper.DadaSetter && VisionUiHelper.DadaSetter[setter]) {
      Setter = VisionUiHelper.DadaSetter[setter];
    }
    return Setter ? React.createElement(Setter) : null;
  } else if (typeof setter === 'object' && 'uiType' in setter) {
    return translateByUIType(setter);
  }
  return setter;
}

export function getDefaultEvents(configure): Record<string, any> {
  const { name } = configure;
  if (name === 'events') {
    return Object.assign(
      {
        name: 'events',
        title: 'Action Set',
        tip: {
          url: 'https://yuque.antfin-inc.com/globalfe/intl-dada/actions',
          content: 'Click ? view how to set actions for component',
        },
        display: 'accordion',
        initialValue: [],
      },
      configure,
    );
  }
  return configure;
}

export function getSetter(configure): Record<string, any> {
  const { setter, items, type, floor } = configure;
  if (setter) {
    configure.setter = getComponent(configure.setter, floor);
  }

  if (GROUP_COMPOSITE.indexOf(type) > 0 && Array.isArray(items)) {
    configure.items = items.map(pipe(getDefaultEvents, getSetter));
  }
  return configure;
}

/**
 *
 * @param prototypeSchema
 */
export function transform(prototypeSchema: any) {
  let { configure = [], ...restProps } = prototypeSchema;

  const setFloor = configure => {
    return {
      floor: 1,
      ...configure,
    };
  };

  configure = configure.map(pipe(setFloor, getDefaultEvents, getSetter));
  return {
    ...restProps,
    configure,
  };
}


let promise;
export async function getVisionConfig(componentTypes) {
  // let prefix = getPublicPrefix();

  const data = VisionTransfer.buildVisionFromTypes(componentTypes);
  return data;
  // const visionPath = new URL(prefix + "vision.config.json");
  //
  if (!promise) {
    // promise = RequireJS.load(visionPath.href).then(modules => {
    //   return modules[componentName];
    // });
  }

  return await promise;
}
