import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import RoutesModule from './routes';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from './_store/configureStore';
import { ApplicationState } from './_store';

const history = createBrowserHistory();

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as ApplicationState;
const store = configureStore(history, initialState);

var routes = (
  <Route path="/" component={(props: any) => <RoutesModule {...props} />} />
);

class App extends React.Component {
  public render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <ConnectedRouter history={history} children={routes} />
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
