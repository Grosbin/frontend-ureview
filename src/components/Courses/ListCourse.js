import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export const ListCourse = () => {

	const cardObject = [
		{
			id: 1,
			a: 'a'
		},
		{
			id: 2,
			b: 'b'
		},
		{
			id: 3,
			c: 'c'
		},
		{
			id: 4,
			a: 'a'
		},
		{
			id: 5,
			b: 'b'
		},
		{
			id: 6,
			c: 'c'
		},
		{
			id: 7,
			a: 'a'
		},
		{
			id: 8,
			b: 'b'
		},
		{
			id: 9,
			c: 'c'
		},
		{
			id: 10,
			a: 'a'
		},
		{
			id: 11,
			b: 'b'
		},
		{
			id: 12,
			c: 'c'
		},
	]

	const header = <img alt="" src='' />;
	const footer = <span>
		<Button label="Guardar" icon="pi pi-check" style={{ marginLeft: '.2rem' }} />
		<Button label="Cancelar" icon="pi pi-times" className="p-button-secondary" style={{ marginLeft: '.5rem' }} />
	</span>;
	return (
		// <div className='main'>
		<div className='container'>

			{
				cardObject.map(index => (
					<div key={index.id} className='card__container'>
						<Card footer={footer} header={header} className='justify-content-center align-content-center' >
							Contenido del curso
						</Card>
					</div>)
				)
			}
		</div>

		// </div>
	)
}
