import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../App.css";

// import SideNav from "./sidenav.component";
// import HomepageBody from "./homepage-body.component";
import Meals from "./meals.component";
import Orders from "./orders.component";

const AdminHome = () => {
	return (
		<div className="admin-homepage">
			<div className="sidenav">
      <ul>
				<li><NavLink to="/admin/meals">Meals</NavLink></li>
				<li><NavLink to="/admin/orders">Live Orders</NavLink></li>
				<li><a href="#history">Order History</a></li>
				<li><a href="#message">Message</a></li>
				<li><a href="#settings">Settings</a></li>
			</ul>
				{/* <SideNav></SideNav> */}
				{/* <HomepageBody></HomepageBody> */}
			</div>
      <Routes>
        {/* <Route exact path="/meals" component={Meals} /> */}
      </Routes>
			<div>
			
			</div>
		</div>
	)
};

export default AdminHome;