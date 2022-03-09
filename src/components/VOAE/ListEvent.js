import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent } from '../../actions/event';
// import { deleteCourse, startEditCourse } from '../../actions/course';


export const ListEvent = ({ setDisplayMaximizable, setEditEvent, setAddEvent, setDataEvent, displayMaximizable }) => {

	const dispatch = useDispatch();

	const { events } = useSelector(state => state.events);
	const { isStudent } = useSelector(state => state.auth);

	// console.log(event);

	const header = events.name;



	const handleDetete = (id) => {
		console.log('Entro al delete ' + id);
		dispatch(deleteEvent(id));

	}

	const handleUpdate = (id) => {
		console.log('Entro al update ' + id);

		const eventActive = events.find(event => event.id === id);

		setDataEvent(eventActive);
		setEditEvent(true);
		setDisplayMaximizable(true);
		setAddEvent(false);
	}

	const registerEvent = <span><Button label="Inscribirse" icon="pi pi-user-plus" className="p-button-sm p-button-primary" style={{ marginLeft: '.2rem' }} /></span>

	const editEventButton = (id, displayMaximizable) => <span>
		<Button
			label="Editar"
			icon="pi pi-undo"
			className="p-button-warning"
			disabled={displayMaximizable}
			style={{ marginLeft: '1.3rem' }}
			onClick={() => handleUpdate(id)}

		/>
		<Button
			label="Borrar"
			disabled={displayMaximizable}
			icon="pi pi-trash"
			className="p-button-danger"
			style={{ marginLeft: '1rem' }}
			onClick={() => handleDetete(id)}
		/>
	</span>


	const footer = (id, displayMaximizable) => <>
		{
			isStudent ? registerEvent : editEventButton(id, displayMaximizable)
		}

	</>



	return (
		// <div className='main'>
		<div className='container'>

			{
				//TODO: cambiar el h4 por un parrafo
				events.map(index => (
					<div key={index.id} className='card__container'>
						<Card footer={footer(index.id, displayMaximizable)} header={header} className='justify-content-center align-content-center' >
							<h4>{index.name}</h4>
							{index.description}
						</Card>
					</div>)
				)
			}
		</div>

		// </div>
	)
}
