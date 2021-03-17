const body = document.querySelector("body");

/**
 * 懒加载Dom
 * @param dom
 * @param fn
 */
const onShow = (dom, fn) => {
  const domClientRect = dom.getBoundingClientRect();
  const scrollFn = () => {
    const seeHeight = document.documentElement.clientHeight;
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (domClientRect.top < seeHeight + scrollTop) {
      body.removeEventListener("scroll", scrollFn);
      setTimeout(() => {
        fn();
      }, 100);
    }
  };
  body.addEventListener("scroll", scrollFn);
  scrollFn();
};

export const buildDocsRef = (
  getResource: () => Promise<{ Component: React.Component; Docs: any }>,
  callback?: (ref: HTMLElement) => void
) => {
  let Component, DocsRender, gotRef;

  getResource().then(options => {
    Component = options.Component;
    DocsRender = options.Docs;

    gotRef &&
      onShow(gotRef, () => {
        if (Component && DocsRender && gotRef) {
          DocsRender(Component, gotRef);
          callback(gotRef);
        }
      });
  });

  return ref => {
    gotRef = ref;
  };
};
