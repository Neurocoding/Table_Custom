import formatAndDisplay from "./formatAndDisplay.js";
import debounceRecalculation from "./debounceRecalculation.js";

/**
 * Handles blur events on the table cells.
 * @param {Event} event - The blur event.
 */
export default function handleBlur(event) {
  const cell = event.target;
  if (cell.textContent.trim() === "") {
    cell.textContent = cell.cellIndex === 0 ? "Ny Kategori" : "0 kr.";
    cell.style.color = "gray"; // Placeholder color
    debounceRecalculation();
  } else {
    formatAndDisplay(cell);
  }
}
