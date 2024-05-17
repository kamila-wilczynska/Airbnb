import React, { useState } from "react";
import "./Travel.css"
import TravelCard from "../TravelCard/TravelCard";
import travelData from "../../traveldata";






export default function Travel() {

	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === travelData.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? travelData.length - 1 : prevIndex - 1
		);
	};


	return (
		<div>
			<h1 className="travel--header">Get Inspired</h1>
			<div className="slider">
				<div className="slider-content">
					<div>
						<div className="slider">
							<div className="slider-content">
								<TravelCard {...travelData[currentIndex]} />
							</div>
							<div className="button-container">
								<button onClick={prevSlide} className="button--travel">Previous</button>
								<button onClick={nextSlide} className="button--travel">Next</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

