import React, { useEffect, useRef, useState } from "react";

import { Button } from "primereact/button";

import { InputText } from "primereact/inputtext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ProgressBar } from "primereact/progressbar";
import { Toast } from "primereact/toast";
import { useDispatch, useSelector } from "react-redux";
import { sumHoursVoaeAction } from "../../../actions/statistics";
import { useNavigate } from "react-router-dom";

export const Attendance = () => {
  //   console.log("Entro al CodeAttendance");

  const [inCode, setInCode] = useState(true);
  const [buttonMyActivity, setButtonMyActivity] = useState(false);
  const [inCopy, setInCopy] = useState(false);
  const [contentComment, setContentComment] = useState("");
  const { active } = useSelector((state) => state.activities);

  const [copy, setCopy] = useState(false);
  const [value1, setValue1] = useState(0);
  const toast = useRef(null);
  const interval = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const copyClipBoard = () => {
    setInCode(false);
    // setProgressBar(true);
    setInCopy(true);
  };

  const handleMyActivity = () => {
    navigate("/estudiante/mi-actividad");
  };

  const handleAttendance = () => {
    if (contentComment === active.activity.id) {
      toast.current.show({
        severity: "success",
        summary: "Hola :)",
        detail: "Asistencia registrada correctamente",
      });
      setCopy(true);
      console.log(active.activity.hours);
      dispatch(sumHoursVoaeAction(active.activity.hours));
      setButtonMyActivity(true);
    }
    if (contentComment !== active.activity.id) {
      toast.current.show({
        severity: "error",
        summary: "Hola :(",
        detail: "Código incorrecto",
      });
      setCopy(false);
    }
  };

  //   useEffect(() => {
  //     if (progressBar) {
  //       setGenerateCode(false);
  //       let val = value1;
  //       interval.current = setInterval(() => {
  //         val += Math.floor(Math.random() * 100 + 1);
  //         console.log(val);

  //         if (val >= 100) {
  //           val = 100;
  //           toast.current.show({
  //             severity: "success",
  //             summary: "Hola :)",
  //             detail: "Código generado correctamente",
  //           });
  //           setTimeout(() => {
  //             setProgressBar(false);
  //             setGenerateCopy(true);
  //             clearInterval(interval.current);
  //           }, 1000);
  //         }

  //         setValue1(val);
  //       }, 3000);

  //       return () => {
  //         if (interval.current) {
  //           clearInterval(interval.current);
  //           interval.current = null;
  //         }
  //       };
  //     }
  //   }, [generateCode, progressBar]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="main flex justify-content-center align-items-center"
      style={{ backgroundColor: "#ffc200" }}
    >
      <Toast ref={toast}></Toast>
      {/* {progressBar && (
        <ProgressBar
          value={value1}
          color={"#ffc200"}
          style={{ width: "90%" }}
        ></ProgressBar>
      )} */}
      <div className="grid mb-8">
        {inCode && (
          <div className="col:12 md:col-12 lg:col-12" style={{ width: "100%" }}>
            <Button
              label="Ingresar Código"
              className="p-button-primary"
              style={{ width: "100%" }}
              onClick={() => {
                copyClipBoard();
              }}
            />
          </div>
        )}
        {buttonMyActivity && (
          <div className="col:12 md:col-12 lg:col-12" style={{ width: "100%" }}>
            <Button
              label="Ir a mi actividad"
              className="p-button-success"
              style={{ width: "100%" }}
              onClick={() => {
                handleMyActivity();
              }}
            />
          </div>
        )}
        {inCopy && !buttonMyActivity && (
          <div
            className="col:12 md:col-12 lg:col-12 mt-1"
            style={{ width: "100%" }}
          >
            <div className="flex justify-content-between">
              <InputText
                id="code-attendence"
                style={{ width: "84%" }}
                // value={"Hola Mundo"}
                onChange={(e) => setContentComment(e.target.value)}
                className="font-bold text-center"
                //   disabled
              />

              <Button
                icon={`pi ${copy ? "pi-check" : "pi-send"}`}
                // label={"confirmar"}
                className={`pt-2 ${
                  copy ? "p-button-primary" : "p-button-success"
                }`}
                style={{ width: "15%" }}
                onClick={() => handleAttendance()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
