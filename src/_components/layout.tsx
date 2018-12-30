import * as React from 'react';
import { Layout } from 'antd';
import './_style/mainLayout';

export const MainLayout: React.SFC = props => {
  return <Layout className="mainLayout">{props.children}</Layout>;
};
