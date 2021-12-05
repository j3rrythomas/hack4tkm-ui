import * as React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";


const checkUserRole = (Component) => {
  // Higher Order Component that only displays component(that it takes as input) if it is authenticated
  const AuthRoute = () => {
    const isUser = useSelector((state) => state.data.userRole === "USER");
    if (isUser) {
      return <Component />;
    }
    return <Redirect to="/" />;
  };
  return AuthRoute;
};

export default checkUserRole;
