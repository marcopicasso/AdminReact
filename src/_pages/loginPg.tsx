import * as React from 'react';
// import { ApiService } from 'src/_Auth/_services/ApiService';
import Buttons from 'src/_components/button';
import userManager from '../_Auth/_services/userManger';

export interface LoginProps {
  login: () => any;
  logout: () => any;
}

export default class LoginPage extends React.Component<LoginProps, any> {
  // public apiService: ApiService;

  /**
   *
   */
  constructor(props: any) {
    super(props);

    // this.authService = new AuthService();
    // this.apiService = new ApiService();
  }
  public login = () => {
    userManager.signinRedirect();
  };

  public logout = () => {
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
