import { createContext } from "react";

export const ComponentPropsContext = createContext<{
  error?: any;
  componentProps: Record<string, any>;
  onSetDefaultProps: (payload: any) => void;
}>({} as any);
