import calculateTotals from "./calculateTotals.js";

let debounceTimeout;

/**
 * Debounces the recalculation of totals.
 */
export default function debounceRecalculation() {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    calculateTotals();
  }, 300); // Adjust the delay as needed (in milliseconds)
}
