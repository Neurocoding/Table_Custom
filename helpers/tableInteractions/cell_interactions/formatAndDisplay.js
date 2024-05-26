import { formatCurrencyDK } from "../../utilities/formatCurrencyDK.js";

/**
 * Formats and displays the cell content.
 * @param {HTMLElement} cell - The table cell element.
 */
export function formatAndDisplay(cell) {
  if (cell.cellIndex > 0 && cell.dataset.lastValid) {
    let formattedValue = formatCurrencyDK(parseFloat(cell.dataset.lastValid));
    cell.textContent = formattedValue;
  }
}
