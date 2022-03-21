import { fetchConToken } from "../helpers/fetch";
import { prepareData } from "../helpers/prepareData";
import { types } from "../types/types";
import { message } from "./auth";

export const startAddNewEvent = (event) => {
	return async (dispatch, getState) => {

		const { name, uid: _id } = getState().auth;
		const user = { name, _id };

		try {
			// console.log(event);
			const resp = await fetchConToken('horas-voae', event, 'POST')
			// const id = new Date().getTime();
			const body = await resp.json();
			console.log(body)
			if (body.ok) {
				dispatch(addNewEvent(body.hoursVoae.id, event, user));
			} else {
				console.log(body.errores);
			}

		} catch (error) {
			console.log(error);


		}

	}
}

export const startEditEvent = (id, event) => {
	return async (dispatch, getState) => {
		try {
			const resp = await fetchConToken(`horas-voae/${id}`, event, 'PUT');
			const body = await resp.json();

			if (body.ok) {
				dispatch(editEvent(id, event));
			} else {
				dispatch(message(body.msg, true)); //TODO: Validar que funcione bien en coursos
			}
		} catch (error) {
			console.log(error);
		}
	}
}

export const startDeleteEvent = (id) => {
	return async (dispatch) => {
		try {
			const resp = await fetchConToken(`horas-voae/${id}`, {}, 'DELETE');
			const body = await resp.json();

			if (body.ok) {
				console.log('Se borro perfectamente ', id);
				dispatch(deleteEvent(id));
			} else {
				console.log('No se borro el evento')
				dispatch(message(body.msg, true)); //TODO: Validar que funcione bien en coursos
			}
		} catch (error) {
			console.log(error);
		}
	}
}




// Creación de las acciones

export const addNewEvent = (id, event, user) => {
	return {
		type: types.addEvent,
		payload: {
			id,
			user,
			...event
		}
	}
}


export const deleteEvent = (id) => {
	return {
		type: types.deleteEvent,
		payload: id
	}
}

export const editEvent = (id, event) => ({
	type: types.editEvent,
	payload: {
		id,
		events: {
			id,
			...event
		}
	}
})


export const activeEvent = (id, event) => {
	return {
		type: types.activeEvent,
		payload: {
			id,
			...event
		}
	}
}

export const startGetEvent = () => {
	return async (dispatch) => {

		try {
			const resp = await fetchConToken('horas-voae');
			const body = await resp.json();

			const event = prepareData(body.hoursVoae);

			if (body.ok) {
				dispatch(getEvent(event));
			} else {
				dispatch(message(body.msg, true)); //TODO: Validar que funcione bien en coursos
			}

		} catch (error) {
			console.log(error);
		}
	}
}

export const getEvent = (event) => {
	return {
		type: types.getEvent,
		payload: event
	}
}


export const startLoadingEvent = (event) => {
	return async (dispatch) => {

		dispatch(setEvent(event));
	}
}

export const setEvent = (event) => ({
	type: types.loadEvent,
	payload: event
});
