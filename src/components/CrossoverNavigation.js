import React from "react";
import { crossoverMethods } from "../data/fitnessData";
import { Button } from "./ui/button";

const CrossoverNavigation = ({ activeCrossover, onCrossoverChange }) => {
  const crossoverOptions = [
    {
      key: "all",
      label: "All Methods",
      description: "All crossover methods combined",
    },
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
    <div className="flex flex-wrap items-center gap-2">
      {crossoverOptions.map((option) => (
        <Button
          key={option.key}
          variant={activeCrossover === option.key ? "default" : "outline"}
          size="sm"
          className={`rounded-lg transition-all duration-200 border-2 ${
            activeCrossover === option.key
              ? "bg-accent-600 border-accent-600 text-white shadow-md shadow-accent-600/20"
              : "bg-white border-gray-100 text-muted-foreground hover:border-accent-600 hover:text-accent-600"
          }`}
          onClick={() => onCrossoverChange(option.key)}
          title={option.description}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default CrossoverNavigation;
