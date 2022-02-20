import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";


import { StudentRoute } from "./StudentRoute";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Start } from "../components/pages/Start";
import { About } from "../components/pages/About";
import { useSelector } from "react-redux";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { LoginScreen } from "../components/auth/LoginScreen";
import { ProfessorRoute } from "./ProfessorRoute";


export const AppRouter = () => {

	const { isAuthenticated } = useSelector(state => state.auth);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={
					<Start />
				} />
				<Route path="acerca" element={
					<About />
				} />
				<Route path="sesion" element={
					<PublicRoute isAuthenticated={isAuthenticated}>
						<LoginScreen />
					</PublicRoute>
				} />
				<Route path="registro" element={
					<PublicRoute isAuthenticated={isAuthenticated}>
						<RegisterScreen />
					</PublicRoute>
				} />
				<Route path="estudiante/*" element={
					<PrivateRoute isAuthenticated={isAuthenticated}>
						<StudentRoute />
					</PrivateRoute>
				} />
				<Route path="docente/*" element={
					<PrivateRoute isAuthenticated={isAuthenticated}>
						<ProfessorRoute />
					</PrivateRoute>
				} />
				<Route path="*" element={
					<Start />
				} />


			</Routes>
		</BrowserRouter>
	);
};

