import { useLocation, Navigate, Outlet } from "react-router-dom";
import useUserContext from "../context/useUserContext";

const RequireAuth = ({ allowedRoles, children }) => {
  const { user } = useUserContext();
  const location = useLocation();

  console.log(user?.roles?.some((role) => allowedRoles?.includes(role)));
  return user?.roles?.some((role) => allowedRoles?.includes(role)) ? (
    children
  ) : user? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );


};

export default RequireAuth;
