let dom: HTMLScriptElement;
export const runEsModuleCode = (code: string) => {
  if (!!dom) {
    dom.remove();
  }
  const scriptDom = document.createElement("script");
  scriptDom.setAttribute("type", "module");
  dom = scriptDom;
  document.body.append(scriptDom);

  dom.innerHTML = code;
};
