import { formatCurrencyDK } from "./FormatCurrencyDK.js";

export function calculateTotals() {
    const table = document.querySelector("#dataTable tbody");
    let totalVaerdi = 0;
    let totalGaeld = 0;

    Array.from(table.rows).forEach(row => {
        let vaerdiCell = parseCurrency(row.cells[1].textContent);
        let gaeldCell = parseCurrency(row.cells[2].textContent);

        totalVaerdi += vaerdiCell;
        totalGaeld += gaeldCell;
    });

    document.getElementById('totalVaerdi').textContent = formatCurrencyDK(totalVaerdi);
    document.getElementById('totalGaeld').textContent = formatCurrencyDK(totalGaeld);

    console.log('Totals recalculated:', totalVaerdi, totalGaeld);
}

// Helper function to parse formatted currency values safely
function parseCurrency(input) {
    // Remove ' kr.' and other non-numeric characters except digits, minus sign, and comma
    let numericValue = input.replace(/ kr\.?$/, '').replace(/[^0-9,-]/g, '');
    // Replace comma with dot for parseFloat compatibility
    numericValue = numericValue.replace(/,/g, '.');
    return parseFloat(numericValue) || 0;
}
