import { useEffect, useRef } from "react";
import "./Key.css";
import c4 from "../Sounds/c4.mp3";
import d4 from "../Sounds/d4.mp3";
import e4 from "../Sounds/e4.mp3";
import f4 from "../Sounds/f4.mp3";
import g4 from "../Sounds/g4.mp3";
import a4 from "../Sounds/a4.mp3";
import b4 from "../Sounds/b4.mp3";

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
    } else if (e.key === "d") {
      const audioEl = document.getElementsByClassName("audio-element")[2];
      audioEl.play();
    } else if (e.key === "f") {
      const audioEl = document.getElementsByClassName("audio-element")[3];
      audioEl.play();
    } else if (e.key === "g") {
      const audioEl = document.getElementsByClassName("audio-element")[4];
      audioEl.play();
    } else if (e.key === "h") {
      const audioEl = document.getElementsByClassName("audio-element")[5];
      audioEl.play();
    } else if (e.key === "j") {
      const audioEl = document.getElementsByClassName("audio-element")[6];
      audioEl.play();
    }
  };

  return (
    <div
      className="key-white"
      tabIndex="0"
      onKeyDown={playAudio}
      ref={soundInputRef}
    >
      <audio className="audio-element">
        <source src={c4}></source>
      </audio>
      <audio className="audio-element">
        <source src={d4}></source>
      </audio>
      <audio className="audio-element">
        <source src={e4}></source>
      </audio>
      <audio className="audio-element">
        <source src={f4}></source>
      </audio>
      <audio className="audio-element">
        <source src={g4}></source>
      </audio>
      <audio className="audio-element">
        <source src={a4}></source>
      </audio>
      <audio className="audio-element">
        <source src={b4}></source>
      </audio>
    </div>
  );
};

export default Key;
