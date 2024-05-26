/**
 * Handles focus events on the table cells.
 * @param {Event} event - The focus event.
 */
export function handleFocus(event) {
  const cell = event.target;
  if (
    cell.textContent === "Enter value" ||
    cell.textContent === "0 kr." ||
    cell.textContent === "Ny Kategori"
  ) {
    cell.textContent = "";
    cell.style.color = "black";
  }
}
