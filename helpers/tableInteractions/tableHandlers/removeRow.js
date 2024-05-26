// removeRow.js
import { updateRowColors } from "./updateRowColors.js";
import { calculateTotals } from "../../utilities/calculateTotals.js";

/**
 * Removes a row from the specified table at the given index.
 * @param {HTMLTableElement} table - The table to remove the row from.
 * @param {number} index - The index of the row to remove.
 */
export function removeRow(table, index) {
  try {
    if (index >= 0 && index < table.rows.length) {
      table.deleteRow(index);
      calculateTotals();
      updateRowColors();
      console.log(`Row ${index} removed.`);
    } else {
      console.log("Invalid row index. No rows removed.");
    }
  } catch (error) {
    console.error("Error removing row:", error);
  }
}
