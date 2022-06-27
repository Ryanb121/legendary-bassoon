import "./Key.css";
import audio from "../Sounds/c3.mp3";

const Key = () => {
  const playAudio = (e) => {
    if (e.key === "a"){

    
    
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
    }
  };
  return (
    <div className="key-white" tabIndex="0" onKeyDown={playAudio}>
      <audio className="audio-element">
        <source src={audio}></source>
      </audio>
    </div>
  );
};

export default Key;
