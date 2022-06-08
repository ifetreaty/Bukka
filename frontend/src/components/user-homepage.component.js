import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/userContext";

import "../App.css";

const UserHomePage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
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

          <h3>Hello, {user.username}</h3>
        </div>
      </nav>
    </>
  );
};

export default UserHomePage;
