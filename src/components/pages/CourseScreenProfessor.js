import React, { useState } from 'react'
import { AddCourse } from '../Courses/AddCourse'
import { ListCourse } from '../Courses/ListCourse'
import { Modal } from '../ui/Modal'
import { ToolBar } from '../ui/ToolBar'


export const CourseScreenProfessor = () => {

	const [displayMaximizable, setDisplayMaximizable] = useState(false);
	const [addCourse, setAddCourse] = useState(false);
	const [editCourse, setEditCourse] = useState(false);
	const [dataCourse, setDataCourse] = useState(null);



	return (
		<div className='main'>
			<Modal
				displayMaximizable={displayMaximizable}
				setDisplayMaximizable={setDisplayMaximizable}
				addCourse={addCourse}
				editCourse={editCourse}
				dataCourse={dataCourse}
			/>
			<ToolBar
				displayMaximizable={displayMaximizable}
				setDisplayMaximizable={setDisplayMaximizable}
				setAddCourse={setAddCourse}
				setEditCourse={setEditCourse}
			/>
			<div className='course__container'>
				{/* <AddCourse /> */}
				<div className='course__list'>

					<ListCourse
						setDisplayMaximizable={setDisplayMaximizable}
						displayMaximizable={displayMaximizable}
						setEditCourse={setEditCourse}
						setAddCourse={setAddCourse}
						setDataCourse={setDataCourse}

					/>
				</div>
			</div>
		</div>
	)
}
