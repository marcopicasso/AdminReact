import * as React from 'react';
import { Layout as Content } from 'antd';

export const MainContent: React.SFC = props => {
  return (
    <Content
      style={{
        // margin: '10px 10px',
        // padding: 15,
        // background: '#fff',
        minHeight: '100vh'
      }}
    >
      {props.children}
    </Content>
  );
};
