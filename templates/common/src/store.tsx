import { atom, useAtom } from "jotai";
import { useMemoizedFn } from "ahooks";

export const propertiesStore = atom({} as any);

export type PropertiesStoreType = {
  current?: number;
  defaultProps: Record<string, any>;
  props: Record<string, any>;
};
export const propertiesPropsStore = atom({
  current: undefined as undefined | number,
  defaultProps: {} as any,
  props: {} as any,
} as PropertiesStoreType);

export const useSetPartialProperties = () => {
  const [storeProps, setStore] = useAtom(propertiesPropsStore);

  return useMemoizedFn((props: Partial<PropertiesStoreType>) => {
    setStore({
      ...storeProps,
      ...props,
    });
  });
};
