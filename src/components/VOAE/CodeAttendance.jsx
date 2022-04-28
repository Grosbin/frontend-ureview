import React, { useEffect, useRef, useState } from "react";

import { Button } from "primereact/button";

import { InputText } from "primereact/inputtext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ProgressBar } from "primereact/progressbar";
import { Toast } from "primereact/toast";
import { useSelector } from "react-redux";

export const CodeAttendance = () => {
  //   console.log("Entro al CodeAttendance");

  const [generateCode, setGenerateCode] = useState(true);
  const [progressBar, setProgressBar] = useState(false);
  const [generateCopy, setGenerateCopy] = useState(false);
  const [copy, setCopy] = useState(false);
  const [value1, setValue1] = useState(0);
  const toast = useRef(null);
  const interval = useRef(null);
  const { active } = useSelector((state) => state.activities);
  console.log(active);
  const copyClipBoard = () => {
    // setGenerateCode(true);
    setProgressBar(true);
  };

  useEffect(() => {
    if (progressBar) {
      setGenerateCode(false);
      let val = value1;
      interval.current = setInterval(() => {
        val += Math.floor(Math.random() * 100 + 1);
        console.log(val);

        if (val >= 100) {
          val = 100;
          toast.current.show({
            severity: "success",
            summary: "Hola :)",
            detail: "Código generado correctamente",
          });
          setTimeout(() => {
            setProgressBar(false);
            setGenerateCopy(true);
            clearInterval(interval.current);
          }, 1000);
        }

        setValue1(val);
      }, 3000);

      return () => {
        if (interval.current) {
          clearInterval(interval.current);
          interval.current = null;
        }
      };
    }
  }, [generateCode, progressBar]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="main flex justify-content-center align-items-center"
      style={{ backgroundColor: "#0062ff" }}
    >
      <Toast ref={toast}></Toast>
      {progressBar && (
        <ProgressBar
          value={value1}
          color={"#ffc200"}
          style={{ width: "90%" }}
        ></ProgressBar>
      )}
      <div className="grid mb-8">
        {generateCode && (
          <div className="col:12 md:col-12 lg:col-12" style={{ width: "100%" }}>
            <Button
              label="Generar Código"
              className="p-button-warning"
              style={{ width: "100%" }}
              onClick={() => {
                copyClipBoard();
              }}
            />
          </div>
        )}
        {generateCopy && (
          <div
            className="col:12 md:col-12 lg:col-12 mt-1"
            style={{ width: "100%" }}
          >
            <div className="flex justify-content-between">
              <InputText
                id="code-attendence"
                style={{ width: "84%" }}
                value={active.activity.id}
                className="font-bold text-center"
                //   disabled
              />
              <CopyToClipboard text={active.activity.id}>
                <Button
                  icon={`pi ${copy ? "pi-check" : "pi-copy"}`}
                  className={`pt-2 ${
                    copy ? "p-button-warning" : "p-button-success"
                  }`}
                  style={{ width: "15%" }}
                  onClick={() => setCopy(true)}
                />
              </CopyToClipboard>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
