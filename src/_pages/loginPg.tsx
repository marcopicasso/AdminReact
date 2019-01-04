import * as React from 'react';
// import { ApiService } from 'src/_Auth/_services/ApiService';
import Buttons from 'src/_components/button';
import AuthService from 'src/_Auth/_services/authService';

export default class LoginPage extends React.Component<any, any> {
  public authService: AuthService;
  // public apiService: ApiService;

  /**
   *
   */
  constructor(props: any) {
    super(props);

    this.authService = new AuthService();
    // this.apiService = new ApiService();
  }
  public login = () => {
    this.authService.login();
  };

  public logout = () => {
    this.authService.logout();
  };

  public render() {
    return (
      <>
        <Buttons login={this.login} logout={this.logout} />
      </>
    );
  }
}
