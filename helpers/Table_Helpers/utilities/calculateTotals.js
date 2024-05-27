import { parseCurrency } from "./parseCurrency.js";
import { formatCurrencyDK } from "./formatCurrencyDK.js";
export function calculateTotals() {
  const table = document.querySelector("#dataTable tbody");
  let totalVaerdi = 0;
  let totalGaeld = 0;

  Array.from(table.rows).forEach((row) => {
    let vaerdiCell = parseCurrency(row.cells[1].textContent);
    let gaeldCell = parseCurrency(row.cells[2].textContent);

    totalVaerdi += vaerdiCell;
    totalGaeld += gaeldCell;
  });

  document.getElementById("totalVaerdi").textContent =
    formatCurrencyDK(totalVaerdi);
  document.getElementById("totalGaeld").textContent =
    formatCurrencyDK(totalGaeld);

  const totalDifference = totalVaerdi - totalGaeld;
  document.getElementById("totalDifference").textContent =
    formatCurrencyDK(totalDifference);

  console.log("Totals recalculated:", totalVaerdi, totalGaeld, totalDifference);
}
