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
					<Link to="/profile">Perfil</Link>
				</li>
				<li>
					<Link to="/update">Progreso</Link>
				</li>
			</ul>
			<div>
				<Switch>
					<Route path="/profile">
						<Profile />
					</Route>
					<Route path="/update">
						<Update />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
