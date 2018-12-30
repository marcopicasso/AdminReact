import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer, { InitialState } from '../_reducers';
import thunk from 'redux-thunk';

const history = createBrowserHistory();

export const store = createStore(
  createRootReducer(history), // root reducer with router state
  InitialState,
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history) // for dispatching history actions
    )
  )
);
