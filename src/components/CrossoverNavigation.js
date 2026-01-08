import React from "react";
import { crossoverMethods } from "../data/fitnessData";

const CrossoverNavigation = ({ activeCrossover, onCrossoverChange }) => {
  const crossoverOptions = [
    { key: "all", label: "All", description: "All crossover methods" },
    {
      key: "exponential",
      label: "Exponential",
      description: crossoverMethods.exponential,
    },
    {
      key: "binomial",
      label: "Binomial",
      description: crossoverMethods.binomial,
    },
    {
      key: "onepoint",
      label: "One-Point",
      description: crossoverMethods.onepoint,
    },
    {
      key: "twopoint",
      label: "Two-Point",
      description: crossoverMethods.twopoint,
    },
  ];

  return (
    <div className="crossover-buttons-minimal">
      {crossoverOptions.map((option) => (
        <button
          key={option.key}
          className={`control-btn crossover-btn-individual ${
            activeCrossover === option.key ? "active" : ""
          }`}
          onClick={() => onCrossoverChange(option.key)}
          title={option.description}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default CrossoverNavigation;
