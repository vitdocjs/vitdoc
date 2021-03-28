# Image

Some Image Component description

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Component from "./index";


ReactDOM.render(
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    
    <Component
      width={300}
      height={300}
      src="https://img.alicdn.com/tfs/TB1FQjmef1H3KVjSZFBXXbSMXXa-291-163.png"
    />
  </div>,
  mountNode
);
```

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Component from "./index";

ReactDOM.render(
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <Component
      width={400}
      height={200}
      mode={"aspectFit"}
      src="https://img.alicdn.com/tfs/TB1FQjmef1H3KVjSZFBXXbSMXXa-291-163.png"
    />
  </div>,
  mountNode
);
```

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
