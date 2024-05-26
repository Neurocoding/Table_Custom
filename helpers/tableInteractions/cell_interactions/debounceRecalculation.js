import { utilities } from "../../index.js";

let debounceTimeout;

/**
 * Debounces the recalculation of totals.
 */
export function debounceRecalculation() {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    utilities.calculateTotals();
  }, 300); // Adjust the delay as needed (in milliseconds)
}
