import { useEffect } from "react";

function UserContent () {
  const [userRole, setUserRole] = useState();

  useEffect(() => {
    setUserRole(fetchUserContent);
  }, role);

  const fetchUserContent = () => {
    const id = "61b88a46087d021a247ae328";
    //call from authService? 
  }

  function getUserNav() {
    if (!userRole) {
      return //? admin content 
    }
    return //user content
  }
}