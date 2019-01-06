import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
  Store,
  StoreEnhancerStoreCreator
} from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { reducer as oidcReducer } from 'redux-oidc';
import createOidcMiddleware from 'redux-oidc';
import userManager from '../_Auth/_services/userManger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationState, reducers } from './index';
import { History } from 'history';
import logger from 'redux-logger';

export default function configureStore(
  history: History,
  initialState?: ApplicationState
) {
  userManager.events.addSilentRenewError(function(error) {
    console.error('error while renewing the access token', error);
  });

  const oidcMiddleware = createOidcMiddleware(userManager);

  const createStoreWithMiddleware = composeWithDevTools(
    compose<StoreEnhancerStoreCreator<any>>(
      applyMiddleware(oidcMiddleware, thunk, routerMiddleware(history), logger)
    )
  )(createStore);

  // Combine all reducers and instantiate the app-wide store instance
  const allReducers = buildRootReducer(reducers, history);
  const store = createStoreWithMiddleware(allReducers, initialState) as Store<
    ApplicationState
  >;

  //Enable Webpack hot module replacement for reducers
  // if (module.hot) {
  //     module.hot.accept('./index', () => {
  //         const nextRootReducer = require<typeof StoreModule>('./index');
  //         store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
  //     });
  // }

  return store;
}

function buildRootReducer(allReducers: any, history: History) {
  return combineReducers<ApplicationState>(
    Object.assign({}, allReducers, {
      router: connectRouter(history),
      oidc: oidcReducer
    })
  );
}
