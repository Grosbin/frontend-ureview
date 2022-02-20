import { types } from "../types/types"




// Action Dispatchers
export const startLoginEmailPasswordStudent = (email, password) => {
	const user = 'Grosbin';
	return (dispatch) => {
		dispatch(loginStudent(user, email));
		console.log(`El password es: ${password}`);
	}
}

export const startLoginEmailPasswordProfessor = (email, password) => {
	const user = 'Grosbin';
	return (dispatch) => {
		dispatch(loginProfessor(user, email));
		console.log(`El password es: ${password}`);
	}
}

// Action Creators
export const loginStudent = (user, email) => {
	return {
		type: types.loginStudent,
		payload: {
			user,
			email
		},
	}
}

export const loginProfessor = (user, email) => {
	return {
		type: types.loginProfessor,
		payload: {
			user,
			email
		},
	}
}

export const logout = () => {
	return {
		type: types.logout,
	}
}

export const student = () => {
	return {
		type: types.student,
	}
}

export const professor = () => {
	return {
		type: types.professor,
	}
}