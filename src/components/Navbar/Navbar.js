import React from "react";
import logo from "./logo.png";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import styles from "./Navbar.css"


export default function Navbar() {

	const navLinks = [
		{ label: "Home", url: "/" },
		{ label: "Travel", url: "/travel" },
		{ label: "About", url: "/about" },
	];
	return (
		<>
			<nav className="navigation">
				<img className="logo-img" src={logo} alt="logo" />
				{navLinks.map((navLink) => (
					<NavLink
						key={navLink.url}
						to={navLink.url}
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.inactiveLink
						}
					>
						{navLink.label}
					</NavLink>
				))}
			</nav>
		</>
	)

}