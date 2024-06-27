import React, { createContext, useState, useContext } from "react";

// Create the context
const ChangeDetailContext = createContext();

// Create the provider component
export const ChangeDetailProvider = ({ children }) => {
  const [changeDetail, setChangeDetail] = useState(true);

  return (
    <ChangeDetailContext.Provider value={{ changeDetail, setChangeDetail }}>
      {children}
    </ChangeDetailContext.Provider>
  );
};

// Custom hook to use the ChangeDetail context
export const useChangeDetail = () => {
  return useContext(ChangeDetailContext);
};
