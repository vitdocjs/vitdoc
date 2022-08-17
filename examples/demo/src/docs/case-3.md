```tsx
import { Title as Component } from '..';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Component
      title="Training Material"
      subTitle="Ensure that you meet our campaign criteria.\n Click on the respective image below to unlock tips on how to soar this 12.12 !"
    />
    <Component
      title="PREPARE FOR 12.12 WITH 6 KEY FOCUS"
      subTitle="Ensure that you meet our campaign criteria.<br /> Click on the respective image below to unlock tips on how to soar this 12.12 !"
    />
    <Component
      theme={{ isMobile: true }}
      title="PREPARE FOR 12.12 WITH 6 KEY FOCUS"
      subTitle="Ensure that you meet our campaign criteria.<br /> Click on the respective image below to unlock tips on how to soar this 12.12 !"
    />
  </div>,
  mountNode,
);
```

#### API

```tsx
import ComponentType from './index.tsx.type';

renderType$(ComponentType, mountNode);
```
