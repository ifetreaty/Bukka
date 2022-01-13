import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import SideNav from "./sidenav.component";
import HomepageBody from "./homepage-body.component";

function AdminHome() {
	return (
		<div>
			<div>
				<SideNav></SideNav>
				<HomepageBody></HomepageBody>
			</div>

			<div>
			
			</div>
		</div>
	)
}

export default AdminHome;