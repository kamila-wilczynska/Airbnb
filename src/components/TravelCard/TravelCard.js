import React from "react";

import './TravelCard.css'


export default function TravelCard(props) {

	return (
		<div className="travel--card">
			<h2 className="card--header">{props.item.title}</h2>
			<img src={`testimage/${props.item.image}`} className="travel--card--image" alt="" />
			<p>Check the location on Google Maps</p>
			<p>Date: {props.item.date}</p>
			<p>description: {props.item.description}</p>
		</div>
	)
}