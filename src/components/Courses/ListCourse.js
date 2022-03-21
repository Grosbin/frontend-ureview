import React, { useEffect } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse, startDeleteCourse, startGetCourse } from '../../actions/course';

import { motion } from "framer-motion";
import { variantsCard, variantsButton } from '../../helpers/framerValues';


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

	const header = course.name;

	useEffect(() => {
		dispatch(startGetCourse());
	}, [dispatch]);




	const handleDetete = (id) => {
		console.log('Entro al delete ' + id);
		dispatch(startDeleteCourse(id));

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

	const editCourseButton = (id, displayMaximizable) => <span>

		<MotionButton
			whileHover="hover"
			whileTap="tap"
			variants={variantsButton}

			label="Editar"
			icon="pi pi-undo"
			className="p-button-warning"
			disabled={displayMaximizable}
			style={{ marginLeft: '1.3rem' }}
			onClick={() => handleUpdate(id)}

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
			onClick={() => handleDetete(id)}
		/>
	</span>


	const footer = (id, displayMaximizable) => <>
		{
			isStudent ? registerCourse : editCourseButton(id, displayMaximizable)
		}
	</>

	const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

	return (
		// <div className='main'>
		<div className='container'>

			{
				//TODO: cambiar el h4 por un parrafo
				course.map(index => index.user?._id === uid && (
					<motion.div
						initial="hidden"
						animate="visible"
						variants={variantsCard}
						key={index.id}
						className='card__container'
					>
						<Card title={index.name} footer={footer(index.id, displayMaximizable)} header={header} className='justify-content-center align-content-center' >
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
