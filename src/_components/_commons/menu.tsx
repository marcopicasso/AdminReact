import * as React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const { Item } = Menu;

export const MainMenu: React.SFC = props => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      style={{
        minHeight: '100vh',
        backgroundColor: '#222d32',
        width: '228'
      }}
    >
      <Item key="1">
        <Icon type="home" />
        <span>Home</span>
        <NavLink to="/" className="nav-text" />
      </Item>
      <Item key="2">
        <Icon type="video-camera" />
        <span>About</span>
        <NavLink to="/about" className="nav-text" />
      </Item>
      <Item key="3">
        <Icon type="upload" />
        <span>Login</span>
        <NavLink to="/login" className="nav-text" />
      </Item>
    </Menu>
  );
};
