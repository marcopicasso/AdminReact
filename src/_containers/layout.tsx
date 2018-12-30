import * as React from 'react';
import { Layout } from 'antd';
import { MainHeader, MainIcon } from '../_components/_commons/header';
import { SideMenu } from 'src/_components/_commons/sider';
import { MainContent } from 'src/_components/_commons/content';

interface State {
  collapsed: boolean;
}

export class MainLayout extends React.Component<{}, State> {
  state: State = {
    collapsed: false
  };
  render() {
    return (
      <Layout>
        <SideMenu collapsed={this.state.collapsed}>
          <div className="logo" />
        </SideMenu>
        <Layout>
          <MainHeader>
            <MainIcon
              onClick={this.toggle}
              type={this.state.collapsed ? 'double-right' : 'double-left'}
            />
          </MainHeader>

          <MainContent />
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
