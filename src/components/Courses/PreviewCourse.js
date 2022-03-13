import React, { useState } from 'react'
import { Modal } from '../ui/Modal';
import { ListCourse } from './ListCourse'

export const PreviewCourse = () => {
	const [displayMaximizable, setDisplayMaximizable] = useState(false);
	const [addContent, setAddContent] = useState(false);
	const [editContent, setEditContent] = useState(false);
	const [dataContent, setDataContent] = useState(null);

	const courseActive = true;
	const eventActive = false;

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

					<ListCourse
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
