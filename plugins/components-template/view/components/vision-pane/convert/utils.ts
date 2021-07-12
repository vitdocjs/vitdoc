import React from 'react';
import pipe from 'lodash/flow';

const GROUP_COMPOSITE = ['composite', 'group'];

let VisionUiHelper: any = {};
try {
  // import VisionUiHelper from '@alife/dada-vision-utils';
  // @ts-ignore
  VisionUiHelper = window.VisualEngineUtils;
} catch (e) {}

export function translateByUIType(setter: { uiType: string } & any, floor?: number) {
  const { uiType, configure = [], ...restProps } = setter;

  let Setter = VisionUiHelper[uiType];

  if (floor === 1 && VisionUiHelper.DadaSetter && VisionUiHelper.DadaSetter[uiType]) {
    Setter = VisionUiHelper.DadaSetter[uiType];
  }
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
    return translateByUIType(setter, floor);
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
