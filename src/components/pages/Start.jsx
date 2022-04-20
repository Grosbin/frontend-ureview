import React from "react";
import { Button } from "primereact/button";
// import Lottie from 'lottie-web';
// import LogoUreview from '../../assets/LogoUreview.svg'
import { motion } from "framer-motion";
import { assets } from "../../helpers/assets";

export const Start = () => {
  // const animation = useRef(null);
  // useEffect(() => {
  // 	Lottie.loadAnimation({
  // 		container: animation.current,
  // 		renderer: 'svg',
  // 		loop: true,
  // 		autoplay: true,
  // 		animationData: require('../../lottie/data.json')
  // 	});
  // }, []);

  const variantsImg = {
    visible: { y: 0, opacity: 1, transition: { delay: 0.2 } },
    hidden: { y: -100, opacity: 0 },
  };

  const variantsButton = {
    visible: {
      x: 20,
      opacity: 1,
      transition: { type: "spring", stiffeness: 100, delay: 0.1 }, //TODO: Antes tenia delay: 0.2
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
    hover: {
      scale: 0.9,
    },
    tap: {
      scale: 0.85,
    },
  };

  return (
    <div className="">
      <div className="logo__Ureview mt-8 pl-4">
        <div className=" img">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={variantsImg}
            src={assets(`./LogoUreview-01.png`)}
            alt="logoUreview"
          />

          <motion.div
            // whileHover="hover"
            whileTap="tap"
            animate="visible"
            variants={variantsButton}

            //Desabilita la animacion
            // initial={false}
          >
            <Button
              className="button__tutorial p-button-black"
              label="Ver Tutorial"
            />
          </motion.div>
        </div>
      </div>
      <div className="grid mt-8 bg-white-alpha-90 shadow-2 border-1 border-50 border-round">
        <div className="col-12 md:col-12 lg:col-6 p-0">
          <div className="flex justify-content-center">
            <div className="card">
              <img
                src={assets(`./UNAH-letras-03.png`)}
                alt=""
                style={{ width: "100%", borderRadius: "7px" }}
              />
            </div>
          </div>
        </div>

        <div className="col-12 md:col-12 lg:col-6 flex">
          <div className="flex justify-content-center align-items-center">
            <div className="card p-3">
              <p className=" font-bold text-blue-800">
                Con el objetivo de seguir fomentando en arte, la cultura y los
                conocimientos, la Vicerrectoría de Orientación de Asuntos
                estudiantiles VOAE invita a los jóvenes estudiantes que están
                prontos a recibirse de su carrera a participar en los eventos
                programados de las diferentes carreras y Centros Regionales,
                donde se extenderá constancia de participación por las horas de
                asistencia con base en el Artículo 140 de las Normas Académicas
                de la Universidad Nacional Autónoma de Honduras (UNAH).
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 md:col-12 lg:col-6 flex">
          <div className="flex justify-content-center align-items-center">
            <div className="card p-3">
              <div>
                <p className=" font-bold text-blue-800">
                  Artículo 140. Para los diferentes grados académicos los
                  requisitos generales de graduación son los que se describen a
                  continuación:
                </p>
                <p className=" font-bold text-yellow-500">
                  a) Haber completado los créditos académicos de la carrera, con
                  un índice de graduación no inferior a setenta por ciento
                  (70%).
                </p>
                <p className=" font-bold text-yellow-500">
                  b) Haber participado, de manera obligatoria durante su proceso
                  educativo, en una iniciativa de índole social, cultural,
                  artística, deportiva, las cuales deberán ser certificadas por
                  la VOAE o sus referentes en los centros regionales o instituto
                  tecnológico superior.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 md:col-12 lg:col-6 p-0">
          <div className="flex justify-content-center">
            <div className="card" style={{ width: "400px" }}>
              <img
                src={assets(`./art-140-01.png`)}
                alt=""
                style={{ width: "100%", borderRadius: "7px" }}
              />
            </div>
          </div>
        </div>

        <div className="col-12 md:col-12 lg:col-6 flex">
          <div
            className="flex justify-content-center align-items-center ml-2"
            style={{ borderRadius: "9px" }}
          >
            <div className="card p-3">
              <p className=" font-bold text-blue-800">
                La VOAE es la instancia institucional responsable de velar y
                asegurar que se provean conocimientos y servicios de alta
                calidad y pertinencia a los estudiantes, utilizando y poniendo a
                disposición de éstos el talento humano, recursos logísticos,
                tecnológicos y financieros requeridos para lograr su eficiente y
                eficaz desempeño, para así contribuir a su formación humana y
                profesional integral; propiciando para todo ello, una
                articulación y coordinación interdisciplinaria entre las
                distintas unidades académicas y administrativas.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 md:col-12 lg:col-6 p-0">
          <div className="flex justify-content-center">
            <div className="card">
              <img
                src={assets(`./logo-voae-01.png`)}
                alt=""
                style={{ width: "100%", borderRadius: "7px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
