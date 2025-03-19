import React, { useEffect, useRef } from "react";

const Ref = () => {
  const inputRef = useRef(null);

  const clicking = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
  }

  return (
    <div>
      <h2>Ref</h2>
      <input ref={inputRef} type="text" placeholder="Enter Value" />
      <button onClick={clicking}>Click</button>
    </div>
  );
};

export default Ref;
