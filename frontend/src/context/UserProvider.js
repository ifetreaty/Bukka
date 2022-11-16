import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import UserContext from "./userContext";

export const UserProvider = ({ children }) => {
  const [user, setLoginUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const currentUser = AuthService.getCurrentUser();
    console.log(currentUser);
    setLoginUser(currentUser);
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }
  return (
    <UserContext.Provider value={{ user, setLoginUser }}>
      {children}
    </UserContext.Provider>
  );
};
