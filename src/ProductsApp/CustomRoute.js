import React from "react";
import { Route, Redirect } from "react-router-dom";

const CustomRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem("user");
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default CustomRoute;
