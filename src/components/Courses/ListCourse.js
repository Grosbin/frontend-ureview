import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse, startEditCourse } from '../../actions/course';


export const ListCourse = ({ setDisplayMaximizable, setEditCourse, setAddCourse, setDataCourse, displayMaximizable }) => {

	const dispatch = useDispatch();

	const { course } = useSelector(state => state.course);
	const { isStudent } = useSelector(state => state.auth);

	// console.log(course);

	const header = course.name;



	const handleDetete = (id) => {
		console.log('Entro al delete ' + id);
		dispatch(deleteCourse(id));

	}

	const handleUpdate = (id) => {
		console.log('Entro al update ' + id);

		const courseActive = course.find(course => course.id === id);

		setDataCourse(courseActive);
		setEditCourse(true);
		setDisplayMaximizable(true);
		setAddCourse(false);
	}

	const registerCourse = <span><Button label="Inscribirse" icon="pi pi-user-plus" className="p-button-sm p-button-primary" style={{ marginLeft: '.2rem' }} /></span>

	const editCourseButton = (id, displayMaximizable) => <span>
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
			isStudent ? registerCourse : editCourseButton(id, displayMaximizable)
		}

	</>



	return (
		// <div className='main'>
		<div className='container'>

			{
				//TODO: cambiar el h4 por un parrafo
				course.map(index => (
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
