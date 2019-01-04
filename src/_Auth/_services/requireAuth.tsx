import * as React from 'react';
import { Redirect } from 'react-router-dom';

const RequireAuth = (Component: typeof React.Component) => {
  interface State {
    isAuthenticated: boolean;
    isLoading: boolean;
    LoggedUser: {};
  }
  return class App extends React.Component<{}, State> {
    /**
     *
     */
    constructor(props: any) {
      super(props);

      this.state = {
        isAuthenticated: false,
        isLoading: true,
        LoggedUser: {}
      };
    }

    public render() {
      const { isAuthenticated, isLoading } = this.state;

      console.log(isAuthenticated);
      console.log(isLoading);

      // if (isLoading === true) {
      //   return <div>Loading...</div>;
      // }
      if (this.state.isAuthenticated === false) {
        return (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        );
      }
      return <Component {...this.props} />;
    }
  };
};

export { RequireAuth };
