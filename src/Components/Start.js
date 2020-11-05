import React, { useState, useEffect } from "react";
import Indications from "./Indications";
import dataSubtitles from "../data/dataSubtitles";
import dataTitres from "../data/dataTitres";
import Sub from "./Sub";
import Titre from "./Titre";
import styled from "styled-components";

const Start = ({ className }) => {
  const [letsPlay, setLetsPlay] = useState(false);
  const [indications, setIndications] = useState(true);
  const [audioTime, setAudioTime] = useState(0);

  const start = 300;

  useEffect(() => {
    setTimeout(() => setLetsPlay(true), start);
    setTimeout(() => setIndications(false), start);
  }, [letsPlay]);

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
      return <Titre key={el} text={titres[el].text}></Titre>;
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
    <div className={className}>
      {indications && <Indications className="indications" />}
      {letsPlay && (
        <div>
          <audio
            autoPlay
            muted
            controls
            onTimeUpdate={(e) => setAudioTime(e.target.currentTime)}
            src="https://firebasestorage.googleapis.com/v0/b/dans-le-noir-62252.appspot.com/o/09-Sonata%20No%203%20in%20G%20Miinor%20BWV%201029%20--%20Vivace.mp3?alt=media&token=fa2be14b-7496-4b15-9946-1af74b42c598"
          ></audio>
          <div
            className="titre"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            {titre}
          </div>

          <div className="text">{text}</div>
        </div>
      )}
    </div>
  );
};

export default styled(Start)``;
