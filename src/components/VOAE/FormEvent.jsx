import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';

import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

import { useDispatch } from 'react-redux';


import { InputTextarea } from 'primereact/inputtextarea';
import { startAddNewEvent, startEditEvent } from '../../actions/event';

import { InputNumber } from 'primereact/inputnumber';

import { Dropdown } from 'primereact/dropdown';


import { motion } from "framer-motion";
import { variantsCard, variantsButton } from '../../helpers/framerValues';

export const FormEvent = ({
	defaultValues,
	type,
	setDisplayMaximizable

}) => {

	const MotionButton = motion(Button);
	const dispatch = useDispatch();
	const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });
	const [startDateForm, setStartDateForm] = useState(null);
	const [finishDateForm, setFinishDateForm] = useState(null);
	// const [selectedAmbit, setSelectedAmbit] = useState(null);
	// const [hoursAssign, setHoursAssign] = useState(null);
	// const [numberQuotas, setNumberQuotas] = useState(null);
	const [selectAmbit, setSelectAmbit] = useState([]);
	// console.log(selectedAmbit.ambit);

	const fieldAmbit = [
		{ ambit: 'Cultural' },
		{ ambit: 'Social' },
		{ ambit: 'Académico' },
		{ ambit: 'Artístico' },
		{ ambit: 'Deportivo' }
	];

	useEffect(() => {
		setSelectAmbit(fieldAmbit);
	}, [])

	const onSubmit = (data) => {

		if (type === 'addEvent') {
			dispatch(startAddNewEvent(data));
			console.log(data)

			console.log('Ambito', data.ambit.ambit)
			// console.log('Horas', data.hours)
			// console.log('Cupos', data.quotas)
			setDisplayMaximizable(false);
		}
		if (type === 'editEvent') {
			console.log(data.name, data.start)
			dispatch(startEditEvent(data.id, data));
			console.log('Curso Editado ' + data.name);
			setDisplayMaximizable(false);
		}

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
				<h5 className="text-center">
					{type === 'addEvent' && 'Agregar Evento'}
					{type === 'editEvent' && `Editar Evento: ${defaultValues.name}`}
				</h5>
				<form onSubmit={handleSubmit(onSubmit)} className="p-fluid">

					<div className="field">
						<span className="p-float-label">

							<Controller
								name="name"
								control={control}
								rules={{
									required: 'El nombre es requerido.',
									minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres.' },
									maxLength: { value: 40, message: 'El nombre debe tener máximo 40 caracteres.' }
								}}
								render={({ field, fieldState }) => (
									<InputText
										id={field.name}
										{...field}
										autoFocus
										className={classNames({ 'p-invalid': fieldState.invalid })}
									/>
								)} />

							<label htmlFor="name" className={classNames({ 'p-error': errors.name })}>Nombre del Evento*</label>
						</span>

						{getFormErrorMessage('name')}

					</div>

					<div className="field">
						<span className="p-float-label">

							<Controller
								name="ambit"

								control={control}
								rules={{ required: 'El ámbito es requerido.' }}
								render={({ field }) => (

									<Dropdown
										id={field.ambit}
										value={field.value}
										onChange={(e) => field.onChange(e.value)}
										options={selectAmbit}
										optionLabel="ambit" />
								)} />

							<label htmlFor="ambit" className={classNames({ 'p-error': errors.ambit })}>Ambito*</label>
						</span>

						{getFormErrorMessage('ambit')}

					</div>



					<div className="grid p-fluid">
						<div className="col-10 md:col-6">

							{/** TODO: Error */}

							<div className="field">
								<span className="p-float-label">

									<Controller
										name="hours"

										control={control}
										rules={{ required: 'Las horas asignadas son requerida' }}
										render={({ field, fieldState }) => (

											<InputNumber
												id={field.hours}
												required={true}
												inputId={field.hours} //TODO: Da errror
												value={field.value}
												onValueChange={(e) => field.onChange(e.value)}
												mode="decimal" //TODO: Da errror
												showButtons
												min={1}
												max={60}
												suffix=" Horas"
												placeholder='Horas asignadas*'
												className={classNames({ 'p-invalid': fieldState.invalid })}
											/>

										)} />

									{/* <label htmlFor="hours" className={classNames({ 'p-error': errors.hours })}>Horas Asignadas*</label> */}
								</span>

								{getFormErrorMessage('hours')}

							</div>

						</div>
						<div className="col-10 md:col-6">

							{/** TODO: Error */}

							<div className="field">
								<span className="p-float-label">

									<Controller
										name="quotas"

										control={control}
										rules={{ required: 'Los cupos son requeridos' }}
										render={({ field, fieldState }) => (

											<InputNumber
												id={field.quotas}
												required={true}
												inputId={field.quotas}
												value={field.value}
												onValueChange={(e) => field.onChange(e.value)}
												mode="decimal"
												showButtons
												autoFocus={false}
												min={1}
												max={500}
												suffix=" Cupos"
												placeholder='Número de Cupos*'
												className={classNames({ 'p-invalid': fieldState.invalid })}
											/>

										)} />

									{/* <label htmlFor="quotas" className={classNames({ 'p-error': errors.quotas })}>Número de cupos*</label> */}
								</span>

								{getFormErrorMessage('quotas')}

							</div>

						</div>
					</div>

					<div className="grid p-fluid">
						<div className="col-9 md:col-7">
							<div className="field">
								<span className="p-float-label">

									<Controller
										name="start"

										control={control}
										rules={{ required: 'La fecha es requerida.' }}
										render={({ field, fieldState }) => (

											<Calendar
												touchUI
												ateFormat="dd/mm/yy"
												showTime
												hourFormat="12"
												locale='es'
												value={startDateForm}
												onChange={(e) => setStartDateForm(e.value)}
												id={field.start}
												{...field}
												// autoFocus
												className={classNames({ 'p-invalid': fieldState.invalid })}
												showIcon={true}
												minDate={new Date()}

											></Calendar>

										)} />
									<label
										htmlFor="start"
										className={classNames({ 'p-error': errors.start })}
									>Fecha*</label>
								</span>
								{getFormErrorMessage('start')}
							</div>
						</div>

						<div className="col-10 md:col-5">
							<div className="field">

								<div className="p-inputgroup">
									<span className="p-inputgroup-addon"><i className='pi pi-clock'></i></span>
									<span className="p-float-label">

										<Controller
											name="finish"

											control={control}
											rules={{ required: 'La duración es requerida.' }}
											render={({ field, fieldState }) => (

												<Calendar
													// ateFormat="dd/mm/yy"
													timeOnly
													showTime
													hourFormat="24"
													locale='es'
													value={finishDateForm}
													onChange={(e) => setFinishDateForm(e.value)}
													id={field.finish}
													{...field}
													// autoFocus
													className={classNames({ 'p-invalid': fieldState.invalid, 'p-button-info': true })}


												// minDate={new Date()}



												></Calendar>

											)} />
										<label
											htmlFor="finish"
											className={classNames({ 'p-error': errors.finish })}
										>Duración*</label>
									</span>

								</div>
								{getFormErrorMessage('finish')}
							</div>
						</div>

					</div>

					<div className="field">
						<div className="p-inputgroup">
							<span className="p-inputgroup-addon">www</span>
							<span className="p-float-label">

								<Controller
									name="url"

									control={control}
									rules={{ required: false }}
									render={({ field, fieldState }) => (
										<InputText
											id={field.url}
											{...field}
											// autoFocus
											className={classNames({ 'p-invalid': fieldState.invalid })}
										/>


									)} />

								<label htmlFor="url" className={classNames({ 'p-error': errors.url })}>URL Evento</label>
							</span>
						</div>

						{getFormErrorMessage('url')}

					</div>

					<div className="field">
						<span className="p-float-label">

							<Controller
								name="description"

								control={control}
								rules={{
									required: false,
									maxLength: { value: 500, message: 'La descripción debe tener máximo 500 caracteres.' }
								}}
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
								className={classNames({ 'p-error': errors.description })}
							>Descripción</label>

						</span>
						{getFormErrorMessage('description')}
					</div>

					<MotionButton
						whileHover="hover"
						whileTap="tap"
						variants={variantsButton}

						type="submit"
						label="Guardar"
						className={`mt-2 mb-4 
						${type === 'addEvent' && 'p-button-info'}
						${type === 'editEvent' && 'p-button-warning'}`
						}

					/>

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

