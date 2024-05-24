/**
 * Updates the background colors of the table rows.
 */
export default function updateRowColors() {
  const rows = document.querySelectorAll("#dataTable tbody tr");
  rows.forEach((row, index) => {
    row.style.backgroundColor = index % 2 === 0 ? "#ffffff" : "#F2F2F2";
  });
}
