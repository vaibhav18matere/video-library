import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
	return (
		<nav className="navigation__component">
			<div className="nav">
				<p className="toggles">
					<i className="fas fa-bars"> </i>
				</p>
				<Link className="nav__logo" to="/">
					<p className="nav__logo-image">3am VIBES</p>
				</Link>

				<ul className="nav__right">
					<button className="btn btn-primary btn-main">Login</button>
				</ul>
			</div>
		</nav>
	);
}

export { Navbar };
