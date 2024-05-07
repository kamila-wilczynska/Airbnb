import React from "react"

import './Card.css'


// import App from "../../App"
/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
	- image
	- star icon (star.png), rating, and review count
	- title
	- cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
//{`../../assets/${props.img}`}

export default function Card(props) {
	return (
		<div className="card">
			<img src={`../images/${props.img}`} className="card--image" alt="Main card" />

			<div className="card--stats">
				<p className="star" alt="Star icon.">⭐</p>
				<span>{props.rating}</span>
				<span className="gray">{props.reviewCount} • </span>
				<span className="gray">{props.country}</span>
			</div>
			<p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> /</p>

		</div>
	)
}