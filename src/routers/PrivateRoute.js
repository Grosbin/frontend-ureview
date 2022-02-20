
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({ children, isAuthenticated }) => {

	// const { isAuthenticated } = useSelector(state => state.auth);

	// const { pathname, search } = useLocation();
	// localStorage.setItem('lastPath', pathname + search);

	// const location = useLocation();
	// localStorage.setItem('lastPath', location.pathname);
	// localStorage.setItem('searchPath', location.search);
	console.log(`Entro a privado: ${isAuthenticated}`);

	return (
		!!isAuthenticated ? children : <Navigate to='/sesion' />
	);
};
