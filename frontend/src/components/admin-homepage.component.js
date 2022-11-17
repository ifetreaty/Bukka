import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/userContext";
import brandLogo from "../assets/brand/new-logo-2-removebg-preview.png";
import "../App.css";

const NavBar = () => {
  const { user } = useContext(UserContext);

  const logout = (user) => {
    localStorage.clear(user);
    window.location.href = "/";
  };
  return (
    <>
      <nav className="nav-background">
      <img src={brandLogo} className="brand-logo" alt="" />
        <div className="NavMenu">
          <NavLink to="/admin/meals" className="nav-link-no-land">
            Meals
          </NavLink>
          <NavLink to="/admin/menu" className="nav-link-no-land">
            Menu
          </NavLink>
          <NavLink to="/admin/orders" className="nav-link-no-land">
            Orders
          </NavLink>
          <NavLink to="/admin/logout" className="nav-link-no-land" onClick={(e) => logout(user, e)}>
            Log Out
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
