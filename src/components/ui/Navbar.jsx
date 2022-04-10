
import React from 'react';
import { Menubar } from 'primereact/menubar';
// import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
// import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { useDispatch, useSelector } from 'react-redux';
import { message, professor, startLogout, student } from '../../actions/auth';
// import { background, backgroundProfessor, backgroundStudent } from '../../helpers/backgroudState';
import { motion } from "framer-motion"
import { variantsNavbar } from '../../helpers/framerValues';
// import { SpeedDial } from 'primereact/speeddial';

import { TabMenu } from 'primereact/tabmenu';



export const Navbar = () => {




	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { isAuthenticated, isStudent, name } = useSelector(state => state.auth);

	let nameItem = 'Usuario'

	if (name) {
		nameItem = name.split(' ')[0];
	}


	let items = [
		{
			label: 'Inicio',
			command: () => {
				navigate('/');
				// background();
				dispatch(message('', false));
				// setActiveItem(false);
			}
		},

		{
			label: 'Acerca de',
			command: () => {
				navigate('/acerca');
				// background();
				dispatch(message('', false));
				// setActiveItem(false);
			}
		},
		// {
		// 	label: 'Acitividad',
		// 	command: () => {
		// 		navigate('/evento-informacion');
		// 		// background();
		// 		dispatch(message('', false));
		// 		// setActiveItem(false);
		// 	}
		// },
	];

	const itemsAccess = [
		{
			label: 'Estudiantes',
			icon: 'pi pi-id-card',
			command: () => {
				navigate('/sesion');
				// backgroundStudent();
				dispatch(student());
				dispatch(message('', false));
				// localStorage.setItem('is-student', 'ok');
				// setActiveItem(true);
				// pi-user
			}

		},

		{
			label: 'Docentes',
			icon: 'pi pi-user-edit',
			command: () => {
				navigate('/sesion');
				// backgroundProfessor();
				dispatch(professor());
				dispatch(message('', false));
				// localStorage.setItem('is-student', '');
				// setActiveItem(true);
				// pi-user-edit
			}

		},
	];

	const itemsUser = [
		{
			label: 'Cerrar Sesión',
			icon: 'pi pi-sign-out',
			command: () => {
				dispatch(startLogout());
				// dispatch(logout());
				// localStorage.removeItem('token');
			}

		},


	];

	const itemsStudent = [
		{
			label: 'Ver Curso',
			command: () => {
				navigate('estudiante/ver-cursos');
			}
		},
		{
			label: 'Ver horas Art.140',
			command: () => {
				navigate('estudiante/ver-eventos');
			}
		},
		{
			label: 'Mi Actividad',
			command: () => {
				navigate('estudiante/mi-actividad');
			}
		}
	];

	const itemsProfessor = [
		{
			label: 'Cursos',
			items: [
				{
					label: 'Crear Curso',
					command: () => {
						navigate('docente/agregar-curso');
					}
				},
				{
					label: 'Ver Cursos',
					command: () => {
						navigate('docente/ver-cursos');
					}
				}
			]

		},
		{
			label: 'Horas Art.140',
			items: [
				{
					label: 'Crear Evento',
					command: () => {
						navigate('docente/agregar-evento');
					}
				},
				{
					label: 'Ver Eventos',
					command: () => {
						navigate('docente/ver-evento');
					}
				}
			]

		},

	];

	const handleLogin = () => {
		// navigate('/privado');
		// setActiveItem(false);

	}


	const start = <img onClick={() => navigate('/')} alt="logo" src="logo-ureview.png" onError={(e) => e.target.src = 'logo.png'} height="50" className="mr-2"></img>;
	const access = <SplitButton className='p-button-info' label="Acceso" icon="" onClick={handleLogin} model={itemsAccess}></SplitButton>
	const user = <SplitButton label={nameItem} icon="pi pi-user" className={`${isStudent ? 'p-button-warning' : 'p-button-info'}`} model={itemsUser} />
	// const user = <Avatar label={name.charAt(0)} className={`mr-2`} style={{ backgroundColor: '#2196F3', color: '#ffffff' }} size="large" shape="circle" />
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={variantsNavbar}
			// className={`header ${isAuthenticated ? (isStudent ? 'header-student' : 'header-professor') : 'header-normal'}`}>
			className={`header header-normal`}>
			<Menubar className=' font-bold' model={isAuthenticated ? (isStudent ? items.concat(itemsStudent) : items.concat(itemsProfessor)) : items} start={start} end={isAuthenticated ? user : access} />
		</motion.div>
	);
}

