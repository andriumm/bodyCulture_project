import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Home() {
	return (
		<div id="home">
			<img
				src={"./header_foto.JPG"}
				alt="header_foto"
				className="img-fluid my-4"
			></img>
			<div>
				<footer className="text-center my-4">
					<Link
						href="https://www.instagram.com/bodyculturebcn/"
						className="text-decoration-none fs-1 text-light"
					>
						@bodyculturebcn
					</Link>
				</footer>
			</div>
		</div>
	);
}
