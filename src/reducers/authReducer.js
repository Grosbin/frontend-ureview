import { types } from "../types/types"

const inialState = {
	// TODO: cambiar el idUser por el id del usuario de la base de datos
	isAuthenticated: false,
	user: null,
	email: null,
	isStudent: false,
}

export const authReducer = (state = inialState, action) => {
	switch (action.type) {
		case types.student:
			return {
				...state,
				isStudent: true,
			}
		case types.professor:
			return {
				...state,
				isStudent: false,
			}
		case types.loginStudent:
			return {
				...state,
				user: action.payload.user,
				email: action.payload.email,
				isAuthenticated: true,
				isStudent: true
			}
		case types.loginProfessor:
			return {
				...state,
				user: action.payload.user,
				email: action.payload.email,
				isAuthenticated: true,
				isStudent: false
			}
		case types.logout:
			return {
				...state,
				user: null,
				email: null,
				isAuthenticated: false
			}
		default:
			return state
	}
}