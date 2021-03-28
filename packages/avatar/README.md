```jsx
import React from "react";
import ReactDOM from "react-dom";
import Component from "./index";

const props = {
  text: "Person1",
  img: "https://img.alicdn.com/tfs/TB1hS7aAi_1gK0jSZFqXXcpaXXa-400-400.jpg",
};

ReactDOM.render(
  <div>
    <Component {...props} />
  </div>,
  mountNode
);
```
