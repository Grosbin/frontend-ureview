import { types } from "../types/types";

const initialState = {
	comments: [],
	count: 0,
};

export const commentReducer = (state = initialState, action) => {

	switch (action.type) {
		case types.addComment:
			return {
				...state,
				comments: [action.payload, ...state.comments]
			};
		default:
			return state;
	}
}