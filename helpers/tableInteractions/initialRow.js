

export function createInitialRow() {
    const table = document.querySelector("#dataTable tbody");
    const row = table.insertRow(0);  // Insert at the first position

    let cell = row.insertCell(0);
    cell.setAttribute('contenteditable', 'true');
    cell.textContent = 'Ny Kategori';
    cell.style.color = 'gray';  // Placeholder color

    for (let i = 1; i <= 2; i++) {
        let numericCell = row.insertCell(i);
        numericCell.setAttribute('contenteditable', 'true');
        numericCell.textContent = formatCurrencyDK(0);  // Initialize with formatted zero
        numericCell.style.color = 'gray';  // Placeholder color
    }
}
