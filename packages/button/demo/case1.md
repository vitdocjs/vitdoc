## Case 2

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@alifd/next";

interface IProps {}

ReactDOM.render(
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <Button type="primary">Submit</Button>
  </div>,
  mountNode
);
```
