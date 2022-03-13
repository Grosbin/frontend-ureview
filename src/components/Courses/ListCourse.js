import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse } from '../../actions/course';

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



	return (
		// <div className='main'>
		<div className='container'>

			{
				//TODO: cambiar el h4 por un parrafo
				course.map(index => (
					<motion.div
						initial="hidden"
						animate="visible"
						variants={variantsCard}
						key={index.id}
						className='card__container'
					>
						<Card footer={footer(index.id, displayMaximizable)} header={header} className='justify-content-center align-content-center' >
							<h4>{index.name}</h4>
							{index.description}
						</Card>
					</motion.div>)
				)
			}
		</div>

		// </div>
	)
}
