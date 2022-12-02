import { DumiDemo as DefaultArea } from "@vitdoc/ui";
import React from "react";
import classNames from "classnames";

export function DumiDemo(props) {
  return (
    <DefaultArea
      {...props}
      className={classNames("mobile-component-area", props.className)}
    />
  );
}

DumiDemo.vitdocDemo$ = true;
