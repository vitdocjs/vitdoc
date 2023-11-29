import React from "react";
import { useLocation } from "react-router-dom";
import ReadmePane from "./pages/readme-pane";

export function DocLayout() {
  const { pathname } = useLocation();
  return <ReadmePane key={pathname} />;
}
