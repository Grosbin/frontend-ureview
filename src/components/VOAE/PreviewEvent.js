import React, { useState } from 'react'
import { Modal } from '../ui/Modal';
// import { ListCourse } from './ListCourse'
import { ListEvent } from './ListEvent';

export const PreviewEvent = () => {
	const [displayMaximizable, setDisplayMaximizable] = useState(false);
	const [addContent, setAddContent] = useState(false);
	const [editContent, setEditContent] = useState(false);
	const [dataContent, setDataContent] = useState(null);

	const courseActive = false;
	const eventActive = true;

	// const setAddCourse = () => {
	// 	return false;
	// }
	return (
		<div className='main'>
			<Modal
				displayMaximizable={displayMaximizable}
				setDisplayMaximizable={setDisplayMaximizable}

				addContent={addContent}
				editContent={editContent}
				dataContent={dataContent}

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
