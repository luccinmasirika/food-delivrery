import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../api/auth";

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() && isAuthenticated().user.role !== 2 ? (
        <Component {...props} />
      ) : isAuthenticated() ? (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default AdminRoute;
