import React, { useEffect, useRef, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCourse,
  startDeleteCourse,
  startGetCourse,
} from "../../actions/course";

import { motion } from "framer-motion";
import { variantsCard, variantsButton } from "../../helpers/framerValues";
import { assets } from "../../helpers/assets";
import { startGetEvent } from "../../actions/event";
import { startAddNewActivity, startDataActivity } from "../../actions/activity";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";

export const PreviewEvent = ({
  setDisplayMaximizable,
  setEditContent,
  setAddContent,
  setDataContent,
  displayMaximizable,
}) => {
  const MotionButton = motion(Button);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { events } = useSelector((state) => state.events);
  const { isStudent } = useSelector((state) => state.auth);
  const { activities } = useSelector((state) => state.activities);

  // console.log(course);
  const toast = useRef(null);

  useEffect(() => {
    dispatch(startGetEvent());
  }, [dispatch]);

  const handleTakeEvents = (index) => {
    console.log("Se creo la actividad", index.name);
    toast.current.show({
      severity: "success",
      summary: "Confirmado",
      detail: `${index.name} matriculado exitosamente`,
      life: 1000,
    });
    dispatch(startAddNewActivity(index, "events"));
  };

  const confirm = (e, index) => {
    // console.log(index);
    // console.log(e);
    // console.log(activities.includes(index.id));

    const idActive = activities.find((item) => item.id === index.id);

    if (!idActive) {
      confirmPopup({
        target: e.currentTarget,
        message: `Desea inscribirse en ${index.name}?`,
        icon: "pi pi-exclamation-triangle text-yellow-500",
        acceptClassName: "p-button-primary",
        acceptLabel: "Aceptar",
        rejectClassName: "p-button-danger p-button-text",
        accept: () => handleTakeEvents(index),
        // reject: () => reject(index)
      });
    }
  };

  const handleMoreInfo = (index) => {
    console.log("Entro a ver más info");
    dispatch(startDataActivity(index, true));
    // console.log(index);
    navigate("evento-informacion");
  };

  const registerEvent = (index) => (
    <motion.span whileHover="hover" whileTap="tap" variants={variantsButton}>
      {isStudent && (
        <MotionButton
          whileHover="hover"
          whileTap="tap"
          variants={variantsButton}
          onClick={(e) => confirm(e, index)}
          label="Inscribirse"
          icon="pi pi-user-plus"
          className="p-button-sm p-button-success"
          style={{ marginLeft: ".2rem", marginRight: "2.5rem" }}
        />
      )}
      <MotionButton
        whileHover="hover"
        whileTap="tap"
        variants={variantsButton}
        onClick={() => handleMoreInfo(index)}
        label="ver más"
        // icon="pi pi-user-plus"
        className="p-button-sm p-button-primary"
        // style={{ marginLeft: '1.5rem' }}
      />
    </motion.span>
  );

  const header = (name, img) => (
    <div className="header__card">
      <img
        className="header__card-img"
        alt="Card"
        src={assets(`./${img}.png`)}
      />
      <h2 className="text-blue-50 texto-header">{name}</h2>
    </div>
  );

  const footer = (index) => <>{registerEvent(index)}</>;

  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  return (
    <div className="main">
      <Toast ref={toast} />
      <div className="container">
        {
          //TODO: cambiar el h4 por un parrafo
          events
            .slice(0)
            .reverse()
            .map((index) => (
              <motion.div
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={variantsCard}
                key={index.id}
                className="card__container"
              >
                <Card
                  subTitle={`Organizador: ${index.user?.name}`}
                  footer={footer(index)}
                  header={header(index.name, index.ambit.ambit)}
                  className="justify-content-center align-content-center cursor-pointer"
                >
                  {/* <h4 className='-mb-3 -mt-4'>Organizador: {index.user?.name}</h4> */}
                  <h5 className="-mt-4">
                    Inicio:{" "}
                    {index.start.toLocaleDateString("es-ES", dateOptions)}
                  </h5>
                  {/* <h5 className='' >Finalización: {index.finish.toLocaleDateString("es-ES", dateOptions)}</h5> */}
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
            ))
        }
      </div>
    </div>
  );
};
