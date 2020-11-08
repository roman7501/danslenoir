import React from "react";
import styled from "styled-components";
import { pxToRem } from "../theme/helpers";
import { motion } from "framer-motion";

const Titre = ({ text, className, sousTitre }) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0.5,
      transition: {
        duration: 25,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 10,
      },
    },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <p className="titre">{text}</p>
      <motion.p
        className="sous-titre"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.5,
          transition: {
            duration: 25,
            delay: 5,
          },
        }}
      >
        {sousTitre}
      </motion.p>
    </motion.div>
  );
};

export default styled(Titre)`
  height: 40vh;
  display: flex;
  align-items: left;
  flex-direction: column;
  position: fixed;
  left: 10vw;
  top: 30vh;
  opacity: 0.4;
  font-family: freight-big-pro, serif;

  .titre {
    font-size: ${pxToRem(64)};
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
  .sous-titre {
    font-size: ${pxToRem(32)};
    margin-top: 40px;
    letter-spacing: 0.1rem;
    font-style: italic;
  }
`;
