// import { createSlice } from '@reduxjs/toolkit'


// export const counterSlice = createSlice({
// 	name: 'counter',
// 	initialState: {
// 		value: 0,
// 		travels: 0,
// 		continents: 0,
// 		months: 0

// 	},
// 	reducers: {
// 		increment: state => {

// 			state.value += 1
// 		},
// 		//decrement, but no minuses values possible
// 		decrement: state => {
// 			state.value = state.value > 0 ? state.value - 1 : 0

// 		},
// 		incrementByAmount: (state, action) => {
// 			state.value += action.payload
// 		}
// 	}
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export const selectTotalCount = state => state.counter.travels + state.counter.continents + state.counter.months;

// export default counterSlice.reducer

import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		travels: 0,
		continents: 0,
		months: 0
	},
	reducers: {
		increment: (state, action) => {
			state[action.payload] += 1
		},
		decrement: (state, action) => {
			state.value = state.value > 0 ? state.value - 1 : 0
		},
		incrementByAmount: (state, action) => {
			state[action.payload.type] += action.payload.amount;
		}
	}
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectTotalCount = state => state.counter.travels + state.counter.continents + state.counter.months;

export default counterSlice.reducer;
