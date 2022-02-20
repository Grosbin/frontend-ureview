
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';

import { classNames } from 'primereact/utils';
import { useDispatch, useSelector } from 'react-redux';
import { startLoginEmailPasswordProfessor, startLoginEmailPasswordStudent, } from '../../actions/auth';

export const LoginScreen = () => {

	const dispatch = useDispatch();
	const { isStudent } = useSelector(state => state.auth);

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
		reset();
	};

	const getFormErrorMessage = (name) => {
		return errors[name] && <small className="p-error">{errors[name].message}</small>
	};

	return (
		<div className='main form__main'>
			<div className='form__box-container'>
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

								<Button type="submit" label="Entrar" className="mt-2 mb-4 p-button-info" />
								<Link to="/registro" className="link">Registrarse</Link>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
// /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i