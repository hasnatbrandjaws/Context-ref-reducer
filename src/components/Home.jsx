import React, { useContext } from "react";
// import { AppContext } from "./ThemeContext";

const Home = () => {
  // const { theme, toggltheme } = useContext(AppContext);

  return (
    <div className="flex h-screen items-center justify-center bg-blue-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-2xl font-bold text-gray-700">
        Home
      </div>
    </div>
    // <div
    //   className={`border ${
    //     theme ? "bg-black text-white" : "bg-white text-black"
    //   } `}
    // >
    //   Home {theme}
    //   <button onClick={toggltheme}>{theme ? "Switch To Light Mode" : "Switch To Dark Mode"}</button>
    // </div>
  );
};

export default Home;
