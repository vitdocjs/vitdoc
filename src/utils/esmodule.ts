export const runEsModuleCode = (code: string) => {
  const scriptDom = document.createElement("script");
  scriptDom.setAttribute("type", "module");

  scriptDom.innerHTML = code;

  document.body.append(scriptDom);
};
