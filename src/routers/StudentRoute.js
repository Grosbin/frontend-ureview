import { Routes, Route } from "react-router-dom";
// import { ListCourse } from "../components/Courses/ListCourse";
import { CourseScreenStudent } from "../components/pages/CourseScreenStudent";
import { EventScreenStudent } from "../components/pages/EventsScreenStudent";
// import { PruebaPrivada } from "../components/pages/PruebaPrivada";
import { PruebaPrivada2 } from "../components/pages/PruebaPrivada2";
import { Start } from "../components/pages/Start";
import { PreviewEvent } from "../components/VOAE/PreviewEvent";
// import { Navbar } from "../components/ui/Navbar";

export const StudentRoute = () => {
	return (
		<>
			<Routes >
				<Route path="ver-cursos" element={<CourseScreenStudent />} />
				<Route path="ver-eventos" element={<PreviewEvent />} />
				<Route path="privado2" element={<PruebaPrivada2 />} />
				<Route path="*" element={<Start />} />
			</Routes>

		</>
	);
};
