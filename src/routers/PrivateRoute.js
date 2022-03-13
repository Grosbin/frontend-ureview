
// import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


export const PrivateRoute = ({ children, isAuthenticated }) => {

	// const { isAuthenticated } = useSelector(state => state.auth);

	// const { pathname, search } = useLocation();
	// localStorage.setItem('lastPath', pathname + search);

	// const location = useLocation();
	// localStorage.setItem('lastPath', location.pathname);
	// localStorage.setItem('searchPath', location.search);
	const { pathname } = useLocation();
	console.log(pathname);

	console.log(`Entro a privado: ${isAuthenticated}`);

	return (
		!!isAuthenticated ? children : <Navigate to='/sesion' /> //TODO: Antes tenia la ruta /sesion
	);
};
