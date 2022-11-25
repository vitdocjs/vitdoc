import React from "react";
import { useEffect } from "react";

import { mount, unmount } from "virtual:vitdoc/template";

export function Renderer() {
  const domRef = React.useRef(null);
  useEffect(() => {
    const params = { container: domRef.current };
    mount(params);
    return () => unmount(params);
  }, []);

  return <div ref={domRef} />;
}
