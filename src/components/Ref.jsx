import React, { useEffect, useRef } from "react";

const Ref = () => {
  const inputRef = useRef(null);

  const clicking = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80 text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">Ref</h2>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter Value"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={clicking}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default Ref;
