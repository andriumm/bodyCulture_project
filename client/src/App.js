import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import About from "./About.js";
import Content from "./Content.js";
import Myarea from "./Myarea.js";
import Dashboard from "./Dashboard.js";
import Contact from "./Contact.js";

function App() {
	return (
		<Router>
			<div className="App">
				<Link to="/">
					<h1 className="text-center my-4">BodyCultureBcn</h1>
				</Link>
				<nav>
					<ul className="nav">
						<li className="mx-4">
							<Link to="/">Home</Link>
						</li>
						<li className="mx-4">
							<Link to="/about">¿What is BcB?</Link>
						</li>
						<li className="mx-4">
							<Link to="/content">Content</Link>
						</li>
						<li className="mx-4">
							<Link to="/myarea">My area</Link>
						</li>
						<li className="mx-4">
							<Link to="/dashboard">Dashboard</Link>
						</li>
						<li className="mx-4">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/content">
					<Content />
				</Route>
				<Route path="/myarea">
					<Myarea />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
