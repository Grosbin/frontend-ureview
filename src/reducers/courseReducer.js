import { types } from "../types/types";

const initialState = {
	course: [],
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
				course: [...action.payload]

			}
		default:
			return state;
	}
}