// removeRowButton.js
import { removeRow } from "./removeRow.js";

/**
 * Removes the last row from the table when the button is clicked.
 */
export function removeRowButton() {
  try {
    const table = document.querySelector("#dataTable tbody");

    // Return early if the table element is not found
    if (!table) {
      return;
    }

    if (table.rows.length > 0) {
      console.log("Removing row via button...");
      removeRow(table, table.rows.length - 1);
    } else {
      console.log("No rows left to remove.");
    }
  } catch (error) {
    console.error("Error in removeRowButton:", error);
  }
}
