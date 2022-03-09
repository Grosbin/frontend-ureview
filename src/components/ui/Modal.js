
import React from 'react';
import { Dialog } from 'primereact/dialog';
// import { Button } from 'primereact/button';
import { AddCourse } from '../Courses/AddCourse';
import { EditCourse } from '../Courses/EditCourse';
import { AddCourseV2 } from '../Courses/AddCouseV2';
import { EditCourseV2 } from '../Courses/EditCourseV2';


export const Modal = ({ displayMaximizable, setDisplayMaximizable, addCourse, editCourse, dataCourse }) => {


	// const [position, setPosition] = useState('center');

	const dialogFuncMap = {

		'displayMaximizable': setDisplayMaximizable,

	}

	// const onClick = (name, position) => {
	// 	dialogFuncMap[`${name}`](true);

	// 	if (position) {
	// 		setPosition(position);
	// 	}
	// }

	const onHide = (name) => {
		dialogFuncMap[`${name}`](false);
	}

	return (
		<>
			{/* <h5>Maximizable</h5> */}
			{/* <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayMaximizable')} /> */}
			<Dialog visible={displayMaximizable} maximizable modal={false} onHide={() => onHide('displayMaximizable')} className='form__box-container'>
				{
					addCourse && <AddCourseV2 setDisplayMaximizable={setDisplayMaximizable} />
				}
				{
					editCourse && <EditCourseV2 dataCourse={dataCourse} setDisplayMaximizable={setDisplayMaximizable} />
				}
			</Dialog>
		</>
	)
}
