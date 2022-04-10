import { types } from "../types/types"




export const startAddNewActivity = (activity, type) => {
	return async (dispatch, getState) => {
		const { name, uid: _id } = getState().auth;
		const userActivity = { name, _id };

		dispatch(addNewActivity(_id, type, activity, userActivity));
	}

}


const addNewActivity = (id, type, activity, userActivity) => {
	return {
		type: types.addActivity,
		payload: {
			id,
			type,
			userActivity,
			...activity
		}
	}
}


export const startDataActivity = (activity, enroll) => {
	return async (dispatch) => {
		dispatch(dataActivity(activity, enroll));
	}
}


const dataActivity = (activity, enroll) => {
	return {
		type: types.dataActivity,
		payload: {
			activity,
			enroll
		}
	}
}