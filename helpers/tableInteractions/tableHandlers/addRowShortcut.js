import addRow from "./addRow.js";

/**
 * Adds a new row using a keyboard shortcut.
 */
export default function addRowShortcut() {
  try {
    console.log("Adding row via shortcut...");
    const table = document.querySelector("#dataTable tbody");
    const activeRow =
      document.activeElement && document.activeElement.tagName === "TD"
        ? document.activeElement.parentNode
        : null;
    const rowIndex = activeRow
      ? Array.from(table.rows).indexOf(activeRow) + 1
      : table.rows.length; // Insert after the current row or at the end
    addRow(table, rowIndex);
  } catch (error) {
    console.error("Error in addRowShortcut:", error);
  }
}
