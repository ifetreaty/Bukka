import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/userContext";

import "../App.css";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <nav>
        <div className="NavMenu">
          <NavLink to="/today-menu" className="nav-link">
            Menu
          </NavLink>

          <NavLink to="/login" className="nav-link">
            Sign In
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Sign Up
          </NavLink>
          {/* <div>{user}</div> */}
        </div>
      </nav>
    </>
  );
};

export default LandingPage;
