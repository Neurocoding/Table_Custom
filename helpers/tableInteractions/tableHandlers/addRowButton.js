// addRowButton.js
import { addRow } from "./addRow.js";

/**
 * Adds a new row when the button is clicked.
 */
export function addRowButton() {
  try {
    const table = document.querySelector("#dataTable tbody");

    // Return early if the table element is not found
    if (!table) {
      return;
    }

    console.log("Adding row...");
    addRow(table, table.rows.length);
  } catch (error) {
    console.error("Error in addRowButton:", error);
  }
}
