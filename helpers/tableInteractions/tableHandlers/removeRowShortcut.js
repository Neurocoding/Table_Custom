import { updateRowColors } from "./updateRowColors.js";
import { calculateTotals } from "../../utilities/calculateTotals.js";

/**
 * Removes the selected row using a keyboard shortcut.
 */
export function removeRowShortcut() {
  try {
    console.log("Removing row via shortcut...");
    const table = document.querySelector("#dataTable tbody");
    const activeRow =
      document.activeElement && document.activeElement.tagName === "TD"
        ? document.activeElement.parentNode
        : null;

    if (activeRow && table.rows.length > 0) {
      const rowIndex = Array.from(table.rows).indexOf(activeRow);
      if (rowIndex > -1) {
        table.deleteRow(rowIndex);
        calculateTotals();
        updateRowColors();
        console.log("Row removed via shortcut");

        // Enhanced focus management
        if (table.rows.length > 0) {
          if (rowIndex < table.rows.length) {
            table.rows[rowIndex].cells[0].focus();
          } else {
            table.rows[table.rows.length - 1].cells[0].focus();
          }
        } else {
          console.log("All rows have been removed.");
        }
      }
    } else {
      console.log("No valid row selected or no rows to remove.");
    }
  } catch (error) {
    console.error("Error in removeRowShortcut:", error);
  }
}
