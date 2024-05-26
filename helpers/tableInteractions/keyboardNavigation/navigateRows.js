export function navigateRows(direction) {
  let activeElement = document.activeElement;
  if (
    !activeElement ||
    !activeElement.parentNode ||
    !activeElement.parentNode.parentNode
  )
    return; // Exit if no element is currently focused or if structure is unexpected

  let rows = activeElement.parentNode.parentNode.children;
  let rowIndex = Array.from(rows).indexOf(activeElement.parentNode);
  let columns = activeElement.parentNode.children;
  let columnIndex = Array.from(columns).indexOf(activeElement);

  switch (direction) {
    case "up":
      if (rowIndex > 0) {
        columns[columnIndex].parentNode.previousElementSibling.children[
          columnIndex
        ].focus();
      }
      break;
    case "down":
      if (rowIndex < rows.length - 1) {
        columns[columnIndex].parentNode.nextElementSibling.children[
          columnIndex
        ].focus();
      }
      break;
    case "left":
      if (columnIndex > 0) {
        activeElement.previousElementSibling.focus();
      } else if (rowIndex > 0) {
        // Wrap to the last cell of the previous row
        rows[rowIndex - 1].children[columns.length - 1].focus();
      }
      break;
    case "right":
      if (columnIndex < columns.length - 1) {
        activeElement.nextElementSibling.focus();
      } else if (rowIndex < rows.length - 1) {
        // Wrap to the first cell of the next row
        rows[rowIndex + 1].children[0].focus();
      }
      break;
  }
}
