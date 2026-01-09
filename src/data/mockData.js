export const deVariants = Array.from(
  { length: 80 },
  (_, i) => `DE/variant/${i + 1}`
);

export const benchmarkFunctions = [
  "Sphere Function",
  "Ackley Function",
  "Rastrigin Function",
  "Griewangk Function",
  "Schwefel 2.22",
  "Rosenbrock Function",
  "Zakharov Function",
  "Quartic Function",
];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const mockSimulations = Array.from({ length: 80 }, (_, i) => ({
  id: `${i + 1}`,
  model: getRandomItem([
    "DE/best/1",
    "DE/best/2",
    "DE/rand/1",
    "DE/current-to-best/1",
    "DE/current-to-rand/1",
  ]),
  benchmark: getRandomItem(benchmarkFunctions),
  np: getRandomItem([50, 100, 200, 500]),
  f: parseFloat((Math.random() * 0.9 + 0.1).toFixed(2)),
  cr: parseFloat(Math.random().toFixed(2)),
  generations: getRandomItem([100, 500, 1000, 2000]),
  bestFitness: parseFloat((Math.random() * 1e-10).toExponential(5)),
  timestamp: new Date(
    Date.now() - Math.floor(Math.random() * 1000000000)
  ).toISOString(),
  status: "completed",
}));
