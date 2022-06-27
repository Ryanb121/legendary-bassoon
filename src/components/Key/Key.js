import "./Key.css";

const Key = () => {
  const handleClick = (e) => {
    console.log("clicked");
  };
  return <div className="key" onClick={handleClick}></div>;
};

export default Key;
