import React, { useState, useEffect } from "react";
import Indications from "./Indications";
import dataSubtitles from "../data/dataSubtitles";
import dataTitres from "../data/dataTitres";
import Sub from "./Sub";
import Titre from "./Titre";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Start = ({ className }) => {
  const [letsPlay, setLetsPlay] = useState(false);
  const [indications, setIndications] = useState(true);
  const [audioTime, setAudioTime] = useState(0);

  // Display indications
  const start = 50000;

  // 50000;

  useEffect(() => {
    setTimeout(() => setLetsPlay(true), start);
    setTimeout(() => setIndications(false), start);
  }, [letsPlay, indications]);

  // Subtitles
  const subtitles = dataSubtitles.subtitles;

  const text = Object.keys(subtitles).map((el) => {
    if (audioTime >= subtitles[el].start && audioTime < subtitles[el].end) {
      return <Sub key={el} text={subtitles[el].text}></Sub>;
    } else {
      return null;
    }
  });

  // Titres
  const titres = dataTitres.titres;

  const titre = Object.keys(titres).map((el) => {
    if (audioTime >= titres[el].start && audioTime < titres[el].end) {
      return (
        <Titre
          key={el}
          text={titres[el].text}
          sousTitre={titres[el].sousTitre}
        ></Titre>
      );
    } else {
      return null;
    }
  });
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 13 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 4 },
    },
  };

  return (
    <div
      className={className}
      // initial={{ opacity: 0 }}
      // animate={{
      //   opacity: 1,
      //   transition: {
      //     duration: 1.5,
      //   },
      // }}
    >
      <AnimatePresence>
        {indications && <Indications className="indications" />}
      </AnimatePresence>
      {letsPlay && (
        <div>
          <audio
            autoPlay
            onTimeUpdate={(e) => setAudioTime(e.target.currentTime)}
            src="https://firebasestorage.googleapis.com/v0/b/dans-le-noir-62252.appspot.com/o/LDO-Audio-V5%20Prologue%20o2t%20Grotte.mp3?alt=media&token=63ea776a-d328-4ff4-bf04-941c1f982549"
          ></audio>
          <div
            className="titre"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <AnimatePresence>{titre}</AnimatePresence>
          </div>

          <div className="text">
            <AnimatePresence>{text}</AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default styled(Start)``;
