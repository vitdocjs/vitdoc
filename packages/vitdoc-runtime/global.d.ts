declare module "virtual:vitdoc/template" {
  export const mount = ({ container: HTMLElement }) => React.ReactNode;
  export const unmount = ({ container: HTMLElement }) => any;
}
