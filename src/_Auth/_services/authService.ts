import userManager from '../_services/userManger';

class AuthService {
  /**
   *
   */

  public getUser(): Promise<any> {
    return userManager.getUser();
  }

  public login(): Promise<void> {
    return userManager.signinRedirect({
      data: { path: window.location.pathname }
    });
  }

  public renewToken(): Promise<any> {
    return userManager.signinSilent();
  }

  public logout(): Promise<void> {
    return userManager.signoutRedirect();
  }
}

export default AuthService;
