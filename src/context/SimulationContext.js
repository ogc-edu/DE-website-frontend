import React, { createContext, useState, useContext } from "react";

const SimulationContext = createContext();

export const useSimulation = () => useContext(SimulationContext);

export const SimulationProvider = ({ children }) => {
  const [activeSimulation, setActiveSimulation] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  return (
    <SimulationContext.Provider
      value={{
        activeSimulation,
        setActiveSimulation,
        isSimulating,
        setIsSimulating,
      }}
    >
      {children}
    </SimulationContext.Provider>
  );
};
