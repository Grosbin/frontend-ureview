import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types"




export const startAddNewActivity = (activity, type) => {
	return async (dispatch, getState) => {
		const { name, uid: _id } = getState().auth;
		const userActivity = { name, _id };
		const id_activity = activity.id;
		const dataActivity = { id_activity, type };

		try {
			const resp = await fetchConToken('actividad', dataActivity, 'POST')
			const body = await resp.json();

			if (body.ok) {
				dispatch(addNewActivity(_id, type, activity, userActivity));
			} else {
				console.log(body.errores);
			}
		} catch (error) {
			console.log(error);
		}
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



export const startGetActivity = () => {
	return async (dispatch) => {
		try {
			const resp = await fetchConToken('actividad');
			const body = await resp.json();
			const activity = body.activity;

			if (body.ok) {
				dispatch(getActivity(activity));
			} else {
				console.log(body.errores);
			}
		} catch (error) {
			console.log(error);
		}
	}
}


const getActivity = (activity) => {
	return {
		type: types.getActivity,
		payload: activity
	}
}