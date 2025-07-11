import { createContext } from "react";
import React, { useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const contextValue = {
    user,
    setUser,
    showLogin,
    setShowLogin,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
