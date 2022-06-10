import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/userContext";
import "../App.css";

const NavBar = () => {
  const { user } = useContext(UserContext);
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
          {/* <div>{user}</div> */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
