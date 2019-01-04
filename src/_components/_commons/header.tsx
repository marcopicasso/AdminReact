import * as React from 'react';
import { Icon, Layout } from 'antd';
import './_style/menuBar.css';
const { Header } = Layout;

export const MainIcon = (props: any) => {
  return <Icon className="trigger" type={props.type} onClick={props.onClick} />;
};

export const MainHeader = (props: any) => {
  return <Header className="navHeader">{props.children}</Header>;
};
