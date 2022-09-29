import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import UserContext from "./userContext";

export const UserProvider = ({ children }) => {
  const [user, setLoginUser] = useState(null);
  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    console.log(currentUser);
    setLoginUser(currentUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, setLoginUser }}>{children}</UserContext.Provider>
  );
};
