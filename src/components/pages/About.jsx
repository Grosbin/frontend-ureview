import React from "react";
import { assets } from "../../helpers/assets";
import { motion } from "framer-motion";
import {
  variantsCardAbout,
  variantsImgAbout,
  variantsTitle1,
  variantsTitle2,
  variantsTitle3,
} from "../../helpers/framerValues";
import { TitleAbout } from "../ui/TitleAbout";

export const About = () => {
  return (
    <div className="main">
      <div className="surface-0 text-center cursor-pointer">
        <div className="mb-3 font-bold text-2xl">
          <TitleAbout
            variants={variantsTitle1}
            text={"UNAH"}
            className={"text-yellow-400 text-4xl"}
          />
          <TitleAbout
            variants={variantsTitle1}
            text={"Review"}
            className={"text-blue-400 text-4xl"}
          />
          <br />
          <TitleAbout
            variants={variantsTitle2}
            text={"Un Producto, "}
            className={"text-900"}
          />
          <TitleAbout
            variants={variantsTitle3}
            text={"Muchas Soluciones"}
            className={"text-900"}
          />
        </div>
        <div className="text-700 text-sm mb-6">
          Este software fue creado para el beneficio de toda la comunidad
          universitaria.
        </div>
        <div className="grid flex justify-content-center">
          <div className="col-12 md:col-4 mb-4 px-5">
            <motion.span
              whileHover="hover"
              whileTap="tap"
              variants={variantsCardAbout}
              className="inline-block"
              // style={{ borderRadius: "50%" }}
            >
              <motion.img
                initial="hidden"
                animate="visible"
                variants={variantsImgAbout}
                drag
                dragConstraints={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                className="profile__about"
                src={assets(`./grosbin.png`)}
              />
            </motion.span>
            <div className="text-blue-800 mb-3 font-medium">
              Desarrollador Full Stack
            </div>
            <span className="text-700 text-sm line-height-2">
              Hola, me llamo Grosbin Rivera. tengo muchas ganas de aprender y
              salir adelante, estoy enfocado a la creación de soluciones para
              todo tipo de problemas.
            </span>
            {/* <span className="text-700 text-sm line-height-2">
              Hola, me llamo Grosbin Rivera, me considero una persona proactiva
              siempre me ha gustado buscar formas diferentes de aprender algo.
              Las áreas en que me desempeño son Desarrollo Back-end y Front-end,
              Servidores y Bases de datos. Cuento con la capacidad de tomar
              decisiones para obtener los resultados esperados.
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
