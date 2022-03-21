import { fetchConToken } from "../helpers/fetch";
import { prepareData } from "../helpers/prepareData";
import { types } from "../types/types";
import { message } from "./auth";

export const startAddNewCourse = (course) => {
	return async (dispatch, getState) => {
		// TODO: Cambiar el name por el id del usuario
		const { name, uid: _id } = getState().auth;
		const user = { name, _id };

		try {
			console.log(course);
			const resp = await fetchConToken('curso', course, 'POST')
			// const id = new Date().getTime();
			const body = await resp.json();

			if (body.ok) {
				dispatch(addNewCourse(body.course.id, course, user));
			} else {
				console.log(body.errores);
			}

		} catch (error) {
			console.log(error);


		}



		// dispatch(activeCourse(id, course));
	}
}

export const startEditCourse = (id, course) => {
	return async (dispatch, getState) => {

		try {
			const resp = await fetchConToken(`curso/${id}`, course, 'PUT');
			const body = await resp.json();

			if (body.ok) {
				dispatch(editCourse(id, course));
			} else {
				dispatch(message(body.msg, true)); //TODO: Validar que funcione bien en coursos
			}
		} catch (error) {
			console.log(error);
		}
	}
}

export const startDeleteCourse = (id) => {
	return async (dispatch) => {
		try {
			const resp = await fetchConToken(`curso/${id}`, {}, 'DELETE');
			const body = await resp.json();

			if (body.ok) {
				console.log('Se borro perfectamente ', id);
				dispatch(deleteCourse(id));
			} else {
				console.log('No se borro el curso')
				dispatch(message(body.msg, true)); //TODO: Validar que funcione bien en coursos
			}
		} catch (error) {
			console.log(error);
		}
	}
}



// Creación de las acciones

export const addNewCourse = (id, course, user) => {
	return {
		type: types.addCourse,
		payload: {
			id,
			user,
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

export const startGetCourse = () => {
	return async (dispatch) => {


		try {
			const resp = await fetchConToken('curso');
			const body = await resp.json();

			const course = prepareData(body.courses);

			if (body.ok) {
				dispatch(getCourse(course));
			} else {
				dispatch(message(body.msg, true)); //TODO: Validar que funcione bien en coursos
			}

		} catch (error) {
			console.log(error);
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
// export const startLoadingCourse = (course) => {
// 	return async (dispatch) => {
// 		// const course = await loadCourse(uid);
// 		dispatch(setCourse(course));
// 	}
// }

// export const setCourse = (course) => ({
// 	type: types.loadCourse,
// 	payload: course
// });

//Obtener los cursos de la base de datos

