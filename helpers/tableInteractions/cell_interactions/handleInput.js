import validateInput from "./validateInput.js";
import debounceRecalculation from "./debounceRecalculation.js";

/**
 * Handles input events on the table cells.
 * @param {Event} event - The input event.
 */
export default function handleInput(event) {
  const cell = event.target;
  if (cell.contentEditable === "true") {
    console.log("Input event triggered, recalculating totals...");
    validateInput(cell);
    debounceRecalculation();
  }
}
