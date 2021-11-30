import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLogin } from "../utils";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return isLogin() && restricted ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
