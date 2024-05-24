import updateRowColors from "./updateRowColors.js";
import createRowContent from "./createRowContent.js";
import calculateTotals from "./calculateTotals.js";

/**
 * Adds a new row to the specified table at the given index.
 * @param {HTMLTableElement} table - The table to add the row to.
 * @param {number} index - The index at which to insert the new row.
 */
export default function addRow(table, index) {
  try {
    lastRowId++;
    const newRow = table.insertRow(index);
    newRow.id = `row-${lastRowId}`;
    newRow.style.color = "#2f353e";
    newRow.style.borderBottom = "1px solid #ccc";
    newRow.innerHTML = createRowContent();
    calculateTotals();
    updateRowColors();
    console.log("Row added:", newRow);
    newRow.cells[0].focus();
  } catch (error) {
    console.error("Error adding row:", error);
  }
}
