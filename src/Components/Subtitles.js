import React, { useState } from "react";
import dataSubtitles from "../data/dataSubtitles";
import Sub from "./Sub";

const Subtitles = () => {
  const [audioTime, setAudioTime] = useState(0);
  const subtitles = dataSubtitles.subtitles;

  const createSubtitles = (e) => {
    const currentTime = e.target.currentTime;
    setAudioTime(currentTime);
  };

  const text = Object.keys(subtitles).map((el) => {
    if (audioTime >= subtitles[el].start && audioTime < subtitles[el].end) {
      return <Sub key={el} text={subtitles[el].text}></Sub>;
    } else {
      return null;
    }
  });

  return (
    <div>
      <audio
        src="https://firebasestorage.googleapis.com/v0/b/dans-le-noir-62252.appspot.com/o/09-Sonata%20No%203%20in%20G%20Miinor%20BWV%201029%20--%20Vivace.mp3?alt=media&token=fa2be14b-7496-4b15-9946-1af74b42c598"
        controls
        onTimeUpdate={(e) => createSubtitles(e)}
      ></audio>
      {text}
    </div>
  );
};

export default Subtitles;
