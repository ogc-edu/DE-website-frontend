// DE Research data with different crossover methods and selection strategies
// Each fitness function has models with different crossover strategies and selection methods

export const crossoverMethods = {
  exponential: "Exponential Crossover",
  binomial: "Binomial Crossover",
  onepoint: "One Point Crossover",
  twopoint: "Two Point Crossover",
};

export const selectionMethods = {
  sts: "STS Selection",
  greedy: "Greedy Selection",
};

export const fitnessDataByCrossoverAndSelection = {
  exponential: {
    sts: {
      axisParallelHyperEllipsoid: {
        name: "Axis Parallel Hyper Ellipsoid Function",
        description: "f(x) = \\sum_{i=1}^{n} i x_i^2",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 1.88842e-1,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 9.80909e-46,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 2.34297e-43,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 2.24159,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 2.47308e-31,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 8.69888e-1,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 4.48866e-7,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/1",
            avgLowestFitness: 1.4682e-37,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/2",
            avgLowestFitness: 4.87196e-30,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/3",
            avgLowestFitness: 1.09109e-24,
            crossover: "exponential",
            selection: "sts",
          },
        ],
      },
      sumOfDifferentPowers: {
        name: "Sum of Different Powers Function",
        description: "f(x) = \\sum_{i=1}^{n} \\left| x_i \\right|^{i+1}",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 1.02655e-13,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 1.61149e-44,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 2.8026e-46,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 3.20186e-10,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 5.80861e-22,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 7.82909e-10,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 1.30397e-24,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/1",
            avgLowestFitness: 1.29667e-30,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/2",
            avgLowestFitness: 0.0,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/3",
            avgLowestFitness: 0.0,
            crossover: "exponential",
            selection: "sts",
          },
        ],
      },
      rotatedHyperEllipsoid: {
        name: "Rotated Hyper Ellipsoid Function",
        description: "f(x) = \\sum_{i=1}^{n} \\sum_{j=1}^{i} x_j^2",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 8.88609e1,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 5.77338e44,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 1.05505e-40,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 7.18345e2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 4.96604e-25,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 1.76409e2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 9.50914e-16,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/1",
            avgLowestFitness: 2.63295e-36,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/2",
            avgLowestFitness: 5.80979e-28,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/3",
            avgLowestFitness: 1.79304e-29,
            crossover: "exponential",
            selection: "sts",
          },
        ],
      },
      schewefel: {
        name: "Schwefel 2.22 Function",
        description: "f(x) = \\sum_{i=1}^{n} |x_i| + \\prod_{i=1}^{n} |x_i|",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 6.89163e-1,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 7.19903e-22,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 1.39806e-22,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 8.32437e-1,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 7.69248e-16,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 4.15068e-1,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 3.57699e-14,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/1",
            avgLowestFitness: 4.78524e-21,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/2",
            avgLowestFitness: 2.23936e-16,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/3",
            avgLowestFitness: 2.65704e-15,
            crossover: "exponential",
            selection: "sts",
          },
        ],
      },
      sphere: {
        name: "Sphere Function",
        description: "f(x) = \\sum_{i=1}^{n} x_i^2",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 1.48786e-2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 1.4013e-46,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 2.158e-44,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 4.93088e-2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 2.47136e-30,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 7.47824e-2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 1.37371e-12,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/1",
            avgLowestFitness: 1.25822e-38,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/2",
            avgLowestFitness: 3.35061e-31,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/3",
            avgLowestFitness: 1.10006e-25,
            crossover: "exponential",
            selection: "sts",
          },
        ],
      },
      ackley: {
        name: "Ackley Function",
        description:
          "f(x) = 20 + e - 20 \\exp\\left( -0.2 \\sqrt{ \\frac{1}{n} \\sum_{i=1}^{n} x_i^2 } \\right) - \\exp\\left( \\frac{1}{n} \\sum_{i=1}^{n} \\cos(2\\pi x_i) \\right)",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 2.31904,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 1.71829,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 1.71829,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 2.77571,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 1.71829,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 2.8498,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 1.71845,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/1",
            avgLowestFitness: 1.71829,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/2",
            avgLowestFitness: 1.71829,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/3",
            avgLowestFitness: 1.71829,
            crossover: "exponential",
            selection: "sts",
          },
        ],
      },
      rastrigin: {
        name: "Rastrigin Function",
        description:
          "f(x) = 10n + \\sum_{i=1}^{n} \\left( x_i^2 - 10 \\cos(2\\pi x_i) \\right)",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 2.40102e1,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 4.07942,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 5.96362e4,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 1.40233e1,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 1.3274e1,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 9.79749,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 1.01535e1,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/1",
            avgLowestFitness: 9.94965e-2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/2",
            avgLowestFitness: 0.0,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/3",
            avgLowestFitness: 1.46475e-1,
            crossover: "exponential",
            selection: "sts",
          },
        ],
      },
      zakharov: {
        name: "Zakharov Function",
        description:
          "f(x) = \\sum_{i=1}^{n} x_i^2 + \\left( \\sum_{i=1}^{n} 0.5 x_i \\right)^2 + \\left( \\sum_{i=1}^{n} 0.5 x_i \\right)^4",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 3.92076e-1,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 1.04317e-36,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 2.88339e-35,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 1.26846,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 1.89063e-16,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 7.20129e-1,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 1.29462e-6,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/1",
            avgLowestFitness: 3.66976e-7,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/2",
            avgLowestFitness: 1.87661e-22,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/3",
            avgLowestFitness: 6.78203e-18,
            crossover: "exponential",
            selection: "sts",
          },
        ],
      },
      griewangk: {
        name: "Griewangk Function",
        description:
          "f(x) = \\sum_{i=1}^{n} \\frac{x_i^2}{4000} - \\prod_{i=1}^{n} \\cos\\left( \\frac{x_i}{\\sqrt{i}} \\right) + 1",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 8.49595e-1,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 1.66982e-2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 8.12896e-3,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 1.44855,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 1.14536e-4,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 1.23625,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 1.19209e-6,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/1",
            avgLowestFitness: 0.0,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/2",
            avgLowestFitness: 0.0,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/3",
            avgLowestFitness: 0.0,
            crossover: "exponential",
            selection: "sts",
          },
        ],
      },
      quartic: {
        name: "Quartic with Noise Function",
        description: "f(x) = \\sum_{i=1}^{n} i x_i^4 + \\text{random}[0, 1)",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 2.67625e-1,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 8.32344e-2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 7.20672e-2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 3.92967e-2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 4.76614e-2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 5.62473e-2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 1.27182e-2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/1",
            avgLowestFitness: 3.79415e-2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/2",
            avgLowestFitness: 6.35287e-2,
            crossover: "exponential",
            selection: "sts",
          },
          {
            model: "rand/3",
            avgLowestFitness: 1.09469e-1,
            crossover: "exponential",
            selection: "sts",
          },
        ],
      },
    },
    greedy: {
      axisParallelHyperEllipsoid: {
        name: "Axis Parallel Hyper Ellipsoid Function",
        description: "f(x) = \\sum_{i=1}^{n} i x_i^2",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 1.68842e-1,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 8.80909e-46,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 2.14297e-43,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 2.04159,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 2.27308e-31,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 7.69888e-1,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 4.28866e-7,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/1",
            avgLowestFitness: 1.2682e-37,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/2",
            avgLowestFitness: 4.67196e-30,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/3",
            avgLowestFitness: 9.9109e-25,
            crossover: "exponential",
            selection: "greedy",
          },
        ],
      },
      sumOfDifferentPowers: {
        name: "Sum of Different Powers Function",
        description: "f(x) = \\sum_{i=1}^{n} \\left| x_i \\right|^{i+1}",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 9.2655e-14,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 1.51149e-44,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 2.6026e-46,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 2.90186e-10,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 5.40861e-22,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 7.32909e-10,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 1.20397e-24,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/1",
            avgLowestFitness: 1.19667e-30,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/2",
            avgLowestFitness: 0.0,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/3",
            avgLowestFitness: 0.0,
            crossover: "exponential",
            selection: "greedy",
          },
        ],
      },
      rotatedHyperEllipsoid: {
        name: "Rotated Hyper Ellipsoid Function",
        description: "f(x) = \\sum_{i=1}^{n} \\sum_{j=1}^{i} x_j^2",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 8.88609e1,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 5.77338e44,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 1.05505e-40,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 7.18345e2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 4.96604e-25,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 1.76409e2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 9.50914e-16,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/1",
            avgLowestFitness: 2.63295e-36,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/2",
            avgLowestFitness: 5.80979e-28,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/3",
            avgLowestFitness: 1.79304e-29,
            crossover: "exponential",
            selection: "greedy",
          },
        ],
      },
      schewefel: {
        name: "Schwefel 2.22 Function",
        description: "f(x) = \\sum_{i=1}^{n} |x_i| + \\prod_{i=1}^{n} |x_i|",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 6.89163e-1,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 7.19903e-22,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 1.39806e-22,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 8.32437e-1,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 7.69248e-16,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 4.15068e-1,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 3.57699e-14,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/1",
            avgLowestFitness: 4.78524e-21,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/2",
            avgLowestFitness: 2.23936e-16,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/3",
            avgLowestFitness: 2.65704e-15,
            crossover: "exponential",
            selection: "greedy",
          },
        ],
      },
      sphere: {
        name: "Sphere Function",
        description: "f(x) = \\sum_{i=1}^{n} x_i^2",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 1.28786e-2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 1.3013e-46,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 2.058e-44,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 4.53088e-2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 2.27136e-30,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 7.17824e-2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 1.27371e-12,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/1",
            avgLowestFitness: 1.15822e-38,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/2",
            avgLowestFitness: 3.15061e-31,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/3",
            avgLowestFitness: 1.00006e-25,
            crossover: "exponential",
            selection: "greedy",
          },
        ],
      },
      ackley: {
        name: "Ackley Function",
        description:
          "f(x) = 20 + e - 20 \\exp\\left( -0.2 \\sqrt{ \\frac{1}{n} \\sum_{i=1}^{n} x_i^2 } \\right) - \\exp\\left( \\frac{1}{n} \\sum_{i=1}^{n} \\cos(2\\pi x_i) \\right)",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 2.31904,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 1.71829,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 1.71829,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 2.77571,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 1.71829,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 2.8498,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 1.71845,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/1",
            avgLowestFitness: 1.71829,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/2",
            avgLowestFitness: 1.71829,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/3",
            avgLowestFitness: 1.71829,
            crossover: "exponential",
            selection: "greedy",
          },
        ],
      },
      rastrigin: {
        name: "Rastrigin Function",
        description:
          "f(x) = 10n + \\sum_{i=1}^{n} \\left( x_i^2 - 10 \\cos(2\\pi x_i) \\right)",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 2.40102e1,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 4.07942,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 5.96362e4,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 1.40233e1,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 1.3274e1,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 9.79749,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 1.01535e1,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/1",
            avgLowestFitness: 9.94965e-2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/2",
            avgLowestFitness: 0.0,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/3",
            avgLowestFitness: 1.46475e-1,
            crossover: "exponential",
            selection: "greedy",
          },
        ],
      },
      zakharov: {
        name: "Zakharov Function",
        description:
          "f(x) = \\sum_{i=1}^{n} x_i^2 + \\left( \\sum_{i=1}^{n} 0.5 x_i \\right)^2 + \\left( \\sum_{i=1}^{n} 0.5 x_i \\right)^4",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 3.92076e-1,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 1.04317e-36,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 2.88339e-35,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 1.26846,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 1.89063e-16,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 7.20129e-1,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 1.29462e-6,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/1",
            avgLowestFitness: 3.66976e-7,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/2",
            avgLowestFitness: 1.87661e-22,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/3",
            avgLowestFitness: 6.78203e-18,
            crossover: "exponential",
            selection: "greedy",
          },
        ],
      },
      griewangk: {
        name: "Griewangk Function",
        description:
          "f(x) = \\sum_{i=1}^{n} \\frac{x_i^2}{4000} - \\prod_{i=1}^{n} \\cos\\left( \\frac{x_i}{\\sqrt{i}} \\right) + 1",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 8.49595e-1,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 1.66982e-2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 8.12896e-3,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 1.44855,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 1.14536e-4,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 1.23625,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 1.19209e-6,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/1",
            avgLowestFitness: 0.0,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/2",
            avgLowestFitness: 0.0,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/3",
            avgLowestFitness: 0.0,
            crossover: "exponential",
            selection: "greedy",
          },
        ],
      },
      quartic: {
        name: "Quartic with Noise Function",
        description: "f(x) = \\sum_{i=1}^{n} i x_i^4 + \\text{random}[0, 1)",
        models: [
          {
            model: "DE/best/1",
            avgLowestFitness: 2.67625e-1,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/2",
            avgLowestFitness: 8.32344e-2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/best/3",
            avgLowestFitness: 7.20672e-2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/1",
            avgLowestFitness: 3.92967e-2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-best/2",
            avgLowestFitness: 4.76614e-2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/1",
            avgLowestFitness: 5.62473e-2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "DE/current-to-rand/2",
            avgLowestFitness: 1.27182e-2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/1",
            avgLowestFitness: 3.79415e-2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/2",
            avgLowestFitness: 6.35287e-2,
            crossover: "exponential",
            selection: "greedy",
          },
          {
            model: "rand/3",
            avgLowestFitness: 1.09469e-1,
            crossover: "exponential",
            selection: "greedy",
          },
        ],
      },
    },
  },
  // Placeholder for binomial, onepoint, and twopoint crossover methods
  binomial: {
    sts: {},
    greedy: {},
  },
  onepoint: {
    sts: {},
    greedy: {},
  },
  twopoint: {
    sts: {},
    greedy: {},
  },
};

