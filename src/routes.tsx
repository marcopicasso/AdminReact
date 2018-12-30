import * as React from 'react';
import { Route, Switch } from 'react-router';
import { HomePage } from './_pages/homePg';

class RoutesModule extends React.Component<{}> {
  public render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    );
  }
}

export default RoutesModule;
