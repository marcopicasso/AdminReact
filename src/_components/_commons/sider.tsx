import * as React from 'react';
import { Layout } from 'antd';

const { Sider } = Layout;

export const SideMenu = (props: any) => {
  return (
    <Sider
      width={230}
      trigger={null}
      collapsible={true}
      collapsedWidth={50}
      collapsed={props.collapsed}
    >
      {props.children}
    </Sider>
  );
};
