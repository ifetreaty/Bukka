import { useLocation, Navigate, Outlet } from "react-router-dom";
import useUserContext from "../context/useUserContext";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useUserContext();
  const location = useLocation();

  return auth?.roles?.some((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
