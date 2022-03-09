import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startAddNewCourse = (course) => {
	return (dispatch, getState) => {
		// TODO: Cambiar el name por el id del usuario
		// const { idUser } = getState().auth;
		const id = new Date().getTime();
		console.log(`course id ${id}`);
		// const newCourse = {
		// 	id: new Date().getTime(),
		// 	nameCourse: '',
		// 	startDate: '',
		// 	finishDate: '',
		// 	description: '',
		// }

		dispatch(addNewCourse(id, course));
		// dispatch(activeCourse(id, course));
	}
}

export const startEditCourse = (id, course) => {
	return (dispatch, getState) => {
		dispatch(editCourse(id, course));
	}
}

export const startDeleteCourse = (id) => {
	return async (dispatch) => {
		// const { idUser } = getState().auth;
		// const id = new Date().getTime();
		dispatch(deleteCourse(id));
	}
}

export const startGetCourse = () => {
	return async (dispatch) => {
		const resp = await fetchConToken('curso');
		const body = await resp.json();

		if (body.ok) {
			dispatch(getCourse(body.courses));
		} else {
			console.log(body.msg);
		}
		console.log(body);
	}
}


// Creación de las acciones

export const addNewCourse = (id, course) => {
	return {
		type: types.addCourse,
		payload: {
			id,
			...course
		}
	}
}

// Eliminar un curso
export const deleteCourse = (id) => {
	return {
		type: types.deleteCourse,
		payload: id
	}
}

export const editCourse = (id, course) => ({
	type: types.editCourse,
	payload: {
		id,
		course: {
			id,
			...course
		}
	}
})

//Curso Activo
export const activeCourse = (id, course) => {
	return {
		type: types.activeCourse,
		payload: {
			id,
			...course
		}
	}
}

export const getCourse = (course) => {
	return {
		type: types.getCourse,
		payload: course
	}
}

//Campo agregado
export const startLoadingCourse = (course) => {
	return async (dispatch) => {
		// const course = await loadCourse(uid);
		dispatch(setCourse(course));
	}
}

export const setCourse = (course) => ({
	type: types.loadCourse,
	payload: course
});
