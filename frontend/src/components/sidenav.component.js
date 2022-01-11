import React from "react";
import { Routes, Route } from "react-router-dom";
import Meals from "./meals.component";

const SideNav = (props) => {
	return (
		<div className="sidenav">
			{/* <ul>
				<li><a href="#meals">Meals</a></li>
				<li><a href="#live">Live Orders</a></li>
				<li><a href="#history">Order History</a></li>
				<li><a href="#message">Message</a></li>
				<li><a href="#settings">Settings</a></li>
			</ul> */}
      <Routes>
        <Route path="/meals" element={<Meals/>} />
        {/* <Route path="/orders" element={<Orders/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/message" element={<Message/>} />
        <Route path="/settings" element={<Settings/>} /> */}
      </Routes>
		</div>
	);
};

export default SideNav;