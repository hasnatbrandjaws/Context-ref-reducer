import React, { createContext, useState } from "react";

export const AppContext = createContext();

const Context = ({ children }) => {
  const [name, setName] = useState("Haroon");

  return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>;
};

export default Context;
