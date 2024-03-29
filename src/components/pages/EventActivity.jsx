import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Fieldset } from "primereact/fieldset";
import { Knob } from "primereact/knob";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";

import moment from "moment";

import { CommentItems } from "../ui/CommentItems";
import { startAddNewComment, startGetComments } from "../../actions/comment";
import { startAddNewActivity, startDataActivity } from "../../actions/activity";
import { sumCommentsAction } from "../../actions/statistics";

export const EventActivity = () => {
  const { active } = useSelector((state) => state.activities);
  const { comments } = useSelector((state) => state.comments);
  const { isStudent } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  console.log(active.activity.id);
  const dispatch = useDispatch();

  const { activity: eventActive } = active;

  const [contentComment, setContentComment] = useState("");
  const [countKey, setCountKey] = useState(1);
  console.log(eventActive.url);
  // const [value3, setValue3] = useState(12);

  useEffect(() => {
    dispatch(startGetComments(eventActive.id));
  }, [dispatch]);

  const handleComment = () => {
    setCountKey(countKey + 1);
    if (
      contentComment &&
      contentComment.length < 500 &&
      contentComment.length > 5
    ) {
      if (isStudent) {
        dispatch(sumCommentsAction(1));
      }
      dispatch(startAddNewComment(contentComment));
    }
    if (contentComment.length > 500) {
      alert("El comentario no puede tener mas de 500 caracteres");
    }
  };

  const handleActivity = (activity) => {
    console.log("Entro a la acitvidad", activity);
    dispatch(startDataActivity(activity, false));
    dispatch(startAddNewActivity(activity, "events"));
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
                label="Inscribirse"
                icon="pi pi-user-plus"
                iconPos="left"
                className="p-button p-button-success mb-2 mr-2"
                onClick={() => handleActivity(eventActive)}
              />
            )}
            {!active.enroll && isStudent && (
              <Button
                label="Asistencia"
                icon="pi pi-pencil"
                iconPos="left"
                className="p-button p-button-success mb-2 mr-2"
                onClick={() => handleAttendance(eventActive)}
              />
            )}
            {!active.enroll && (
              <Button
                label="Abrir Enlace"
                icon="pi pi-link"
                iconPos="left"
                className="p-button p-button-warning mb-2"
                // target="_blank"
                // href={`https://${eventActive.url}`}
              />
            )}
            <p className="text-0 font-bold text-5xl text-center m-0">
              {eventActive.name}
            </p>
            <div className="flex justify-content-between mb-3">
              <div>
                {/* <span className="block text-0 font-medium mb-3">Detalle</span> */}
                {eventActive.description && (
                  <Fieldset legend="Descripción" toggleable>
                    {/* <a href={`https://${eventActive.url}`} target="_black">
                      Abrir url
                    </a> */}
                    <p>{eventActive.description}</p>
                  </Fieldset>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-6">
          <div className="items__info-activity">
            <Calendar
              locale="es"
              value={eventActive.start}
              inline
              readOnlyInput
              style={{ width: "100%" }}
              showTime={true}
              hourFormat={"12"}
            />
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-6 ">
          <div
            className="surface-0 shadow-1 p-3 border-1 border-50 border-round"
            style={{ height: "100%" }}
          >
            <div className="grid" style={{ height: "100%" }}>
              <div className="col-12 md:col-12 lg:col-6">
                <div className="items__info-activity">
                  <span className="block text-500 font-medium mb-3">
                    Cantidad de Cupos
                  </span>
                  {/* Terminar falta hacerlo dinamico justo con la base de datos */}
                  <Knob
                    valueColor={"#22c55e"}
                    rangeColor={"red"}
                    min={eventActive.quotas}
                    max={0}
                    value={eventActive.quotas}
                    size={200}
                  />
                </div>
              </div>
              <div className="col-12 md:col-12 lg:col-6 bg-blue-500 border-round mb-3">
                <div className="items__info-activity">
                  <span className="block text-0 font-bold">Horas Art. 140</span>
                  <span className="block text-0 font-medium">Horas</span>
                  <p className=" text-7xl font-bold text-yellow-500 m-6">
                    {eventActive.hours}
                  </p>
                </div>
              </div>

              <div className="col-12 md:col-12 lg:col-12 bg-yellow-400 border-round">
                <div className="items__info-activity">
                  <span className="block text-600 font-bold">Duración</span>
                  <span className="block text-600 font-medium">Horas</span>
                  <p className=" text-7xl font-bold text-blue-500 m-3">
                    {moment(eventActive.finish).format("H:mm")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          {comments.map((index) => (
            <CommentItems
              key={index.id}
              user={index.user.name}
              comment={index.comment}
              date={index.date}
            />
          ))}
        </div>

        <div className="col-12">
          <div>
            <div className="flex justify-content-between mb-3">
              <div
                className="surface-0 shadow-2 p-3 border-round"
                style={{ width: "100%" }}
              >
                <Button
                  label="Comentar"
                  icon="pi pi-comments"
                  iconPos="right"
                  className="p-button p-button-primary mb-2"
                  onClick={handleComment}
                />
                <InputTextarea
                  keyfilter="int"
                  placeholder="Escribe un comentario"
                  className="p-3 surface-100"
                  value={contentComment}
                  onChange={(e) => setContentComment(e.target.value)}
                  rows={5}
                  autoResize
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
