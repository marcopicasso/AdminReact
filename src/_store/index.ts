import { User } from 'oidc-client';

interface OidcState {
  isLoadingUser: boolean;
  user: User;
}

// The top-level state object
export interface ApplicationState {
  oidc: OidcState;
}

export const reducers = {};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
