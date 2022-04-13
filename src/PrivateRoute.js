import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./context/auth-context";

const PrivateRoute = () => {
  const { authState } = useAuth();
  const location = useLocation();
  return authState.user ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export { PrivateRoute };
