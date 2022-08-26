import { useEffect, useRef } from "react";
import "./Key.css";
import c3 from "../Sounds/c3.mp3";
import d3 from "../Sounds/d3.mp3";
import e3 from "../Sounds/e3.mp3";
import f3 from "../Sounds/f3.mp3";
import g3 from "../Sounds/g3.mp3";
import a3 from "../Sounds/a3.mp3";
import b3 from "../Sounds/b3.mp3";

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
        <source src={c3}></source>
      </audio>
      <audio className="audio-element">
        <source src={d3}></source>
      </audio>
      <audio className="audio-element">
        <source src={e3}></source>
      </audio>
      <audio className="audio-element">
        <source src={f3}></source>
      </audio>
      <audio className="audio-element">
        <source src={g3}></source>
      </audio>
      <audio className="audio-element">
        <source src={a3}></source>
      </audio>
      <audio className="audio-element">
        <source src={b3}></source>
      </audio>
    </div>
  );
};

export default Key;
