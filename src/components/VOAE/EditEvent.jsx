import React from 'react';

// import { Editor } from 'primereact/editor';
// import { useSelector } from 'react-redux';
import { FormEvent } from './FormEvent';


// import { useSelector } from 'react-redux';

export const EditEvent = ({ dataCourse, setDisplayMaximizable }) => {

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
		<FormEvent defaultValues={dataCourse} type={'editEvent'} setDisplayMaximizable={setDisplayMaximizable} />
	);
}