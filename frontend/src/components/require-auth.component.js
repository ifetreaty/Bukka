import { useLocation, Navigate } from "react-router-dom";
import useUserContext from "../context/useUserContext";

const RequireAuth = ({ allowedRoles, children }) => {
  const { user } = useUserContext();
  const location = useLocation();

  if (user?.roles?.some((role) => allowedRoles?.includes(role))) {
    return children;
  } else {
    if (user) {
      return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    } else {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }
};

export default RequireAuth;
