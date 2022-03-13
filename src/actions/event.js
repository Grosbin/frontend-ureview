import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startAddNewEvent = (event) => {
	return (dispatch, getState) => {

		const id = new Date().getTime();
		console.log(`Event id ${id}`);

		dispatch(addNewEvent(id, event));

	}
}

export const startEditEvent = (id, event) => {
	return (dispatch, getState) => {
		dispatch(editEvent(id, event));
	}
}

export const startDeleteEvent = (id) => {
	return async (dispatch) => {

		dispatch(deleteEvent(id));
	}
}


export const startGetEvent = () => {
	return async (dispatch) => {
		//TODO: Cambiarlo por los eventos
		const resp = await fetchConToken('curso');
		const body = await resp.json();

		if (body.ok) {
			dispatch(getEvent(body.courses));
		} else {
			console.log(body.msg);
		}
		console.log(body);
	}
}


// Creación de las acciones

export const addNewEvent = (id, event) => {
	return {
		type: types.addEvent,
		payload: {
			id,
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
