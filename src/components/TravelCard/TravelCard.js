import React from "react";

import './TravelCard.css'


const TravelCard = ({ title, image, date, description }) => {
	return (
	  <div className="travel--card">
		<h2 className="card--header">{title}</h2>
		<img src={`testimage/${image}`} className="travel--card--image" alt="" />
		<p>Check the location on Google Maps</p>
		<p>Date: {date}</p>
		<p>Description: {description}</p>
	  </div>
	);
  };
  
  export default TravelCard;
