import * as React from 'react';
import Buttons from 'src/_components/button';
import userManager from '../_Auth/_services/userManger';

export interface LoginProps {
  login: () => any;
  logout: () => any;
}

export default class LoginPage extends React.Component<LoginProps, any> {
  /**
   *
   */
  constructor(props: any) {
    super(props);
  }
  private login = () => {
    userManager.signinRedirect();
  };

  private logout = () => {
    userManager.signoutRedirect();
    userManager.removeUser();
  };

  public render() {
    return (
      <>
        <Buttons login={this.login} logout={this.logout} />
      </>
    );
  }
}
