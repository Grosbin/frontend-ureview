import { types } from "../types/types";




export const startAddNewComment = (comment) => {
	return (dispatch, getState) => {
		const id = new Date().getTime();
		const { name, uid: _id } = getState().auth;
		const user = { name, _id };
		const date = new Date();

		dispatch(addComment(id, comment, user, date));

	}
}


const addComment = (id, comment, user, date) => {
	return {
		type: types.addComment,
		payload: {
			id,
			user,
			date,
			comment
		}
	}
}