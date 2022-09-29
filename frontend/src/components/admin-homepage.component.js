import React from "react";
import { NavLink } from "react-router-dom";
import brandLogo from "../assets/brand/new-logo-2-removebg-preview.png";
import "../App.css";

const NavBar = () => {
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
          <NavLink to="/admin/logout" className="nav-link-no-land">
            Log Out
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
