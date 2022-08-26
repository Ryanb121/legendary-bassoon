import "./Keyboard.css";
import Key from "../Key/Key";
import BlackKey from "../BlackKey/BlackKey";

const Keyboard = () => {
  return (
    <div className="keyboard">
      <Key />
      <BlackKey />
      <Key />
      <BlackKey />
      <Key />
      <Key />
      <BlackKey />
      <Key />
      <BlackKey />
      <Key />
      <BlackKey />
      <Key />
    </div>
  );
};

export default Keyboard;
