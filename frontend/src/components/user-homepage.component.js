import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/userContext";
import brandLogo from "../assets/brand/new-logo-2-removebg-preview.png";

import "../App.css";

const UserHomePage = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  const logout = (user) => {
    localStorage.clear(user);
    window.location.href = '/';
}
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
          <div>
          <NavLink to="#" className="nav-link-no-land" onClick={(e) => logout(user, e)}>
            Log Out
          </NavLink>
          </div>

          <h3 className="user-name-text">Hello, {user?.username ? user.username : "stranger"}</h3>
        </div>
      </nav>
    </>
  );
};

export default UserHomePage;
