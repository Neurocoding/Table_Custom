import { validateInput } from "./validateInput.js";
import { debounceRecalculation } from "./debounceRecalculation.js";

/**
 * Calculates and updates the totals when input changes.
 * @param {Event} event - The input event.
 */
export function calculateAndUpdate(event) {
  const cell = event.target;
  console.log("Input event triggered, recalculating totals...");
  validateInput(cell);
  debounceRecalculation();
}
