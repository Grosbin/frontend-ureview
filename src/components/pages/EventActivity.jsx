import React, { useState } from 'react'

import { Fieldset } from 'primereact/fieldset';

import { Knob } from 'primereact/knob';

import { Button } from 'primereact/button';

import { ScrollTop } from 'primereact/scrolltop';
import { ScrollPanel } from 'primereact/scrollpanel';

import { InputTextarea } from 'primereact/inputtextarea';
import { CommentItems } from '../ui/CommentItems';
import { assets } from '../../helpers/assets';

import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { useDispatch, useSelector } from 'react-redux';

import  moment from 'moment';
import { startAddNewComment } from '../../actions/comment';





export const EventActivity = () => {

	const { active } = useSelector(state => state.activities);
	const { comments} = useSelector(state => state.comments);
	const { name, uid } = useSelector(state => state.auth);

	console.log(active.activity.id);
	;

	const dispatch = useDispatch();

	const {activity: eventActive } = active;

	const [contentComment, setContentComment] = useState('');
	const [countKey, setCountKey] = useState(1);
	// console.log(contentComment);
	// const [value3, setValue3] = useState(12);

	const handleComment = () => {
		// console.log('El usuraio hizo un comentario');
		// console.log(contentComment);
		// console.log(typeof contentComment);
		
		setCountKey(countKey + 1);
		if(contentComment && contentComment.length < 500){
			dispatch(startAddNewComment(contentComment));
		}
		if(contentComment.length > 500){
			alert('El comentario no puede tener mas de 500 caracteres');
		}
	}

	addLocale('es', {
		firstDayOfWeek: 1,
		dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
		dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
		dayNamesMin: ['D', 'L', 'M', 'MI', 'J', 'V', 'S'],
		monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
		today: 'Hoy',
		clear: 'Claro'
	});

	return (
		<div className='main'>
			<div className="grid">
				<div className="col-12 md:col-12 lg:col-12">
					<div className="bg-blue-500 shadow-1 p-3 border-round bg-img-activity">
						{active.enroll && <Button label="Inscribirse" icon="pi pi-user-plus" iconPos="left" className='p-button p-button-success mb-2 mr-2' />}
						{true && <Button label="Abrir Enlace" icon="pi" iconPos="left" className='p-button p-button-warning mb-2' />}
						<p className="text-0 font-bold text-5xl text-center m-0">{eventActive.name}</p>
						<div className="flex justify-content-between mb-3">
							<div>
								{/* <span className="block text-0 font-medium mb-3">Detalle</span> */}

								<Fieldset legend="Descripción" toggleable>
									<p>{eventActive.description}</p>
								</Fieldset>
							</div>
						</div>
					</div>
				</div>
				<div className='col-12 md:col-12 lg:col-6'>
					<div className='items__info-activity'>
						<Calendar locale='es' value={eventActive.start} inline readOnlyInput style={{ width: '100%' }} showTime={true} hourFormat={'12'} />
					</div>
				</div>
				<div className="col-12 md:col-12 lg:col-6 ">
					<div className="surface-0 shadow-1 p-3 border-1 border-50 border-round" style={{ height: '100%' }}>
						<div className="grid" style={{ height: '100%' }}>
							<div className='col-12 md:col-12 lg:col-6'>
								<div className='items__info-activity'>
									<span className="block text-500 font-medium mb-3">Cantidad de Cupos</span>
									{/* Terminar falta hacerlo dinamico justo con la base de datos */}
									<Knob valueColor={"#22c55e"} rangeColor={"red"} min={eventActive.quotas} max={0} value={eventActive.quotas} size={200} />
								</div>
							</div>
							<div className='col-12 md:col-12 lg:col-6 bg-blue-500 border-round mb-3'>
								<div className='items__info-activity'>
									<span className="block text-0 font-bold">Horas Art. 140</span>
									<span className="block text-0 font-medium">Horas</span>
									<p className=' text-7xl font-bold text-yellow-500 m-6'>{eventActive.hours}</p>
								</div>
							</div>

							<div className='col-12 md:col-12 lg:col-12 bg-yellow-400 border-round'>
								<div className='items__info-activity'>
									<span className="block text-600 font-bold">Duración</span>
									<span className="block text-600 font-medium">Horas</span>
									<p className=' text-7xl font-bold text-blue-500 m-3'>{moment(eventActive.finish).format('H:mm')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-12" >
					<div>
						<div className="flex justify-content-between mb-3">
							<div className='surface-0 shadow-2 p-3 border-round' style={{ width: '100%' }} >
								<Button label="Comentar" icon="pi pi-comments" iconPos="right" className='p-button p-button-primary mb-2' onClick={handleComment} />
								<InputTextarea keyfilter="int" placeholder='Escribe un comentario' className='p-3 surface-100' value={contentComment} onChange={(e) => setContentComment(e.target.value)} rows={5} autoResize style={{ width: '100%' }} />		
							</div>

						</div>

					</div>
				</div>
				{/* <div className="col-12">
					<div className="surface-0 shadow-2 p-3 border-50 border-round" style={{ height: '600px' }}>
						<div className="flex justify-content-between mb-3">
							<div >
								<span className="block text-900 font-bold mb-3">Comentarios</span>

								<div className="comments-container">
									<ul id="comments-list" className="comments-list">

										<CommentItems />
										<CommentItems />
										<CommentItems />
										<CommentItems />
										<CommentItems />
										<CommentItems />
										<CommentItems />

										<ScrollTop target="parent" threshold={100} className="custom-scrolltop" icon="pi pi-arrow-up" />

									</ul>
								</div>
							
							</div>
						</div>

					</div>
				</div> */}
				<div className="col-12">
					{
						comments.map(index => index.activity?.id === active.activity.id &&  <CommentItems key={index.id} user={index.user.name} comment={index.comment} date={index.date}/>)
					}
				</div>
			</div>
		</div>
	)
}
