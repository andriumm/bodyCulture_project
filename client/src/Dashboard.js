import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ClientsList from "./ClientsList";
//const axios = require("axios");

//in here the admin, can check the data the clients have sent through the forms
export default function Dashboard() {
	return (
		<Router>
			<ul>
				<li className="nav my-4">
					<Link
						to="/dashboard/clients"
						className="nav-link text-light fs-3 my-4 text-center"
					>
						CLIENTS
					</Link>
				</li>
			</ul>
			<div>
				<Switch>
					<Route path="/dashboard/clients">
						<ClientsList />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
