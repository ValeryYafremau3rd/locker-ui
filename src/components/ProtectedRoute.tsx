import { Navigate, Outlet } from "react-router-dom";
import { getAuthToken } from "../services/auth.service";

const ProtectedRoute = () => {
  const isAuthenticated = getAuthToken()
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
