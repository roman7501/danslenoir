import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fonts, pxToRem } from "../theme/helpers";
import Button from "./Button";
import Retour from "./Retour";

const Countdown = ({ className }) => {
  const [counter, setCounter] = useState(null);
  const [itsTime, setItsTime] = useState(false);

  const countdown = () => {
    const dateNow = new Date();
    const datePrevu = new Date("Nov 3 12:25:00 2020");
    let totalSeconds = (datePrevu - dateNow) / 1000;
    if (totalSeconds < 0) {
      totalSeconds = Math.abs(totalSeconds);
      setItsTime(true);
      clearInterval(timer);
    }
    if (totalSeconds > 0) {
      const jours = Math.floor(totalSeconds / (60 * 60 * 24));
      let heures = Math.floor(
        (totalSeconds - jours * 60 * 60 * 24) / (60 * 60)
      );
      let minutes = Math.floor(
        (totalSeconds - (jours * 60 * 60 * 24 + heures * 60 * 60)) / 60
      );
      let seconds = Math.floor(
        totalSeconds - (jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)
      );
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (heures < 10) {
        heures = "0" + heures;
      }
      setCounter(heures + "h " + minutes + "min " + seconds + "s");
    }
  };

  const timer = setInterval(countdown, 1000);

  // Motion
  // const containerVariants = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     transition: { delay: 2, duration: 1.5 },
  //   },
  //   exit: {
  //     opacity: 0,
  //     transition: { duration: 1.5 },
  //   },
  // };

  return (
    <div
      className={className}
      // variants={containerVariants}
      // initial="hidden"
      // animate="visible"
      // exit="exit"
    >
      <Link to="/">
        <Retour className="retour" text="retour" />
      </Link>
      {!itsTime && (
        <>
          <div className="container">
            <p>prochaine écoute dans</p>
            <p className="counter">{counter}</p>
          </div>
        </>
      )}
      {itsTime && (
        <div className="container">
          <Link to="/conte">
            <Button className="btn" text="commencer" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default styled(Countdown)`
  font-family: ${fonts.body};
  font-size: ${pxToRem(16)};
  letter-spacing: 0.1rem;
  .retour {
    margin-top: 30px;
    margin-left: 30px;
  }
  .container {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    letter-spacing: 0.1rem;
  }
  .round {
    width: 30px;
    height: 30px;
    border: none;
    background: white;
    border-radius: 50%;
  }
`;
