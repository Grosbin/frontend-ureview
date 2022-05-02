import { Routes, Route } from "react-router-dom";
// import { ListCourse } from "../components/Courses/ListCourse";
// import { AddCourse } from "../components/Courses/AddCourse";
import { Start } from "../components/pages/Start";
import { CourseScreenProfessor } from "../components/pages/professor/CourseScreenProfessor";
// import { CourseScreenStudent } from "../components/pages/CourseScreenStudent";
import { VoaeScreen } from "../components/pages/professor/VoaeScreen";
// import { ListEvent } from "../components/VOAE/ListEvent";
import { PreviewCourse } from "../components/Courses/PreviewCourse";
import { PreviewEvent } from "../components/VOAE/PreviewEvent";
import { EventActivity } from "../components/pages/EventActivity";
import { CodeAttendance } from "../components/VOAE/CodeAttendance";
import { CourseActivity } from "../components/pages/CourseActivity";
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
				<Route path="ver-evento" element={<PreviewEvent />} />
				<Route path="agregar-evento/evento-informacion" element={<EventActivity />} />
				<Route path="ver-evento/evento-informacion" element={<EventActivity />} />
				<Route path="ver-cursos/curso-informacion" element={<CourseActivity />} />
				<Route path="agregar-evento/codigo-asistencia" element={<CodeAttendance />} />
				<Route path="*" element={<Start />} />
			</Routes>

		</>
	);
};