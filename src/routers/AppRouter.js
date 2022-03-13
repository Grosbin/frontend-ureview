import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";


import { StudentRoute } from "./StudentRoute";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Start } from "../components/pages/Start";
import { About } from "../components/pages/About";
import { useDispatch, useSelector } from "react-redux";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { LoginScreen } from "../components/auth/LoginScreen";
import { ProfessorRoute } from "./ProfessorRoute";
import { useEffect } from "react";
import { startChecking } from "../actions/auth";
import { startLoadingCourse } from "../actions/course";



export const AppRouter = () => {

	const { isAuthenticated, isStudent } = useSelector(state => state.auth);
	const { course } = useSelector(state => state.course);




	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startChecking())
		console.log('Estoy en AppRouter');
		// dispatch(startLoadingCourse(course));
	}, [dispatch, course])


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
					<PublicRoute isAuthenticated={isAuthenticated} isStudent={isStudent}>
						<LoginScreen />
					</PublicRoute>
				} />
				<Route path="registro" element={
					<PublicRoute isAuthenticated={isAuthenticated} isStudent={isStudent}>
						<RegisterScreen />
					</PublicRoute>
				} />
				<Route path="estudiante/*" element={
					<PrivateRoute isAuthenticated={isAuthenticated} >
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

