import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

export type State = {};

export const InitialState: State = {};

export default (history: History) =>
  combineReducers({
    router: connectRouter(history)
  });
