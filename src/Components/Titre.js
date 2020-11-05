import React from "react";
import styled from "styled-components";
import { pxToRem } from "../theme/helpers";
import { motion } from "framer-motion";

const Titre = ({ text, className }) => {
  //   const fadeTitre = {
  //     hidden: {
  //       opacity: 0,
  //     },
  //     visible: {
  //       opacity: 1,
  //       transition: { duration: 1.5 },
  //     },
  //     exit: {
  //       opacity: 0,
  //       transition: { duration: 2 },
  //     },
  //   };
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 4 },
    },
  };
  return (
    <div
      className={className}
      //   initial="hidden"
      //   animate="visible"
      //   exit="exit"
      //   variants={variants}
    >
      <p s>{text}</p>
    </div>
  );
};

export default styled(Titre)`
  height: 40vh;
  display: flex;
  align-items: center;
  font-family: freight-big-pro, serif;
  font-size: ${pxToRem(64)};
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  opacity: 0.4;
  position: fixed;
  left: 10vw;
`;
