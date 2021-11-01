import React, { Component, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import GlobalContext from "../../context/global-context";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const context = useContext(GlobalContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (context.auth.isLoading) {
          // To show a loading component
          return <h2>Loading...</h2>;
        } else if (!context.auth.isAuthenticated) {
          // Cannot access this route if not logged in
          return <Redirect to="/" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
