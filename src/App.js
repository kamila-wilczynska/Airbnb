import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';

import data from '../src/data'


/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/


function App() {

	const cards = data.map((item) => {
		return (
			<Card
				img={item.coverImg}
				rating={item.stats.rating}
				reviewCount={item.stats.reviewCount}
				location={item.location}
				title={item.title}
				price={item.price}
			/>
		)
	})

	return (
		<div className="App">
			<Navbar />
			<Hero />
			<section className="cards-list">
				{cards}
			</section>

		</div>
	);
}

export default App;
