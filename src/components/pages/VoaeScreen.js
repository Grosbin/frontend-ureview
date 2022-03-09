import React, { useState } from 'react'
import { Modal } from '../ui/Modal'
import { ToolBar } from '../ui/ToolBar'
import { ListEvent } from '../VOAE/ListEvent'


export const VoaeScreen = () => {

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

					<ListEvent
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