import { types } from "../types/types";

const initialState = {
	activities: [],
	active: null
}

export const activityReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.addActivity:
			return {
				...state,
				activities: [action.payload, ...state.activities]
			}
		case types.dataActivity:
			return {
				...state,
				active: action.payload
			}
		case types.getActivity:
			return {
				...state,
				activities: [...action.payload]
			}
		default:
			return state;
	}
}