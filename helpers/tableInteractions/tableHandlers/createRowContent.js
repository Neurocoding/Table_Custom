/**
 * Creates the HTML content for a new row.
 * @returns {string} The HTML string for a new row.
 */
export function createRowContent() {
  const cellStyle =
    "padding: 12px; text-align: left; vertical-align: middle; color: gray; border-right: 1px solid #ccc;";
  const valueCellStyle =
    "padding: 12px; text-align: right; vertical-align: middle; color: gray; border-right: 1px solid #ccc;";
  const lastCellStyle =
    "padding: 12px; text-align: right; vertical-align: middle; color: gray;";

  return `
        <td contenteditable="true" style="${cellStyle}" data-last-valid="Ny Kategori">Ny Kategori</td>
        <td contenteditable="true" style="${valueCellStyle}" data-last-valid="0 kr.">0 kr.</td>
        <td contenteditable="true" style="${lastCellStyle}" data-last-valid="0 kr.">0 kr.</td>`;
}
