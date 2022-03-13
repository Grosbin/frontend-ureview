
import React from 'react'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { motion } from "framer-motion";
import { variantsButton } from '../../helpers/framerValues';
// import { SplitButton } from 'primereact/splitbutton';
// import { Modal } from './Modal';
// import { activeEvent } from '../../actions/event';

export const ToolBar = ({
	setDisplayMaximizable,
	setAddContent,
	setEditContent,
	courseActive,
	eventActive
}) => {


	const leftContents = (
		<motion.div
			whileHover="hover"
			whileTap="tap"
			variants={variantsButton}
		>
			<Button label={`Nuevo ${(courseActive ? 'Curso' : 'Evento VOAE')}`} icon="pi pi-plus" className="mr-2" onClick={() => handleNew()} />
			{/* <Button label="Upload" icon="pi pi-upload" className="p-button-success" /> */}
			{/* <i className="pi pi-bars p-toolbar-separator mr-2" /> */}
			{/* <SplitButton label="Save" icon="pi pi-check" model={items} className="p-button-warning"></SplitButton> */}
		</motion.div>
	);

	const rightContents = (
		<>
			<motion.div
				whileHover="hover"
				whileTap="tap"
				variants={variantsButton}
			>
				<Button icon="pi pi-search" className="mr-2" />
			</motion.div>

			<motion.div
				whileHover="hover"
				whileTap="tap"
				variants={variantsButton}
			>
				<Button icon="pi pi-calendar" className="p-button-success mr-2" />
			</motion.div>

			<motion.div
				whileHover="hover"
				whileTap="tap"
				variants={variantsButton}
			>
				<Button icon="pi pi-times" className="p-button-danger" />
			</motion.div>

		</>
	);



	const handleNew = () => {
		console.log('Entro al modal')
		console.log('courseActive: ' + courseActive)
		console.log('eventActive: ' + eventActive)
		setDisplayMaximizable(true);
		setAddContent(true);
		setEditContent(false);
	}

	return (
		<>
			{/* <Modal displayMaximizable={displayMaximizable} setDisplayMaximizable={setDisplayMaximizable} /> */}
			<Toolbar left={leftContents} right={rightContents} />
		</>
	)
}






