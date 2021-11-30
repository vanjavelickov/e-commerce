import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLogin } from "../utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return isLogin() ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRoute;
