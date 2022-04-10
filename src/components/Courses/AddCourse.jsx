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

export const AddCourse = () => {


	const { course } = useSelector(state => state.course);


	const dispatch = useDispatch();

	const defaultValues = {
		name: '',
		start: '',
		finish: '',
		description: ''
	}

	const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });


	const [startDateForm, setStartDateForm] = useState(null);
	const [finishDateForm, setFinishDateForm] = useState(null);





	const onSubmit = (data) => {

		dispatch(startAddNewCourse(data));
		console.log(course)

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



	return (
		<>

			<div className="card mb-3">
				<h5 className="text-center">Agregar Curso</h5>
				<form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
					<div className="field">
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
								name="start"

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
										id={field.start}
										{...field}
										autoFocus
										className={classNames({ 'p-invalid': fieldState.invalid })}
										showIcon={true}
										minDate={new Date()}

									></Calendar>

								)} />
							<label
								htmlFor="start"
								className={classNames({ 'p-error': errors.start })}
							>Fecha de Inicio*</label>
						</span>
						{getFormErrorMessage('start')}
					</div>

					<div className="field">
						<span className="p-float-label">

							<Controller
								name="finish"

								control={control}
								rules={{ required: 'La fecha de finalización es requerida.' }}
								render={({ field, fieldState }) => (

									<Calendar
										ateFormat="dd/mm/yy"
										showTime
										hourFormat="12"
										locale='es'
										value={finishDateForm}
										onChange={(e) => setFinishDateForm(e.value)}
										id={field.finish}
										{...field}
										autoFocus
										className={classNames({ 'p-invalid': fieldState.invalid, 'p-button-info': true })}
										showIcon={true}

										minDate={new Date()}



									></Calendar>

								)} />
							<label
								htmlFor="finish"
								className={classNames({ 'p-error': errors.finish })}
							>Fecha de Finalización*</label>
						</span>
						{getFormErrorMessage('finish')}
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
									/>
								)} />
							<label
								htmlFor="description"

							>Descripción</label>

						</span>
					</div>

					<Button type="submit" label="Guardar" className="mt-2 mb-4 p-button-info" />

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

