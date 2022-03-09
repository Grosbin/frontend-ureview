import { Routes, Route } from "react-router-dom";
// import { ListCourse } from "../components/Courses/ListCourse";
// import { AddCourse } from "../components/Courses/AddCourse";
import { Start } from "../components/pages/Start";
import { CourseScreenProfessor } from "../components/pages/CourseScreenProfessor";
import { CourseScreenStudent } from "../components/pages/CourseScreenStudent";
import { VoaeScreen } from "../components/pages/VoaeScreen";
import { ListEvent } from "../components/VOAE/ListEvent";
import { PreviewCourse } from "../components/Courses/PreviewCourse";
// import { PruebaPrivada } from "../components/pages/PruebaPrivada";
// import { PruebaPrivada2 } from "../components/pages/PruebaPrivada2";
// import { Navbar } from "../components/ui/Navbar";

export const ProfessorRoute = () => {
	return (
		<>
			<Routes >
				<Route path="agregar-curso" element={<CourseScreenProfessor />} />
				<Route path="ver-cursos" element={<PreviewCourse />} />
				<Route path="agregar-evento" element={<VoaeScreen />} />
				<Route path="ver-evento" element={<PreviewCourse />} />
				<Route path="*" element={<Start />} />
			</Routes>

		</>
	);
};