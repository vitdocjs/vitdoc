declare module "virtual:vitdoc-hmr" {
  export const accept: (file: string) => {
    emit: (newModule: any) => void;
    on: (cb: (newModule: any) => void) => () => void;
  };

  export const waitForOneFile: () => Promise<ReturnType<typeof accept>>;
}

declare module "virtual:vitdoc/template" {
  export const mount: (props: { container: HTMLElement }) => void;
  export const unmount: () => void;
}
