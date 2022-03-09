
import React, { useState } from 'react'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
// import { SplitButton } from 'primereact/splitbutton';
import { Modal } from './Modal';

export const ToolBar = ({ setDisplayMaximizable, setAddCourse, setEditCourse }) => {


	const leftContents = (
		<React.Fragment>
			<Button label="Nuevo" icon="pi pi-plus" className="mr-2" onClick={() => handleNew()} />
			{/* <Button label="Upload" icon="pi pi-upload" className="p-button-success" /> */}
			{/* <i className="pi pi-bars p-toolbar-separator mr-2" /> */}
			{/* <SplitButton label="Save" icon="pi pi-check" model={items} className="p-button-warning"></SplitButton> */}
		</React.Fragment>
	);

	const rightContents = (
		<React.Fragment>
			<Button icon="pi pi-search" className="mr-2" />
			<Button icon="pi pi-calendar" className="p-button-success mr-2" />
			<Button icon="pi pi-times" className="p-button-danger" />
		</React.Fragment>
	);



	const handleNew = () => {
		console.log('Entro al modal')
		setDisplayMaximizable(true);
		setAddCourse(true);
		setEditCourse(false);
	}

	return (
		<>
			{/* <Modal displayMaximizable={displayMaximizable} setDisplayMaximizable={setDisplayMaximizable} /> */}
			<Toolbar left={leftContents} right={rightContents} />
		</>
	)
}






