/**
 * Delay rendering imported component.
 *
 * @returns {delayedFunction}
 */

export const simulateDelay = (importFunction, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(importFunction()), delay);
  });
};
