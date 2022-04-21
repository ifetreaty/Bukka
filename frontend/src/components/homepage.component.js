import React from "react";
import { NavLink } from "react-router-dom";

import "../App.css";

const Home = () => {
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
          <NavLink to="/login" className="nav-link">
            Sign In
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Sign Up
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Home;
