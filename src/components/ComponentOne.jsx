import React, { useContext, useReducer } from "react";
import Reducer from "./Reducer";
import { AppContext } from "./Context";

const ComponentOne = () => {
  const { name } = useContext(AppContext);
  const initialstate = { num: 0 };
  const [state, dispatch] = useReducer(Reducer, initialstate);

  const AddCount = () => {
    dispatch({ type: "Inc" });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-md w-80 text-center">
          <div className="text-2xl font-bold text-gray-700 mb-4">
            Count: <span className="text-blue-500">{state.num}</span>
          </div>
          <button
            onClick={AddCount}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mb-4"
          >
            Add Count
          </button>
          <h2 className="text-xl text-gray-600">
            Name From Context:{" "}
            <span className="font-semibold text-blue-500">{name}</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default ComponentOne;
