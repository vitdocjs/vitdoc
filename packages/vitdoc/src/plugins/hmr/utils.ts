export const appendHmr = (code: string, file: string) => {
  return `
            ${code}

            if(import.meta.hot) {
              import("virtual:vitdoc-hmr").then(({ accept }) => import.meta.hot.accept(accept("${file}").emit));
            }

            `;
};
