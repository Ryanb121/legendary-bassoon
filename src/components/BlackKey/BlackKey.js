import { useEffect, useRef } from "react";
import "./BlackKey.css";
import c4S from "../Sounds/c-4.mp3";
import d4S from "../Sounds/d-4.mp3";
import f4S from "../Sounds/f-4.mp3";
import g4S from "../Sounds/g-4.mp3";
import a4S from "../Sounds/a-4.mp3";

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
        <source src={c4S}></source>
      </audio>
      <audio className="audio-element">
        <source src={d4S}></source>
      </audio>
      <audio className="audio-element">
        <source src={f4S}></source>
      </audio>
      <audio className="audio-element">
        <source src={g4S}></source>
      </audio>
      <audio className="audio-element">
        <source src={a4S}></source>
      </audio>
    </div>
  );
};

export default BlackKey;
