import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";
import { useTypeFile } from "../../hooks/loaders";
import { propertiesStore } from "../../store";
import Properties from "./property";

import "./index.scss";

export function API(props: { src: string; type: string }) {
  const types = useTypeFile(props.src, props.type);

  const componentRef = useRef() as any;

  const [, setTypes] = useAtom(propertiesStore);

  useEffect(() => {
    if (types) {
      setTypes(types);
    }
  }, [types]);

  return (
    <div className="property-container" ref={componentRef}>
      <Properties properties={types} loading={!types} />
    </div>
  );
}
