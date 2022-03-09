import React, { useState } from 'react'
import { Modal } from '../ui/Modal';
import { ListEvent } from './ListEvent';

export const PreviewCourse = () => {
	const [displayMaximizable, setDisplayMaximizable] = useState(false);
	const [editCourse, setEditCourse] = useState(false);
	const [idCourse, setIdCourse] = useState(null);
	console.log('Estoy en preview course');

	const setAddCourse = () => {
		return false;
	}
	return (
		<div className='main'>
			<Modal displayMaximizable={displayMaximizable} setDisplayMaximizable={setDisplayMaximizable} editCourse={editCourse} idCourse={idCourse} />
			<div className='course__container'>
				{/* <AddCourse /> */}
				<div className='course__list'>

					<ListEvent setDisplayMaximizable={setDisplayMaximizable} setEditCourse={setEditCourse} setAddCourse={setAddCourse} setIdCourse={setIdCourse} />
				</div>
			</div>
		</div>
	)
}
