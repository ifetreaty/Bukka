import React from "react";

const SideNav = (props) => {
	return (
		<div className="sidenav">
			<ul>
				<li><a href="#meals">Meals</a></li>
				<li><a href="#live">Live Orders</a></li>
				<li><a href="#history">Order History</a></li>
				<li><a href="#message">Message</a></li>
				<li><a href="#settings">Settings</a></li>
			</ul>
		</div>
	);
};

export default SideNav;