import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';


export const MessagesHook = ({ message }) => {

	const toast = useRef(null);

	console.log('Entro a MessagesHook');

	if (message) {
		displayError();
	}

	const displayError = () => {
		toast.current.show({ severity: 'error', summary: 'Error message', detail: 'Error Content', life: 3000 });

	}

	return (
		// <Message severity="info" text="Message Content" />

		<Toast ref={toast}></Toast>


	);

}
