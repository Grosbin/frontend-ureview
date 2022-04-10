import React from 'react';
import { FormEvent } from './FormEvent';


// import { useSelector } from 'react-redux';

export const AddEvent = ({ setDisplayMaximizable }) => {

	console.log('Estoy en añadir curso pero la version 2');

	//TODO: Si da error al agragar un evento, agragar nos tipos de datos

	// name: '',
	// ambit: '',
	// hours: 1,
	// quotas: 1,
	// start: '',
	// finish: '',
	// url: '',
	// description: ''

	const defaultValues = {}

	return (

		<FormEvent defaultValues={defaultValues} type={'addEvent'} setDisplayMaximizable={setDisplayMaximizable} />
	);
}