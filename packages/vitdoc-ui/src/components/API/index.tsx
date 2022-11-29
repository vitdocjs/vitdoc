import { useRequest } from "ahooks";
import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";
import { propertiesStore } from "../../store";
import Properties from "./property";

import "./index.scss";
import { useLoadModule } from "../../hooks/loaders";

export function API(props: {
  src: string;
  type: string;
  load: () => Promise<any>;
}) {
  const { loading, data: types } = useLoadModule(
    props.load,
    (res) => res[props.type]
  );

  const componentRef = useRef() as any;

  const [, setTypes] = useAtom(propertiesStore);

  useEffect(() => {
    if (types) {
      setTypes(types);
    }
  }, [types]);

  return (
    <div className="property-container" ref={componentRef}>
      <Properties properties={types} loading={loading} />
    </div>
  );
}
