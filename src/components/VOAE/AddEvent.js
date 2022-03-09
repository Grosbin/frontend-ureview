import React from 'react';
import { FormEvent } from './FormEvent';


// import { useSelector } from 'react-redux';

export const AddEvent = ({ setDisplayMaximizable }) => {

	console.log('Estoy en añadir curso pero la version 2');

	const defaultValues = {
		name: '',
		startDate: '',
		finishDate: '',
		description: ''
	}


	return (

		<FormEvent defaultValues={defaultValues} type={'addCourse'} setDisplayMaximizable={setDisplayMaximizable} />
	);
}