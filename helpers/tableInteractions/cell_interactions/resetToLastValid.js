/**
 * Resets the table cell to its last valid value.
 * @param {HTMLElement} cell - The table cell element.
 */
export default function resetToLastValid(cell) {
  if (cell.dataset.lastValid) {
    cell.textContent = cell.cellIndex === 0 ? cell.dataset.lastValid : "0 kr.";
    cell.style.color = "red";
    setTimeout(() => (cell.style.color = "black"), 1500);
  }
}
