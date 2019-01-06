import * as React from 'react';
import { Layout as Content } from 'antd';

export const MainContent: React.SFC = props => {
  return (
    <Content
      style={{
        minHeight: '100vh',
        margin: '10px 10px',
        padding: 15,
        background: '#fff'
      }}
    >
      {props.children}
    </Content>
  );
};
