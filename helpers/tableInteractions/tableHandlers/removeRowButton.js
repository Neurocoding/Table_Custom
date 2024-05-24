import updateRowColors from "./updateRowColors.js";
import calculateTotals from "./calculateTotals.js";

/**
 * Removes the last row from the table when the button is clicked.
 */
export default function removeRowButton() {
  try {
    console.log("Removing row via button...");
    const table = document.querySelector("#dataTable tbody");
    if (table.rows.length > 0) {
      table.deleteRow(-1);
      calculateTotals();
      updateRowColors();
      console.log("Row removed via button");
    } else {
      console.log("No rows left to remove.");
    }
  } catch (error) {
    console.error("Error in removeRowButton:", error);
  }
}
