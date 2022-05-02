import { types } from "../types/types";

const initialState = {
	hourVoae: 0,
	comments: 0,
};


export const statisticsReducer = (state = initialState, action) => {

	switch (action.type) {
		case types.sumHoursVoae:
			return {
				...state,
				hourVoae: (action.payload + state.hourVoae)
			};
		case types.sumComments:
			return {
				...state,
				comments: (action.payload + state.comments)
			};
		default:
			return state;
	}
}