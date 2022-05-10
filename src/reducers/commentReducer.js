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
				comments: [...state.comments, action.payload]
			};
		case types.getComments:
			return {
				...state,
				comments: action.payload
			};
		default:
			return state;
	}
}