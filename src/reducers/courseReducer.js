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
		case types.activeCourse:
			return {
				...state,
				active: {
					...action.payload
				}
			}
		case types.addCourse:
			return {
				...state,
				course: [action.payload, ...state.course]
			}
		case types.editCourse:
			return {
				...state,
				course: state.course.map(course => course.id === action.payload.id ? action.payload.course : course)
			}
		case types.deleteCourse:
			return {
				...state,
				course: state.course.filter(course => course.id !== action.payload),
				active: null
			}

		case types.getCourse:
			return {
				...state,
				course: action.payload
			}
		case types.loadCourse:
			return {
				...state,
				course: [...action.payload]

			}
		//Campo agragado

		default:
			return state;
	}
}