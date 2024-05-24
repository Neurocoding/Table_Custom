import resetToLastValid from "./resetToLastValid.js";

/**
 * Validates the input in a table cell.
 * @param {HTMLElement} cell - The table cell element.
 */
export default function validateInput(cell) {
  if (cell.cellIndex === 0) {
    // For 'Kategori' column, simply manage placeholders.
    cell.dataset.lastValid = cell.textContent.trim() || "Ny Kategori";
  } else {
    // Attempt to clean the input and convert it to a number.
    let cleanedInput = cell.textContent.replace(/[^0-9,.-]/g, "").trim();
    cleanedInput = cleanedInput.replace(/,/g, "."); // Handle comma as decimal point.
    let numericValue = parseFloat(cleanedInput);

    if (isNaN(numericValue)) {
      console.error(
        "Invalid number input, resetting to last valid or placeholder"
      );
      resetToLastValid(cell);
    } else {
      // Store raw number in dataset for potential re-use.
      cell.dataset.lastValid = numericValue.toString();
    }
  }
}
