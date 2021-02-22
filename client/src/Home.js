import React from "react";

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
					<a
						href="https://www.instagram.com/bodyculturebcn/"
						target="_blank"
						rel="noreferrer"
						className="text-decoration-none fs-1 text-light"
					>
						@bodyculturebcn
					</a>
				</footer>
			</div>
		</div>
	);
}
