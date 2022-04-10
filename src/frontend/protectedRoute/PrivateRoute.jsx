import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem("Auth Token") ? true : false;
  return isAuth ? children : <Navigate to="/login" replace />;
}

export { PrivateRoute };
