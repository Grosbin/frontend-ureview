
import React, { useEffect, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
// import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startMessage, startRegisterProfessor, startRegisterStudent } from '../../actions/auth';
import { motion } from "framer-motion";
// import { background, backgroundProfessor } from '../../helpers/backgroudState';
import { Toast } from 'primereact/toast';

export const RegisterScreen = () => {

	const toast = useRef(null);

	const variantsCard = {
		visible: {
			opacity: 1,
			transition: { duration: 0.3 },
		},
		hidden: {
			opacity: 0,
		}
	}


	const variantsButton = {
		hover: {
			scale: 0.9,
		},
		tap: {
			scale: 0.8,
		}
	}

	const dispatch = useDispatch();

	// const [showMessage, setShowMessage] = useState(false);
	const { isStudent, message, error, } = useSelector(state => state.auth);
	// const [formData, setFormData] = useState({});
	// const [counterSubmit, setCounterSubmit] = React.useState(null);
	const [validPassword, setValidPassword] = useState(true);

	const defaultValues = {
		name: '',
		email: '',
		password: '',
		password2: ''
	}

	const displayError = () => {
		toast.current.show({ severity: 'error', summary: 'Error de Registro', detail: message, life: 10000 });

	}


	useEffect(() => {
		if (message) {
			displayError();
		}
	}, [message]);

	const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

	const onSubmit = (data) => {

		if (data.password !== data.password2) {
			console.log('Las contraseñas no coinciden');
			setValidPassword(false);
			// dispatch(startMessage('Las contraseñas no coinciden', true));
		} else if (isStudent) {

			console.log('Dispact de estudiante');
			setValidPassword(true);
			reset();
			// background();
			dispatch(startRegisterStudent(data.name, data.email, data.password));
		} else if (!isStudent) {

			console.log('Dispatch de profesor')
			setValidPassword(true);
			reset();
			// background();
			dispatch(startRegisterProfessor(data.name, data.email, data.password));
		}
		// setCounterSubmit(counterSubmit + 1);
		// setShowMessage(true);
		// setFormData(data);
	};

	const getFormErrorMessage = (name) => {
		return errors[name] && <small className="p-error">{errors[name].message}</small>
	};

	// const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

	const passwordHeader = <h6>Nivel de seguridad</h6>;
	const passwordFooter = (
		<React.Fragment>
			<Divider />
			<p className="mt-2">Sugerencias</p>
			<ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
				<li>Al menos una letra en minúscula</li>
				<li>Al menos una letra en mayúscula</li>
				<li>Al menos un número</li>
				<li>Mínimo 8 caracteres</li>
			</ul>
		</React.Fragment>
	);

	return (
		<div className={`main ${isStudent ? 'is__student' : 'is__professor'}`}>
			<Toast ref={toast}></Toast>
			<div className='form__main'>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={variantsCard}
					className='form__box-container'
				>
					<div className="form-demo">
						{/* <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '20vw' }}>
							<div className="flex justify-content-center flex-column align-items-center pt-6 px-3">
								<i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
								<h5>Registro exitoso!</h5>
								<p>
									Su cuenta está registrada a nombre <b>{formData.name}</b><br />con correo <b>{formData.email}</b>
								</p>
							</div>
						</Dialog> */}


						<div className="flex justify-content-center">
							<div className="card mb-3">
								<h5 className="text-center">{`${isStudent ? 'Registro Estudiante' : 'Registro Docente'}`}</h5>
								<form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
									<div className="field">
										<span className="p-float-label">
											<Controller
												name="name"
												control={control}
												rules={{
													required: 'El nombre es requerido.',
													pattern: {
														value: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
														message: 'Nombre no valido.'
													}

												}} render={({ field, fieldState }) => (
													<InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
												)} />
											<label htmlFor="name" className={classNames({ 'p-error': errors.name })}>Nombre*</label>
										</span>
										{getFormErrorMessage('name')}
									</div>
									<div className="field">
										<span className="p-float-label p-input-icon-right">
											<i className="pi pi-envelope" />
											<Controller name="email" control={control}
												rules={{
													required: 'El correo es requerido.',
													pattern: {
														value: isStudent ? (/^[A-Z0-9._%+-]+@[u]+[n]+[a]+[h]+\.[h]+[n]{1}$/i) : (/^[A-Z0-9._%+-]+@[u]+[n]+[a]+[h]+\.[e]+[d]+[u]+\.[h]+[n]{1}$/i),
														message: isStudent ? 'El correo no es invalido. ejemplo@unah.hn' : 'El correo no es invalido. ejemplo@unah.edu.hn'
													}
												}}
												render={({ field, fieldState }) => (
													<InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
												)} />
											<label htmlFor="email" className={classNames({ 'p-error': errors.email })}>Correo Institucional*</label>
										</span>
										{getFormErrorMessage('email')}
									</div>
									<div className="field">
										<span className="p-float-label">
											<Controller
												name="password"
												control={control}

												rules={{
													required: 'La contraseña es requerida.',
													pattern: {
														value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
														message: 'La contraseña no es valida'
													}

												}} render={({ field, fieldState }) => (
													<Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} header={passwordHeader} footer={passwordFooter} weakLabel={'Bajo'} mediumLabel={'Medio'} strongLabel={'Seguro'} promptLabel={'Ingrese una contraseña'} />
												)} />
											<label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Contraseña*</label>
										</span>
										{getFormErrorMessage('password')}
									</div>
									{/* confirmar contraseña */}
									<div className="field">
										<span className="p-float-label">
											<Controller
												name="password2"
												control={control}
												rules={{
													required: 'La confirmación es requerida.',

												}}
												render={({ field, fieldState }) => (
													<Password
														id={field.name}
														{...field}
														toggleMask
														feedback={false}
														className={classNames({
															'p-invalid': fieldState.invalid
														})} />
												)} />
											<label htmlFor="password2" className={classNames({ 'p-error': errors.password })}>Confirme la contraseña*</label>
										</span>
										{getFormErrorMessage('password2') || (!validPassword && <small className="p-error">Las contraseñas no coinciden </small>)}
									</div>
									<motion.div
										whileHover="hover"
										whileTap="tap"
										variants={variantsButton}
									>
										<Button type="submit" label="Guardar" className="mt-2 mb-4 p-button-info" />

									</motion.div>
									<Link to="/sesion" className="link" onClick={() => dispatch(startMessage('', false))}>Iniciar Sesión</Link>
								</form>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
