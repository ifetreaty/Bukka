import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/userContext";
import brandLogo from "../assets/brand/new-logo-2-removebg-preview.png";

import "../App.css";

const UserHomePage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <nav className="nav-background">
        <img src={brandLogo} className="brand-logo" alt="" />
        <div className="NavMenu">
          <NavLink to="/today-menu" className="nav-link-no-land">
            Menu
          </NavLink>
          <NavLink to="/my-orders" className="nav-link-no-land">
            Cart
          </NavLink>
          <NavLink to="#" className="nav-link-no-land">
            Log Out
          </NavLink>

          <h3 className="user-name-text">Hello, {user.username}</h3>
        </div>
      </nav>
    </>
  );
};

export default UserHomePage;
