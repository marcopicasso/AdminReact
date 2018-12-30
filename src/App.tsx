import * as React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import RoutesModule from './routes';
import { createBrowserHistory } from 'history';
import { store } from './_store';
import { Provider } from 'react-redux';

const history = createBrowserHistory();

var routes = <Route path="*" render={props => <RoutesModule {...props} />} />;

class App extends React.Component {
  public render() {
    return (
      <>
        <Provider store={store}>
          <ConnectedRouter history={history} children={routes} />
        </Provider>
      </>
    );
  }
}

export default App;
