import React from "react";
import { motion } from "framer-motion";

export const TitleAbout = ({ variants, text, className }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {text}
    </motion.span>
  );
};
