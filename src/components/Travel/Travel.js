import React from "react";

import TravelCard from "../TravelCard/TravelCard";
import traveldata from "../../traveldata"
console.log(traveldata);


export default function Travel() {

	const cards = traveldata.map((item) => {
		return (
			<TravelCard
				key={item.id}
				item={item}
			/>
		)
	})

	return (

		<div className="travelCard">
			<h1>Get inspired</h1>
			{cards}


		</div>
	)
}