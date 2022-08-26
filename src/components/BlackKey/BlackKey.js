import { useEffect, useRef } from "react";
import "./BlackKey.css";
import c5 from "../Sounds/c5.mp3";
import d5 from "../Sounds/d5.mp3";
import f5 from "../Sounds/f5.mp3";
import g5 from "../Sounds/g5.mp3";
import a5 from "../Sounds/a5.mp3";

const BlackKey = () => {
  const soundInputRef = useRef();
  useEffect(() => {
    soundInputRef.current.focus();
  }, []);
  const playAudio = (e) => {
    if (e.key === "w") {
      const audioEl = document.getElementsByClassName("audio-element")[7];
      audioEl.play();
    } else if (e.key === "e") {
      const audioEl = document.getElementsByClassName("audio-element")[8];
      audioEl.play();
    } else if (e.key === "t") {
      const audioEl = document.getElementsByClassName("audio-element")[9];
      audioEl.play();
    } else if (e.key === "y") {
      const audioEl = document.getElementsByClassName("audio-element")[10];
      audioEl.play();
    } else if (e.key === "u") {
      const audioEl = document.getElementsByClassName("audio-element")[11];
      audioEl.play();
    }
  };

  return (
    <div
      className="key-black"
      tabIndex="0"
      onKeyDown={playAudio}
      ref={soundInputRef}
    >
      <audio className="audio-element">
        <source src={c5}></source>
      </audio>
      <audio className="audio-element">
        <source src={d5}></source>
      </audio>
      <audio className="audio-element">
        <source src={f5}></source>
      </audio>
      <audio className="audio-element">
        <source src={g5}></source>
      </audio>
      <audio className="audio-element">
        <source src={a5}></source>
      </audio>
    </div>
  );
};

export default BlackKey;
