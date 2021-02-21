import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
} from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import About from "./About.js";
import Content from "./Content.js";
import Myarea from "./Myarea.js";
import Dashboard from "./Dashboard.js";
import Contact from "./Contact.js";

function App() {
	return (
		<Router className="Router">
			<div className="App">
				<img
					src={"./BODYCULTURE LOGO_NEGRO-01.png"}
					alt="logo"
					//className="img-fluid mx-4 my-4"
					//id="logo"
				></img>
				<Link to="/" className="nav-link text-center text-light">
					<h1 id="title">BodyCultureBcn</h1>
				</Link>
				<nav id="navbar" className="mt-5">
					<ul className="nav justify-content-center fw-bold">
						<li className="mx-4 text-decoration-none">
							<Link to="/" className="text-decoration-none text-light">
								Home
							</Link>
						</li>
						<li className="mx-4 px-3">
							<Link to="/about" className="text-decoration-none text-light">
								About us
							</Link>
						</li>
						<li className="mx-4 px-3">
							<Link to="/content" className="text-decoration-none text-light">
								Content
							</Link>
						</li>
						<li className="mx-4 px-3">
							<NavLink to="/myarea" className="text-decoration-none text-light">
								My area
							</NavLink>
						</li>
						<li className="mx-4 px-3">
							<Link to="/dashboard" className="text-decoration-none text-light">
								Dashboard
							</Link>
						</li>
						<li className="mx-4 px-3">
							<Link to="/contact" className="text-decoration-none text-light">
								Contact
							</Link>
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
