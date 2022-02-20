
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PublicRoute = ({ children, isAuthenticated }) => {
	// const { pathname } = useLocation();
	// localStorage.setItem('pathUrl', pathname);

	// const { isAuthenticated } = useSelector(state => state.auth);
	console.log(`Entro a publico: ${isAuthenticated}`);


	return !!isAuthenticated ? <Navigate to='/' /> : children;


};
