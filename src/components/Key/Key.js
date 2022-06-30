import { useEffect, useRef } from "react";
import "./Key.css";
import c3 from "../Sounds/c3.mp3";
import d3 from "../Sounds/d3.mp3";

const Key = () => {
  const soundInputRef = useRef();
  useEffect(() => {
    soundInputRef.current.focus();
  }, []);
  const playAudio = (e) => {
    if (e.key === "a") {
      const audioEl = document.getElementsByClassName("audio-element")[0];
      audioEl.play();
    } else if (e.key === "s") {
      const audioEl = document.getElementsByClassName("audio-element")[1];
      audioEl.play();
    }
  };

  return (
    <div
      className="key-white-c"
      tabIndex="0"
      onKeyDown={playAudio}
      ref={soundInputRef}
    >
      <audio className="audio-element">
        <source src={c3}></source>
      </audio>
      <audio className="audio-element">
        <source src={d3}></source>
      </audio>
    </div>
  );
};

export default Key;
