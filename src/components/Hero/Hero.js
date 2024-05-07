import React from "react"
import photo from "../../assets/img/photo-grid.png"
import "./Hero.css"

export default function Hero() {
	return (
		<section>
			<img className="hero--picture" src={photo} alt="main" />
			<h1 className="hero--header">Online Experiences</h1>
			<p className="hero--text">Join unique interactive activities led by
				one-of-a-kind hosts—all without leaving home.</p>
		</section>
	)
}