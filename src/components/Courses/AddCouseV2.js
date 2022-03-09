import React from 'react';
import { FormCourse } from './FormCourse';


// import { useSelector } from 'react-redux';

export const AddCourseV2 = ({ setDisplayMaximizable }) => {

	console.log('Estoy en añadir curso pero la version 2');

	const defaultValues = {
		name: '',
		startDate: '',
		finishDate: '',
		description: ''
	}


	return (

		<FormCourse defaultValues={defaultValues} type={'addCourse'} setDisplayMaximizable={setDisplayMaximizable} />
	);
}