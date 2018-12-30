import * as React from 'react';
import { Layout, Icon, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import '../_components/_style/menuBar.css';

const { Header, Sider, Content } = Layout;

export interface BasicLayoutState {
  collapsed: boolean;
}

class MainMenu extends React.Component<{}> {
  public state = {
    collapsed: false
  };

  public render() {
    return (
      <Layout>
        <Sider
          width={230}
          trigger={null}
          collapsible={true}
          collapsedWidth={50}
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{
              minHeight: '100vh',
              backgroundColor: '#222d32',
              width: '228'
            }}
          >
            <Menu.Item key="1">
              <Icon type="home" />
              <span>Home</span>
              <NavLink to="/" className="nav-text" />
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>About</span>
              <NavLink to="/About" className="nav-text" />
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="navHeader">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'double-right' : 'double-left'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '10px 10px',
              padding: 15,
              background: '#fff'
            }}
          >
            ttt
          </Content>
        </Layout>
      </Layout>
    );
  }
  private toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
}

export default MainMenu;
