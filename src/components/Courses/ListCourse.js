import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useSelector } from 'react-redux';

export const ListCourse = () => {

	// const cardObject = [
	// 	{
	// 		id: 1,
	// 		a: 'a'
	// 	},
	// 	{
	// 		id: 2,
	// 		b: 'b'
	// 	},
	// 	{
	// 		id: 3,
	// 		c: 'c'
	// 	},
	// 	{
	// 		id: 4,
	// 		a: 'a'
	// 	},
	// 	{
	// 		id: 5,
	// 		b: 'b'
	// 	},
	// 	{
	// 		id: 6,
	// 		c: 'c'
	// 	},
	// 	{
	// 		id: 7,
	// 		a: 'a'
	// 	},
	// 	{
	// 		id: 8,
	// 		b: 'b'
	// 	},
	// 	{
	// 		id: 9,
	// 		c: 'c'
	// 	},
	// 	{
	// 		id: 10,
	// 		a: 'a'
	// 	},
	// 	{
	// 		id: 11,
	// 		b: 'b'
	// 	},
	// 	{
	// 		id: 12,
	// 		c: 'c'
	// 	},
	// ]

	const { course } = useSelector(state => state.course);
	const { isStudent } = useSelector(state => state.auth);
	console.log(course);

	const header = course.name;

	const registerCourse = <span><Button label="Inscribirse" icon="pi pi-user-plus" className="p-button-primary" style={{ marginLeft: '.2rem' }} /></span>

	const editCourse = <span>
		<Button label="Editar" icon="pi pi-undo" className="p-button-warning" style={{ marginLeft: '1.3rem' }} />
		<Button label="Borrar" icon="pi pi-trash" className="p-button-danger" style={{ marginLeft: '1rem' }} />
	</span>


	const footer = <>
		{
			isStudent ? registerCourse : editCourse
		}

	</>



	return (
		// <div className='main'>
		<div className='container'>

			{
				course.map(index => (
					<div key={index.id} className='card__container'>
						<Card footer={footer} header={header} className='justify-content-center align-content-center' >
							{index.description}
						</Card>
					</div>)
				)
			}
		</div>

		// </div>
	)
}
