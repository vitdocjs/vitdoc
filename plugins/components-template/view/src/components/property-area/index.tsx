import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Properties from "../property";
import { useAtom } from "jotai";
import { propertiesStore } from "../../store";
import { useUnmount } from "ahooks";

export function PropertyArea(props) {
  const { renderer } = props;

  const componentRef = useRef() as any;

  const [, setTypes] = useAtom(propertiesStore);

  useUnmount(() => {
    console.log("@@@@@@@@@@@@UNMOUNT!!");
  });

  useEffect(() => {
    renderer(componentRef.current, {
      renderType$: (types, mountNode = componentRef.current) => {
        setTypes(types);
        return ReactDOM.render(<Properties properties={types} />, mountNode);
      },
    });
  }, [renderer]);

  return <div className="property-container" ref={componentRef} />;
}
