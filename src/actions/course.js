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
