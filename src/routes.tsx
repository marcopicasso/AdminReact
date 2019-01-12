import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { MainLayout } from './_containers/layout';
import { HomePage } from './_pages/homePg';
import { AboutPage } from './_pages/aboutPg';
import { User } from 'oidc-client';
import callBackPage from './_pages/callBackPage';
import userManager from './_Auth/_services/userManger';
import { ApplicationState } from './_store';
import { connect } from 'react-redux';
import LoginPage from './_pages/loginPg';
import { NotFound } from './_pages/genericNotFound';
import * as toastr from 'toastr';

type RoutesModuleProps = {
  user: User;
  isLoadingUser: boolean;
} & RouteComponentProps<{}> & { dispatch: any };

class RoutesModule extends React.Component<RoutesModuleProps, {}> {
  public render() {
    // wait for user to be loaded, and location is known
    if (this.props.isLoadingUser || !this.props.location) {
      return null;
    }

    // if location is callback page, return only CallbackPage route to allow signin process
    if (this.props.location.pathname == '/callback') {
      return <Route path="/callback" component={callBackPage} />;
    }

    toastr.options.preventDuplicates = true;

    // check if user is signed in
    userManager.getUser().then(user => {
      if (user && !user.expired) {
        // Set the authorization header for axios
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + user.access_token;

        toastr.success('logged In');
      }
      toastr.error('must be logged');
    });

    let isConnected: boolean = !!this.props.user;

    const PrivateRoute = ({
      component: Component,
      exact: exact,
      path: path,
      ...rest
    }: {
      component: any;
      exact?: boolean;
      path: string;
    }) => {
      return (
        <Route
          {...rest}
          render={(props: any) => {
            return isConnected ? (
              <Component {...props} />
            ) : (
              <Redirect to="login" />
            );
          }}
        />
      );
    };

    return (
      <>
        <MainLayout>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute path="/about" component={AboutPage} />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </>
    );
  }
}

function mapStateToProps(state: ApplicationState) {
  return {
    user: state.oidc.user,
    isLoadingUser: state.oidc.isLoadingUser
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatch
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RoutesModule)
);
