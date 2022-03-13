
// import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { background, backgroundProfessor, backgroundStudent } from "../helpers/backgroudState";


export const PublicRoute = ({ children, isAuthenticated, isStudent }) => {
	// const { pathname } = useLocation();
	// localStorage.setItem('pathUrl', pathname);

	// const { isAuthenticated } = useSelector(state => state.auth);
	console.log(`Entro a publico: ${isAuthenticated}`);
	console.log(`Entro a studente: ${isStudent}`);
	const { pathname } = useLocation();
	console.log(pathname);


	useEffect(() => {
		if (!isStudent && (pathname === '/sesion' || pathname === '/registro')) {
			backgroundProfessor();
		}

		if (isStudent && (pathname === '/sesion' || pathname === '/registro')) {
			backgroundStudent();
		}

		if (pathname !== '/sesion' && pathname !== '/registro') {
			background();
		}

	}, [pathname, isStudent]);



	return !!isAuthenticated ? <Navigate to='/' /> : children;


};
