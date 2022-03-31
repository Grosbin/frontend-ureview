import React, { useState } from 'react'
import { Modal } from '../../ui/Modal'
import { ToolBar } from '../../ui/ToolBar'
import { ListEvent } from '../../VOAE/ListEvent'



export const VoaeScreen = () => {

	const [displayMaximizable, setDisplayMaximizable] = useState(false);
	const [addContent, setAddContent] = useState(false);
	const [editContent, setEditContent] = useState(false);
	const [dataContent, setDataContent] = useState(null);

	const courseActive = false;
	const eventActive = true;


	return (
		<div className='main'>
			{/* <h1>VOAE Screen</h1> */}
			<Modal
				displayMaximizable={displayMaximizable}
				setDisplayMaximizable={setDisplayMaximizable}

				// addCourse={addContent}
				// editCourse={editContent}
				// dataCourse={dataContent}

				addContent={addContent}
				editContent={editContent}
				dataContent={dataContent}

				courseActive={courseActive}
				eventActive={eventActive}
			/>
			<ToolBar
				displayMaximizable={displayMaximizable}
				setDisplayMaximizable={setDisplayMaximizable}

				setAddContent={setAddContent}
				setEditContent={setEditContent}

				courseActive={courseActive}
				eventActive={eventActive}
			/>
			<div className='course__container'>
				{/* <AddCourse /> */}
				<div className='course__list'>

					<ListEvent
						setDisplayMaximizable={setDisplayMaximizable}
						displayMaximizable={displayMaximizable}

						setEditContent={setEditContent}
						setAddContent={setAddContent}
						setDataContent={setDataContent}

					/>
				</div>
			</div>
		</div>
	)
}