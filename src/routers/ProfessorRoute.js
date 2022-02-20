import { Routes, Route } from "react-router-dom";
// import { ListCourse } from "../components/Courses/ListCourse";
// import { AddCourse } from "../components/Courses/AddCourse";
import { CourseScreenProfessor } from "../components/pages/CourseScreenProfessor";
import { CourseScreenStudent } from "../components/pages/CourseScreenStudent";
// import { PruebaPrivada } from "../components/pages/PruebaPrivada";
// import { PruebaPrivada2 } from "../components/pages/PruebaPrivada2";
import { Start } from "../components/pages/Start";
// import { Navbar } from "../components/ui/Navbar";

export const ProfessorRoute = () => {
	return (
		<>
			<Routes >
				<Route path="agregar-curso" element={<CourseScreenProfessor />} />
				<Route path="ver-cursos" element={<CourseScreenStudent />} />
				<Route path="*" element={<Start />} />
			</Routes>

		</>
	);
};