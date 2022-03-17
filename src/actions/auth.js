// import { background } from "../helpers/backgroudState";
import { renderMatches } from "react-router-dom";
import { Alerts } from "../components/ui/Alerts";

import { fetchConToken, fetchSinToken } from "../helpers/fetch";
// import { MessagesHook } from "../hooks/MessagesHook";

import { types } from "../types/types";

// import { Message } from 'primereact/message';





// Dispatch de las acciones
export const startLoginEmailPasswordStudent = (email, password) => {

	return async (dispatch) => {

		const resp = await fetchSinToken('estudiante/acceso-estudiante', { email, password }, 'POST');
		const body = await resp.json();
		dispatch(message('', false));



		// console.log(body);
		if (body.ok) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('token-init-date', new Date().getTime());
			// background();
			dispatch(loginStudent({
				uid: body.uid,
				name: body.name,
			}));

		} else {
			//TODO: Terminar las validaciones
			console.log(body.msg);
			dispatch(message(body.msg, true));

			// return <Alerts message={body.msg} error={true} />


		}

	}
}

export const startLoginEmailPasswordProfessor = (email, password) => {
	return async (dispatch) => {
		const resp = await fetchSinToken('docente/acceso-docente', { email, password }, 'POST');
		const body = await resp.json();
		dispatch(message('', false));



		// console.log(body);
		if (body.ok) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('token-init-date', new Date().getTime());
			// background();
			dispatch(loginProfessor({
				uid: body.uid,
				name: body.name,
			}));

		} else {
			//TODO: Terminar las validaciones
			console.log(body.msg);
			dispatch(message(body.msg, true));
		}

		console.log(`El password es: ${password}`);
	}
}

export const startLogout = () => {
	return (dispatch) => {
		dispatch(logout());
		dispatch(message('Sesión cerrada', false));
		localStorage.clear();
	}
}

export const startRegisterStudent = (name, email, password) => {
	return async (dispatch) => {
		const resp = await fetchSinToken('estudiante/registro-estudiante', { name, email, password }, 'POST');
		const body = await resp.json();
		dispatch(message('', false));

		// console.log(body);
		if (body.ok) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('token-init-date', new Date().getTime());
			// background();
			dispatch(loginStudent({
				uid: body.uid,
				name: body.name,
			}));

		} else {
			console.log(body.msg);
			dispatch(message(body.msg, true));

		}
	}
}

export const startRegisterProfessor = (name, email, password) => {
	return async (dispatch) => {
		const resp = await fetchSinToken('docente/registro-docente', { name, email, password }, 'POST');
		const body = await resp.json();
		dispatch(message('', false));

		// console.log(body);
		if (body.ok) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('token-init-date', new Date().getTime());
			// background();
			dispatch(loginProfessor({
				uid: body.uid,
				name: body.name,
			}));

		} else {
			console.log(body.msg);
			dispatch(message(body.msg, true));
		}
	}
}

export const startChecking = () => {
	return async (dispatch, getState) => {
		const resp = await fetchConToken('usuario/renovar');
		const body = await resp.json();


		// console.log(body);
		if (body.ok) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('token-init-date', new Date().getTime());
			// const validStudent = localStorage.getItem('is-student');
			// console.log('Es estudiante: ', !!validStudent);
			// console.log('Es autenticado: ', !!uid);
			const typeUser = body.email;

			//TODO: Quitar esto si no funciona el errror de los colores
			// background();

			if (typeUser.includes('@unah.hn')) {
				dispatch(loginStudent({
					uid: body.uid,
					name: body.name,
				}));
			}
			if (typeUser.includes('@unah.edu.hn')) {
				dispatch(loginProfessor({
					uid: body.uid,
					name: body.name,
				}));
			}
		} else {
			console.log(body.msg);
			dispatch(checkingFinish());
		}
	}
}

const checkingFinish = () => ({
	type: types.authCheckingFinish
})


// Creacion de las acciones

// export const login = (user) => {
// 	return {
// 		type: types.login,
// 		payload: user
// 	}
// }


export const loginStudent = (user) => {
	return {
		type: types.loginStudent,
		payload: user
	}
}

export const loginProfessor = (user) => {
	return {
		type: types.loginProfessor,
		payload: user
	}
}

// export const registerStudent = (name, email, password) => {
// 	return {
// 		type: types.registerStudent,
// 		payload: {
// 			name,
// 			email,
// 			password
// 		}
// 	}
// }

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

export const startMessage = (msg, isError) => {
	return (dispatch) => {
		dispatch(message(msg, isError));
	}
}

export const message = (message, error) => {
	return {
		type: types.message,
		payload: {
			message,
			error
		}
	}
}
