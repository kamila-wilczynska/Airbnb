import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectTotalCount } from './counterSlice'
import './Counter.css'


function Counter() {

	const travels = useSelector(state => state.counter.travels);
	const continents = useSelector(state => state.counter.continents);
	const months = useSelector(state => state.counter.months);
	const totalCount = useSelector(selectTotalCount);


	// const count = useSelector(state => state.counter.value)


	const dispatch = useDispatch()




	return (
		<div className='container-counter'>
			<h2 className='counter-header'>Plan your travel year and answer the questions below:</h2>
			<h3 className='counter-question'>How many travels do you plan this year?</h3>
			<div>
				<button
					aria-label="Decrement travels"
					onClick={() => dispatch(decrement('travels'))}
				>
					-
				</button>
				<span className='counting-result'>{travels}</span>
				<button
					aria-label="Increment travels"
					onClick={() => dispatch(increment('travels'))}
				>
					+
				</button>
			</div>
			<h3 className='counter-question'>How Many continents would you like to visit?</h3>
			<div>
				<button
					aria-label="Decrement continents"
					onClick={() => dispatch(decrement('continents'))}
				>
					-
				</button>
				<span className='counting-result'>{continents}</span>
				<button
					aria-label="Increment continents"
					onClick={() => dispatch(increment('continents'))}
				>
					+
				</button>
			</div>
			<h3 className='counter-question'>How many months of the year are you setting aside for traveling?</h3>
			<div>
				<button
					aria-label="Decrement months"
					onClick={() => dispatch(decrement('months'))}
				>
					-
				</button>
				<span className='counting-result'>{months}</span>
				<button
					aria-label="Increment months"
					onClick={() => dispatch(increment('months'))}
				>
					+
				</button>
			</div>
			<div>
				<h3>Total Number: {totalCount}</h3>
				<p>if you total number is higher than 5 it menas you are true traveller. <br />Please stay with us and we will help you with your travels</p>
			</div>
		</div>
	);
}

export default Counter;
