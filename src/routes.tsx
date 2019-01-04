import * as React from 'react';
import { Route, Switch } from 'react-router';
import { MainLayout } from './_containers/layout';
import { HomePage } from './_pages/homePg';
import { AboutPage } from './_pages/aboutPg';

class RoutesModule extends React.Component<{}> {
  public render() {
    return (
      <Switch>
        <MainLayout>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </MainLayout>
      </Switch>
    );
  }
}

export default RoutesModule;
