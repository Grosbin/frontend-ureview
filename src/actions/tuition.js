import { types } from "../types/types";

export const startAddNewTuition = (tuition) => {
	return (dispatch, getState) => {
		const id = new Date().getTime();
		const { name, uid: _id } = getState().auth;
		const user = { name, _id };
		// const { active } = getState().activities;
		// const { activity } = active;
		// const date = new Date();
		// console.log(activity);
		dispatch(addTuition(id, tuition, user));
	}
}


const addTuition = (id, tuition, user) => {
	return {
		type: types.addTuition,
		payload: {
			id,
			user,
			tuition,
		}
	}
}