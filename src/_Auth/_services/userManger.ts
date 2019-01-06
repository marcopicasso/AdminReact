import { createUserManager } from 'redux-oidc';
import { UserManagerSettings } from 'oidc-client';
import { Constants } from '../_helpers/Constants';

const settings: UserManagerSettings = {
  authority: Constants.stsAuthority,
  client_id: Constants.clientId,
  redirect_uri: `${Constants.clientRoot}callback`,
  silent_redirect_uri: `${Constants.clientRoot}silent-renew.html`,
  post_logout_redirect_uri: `${Constants.clientRoot}`,
  response_type: 'id_token token',
  scope: Constants.clientScope,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: true
};

const userManager = createUserManager(settings);

export default userManager;
