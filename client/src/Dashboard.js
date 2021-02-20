import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ClientsList from "./ClientsList";
const axios = require("axios");

//in here the admin, can check the data the clients have sent through the forms
export default function Dashboard() {
	//GET the list of clients

	//GET only a client profile

	// const seeProfile = (id) => {
	// 	fetch(`/profiles/${id}`, {
	// 		method: "GET",
	// 	})
	// 		.then((response) => response.json())
	// 		.then((student) => {
	// 			setProfile(student);
	// 			console.log(student);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };

	//GET all the updates

	//GET the history of updates of a client (most recent on top of the list)

	//GET the last update of a client

	return (
		<Router>
			<div>
				<h3>Dashboard</h3>
			</div>
			<h6>Choose the information you'd like to see</h6>
			<ul>
				<li className="nav-item">
					<Link to="/dashboard/clients" className="nav-link">
						Clients' list
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
