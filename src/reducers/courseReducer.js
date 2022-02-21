import { types } from "../types/types";

const initialState = {
	course: [
		{
			id: 1, name: 'Curso 1', startDate: '01/01/2020', finishDate: '01/01/2020', description: 'Descripción del curso 1'
		},
		{
			id: 2, name: 'Curso 2', startDate: '01/01/2020', finishDate: '01/01/2020', description: 'Descripción del curso 2'
		}],

	active: null
}

export const courseReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.addCourse:
			return {
				...state,
				course: [action.payload, ...state.course]
			}
		default:
			return state;
	}
}