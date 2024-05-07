import React from "react"

import './Card.css'



export default function Card(props) {
	return (
		
		<div className="card">

			<img src={`testimage/${props.img}`} className="card--image" alt="Main card" />

			<div className="card--stats">
				<p className="star" alt="Star icon.">⭐</p>
				<span>{props.rating}</span>
				<span className="gray">{props.reviewCount} • </span>
				<span className="gray">{props.location}</span>
			</div>
			<p className="card--title">{props.title}</p>
			<p className="card--price"><span className="bold">From ${props.price}</span> /</p>

		</div>
	)
}