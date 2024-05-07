import React from "react";
import logo from "./logo.png";
import './Navbar.css'

export default function Navbar() {

	return (
		<>
			<nav className="navigation">
				<img className="logo-img" src={logo} alt="logo" />
			</nav>
		</>
	)

}