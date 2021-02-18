import React from "react";
import Profile from "../src/Profile";
import Update from "../src/Update";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Myarea() {
	return (
		<Router>
			<div>Myarea</div>
			<ul>
				<li>
					<Link to="/myarea/profile">Perfil</Link>
				</li>
				<li>
					<Link to="/myarea//update">Progreso</Link>
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
		</Router>
	);
}