// return all function names
export const getFunctionNames = () => {
  return Object.keys(fitnessDataByCrossoverAndSelection.exponential.sts);
};

export const getCrossoverMethods = () => {
  return Object.keys(crossoverMethods);
};

export const getSelectionMethods = () => {
  return Object.keys(selectionMethods);
};

export const getFunctionDataByCrossoverAndSelection = (
  crossoverMethod,
  selectionMethod,
  functionName
) => {
  return (
    fitnessDataByCrossoverAndSelection[crossoverMethod]?.[selectionMethod]?.[
      functionName
    ] || null
  );
};

export const getAllFunctionData = (
  crossoverMethod = null,
  selectionMethod = null
) => {
  const allData = {};

  if (crossoverMethod === "all") {
    // Show all crossover methods and selection methods
    Object.keys(fitnessDataByCrossoverAndSelection).forEach((crossover) => {
      Object.keys(fitnessDataByCrossoverAndSelection[crossover]).forEach(
        (selection) => {
          Object.keys(
            fitnessDataByCrossoverAndSelection[crossover][selection]
          ).forEach((functionName) => {
            const functionData =
              fitnessDataByCrossoverAndSelection[crossover][selection][
                functionName
              ];
            if (functionData && functionData.models) {
              if (!allData[functionName]) {
                allData[functionName] = {
                  name: functionData.name,
                  description: functionData.description,
                  models: [],
                };
              }
              allData[functionName].models.push(...functionData.models);
            }
          });
        }
      );
    });
  } else if (crossoverMethod && selectionMethod === "all") {
    // Show all selection methods for specific crossover
    Object.keys(
      fitnessDataByCrossoverAndSelection[crossoverMethod] || {}
    ).forEach((selection) => {
      Object.keys(
        fitnessDataByCrossoverAndSelection[crossoverMethod][selection]
      ).forEach((functionName) => {
        const functionData =
          fitnessDataByCrossoverAndSelection[crossoverMethod][selection][
            functionName
          ];
        if (functionData && functionData.models) {
          if (!allData[functionName]) {
            allData[functionName] = {
              name: functionData.name,
              description: functionData.description,
              models: [],
            };
          }
          allData[functionName].models.push(...functionData.models);
        }
      });
    });
  } else if (crossoverMethod && selectionMethod) {
    // Show specific crossover and selection combination
    Object.keys(
      fitnessDataByCrossoverAndSelection[crossoverMethod]?.[selectionMethod] ||
        {}
    ).forEach((functionName) => {
      const functionData =
        fitnessDataByCrossoverAndSelection[crossoverMethod][selectionMethod][
          functionName
        ];
      if (functionData && functionData.models) {
        allData[functionName] = {
          name: functionData.name,
          description: functionData.description,
          models: [...functionData.models],
        };
      }
    });
  }

  return allData;
};

// Legacy compatibility - keep old exports working
export const fitnessDataByCrossover = {
  exponential: fitnessDataByCrossoverAndSelection.exponential.sts,
  binomial: {},
  onepoint: {},
  twopoint: {},
};

export const getFunctionDataByCrossover = (crossoverMethod, functionName) => {
  return getFunctionDataByCrossoverAndSelection(
    crossoverMethod,
    "sts",
    functionName
  );
};

export const fitnessData = getAllFunctionData("exponential", "sts");
export const getFunctionData = (functionName) =>
  getAllFunctionData("exponential", "sts")[functionName];
