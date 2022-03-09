
import React, { useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
// import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
// import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { useDispatch, useSelector } from 'react-redux';
import { professor, startLogout, student } from '../../actions/auth';
// import { SpeedDial } from 'primereact/speeddial';

export const Navbar = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const [activeItem, setActiveItem] = useState(false);
	const { isAuthenticated, isStudent, name } = useSelector(state => state.auth);

	useEffect(() => {

	}, []);

	let items = [
		{
			label: 'Inicio',
			command: () => {
				navigate('/');
				// setActiveItem(false);
			}
		},

		{
			label: 'Acerca de',
			command: () => {
				navigate('/acerca');
				// setActiveItem(false);
			}
		},
	];

	const itemsAccess = [
		{
			label: 'Estudiantes',
			icon: 'pi pi-id-card',
			command: () => {
				navigate('/sesion');
				dispatch(student());
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
				dispatch(professor());
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
				navigate('estudiante/ver-cursos');
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


	const start = <img alt="logo" src="logo.png" onError={(e) => e.target.src = 'logo512.svg'} height="50" className="mr-2"></img>;
	const access = <SplitButton className='p-button-info' label="Acceso" icon="" onClick={handleLogin} model={itemsAccess}></SplitButton>
	const user = <SplitButton label={name} icon="pi pi-user" className={`${isStudent ? 'p-button-info' : 'p-button-warning'}`} model={itemsUser} />
	return (
		<div className={`header ${isAuthenticated ? (isStudent ? 'header-student' : 'header-professor') : 'header-normal'}`}>
			<Menubar model={isAuthenticated ? (isStudent ? items.concat(itemsStudent) : items.concat(itemsProfessor)) : items} start={start} end={isAuthenticated ? user : access} />
		</div>
	);
}

