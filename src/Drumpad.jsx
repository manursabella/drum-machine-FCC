import React from "react";

const Drumpad = ({ text, src, onClick }) => {
  return (
    <div className="drum-pad" onClick={() => onClick(text)}>
      {text}
      <audio className="clip" id={`audio-${text}`} src={src}></audio>
    </div>
  );
};

export default Drumpad;
