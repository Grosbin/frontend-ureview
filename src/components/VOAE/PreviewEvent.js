import React, { useEffect } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse, startDeleteCourse, startGetCourse } from '../../actions/course';

import { motion } from "framer-motion";
import { variantsCard, variantsButton } from '../../helpers/framerValues';
import { assets } from '../../helpers/assets';
import { startGetEvent } from '../../actions/event';


export const PreviewEvent = ({
	setDisplayMaximizable,
	setEditContent,
	setAddContent,
	setDataContent,
	displayMaximizable

}) => {



	const MotionButton = motion(Button);


	const dispatch = useDispatch();

	const { events } = useSelector(state => state.events);
	const { isStudent, uid } = useSelector(state => state.auth);

	// console.log(course);


	useEffect(() => {
		dispatch(startGetEvent());
	}, [dispatch]);



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


	const header = (name, img) => <div className='header__card'>
		<img className='header__card-img' alt="Card" src={assets(`./${img}.png`)} />
		<h2 className='text-blue-50 texto-header'>{name}</h2>
	</div>

	const footer = () => <>
		{
			isStudent && registerCourse
		}

	</>


	const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

	return (
		<div className='main'>

			<div className='container'>
				{
					//TODO: cambiar el h4 por un parrafo
					events.slice(0).reverse().map(index => (
						<motion.div
							initial="hidden"
							animate="visible"
							variants={variantsCard}
							key={index.id}
							className='card__container'
						>
							<Card subTitle={`Organizador: ${index.user?.name}`} footer={footer(index.id, displayMaximizable)} header={header(index.name, index.ambit.ambit)} className='justify-content-center align-content-center' >
								{/* <h4 className='-mb-3 -mt-4'>Organizador: {index.user?.name}</h4> */}
								<h5 className='-mb-3 -mt-4' >Inicio: {index.start.toLocaleDateString("es-ES", dateOptions)}</h5>
								<h5 className='' >Finalización: {index.start.toLocaleDateString("es-ES", dateOptions)}</h5>
								<p className='card__description m-0' style={{ lineHeight: '1.5' }}>{index.description}</p>

							</Card>
						</motion.div>)
					)
				}
			</div>

		</div>
	)
}
