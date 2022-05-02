import React from "react";
import { Dialog } from "primereact/dialog";
// import { Button } from 'primereact/button';
// import { AddCourse } from '../Courses/AddCourse';
// import { EditCourse } from '../Courses/EditCourse';
import { AddCourseV2 } from "../Courses/AddCouseV2";
import { EditCourseV2 } from "../Courses/EditCourseV2";
import { EditEvent } from "../VOAE/EditEvent";
import { AddEvent } from "../VOAE/AddEvent";

//No modificar

export const Modal = ({
  displayMaximizable,
  setDisplayMaximizable,

  addContent,
  editContent,
  dataContent,

  courseActive,
  eventActive,

  // addCourse,
  // editCourse,
  // dataCourse,

  // addEvent,
  // editEvent,
  // dataEvent,
}) => {
  // const [position, setPosition] = useState('center');

  const dialogFuncMap = {
    displayMaximizable: setDisplayMaximizable,
  };

  // const onClick = (name, position) => {
  // 	dialogFuncMap[`${name}`](true);

  // 	if (position) {
  // 		setPosition(position);
  // 	}
  // }

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  console.log(
    "Modal: Course Active ",
    courseActive,
    " addContent: ",
    addContent
  );
  console.log("Modal: Event Active ", eventActive, " addContent: ", addContent);

  return (
    <>
      {/* <h5>Maximizable</h5> */}
      {/* <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayMaximizable')} /> */}
      <Dialog
        closeOnEscape={false}
        visible={displayMaximizable}
        maximizable
        modal={false}
        onHide={() => onHide("displayMaximizable")}
        className="form__box-container"
      >
        {courseActive && addContent && (
          <AddCourseV2 setDisplayMaximizable={setDisplayMaximizable} />
        )}

        {courseActive && editContent && (
          <EditCourseV2
            dataCourse={dataContent}
            setDisplayMaximizable={setDisplayMaximizable}
          />
        )}

        {eventActive && addContent && (
          <AddEvent setDisplayMaximizable={setDisplayMaximizable} />
        )}

        {eventActive && editContent && (
          <EditEvent
            dataCourse={dataContent}
            setDisplayMaximizable={setDisplayMaximizable}
          />
        )}
        {/* 				
				{
					addCourse && <AddCourseV2 setDisplayMaximizable={setDisplayMaximizable} />
				}
				{
					editCourse && <EditCourseV2 dataCourse={dataCourse} setDisplayMaximizable={setDisplayMaximizable} />
				}
				{
					addEvent && <addEvent setDisplayMaximizable={setDisplayMaximizable} />
				}
				{
					editEvent && <EditEvent dataCourse={dataEvent} setDisplayMaximizable={setDisplayMaximizable} />
				} */}
      </Dialog>
    </>
  );
};
