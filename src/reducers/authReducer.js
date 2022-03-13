import { types } from "../types/types"

const inialState = {
	// TODO: cambiar el idUser por el id del usuario de la base de datos
	isAuthenticated: false,
	isStudent: null,
	message: null,
	error: false
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
				...action.payload,
				isAuthenticated: true,
				isStudent: true
			}
		case types.loginProfessor:
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isStudent: false
			}
		case types.logout:
			return {
				...state,
				isAuthenticated: false,
				isStudent: null,
			}
		case types.loginError:
			return {
				...state,
				...action.payload,
			}
		case types.authCheckingFinish:
			return {
				...state,
				isAuthenticated: false
			}
		case types.message:
			return {
				...state,
				message: action.payload.message,
				error: action.payload.error
			}
		default:
			return state
	}
}