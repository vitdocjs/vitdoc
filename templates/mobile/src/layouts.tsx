import React from "react";
import { useLocation } from "virtual:vitdoc-router";
import ReadmePane from "./pages/readme-pane";

export function DocLayout() {
  const { pathname } = useLocation();
  return <ReadmePane key={pathname} />;
}
