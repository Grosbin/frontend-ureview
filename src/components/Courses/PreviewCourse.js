import React, { useEffect, useRef, useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse, startDeleteCourse, startGetCourse } from '../../actions/course';

import { motion } from "framer-motion";
import { variantsCard, variantsButton } from '../../helpers/framerValues';
import { assets } from '../../helpers/assets';
import { startAddNewActivity } from '../../actions/activity';


import { ConfirmDialog } from 'primereact/confirmdialog'; // To use <ConfirmDialog> tag
import { confirmDialog } from 'primereact/confirmdialog'; // To use confirmDialog method
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';


export const PreviewCourse = ({
	setDisplayMaximizable,
	setEditContent,
	setAddContent,
	setDataContent,
	displayMaximizable

}) => {



	const MotionButton = motion(Button);


	const dispatch = useDispatch();

	const { course } = useSelector(state => state.course);
	const { isStudent, uid } = useSelector(state => state.auth);


	const toast = useRef(null);
	// console.log(course);


	useEffect(() => {
		dispatch(startGetCourse());
	}, [dispatch]);

	const handleTakeCourse = (index) => {
		console.log('Se creo la actividad', index.name);
		toast.current.show({ severity: 'success', summary: 'Confirmado', detail: `${index.name} matriculado exitosamente`, life: 4000 });
		dispatch(startAddNewActivity(index, 'course'));
	}

	// const accept = (index) => {
	// 	console.log(index);
	// 	handleTakeCourse(index);
	// }

	// const reject = (index) => {
	// 	toast.current.show({ severity: 'error', summary: 'Cancelado', detail: `${index.name} no se ha matriculado`, life: 3000 });
	// }

	const confirm = (e, index) => {
		// console.log(index);
		// console.log(e);
		confirmPopup({
			target: e.currentTarget,
			message: `Desea cursar ${index.name}?`,
			icon: 'pi pi-exclamation-triangle text-yellow-500',
			acceptClassName: 'p-button-primary',
			acceptLabel: 'Aceptar',
			rejectClassName: 'p-button-danger p-button-text',
			accept: () => handleTakeCourse(index),
			// reject: () => reject(index)
		});
	}

	const registerCourse = (index) => <motion.span
		whileHover="hover"
		whileTap="tap"
		variants={variantsButton}
	>
		<MotionButton
			whileHover="hover"
			whileTap="tap"
			variants={variantsButton}
			onClick={(e) => confirm(e, index)}
			value={index.id}
			label="Cursar"
			icon="pi pi-user-plus"
			className="p-button-sm p-button-success"
			style={{ marginLeft: '.2rem' }}
		/>
	</motion.span>


	const header = (name) => <div className='header__card'>
		<img className='header__card-img' alt="Card" src={assets('./banner-01.png')} />
		<h2 className='text-blue-50 texto-header'>{name}</h2>
	</div>

	const footer = (index) => <>
		{
			isStudent && registerCourse(index)
		}

	</>


	const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

	return (
		<div className='main'>
			<Toast ref={toast} />
			<div className='container'>
				{
					//TODO: cambiar el h4 por un parrafo
					course.slice(0).reverse().map(index => (
						<motion.div
							initial="hidden"
							animate="visible"
							whileHover="hover"
							variants={variantsCard}
							key={index.id}
							className='card__container'
						>
							<Card subTitle={`Organizador: ${index.user?.name}`} footer={footer(index)} header={header(index.name)} className='justify-content-center align-content-center cursor-pointer' >
								{/* <h4 className='-mb-3 -mt-4'>Organizador: {index.user?.name}</h4> */}
								<h5 className='-mb-3 -mt-4' >Inicio: {index.start.toLocaleDateString("es-ES", dateOptions)}</h5>
								<h5 className='' >Finalización: {index.finish.toLocaleDateString("es-ES", dateOptions)}</h5>
								<p className='card__description m-0' style={{ lineHeight: '1.5' }}>{index.description}</p>

							</Card>
						</motion.div>)
					)
				}
			</div>

		</div>
	)
}

