
import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import { useDispatch, useSelector } from 'react-redux';
import { startLoginEmailPasswordProfessor, startLoginEmailPasswordStudent, startMessage, } from '../../actions/auth';
import { motion } from "framer-motion";
import { variantsButton } from '../../helpers/framerValues';
// import { background } from '../../helpers/backgroudState';
// import { MessagesHook } from '../../hooks/MessagesHook';


import { Toast } from 'primereact/toast';
import { background } from '../../helpers/backgroudState';

const variantsCard = {
	visible: {
		opacity: 1,
		transition: { duration: 0.3 },
	},
	hidden: {
		opacity: 0,
	}
}


export const LoginScreen = () => {

	const toast = useRef(null);
	const [counterSubmit, setCounterSubmit] = React.useState(null);
	console.log('Entro a MessagesHook');


	// const navigate = useNavigate();
	// const lastPath = localStorage.getItem('lastPath') || '/';

	const dispatch = useDispatch();

	const { isStudent, message, error } = useSelector(state => state.auth);

	const displayError = () => {
		toast.current.show({ severity: 'error', summary: 'Error de Autenticación', detail: message, life: 7000 });

	}

	// console.log(message);
	useEffect(() => {
		if (message) {
			displayError();
		}
	}, [message]);

	// let valueEmail = '';
	// let valuePassword = '';

	// if (isStudent) {
	// 	valueEmail = 'grosbin@unah.hn';
	// 	valuePassword = '123456DDDDDddddd';
	// } else {
	// 	valueEmail = 'grosbin@unah.edu.hn';
	// 	valuePassword = '123456DDDDDddddd';
	// }

	const defaultValues = {
		email: '',
		password: '',
	}

	const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });


	const onSubmit = (data) => {
		if (isStudent) {
			dispatch(startLoginEmailPasswordStudent(data.email, data.password));

		} else {
			dispatch(startLoginEmailPasswordProfessor(data.email, data.password));

		}

		// if (error) {
		// 	displayError();
		// }
		console.log('Entro al display error')
		// navigate(lastPath, { replace: true });
		setCounterSubmit(counterSubmit + 1);
		reset();
		// console.log('Entro a submit' + lastPath);
	};

	const getFormErrorMessage = (name) => {
		return errors[name] && <small className="p-error">{errors[name].message}</small>
	};

	return (
		<div className='main'>
			<Toast ref={toast}></Toast>
			<div className='form__main'>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={variantsCard}
					className='form__box-container'
				>
					<div className="form-demo">
						<div className="flex justify-content-center">
							<div className="card mb-3">
								<h5 className="text-center">Iniciar Sesión {isStudent ? 'Estudiante' : 'Docente'}</h5>
								<form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
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
													<InputText
														id={field.name}
														{...field}
														className={classNames({ 'p-invalid': fieldState.invalid })}
													// value={isStudent ? 'grosbin.rivera@unah.hn' : 'grosbin.rivera@unah.edu.hn'}
													// value={isStudent ? 'grosbin.rivera@unah.hn' : 'grosbin.rivera@unah.edu.hn'}
													/>
												)}
											/>
											<label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>Correo Institucional*</label>
										</span>
										{getFormErrorMessage('email')}
									</div>
									<div className="field">
										<span className="p-float-label">
											<Controller name="password" control={control} rules={{ required: 'La contraseña es requerida.' }} render={({ field, fieldState }) => (
												<Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} feedback={false} /*value={isStudent ? '12345678' : '12345678'}*/ />
											)} />
											<label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Contraseña*</label>
										</span>
										{getFormErrorMessage('password')}
									</div>
									<motion.div
										whileHover="hover"
										whileTap="tap"
										variants={variantsButton}
									>

										<Button
											type="submit"
											label="Entrar"
											className="mt-2 mb-4 p-button-info"
										/>
									</motion.div>
									<Link to="/registro" className="link" onClick={() => dispatch(startMessage('', false))}>Registrarse</Link>
								</form>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
// /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i