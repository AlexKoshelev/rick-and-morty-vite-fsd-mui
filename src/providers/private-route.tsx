import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth-provider";
interface AuthProps {
  children?: React.ReactNode;
}
export function PrivateRoute({ children }: AuthProps) {
  const auth = useAuth();
  const location = useLocation();
  if (auth.user.email === "")
    return (
      <Navigate to={"/login"} state={{ from: location.pathname }} replace />
    );
  return children;
}
