import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent, startDeleteEvent, startGetEvent } from '../../actions/event';

import { Badge } from 'primereact/badge';
import { Rating } from 'primereact/rating';

import { motion } from "framer-motion";
import { variantsCard, variantsButton } from '../../helpers/framerValues';

// import { deleteCourse, startEditCourse } from '../../actions/course';


export const ListEvent = ({
	setDisplayMaximizable,
	displayMaximizable,
	setEditContent,
	setAddContent,
	setDataContent,

}) => {

	const MotionButton = motion(Button);

	const dispatch = useDispatch();

	const { events } = useSelector(state => state.events);
	const { isStudent, uid } = useSelector(state => state.auth);

	// console.log(event);

	const header = events.name;
	const [star, setStar] = useState(null);
	const [quotas, setQuotas] = useState(null);



	// useEffect(() => {
	// 	// setQuotas(events.quotas);
	// 	console.log(events);
	// }, [quotas])
	useEffect(() => {
		dispatch(startGetEvent());
	}, [dispatch]);



	const handleDetete = (id) => {
		console.log('Entro al delete ' + id);
		// dispatch(deleteEvent(id));
		dispatch(startDeleteEvent(id));

	}

	const handleUpdate = (id) => {
		console.log('Entro al update ' + id);

		const eventActive = events.find(event => event.id === id);

		setDataContent(eventActive);
		setEditContent(true);
		setDisplayMaximizable(true);
		setAddContent(false);
	}

	const handleRegister = (id) => {
		console.log(id);
		const eventActive = events.find(event => event.id === id);
		const quotas = eventActive.quotas;
		const newQuotas = quotas - 1;
		console.log(newQuotas);
		console.log(eventActive);
		setQuotas(newQuotas);
	}

	const registerEvent = (id, quotas) =>
		<div className="grid p-fluid">
			<div className="col-8 md:col-9">
				{/** TODO: Reutilizo la clase p-inputgroup */}
				<div className="p-inputgroup">
					<MotionButton
						whileHover="hover"
						whileTap="tap"
						variants={variantsButton}
						label="Inscribirse"
						icon="pi pi-user-plus"
						className="p-button-sm p-button-primary"
						style={{ marginLeft: '.2rem' }}
						onClick={() => handleRegister(id, quotas)}
					/>


				</div>
			</div>
			<div className="col-8 md:col-3">
				<div className="p-inputgroup">

					<Badge value={quotas} size="large" severity="warning"></Badge>
				</div>
			</div>
			<div className="col-9 md:col-7">
				<div className="p-inputgroup">

					<Rating value={3} readOnly cancel={false} onChange={(e) => setStar(e.value)} />

				</div>
			</div>
		</div>


	const editEventButton = (id, displayMaximizable) => <span>
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


	const footer = (id, displayMaximizable, quotas) => <>
		{
			isStudent ? registerEvent(id, quotas) : editEventButton(id, displayMaximizable)
		}

	</>

	const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

	return (
		// <div className='main'>
		<div className='container'>

			{
				//TODO: cambiar el h4 por un parrafo
				events.slice(0).reverse().map(index => index.user?._id === uid && (
					<motion.div
						initial="hidden"
						animate="visible"
						variants={variantsCard}
						key={index.id}
						className='card__container'
					>
						<Card title={index.name} footer={footer(index.id, displayMaximizable, index.quotas)} header={header} className='justify-content-center align-content-center' >
							{/* <h4>{index.name}</h4> */}
							{/* {index.description} */}
							{/* {index.quotas} */}
							<h5 className='-mb-3 -mt-3' >Inicio: {index.start.toLocaleDateString("es-ES", dateOptions)}</h5>
							<h5 className='' >Finalización: {index.start.toLocaleDateString("es-ES", dateOptions)}</h5>

							{
								index.description
									?
									<p className='card__description m-0' style={{ lineHeight: '1.5' }}>
										{index.description.length > 30 ? `${index.description.substring(0, 30)}...` : index.description}
									</p>
									:
									<p className='card__description m-0 text-yellow-500' style={{ lineHeight: '1.5' }}>Este Evento no tiene descripción</p>
							}

						</Card>
					</motion.div>)
				)
			}
		</div>

		// </div>
	)
}