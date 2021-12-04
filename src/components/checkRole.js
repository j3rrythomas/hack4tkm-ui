import * as React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";


const checkRole = (Component) => {
  // Higher Order Component that only displays component(that it takes as input) if it is authenticated
  const AuthRoute = () => {
    const isAdmin = useSelector((state) => state.data.userRole === "ADMIN");
    console.log(isAdmin);
    if (isAdmin) {
      return <Component />;
    }
    return <Redirect to="/" />;
  };
  return AuthRoute;
};

export default checkRole;
