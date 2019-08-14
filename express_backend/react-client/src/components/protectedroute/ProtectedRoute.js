import React from "react";
import { Route, Redirect } from "react-router-dom";
import utils from "../../utils/utils";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      utils.getTokenFromLocal().loggedin ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
