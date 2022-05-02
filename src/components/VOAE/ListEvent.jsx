import React, { useEffect, useRef, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEvent,
  startDeleteEvent,
  startGetEvent,
} from "../../actions/event";

import { Badge } from "primereact/badge";
import { Rating } from "primereact/rating";

import { motion } from "framer-motion";
import { variantsCard, variantsButton } from "../../helpers/framerValues";
import { useNavigate } from "react-router-dom";
import { startDataActivity } from "../../actions/activity";
import { confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";
// import { Tooltip } from 'primereact/tooltip';

// import { deleteCourse, startEditCourse } from '../../actions/course';

export const ListEvent = ({
  setDisplayMaximizable,
  displayMaximizable,
  setEditContent,
  setAddContent,
  setDataContent,
}) => {
  const MotionButton = motion(Button);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { events } = useSelector((state) => state.events);
  const { isStudent, uid } = useSelector((state) => state.auth);

  // console.log(event);

  const [star, setStar] = useState(null);
  const [quotas, setQuotas] = useState(null);

  const toast = useRef(null);

  // useEffect(() => {
  // 	// setQuotas(events.quotas);
  // 	console.log(events);
  // }, [quotas])
  useEffect(() => {
    dispatch(startGetEvent());
  }, [dispatch]);

  const handleDetete = (index) => {
    console.log("Entro al delete " + index.id);
    toast.current.show({
      severity: "success",
      summary: "Borrado",
      detail: `${index.name} eliminado exitosamente`,
      life: 4000,
    });
    // dispatch(deleteEvent(id));
    dispatch(startDeleteEvent(index.id));
  };

  const confirmDelete = (e, index) => {
    confirmPopup({
      target: e.currentTarget,
      message: `Desea borrar ${index.name}?`,
      icon: "pi pi-exclamation-triangle text-yellow-500",
      acceptClassName: "p-button-danger",
      acceptLabel: "Aceptar",
      rejectClassName: "p-button-primary p-button-text",
      accept: () => handleDetete(index),
      // reject: () => reject(index)
    });
  };

  const handleUpdate = (id) => {
    console.log("Entro al update " + id);

    const eventActive = events.find((event) => event.id === id);

    setDataContent(eventActive);
    setEditContent(true);
    setDisplayMaximizable(true);
    setAddContent(false);
  };

  const handleRegister = (id) => {
    console.log(id);
    const eventActive = events.find((event) => event.id === id);
    const quotas = eventActive.quotas;
    const newQuotas = quotas - 1;
    console.log(newQuotas);
    console.log(eventActive);
    setQuotas(newQuotas);
  };

  const handleMoreInfo = (activity) => {
    dispatch(startDataActivity(activity, false));
    console.log(activity.name);
    navigate("evento-informacion");
  };

  const handleStatistics = () => {
    console.log("Entro a estadisticas");
    navigate("/estadisticas");
  };

  const handleAttendance = (activity) => {
    console.log("Entro a asistencia");
    console.log(activity);
    dispatch(startDataActivity(activity, false));
    navigate("codigo-asistencia");
    // confirm();
  };

  const header = (index) => (
    <span>
      <Button
        icon="pi pi-chart-line"
        className="p-button-sm p-button-primary  p-button-text mt-2 ml-2"
        style={{ marginLeft: ".2rem" }}
        tooltip="Ver estadísticas"
        tooltipOptions={{
          showDelay: 100,
          hideDelay: 200,
          className: "blue-tooltip",
          position: "top",
        }}
        onClick={() => handleStatistics()}
      />
      <Button
        icon="pi pi-eye"
        className="p-button-sm p-button-success p-button-text mt-2"
        tooltip="Ver más información"
        tooltipOptions={{
          showDelay: 100,
          hideDelay: 200,
          className: "green-tooltip",
          position: "top",
        }}
        // style={{ marginLeft: '.1rem' }}
        onClick={() => handleMoreInfo(index)}
      />
      <Button
        icon="pi pi-list"
        className="p-button-sm p-button-warning p-button-text mt-2"
        tooltip="Asistencia"
        tooltipOptions={{
          showDelay: 100,
          hideDelay: 200,
          className: "yellow-tooltip",
          position: "top",
        }}
        // style={{ marginLeft: '.1rem' }}
        onClick={() => handleAttendance(index)}
      />
    </span>
  );

  const registerEvent = (id, quotas) => (
    <div className="grid p-fluid">
      <div className="col-8 md:col-9">
        {/** TODO: Reutilizo la clase p-inputgroup */}
        <div className="p-inputgroup">
          <MotionButton
            whileHover="hover"
            whileTap="tap"
            variants={variantsButton}
            label="Inscribirse"
            icon="pi pi-user-plus"
            className="p-button-sm p-button-primary"
            style={{ marginLeft: ".2rem" }}
            onClick={() => handleRegister(id, quotas)}
          />
        </div>
      </div>
      <div className="col-8 md:col-3">
        <div className="p-inputgroup">
          <Badge value={quotas} size="large" severity="warning"></Badge>
        </div>
      </div>
      <div className="col-9 md:col-7">
        <div className="p-inputgroup">
          <Rating
            value={3}
            readOnly
            cancel={false}
            onChange={(e) => setStar(e.value)}
          />
        </div>
      </div>
    </div>
  );

  const editEventButton = (index, displayMaximizable) => (
    <span>
      <MotionButton
        whileHover="hover"
        whileTap="tap"
        variants={variantsButton}
        label="Editar"
        icon="pi pi-undo"
        className="p-button-warning"
        disabled={displayMaximizable}
        style={{ marginLeft: "1.3rem" }}
        onClick={() => handleUpdate(index.id)}
      />
      <MotionButton
        whileHover="hover"
        whileTap="tap"
        variants={variantsButton}
        label="Borrar"
        disabled={displayMaximizable}
        icon="pi pi-trash"
        className="p-button-danger"
        style={{ marginLeft: "1rem" }}
        onClick={(e) => confirmDelete(e, index)}
      />
    </span>
  );

  const footer = (index, displayMaximizable) => (
    <>{editEventButton(index, displayMaximizable)}</>
  );

  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  return (
    // <div className='main'>
    <div className="container">
      <Toast ref={toast} />
      {
        //TODO: cambiar el h4 por un parrafo
        events
          .slice(0)
          .reverse()
          .map(
            (index) =>
              index.user?._id === uid && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={variantsCard}
                  key={index.id}
                  className="card__container"
                >
                  <Card
                    title={index.name}
                    footer={footer(index, displayMaximizable)}
                    header={header(index)}
                    className="justify-content-center align-content-center"
                  >
                    {/* <h4>{index.name}</h4> */}
                    {/* {index.description} */}
                    {/* {index.quotas} */}
                    <h5 className="-mt-3">
                      Inicio:{" "}
                      {index.start.toLocaleDateString("es-ES", dateOptions)}
                    </h5>
                    {/* <h5 className='' >Finalización: {index.start.toLocaleDateString("es-ES", dateOptions)}</h5> */}

                    {index.description ? (
                      <p
                        className="card__description m-0"
                        style={{ lineHeight: "1.5" }}
                      >
                        {index.description.length > 30
                          ? `${index.description.substring(0, 30)}...`
                          : index.description}
                      </p>
                    ) : (
                      <p
                        className="card__description m-0 text-yellow-500"
                        style={{ lineHeight: "1.5" }}
                      >
                        Este Evento no tiene descripción
                      </p>
                    )}
                  </Card>
                </motion.div>
              )
          )
      }
    </div>

    // </div>
  );
};
