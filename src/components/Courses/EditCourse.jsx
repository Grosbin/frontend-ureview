import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';

import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
// import { Editor } from 'primereact/editor';
import { useDispatch, useSelector } from 'react-redux';
import { startAddNewCourse } from '../../actions/course';

import { InputTextarea } from 'primereact/inputtextarea';


// import { useSelector } from 'react-redux';

export const EditCourse = ({ dataCourse }) => {


	const { course } = useSelector(state => state.course);


	const dispatch = useDispatch();
	// const { course } = useSelector(state => state.course);

	const defaultValues = {
		name: dataCourse.name,
		startDate: dataCourse.startDate,
		finishDate: dataCourse.finishDate,
		description: dataCourse.description,
	}
	console.log('Estoy en Edit y estos son los datos: ' + dataCourse.startDate);
	// const [descriptionForm, setDescriptionForm] = useState('');
	const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });
	// const { name, startDate, finishDate, description } = getValues();

	const [startDateForm, setStartDateForm] = useState(null);
	const [finishDateForm, setFinishDateForm] = useState(null);
	// setStartDateForm(dataCourse.startDate);
	// setFinishDateForm(dataCourse.finishDate);





	const onSubmit = (data) => {
		// setShowMessage(true);
		dispatch(startAddNewCourse(data));
		console.log(course)
		// console.log(`Entro a editor: se esperaba ${descriptionForm}, pero se obtuvo ${data.description}`);
		// console.log(startDate + 'Entro a onSubmit');
		reset();
	};

	const getFormErrorMessage = (name) => {
		return errors[name] && <small className="p-error">{errors[name].message}</small>
	};

	addLocale('es', {
		firstDayOfWeek: 1,
		dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
		dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
		dayNamesMin: ['D', 'L', 'M', 'MI', 'J', 'V', 'S'],
		monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
		monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
		today: 'Hoy',
		clear: 'Claro'
	});

	// const header = (
	// 	<span className="ql-formats">
	// 		<button className="ql-bold" aria-label="Bold"></button>
	// 		<button className="ql-italic" aria-label="Italic"></button>
	// 		<button className="ql-underline" aria-label="Underline"></button>
	// 	</span>
	// );


	return (
		<>
			{/* <div className='form__main'>
				<div className='form__box-container -mb-8'>
			<div className="form-demo">
			<div className="flex justify-content-center">
			*/}
			<div className="card mb-3">
				<h5 className="text-center">Editar Curso: {dataCourse.name}</h5>
				<form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
					<div className="field ">
						<span className="p-float-label">

							<Controller
								name="name"
								control={control}
								rules={{ required: 'El nombre es requerido.' }}
								render={({ field, fieldState }) => (
									<InputText

										id={field.name}
										{...field}
										autoFocus
										className={classNames({ 'p-invalid': fieldState.invalid })}
									/>
								)} />

							<label htmlFor="name" className={classNames({ 'p-error': errors.name })}>Nombre del Curso*</label>
						</span>

						{getFormErrorMessage('name')}

					</div>
					<div className="field">
						<span className="p-float-label">

							<Controller
								name="startDate"
								control={control}
								rules={{ required: 'La fecha de inicio es requerida.' }}
								render={({ field, fieldState }) => (

									<Calendar
										ateFormat="dd/mm/yy"
										showTime
										hourFormat="12"
										locale='es'
										value={startDateForm}
										onChange={(e) => setStartDateForm(e.value)}
										id={field.startDate}
										{...field}
										autoFocus
										className={classNames({ 'p-invalid': fieldState.invalid })}
										showIcon={true}
										minDate={new Date()}

									></Calendar>

								)} />
							<label
								htmlFor="startDate"
								className={classNames({ 'p-error': errors.startDate })}
							>Fecha de Inicio*</label>
						</span>
						{getFormErrorMessage('startDate')}
					</div>

					<div className="field">
						<span className="p-float-label">

							<Controller
								name="finishDate"
								control={control}
								value={finishDateForm}
								rules={{ required: 'La fecha de finalización es requerida.' }}
								render={({ field, fieldState }) => (

									<Calendar
										ateFormat="dd/mm/yy"
										showTime
										hourFormat="12"
										locale='es'
										onChange={(e) => setFinishDateForm(e.value)}
										id={field.finishDate}
										{...field}
										autoFocus
										className={classNames({ 'p-invalid': fieldState.invalid, 'p-button-info': true })}
										showIcon={true}

										minDate={new Date()}



									></Calendar>

								)} />
							<label
								htmlFor="finishDate"
								className={classNames({ 'p-error': errors.finishDate })}
							>Fecha de Finalización*</label>
						</span>
						{getFormErrorMessage('finishDate')}
					</div>
					<div className="field">
						<span className="p-float-label">

							<Controller
								name="description"

								control={control}
								rules={{ required: false }}
								render={({ field }) => (

									<InputTextarea
										id={field.description}
										{...field}
										rows={5}
										cols={30}
										autoResize={true}
									// value={descriptionForm}
									// onChange={(e) => setDescriptionForm(e.value)} autoResize
									/>
									// <Editor
									// 	style={{ height: '320px' }}
									// 	headerTemplate={header}
									// 	id={field.description}
									// 	{...field}
									// />

								)} />
							<label
								htmlFor="description"
							// className={classNames({ 'p-error': errors.finishDate })}
							>Descripción</label>

						</span>
					</div>

					<Button type="submit" label="Guardar" className="mt-2 mb-4 p-button-warning" />

				</form>
			</div>
			{/*
			</div>
			 </div>
		</div > 
	</div > */}
		</>
	);
}