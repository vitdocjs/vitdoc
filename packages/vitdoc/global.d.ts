declare module "virtual:vitdoc-hmr" {
  export const accept: (file: string) => {
    emit: (newModule: any) => void;
    on: (cb: (newModule: any) => void) => () => void;
  };

  export const waitForOneFile: () => Promise<ReturnType<typeof accept>>;
}

