import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";




export const startAddNewComment = (comment) => {
	return async (dispatch, getState) => {
		// const id = new Date().getTime();
		const { name, uid: id } = getState().auth;
		const { active } = getState().activities;
		const { activity } = active;
		const id_activity = activity.id;
		const user = { name, id };
		const date = new Date();
		// console.log(activity);
		try {
			const resp = await fetchConToken('comentario', { comment, user, date, id_activity }, 'POST');
			const body = await resp.json();

			if (body.ok) {
				dispatch(addComment(body.comment.id, comment, user, date, id_activity));
			} else {
				console.log(body.errores);
			}
		} catch (error) {
			console.log(error);
		}
		// dispatch(addComment(id, comment, user, date, activity));
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

export const startGetComments = (id) => {
	return async (dispatch) => {
		try {
			const resp = await fetchConToken(`comentario/${id}`);
			const body = await resp.json();
			const comments = body.comments;

			if (body.ok) {
				dispatch(getComments(comments));
			} else {
				console.log(body.errores);
			}
		} catch (error) {
			console.log(error);
		}
	}
}

const getComments = (comments) => {
	return {
		type: types.getComments,
		payload: comments

	}
}

