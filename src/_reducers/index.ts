import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export type State = {};

export const InitialState: State = {};

export default (history: any) =>
  combineReducers({
    router: connectRouter(history)
  });
