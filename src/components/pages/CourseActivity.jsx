import React, { useState } from "react";

import { Fieldset } from "primereact/fieldset";

import { Knob } from "primereact/knob";

import { Button } from "primereact/button";

import { ScrollTop } from "primereact/scrolltop";
import { ScrollPanel } from "primereact/scrollpanel";

import { InputTextarea } from "primereact/inputtextarea";
import { CommentItems } from "../ui/CommentItems";
import { assets } from "../../helpers/assets";

import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import { startAddNewComment } from "../../actions/comment";
import { startAddNewActivity, startDataActivity } from "../../actions/activity";
import { useNavigate } from "react-router-dom";

export const CourseActivity = () => {
  const { active } = useSelector((state) => state.activities);
  const { comments } = useSelector((state) => state.comments);
  const { isStudent } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  console.log(active.activity.id);
  const dispatch = useDispatch();

  const { activity: courseActive } = active;

  const [contentComment, setContentComment] = useState("");
  const [countKey, setCountKey] = useState(1);
  // console.log(contentComment);
  // const [value3, setValue3] = useState(12);

  const handleComment = () => {
    // console.log('El usuraio hizo un comentario');
    // console.log(contentComment);
    // console.log(typeof contentComment);

    setCountKey(countKey + 1);
    if (contentComment && contentComment.length < 500) {
      dispatch(startAddNewComment(contentComment));
    }
    if (contentComment.length > 500) {
      alert("El comentario no puede tener mas de 500 caracteres");
    }
  };

  const handleActivity = (activity) => {
    console.log("Entro a la acitvidad", activity);
    dispatch(startDataActivity(activity, false));
    dispatch(startAddNewActivity(activity, "course"));
  };

  const handleAttendance = () => {
    console.log("Entro a asistencia");
    navigate("asistencia");
  };

  addLocale("es", {
    firstDayOfWeek: 1,
    dayNames: [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ],
    dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    dayNamesMin: ["D", "L", "M", "MI", "J", "V", "S"],
    monthNames: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    monthNamesShort: [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ],
    today: "Hoy",
    clear: "Claro",
  });

  return (
    <div className="main">
      <div className="grid">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="bg-blue-500 shadow-1 p-3 border-round bg-img-activity">
            {active.enroll && isStudent && (
              <Button
                label="Cursar"
                icon="pi pi-user-plus"
                iconPos="left"
                className="p-button p-button-success mb-2 mr-2"
                onClick={() => handleActivity(courseActive)}
              />
            )}
            <p className="text-0 font-bold text-5xl text-center m-0">
              {courseActive.name}
            </p>
            <div className="flex justify-content-between mb-3">
              <div>
                {/* <span className="block text-0 font-medium mb-3">Detalle</span> */}
                {courseActive.description && (
                  <Fieldset legend="Descripción" toggleable>
                    <p>{courseActive.description}</p>
                  </Fieldset>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-12">
          <h1 className="text-center">Fecha Inicio</h1>
          <div className="items__info-activity">
            <Calendar
              locale="es"
              value={courseActive.start}
              inline
              readOnlyInput
              style={{ width: "100%" }}
              showTime={true}
              hourFormat={"12"}
            />
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-12">
          <h1 className="text-center">Fecha Finalización</h1>
          <div className="items__info-activity">
            <Calendar
              locale="es"
              value={courseActive.finish}
              inline
              readOnlyInput
              style={{ width: "100%" }}
              showTime={true}
              hourFormat={"12"}
            />
          </div>
        </div>

        {/* <div className="col-12">
          {comments.map(
            (index) =>
              index.activity?.id === active.activity.id && (
                <CommentItems
                  key={index.id}
                  user={index.user.name}
                  comment={index.comment}
                  date={index.date}
                />
              )
          )}
        </div> */}
      </div>
    </div>
  );
};
