import React, { useEffect, useRef } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse, startDeleteCourse, startGetCourse } from '../../actions/course';

import { motion } from "framer-motion";
import { variantsCard, variantsButton } from '../../helpers/framerValues';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';


export const ListCourse = ({
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

	// console.log(course);
	const toast = useRef(null);
	const header = course.name;

	useEffect(() => {
		dispatch(startGetCourse());
	}, [dispatch]);




	const handleDetete = (index) => {
		console.log('Entro al delete ' + index.id);
		toast.current.show({ severity: 'success', summary: 'Borrado', detail: `${index.name} eliminado exitosamente`, life: 4000 });
		dispatch(startDeleteCourse(index.id));

	}

	const confirmDelete = (e, index) => {
		// console.log(index);
		// console.log(e);
		confirmPopup({
			target: e.currentTarget,
			message: `Desea borrar ${index.name}?`,
			icon: 'pi pi-exclamation-triangle text-yellow-500',
			acceptClassName: 'p-button-danger',
			acceptLabel: 'Aceptar',
			rejectClassName: 'p-button-primary p-button-text',
			accept: () => handleDetete(index),
			// reject: () => reject(index)
		});
	}

	const handleUpdate = (id) => {
		console.log('Entro al update ' + id);

		const courseActive = course.find(course => course.id === id);

		setDataContent(courseActive);
		setEditContent(true);
		setDisplayMaximizable(true);
		setAddContent(false);
	}

	const registerCourse = <motion.span
		whileHover="hover"
		whileTap="tap"
		variants={variantsButton}
	>
		<MotionButton
			whileHover="hover"
			whileTap="tap"
			variants={variantsButton}

			label="Inscribirse"
			icon="pi pi-user-plus"
			className="p-button-sm p-button-primary"
			style={{ marginLeft: '.2rem' }}
		/>
	</motion.span>

	const editCourseButton = (index, displayMaximizable) => <span>

		<MotionButton
			whileHover="hover"
			whileTap="tap"
			variants={variantsButton}

			label="Editar"
			icon="pi pi-undo"
			className="p-button-warning"
			disabled={displayMaximizable}
			style={{ marginLeft: '1.3rem' }}
			onClick={() => handleUpdate(index.id)}

		/>
		<MotionButton
			whileHover="hover"
			whileTap="tap"
			variants={variantsButton}
			label="Borrar"
			disabled={displayMaximizable}
			icon="pi pi-trash"
			className="p-button-danger"
			style={{ marginLeft: '1rem' }}
			onClick={(e) => confirmDelete(e, index)}
		/>
	</span>


	const footer = (index, displayMaximizable) => <>
		{
			isStudent ? registerCourse : editCourseButton(index, displayMaximizable)
		}
	</>

	const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

	return (
		// <div className='main'>
		<div className='container'>
			<Toast ref={toast} />
			{
				//TODO: cambiar el h4 por un parrafo
				course.map(index => index.user?._id === uid && (
					<motion.div
						initial="hidden"
						animate="visible"
						// whileHover="hover"
						variants={variantsCard}
						key={index.id}
						className='card__container'
					>
						<Card title={index.name} footer={footer(index, displayMaximizable)} header={header} className='justify-content-center align-content-center' >
							{/* <h3>Organizador: {index.user?.name}</h3> */}

							<h5 className='-mb-3' >Inicio: {index.start.toLocaleDateString("es-ES", dateOptions)}</h5>
							<h5 className='' >Finalización: {index.start.toLocaleDateString("es-ES", dateOptions)}</h5>
							<p className='card__description m-0' style={{ lineHeight: '1.5' }}>
								{index.description}
							</p>
						</Card>
					</motion.div>)
				)
			}
		</div>

		// </div>
	)
}
