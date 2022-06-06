import { useContext } from "react";
import UserContext from "./userContext";

const useUserContext = () => {
  const user = useContext(UserContext);

  if (user === undefined) {
    throw new Error("useUserContext can only be used inside UserProvider");
  }

  return user;
};

export default useUserContext;