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
				<h1>BodyCultureBCN</h1>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">¿Qué es BcB?</Link>
						</li>
						<li>
							<Link to="/content">Contenido</Link>
						</li>
						<li>
							<Link to="/myarea">Mis registros</Link>
						</li>
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
						<li>
							<Link to="/contact">Contacto</Link>
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
