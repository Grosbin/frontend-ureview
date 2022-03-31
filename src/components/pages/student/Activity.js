import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { assets } from '../../../helpers/assets';

import { ScrollPanel } from 'primereact/scrollpanel';


export const Activity = () => {

	const { activities } = useSelector(state => state.activities);

	const course = activities.filter(activity => activity.type === 'course') || [];
	const events = activities.filter(activity => activity.type === 'events') || [];
	console.log(course);
	console.log(events);


	useEffect(() => {
		console.log('Acitivdades');
	}, []);

	const handleActivity = (activity) => {
		console.log(activity);
	}


	const productTemplate = (activity) => {
		return (
			<div className="activity-item grid">
				<div className="flex flex-wrap card-container">

					<div className="flex align-items-center justify-content-center bg-blue-100 font-bold text-white m-2 border-round" >
						<div className='header__card mb-3'>
							<div className='header__card'>

								<img className='p-carousel-img' alt="Card" src={assets(`${activity.type === 'course' ? './banner-01.png' : `./${activity.ambit.ambit}.png`}`)} />
								<h2 className='text-blue-50 texto-header'>{activity.name}</h2>
							</div>
							<div className='flex'>
								<div className='flex-1 flex align-content-center justify-content-center'>
									<div>
										<h4 className="mb-1 text-900">{activity.user?.name}</h4>
										<h6 className="mt-0 mb-3 text-900">{activity.user?.email}</h6>
									</div>
								</div>
								<div className=''>
									<Button label="Abrir" className="p-button-success mr-3 mt-1 small" onClick={() => handleActivity(activity)} />
								</div>
							</div>
						</div>
					</div>
					<div className="flex align-items-center justify-content-center">
						<div className="scrollpanel-demo">
							<div className='card '>
								<ScrollPanel className='scroll-panel__card custombar1'>
									<div style={{ padding: '1em', lineHeight: '1.5' }}>
										{activity.description}
									</div>
								</ScrollPanel>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}

	const headerCourse = <div>
		<h1 className=' mt-0 mb-0'>Cursos</h1>
	</div>

	const headerEvent = <div>
		<h1 className=' mt-0 mb-0'>Eventos</h1>
	</div>



	return (
		<div className='main'>


			<div className="grid">
				<div className="col-12 md:col-6 lg:col-3">
					<div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
						<div className="flex justify-content-between mb-3">
							<div>
								<span className="block text-500 font-medium mb-3">Cursos</span>
								<div className="text-900 font-medium text-xl">{course.length}</div>
							</div>
							<div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
								<i className="pi pi-book text-blue-500 text-xl"></i>
							</div>
						</div>
						{/* <span className="text-green-500 font-medium">24 new </span> */}
						{/* <span className="text-500">since last visit</span> */}
					</div>
				</div>
				<div className="col-12 md:col-6 lg:col-3">
					<div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
						<div className="flex justify-content-between mb-3">
							<div>
								<span className="block text-500 font-medium mb-3">Eventos VOAE</span>
								<div className="text-900 font-medium text-xl">{events.length}</div>
							</div>
							<div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
								<i className="pi pi-bookmark text-orange-500 text-xl"></i>
							</div>
						</div>
						{/* <span className="text-green-500 font-medium">%52+ </span> */}
						{/* <span className="text-500">since last week</span> */}
					</div>
				</div>
				<div className="col-12 md:col-6 lg:col-3">
					<div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
						<div className="flex justify-content-between mb-3">
							<div>
								<span className="block text-500 font-medium mb-3">Total horas  Art.140</span>
								<div className="text-900 font-medium text-xl">0</div>
							</div>
							<div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
								<i className="pi pi-clock text-cyan-500 text-xl"></i>
							</div>
						</div>
						{/* <span className="text-green-500 font-medium">520  </span> */}
						{/* <span className="text-500">newly registered</span> */}
					</div>
				</div>
				<div className="col-12 md:col-6 lg:col-3">
					<div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
						<div className="flex justify-content-between mb-3">
							<div>
								<span className="block text-500 font-medium mb-3">Comentarios</span>
								<div className="text-900 font-medium text-xl">0</div>
							</div>
							<div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
								<i className="pi pi-comment text-purple-500 text-xl"></i>
							</div>
						</div>
						{/* <span className="text-green-500 font-medium">85 </span> */}
						{/* <span className="text-500">responded</span> */}
					</div>
				</div>
			</div>

			<div className='grid'>
				<div className="col-12 md:col-6 lg:col-12">
					<div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
						<div className="flex justify-content-center mb-3">
							<div className="card flex justify-content-center" style={{ maxWidth: '100%' }}>
								<Carousel value={events} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="400px"
									itemTemplate={productTemplate} header={headerEvent} circular autoplayInterval={4000} style={{ maxWidth: '100%', marginTop: '1em' }} />
							</div>

						</div>

					</div>
				</div>

				<div className="col-12 md:col-6 lg:col-12">
					<div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
						<div className="flex justify-content-center">
							<div className="card flex justify-content-center" style={{ maxWidth: '100%' }}>
								<Carousel value={course} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="400px"
									itemTemplate={productTemplate} header={headerCourse} circular autoplayInterval={3000} style={{ width: '100%', marginTop: '1em' }} />
							</div>
						</div>

					</div>
				</div>


			</div>




		</div>
	)
}
