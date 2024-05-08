import React from 'react';

import Card from '../Card/Card'

import data from '../../data'
import Hero from '../Hero/Hero'



function Home() {

	const cards = data.map((item) => {
		return (
			<Card
				key={item.id}
				item={item}

			/>
		)
	})

	return (
		<>
		<Hero />
		<section className="cards-list">
			{cards}
		</section>
		</>
	);
}

export default Home;
