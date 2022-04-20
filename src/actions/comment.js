import { types } from "../types/types";




export const startAddNewComment = (comment) => {
	return (dispatch, getState) => {
		const id = new Date().getTime();
		const { name, uid: _id } = getState().auth;
		const { active } = getState().activities;
		const { activity } = active;
		const user = { name, _id };
		const date = new Date();
		// console.log(activity);
		dispatch(addComment(id, comment, user, date, activity));
	}
}


const addComment = (id, comment, user, date, activity) => {
	return {
		type: types.addComment,
		payload: {
			id,
			user,
			date,
			comment,
			activity

		}
	}
}

