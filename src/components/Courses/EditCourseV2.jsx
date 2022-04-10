import React from 'react';

// import { Editor } from 'primereact/editor';
import { useSelector } from 'react-redux';
import { FormCourse } from './FormCourse';


// import { useSelector } from 'react-redux';

export const EditCourseV2 = ({ dataCourse, setDisplayMaximizable }) => {

	console.log('Estoy en editar curso pero la version 2');
	// const { course } = useSelector(state => state.course);
	// const dataCourse = course.find(course => course.id === idCourse);

	// const [contentCourse, setContentCourse] = useState(dataCourse);

	// useEffect(() => {
	// 	console.log('Estoy en useEffect');
	// 	setContentCourse(dataCourse);

	// }, [course])

	// const defaultValues = {
	// 	name: dataCourse.name,
	// 	startDate: dataCourse.startDate,
	// 	finishDate: dataCourse.finishDate,
	// 	description: dataCourse.description,
	// }





	return (
		<FormCourse defaultValues={dataCourse} type={'editCourse'} setDisplayMaximizable={setDisplayMaximizable} />
	);
}