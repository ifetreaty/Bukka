import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../App.css";

import AddMeal from "./meals.component";
import Orders from "./orders.component";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="NavMenu">
          <NavLink to="/admin/meals" className="nav-link">
            Meals
          </NavLink>
          <NavLink to="/admin/menu" className="nav-link">
            Menu
          </NavLink>
          <NavLink to="/admin/orders" className="nav-link">
            Orders
          </NavLink>
          <NavLink to="/admin/logout" className="nav-link">
            Log Out
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
