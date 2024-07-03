/**
 * Make delay for rendering imported funciton.
 *
 * @returns {delayedFunction}
 */

export const simulateDelay = (importFunction, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(importFunction()), delay);
  });
};
