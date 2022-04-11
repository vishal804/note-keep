import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/auth-context";

const PrivateRoute = () => {
  const { authState } = useAuth();

  return authState.user ? <Outlet /> : <Navigate to="/signin" replace />;
};

export { PrivateRoute };
