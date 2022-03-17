
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { background } from "../helpers/backgroudState";


export const PrivateRoute = ({ children, isAuthenticated }) => {

	// const { isAuthenticated } = useSelector(state => state.auth);

	// const { pathname, search } = useLocation();
	// localStorage.setItem('lastPath', pathname + search);

	// const location = useLocation();
	// localStorage.setItem('lastPath', location.pathname);
	// localStorage.setItem('searchPath', location.search);
	const { pathname } = useLocation();
	console.log(pathname);

	// console.log(`Entro a privado: ${isAuthenticated}`);

	// useEffect(() => {
	// 	if (!isAuthenticated) {
	// 		background();
	// 	}
	// }, [pathname]);


	return (
		!!isAuthenticated ? children : <Navigate to='/' /> //TODO: Antes tenia la ruta /sesion
	);
};
