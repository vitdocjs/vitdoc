import React from 'react';
import ReactDOM from 'react-dom';
import IComponent from './index';
import styled from 'styled-components';

export default function(Component: typeof IComponent, mountNode) {
  /** DOCS_START 请将Demo生成方法都写在以下区块内，用于生成README **/

  const Container = styled.div`
    min-width: 300px;
    button,
    a {
      margin: 5px;
    }
  `;

  ReactDOM.render(
    <Container>
      <Component type="primary" text="Submit" />
      <Component type="secondary" text="Submit" />
      <Component type="normal" text="Submit" />
      <div>
        <Component type="link" text="Submit" />
      </div>
      <div>
        <Component disabled={true} disabledTitle={'Disabled Reason'} text="Submit" />
        <Component loading={true} type={'primary'} text="Submit" />
        <Component type={'primary'} text="Button" />
      </div>
    </Container>,
    mountNode,
  );

  /** DOCS_END **/
}
