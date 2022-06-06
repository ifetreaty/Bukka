import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/userContext";

import "../App.css";

const UserHomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <nav>
        <div className="NavMenu">
          <NavLink to="/today-menu" className="nav-link">
            Menu
          </NavLink>
          <NavLink to="/my-orders" className="nav-link">
            My Orders
          </NavLink>
          <NavLink to="#" className="nav-link">
            Log Out
          </NavLink>
          {/* <NavLink to="/register" className="nav-link">
            Sign Up
          </NavLink> */}
          <h3>Hello {user.name}</h3>
          {/* <div>{user}</div> */}
        </div>
      </nav>
    </>
  );
};

export default UserHomePage;