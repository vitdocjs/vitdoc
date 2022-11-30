import React from "react";

export function Table(props) {
  return (
    <div className="md-table-container">
      <table>{props.children}</table>
    </div>
  );
}
