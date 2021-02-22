import React from "react";
import Profile from "../src/Profile";
import Update from "../src/Update";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from "react-router-dom";

export default function Myarea() {
	return (
		<Router className="Router">
			<div id="personalArea">
				<ul className="nav mx-4 my-4">
					<li className="my-4 text-center">
						<NavLink
							to="/myarea/profile"
							className="btn  btn-light text-decoration-none fs-6 ms-4 me-1"
							activeStyle={{ fontWeight: "bold", color: "#CD5C5C" }}
						>
							PROFILE
						</NavLink>
					</li>
					<li className="my-4">
						<NavLink
							to="/myarea//update"
							className="btn btn-light text-decoration-none fs-6"
							activeStyle={{ fontWeight: "bolder", color: "#CD5C5C" }}
						>
							PROGRESS
						</NavLink>
					</li>
				</ul>
				<div>
					<Switch>
						<Route path="/myarea/profile">
							<Profile />
						</Route>
						<Route path="/myarea//update">
							<Update />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}
