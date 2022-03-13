import React from 'react';
import { FormEvent } from './FormEvent';


// import { useSelector } from 'react-redux';

export const AddEvent = ({ setDisplayMaximizable }) => {

	console.log('Estoy en añadir curso pero la version 2');

	const defaultValues = {
		name: '',
		ambit: '',
		hoursVoae: 0,
		quotas: 0,
		startDate: '',
		finishDate: '',
		url: '',
		description: ''
	}


	return (

		<FormEvent defaultValues={defaultValues} type={'addEvent'} setDisplayMaximizable={setDisplayMaximizable} />
	);
}