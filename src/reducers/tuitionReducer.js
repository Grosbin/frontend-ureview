import { types } from "../types/types";

const initialState = {
	tuitions: [],
};


export const toitionReducer = (state = initialState, action) => {

	switch (action.type) {
		case types.addTuition:
			return {
				...state,
				tuitions: [action.payload, ...state.tuitions]
			};
		default:
			return state;
	}
}