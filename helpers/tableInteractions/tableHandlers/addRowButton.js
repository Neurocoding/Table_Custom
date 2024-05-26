import { addRow } from "./addRow.js";

/**
 * Adds a new row when the button is clicked.
 */
export function addRowButton() {
  try {
    console.log("Adding row...");
    const table = document.querySelector("#dataTable tbody");
    addRow(table, table.rows.length);
  } catch (error) {
    console.error("Error in addRowButton:", error);
  }
}
