

let lastRowId = 0;

export function addRowButton() {
    console.log('Adding row...');
    lastRowId++;
    const table = document.querySelector("#dataTable tbody");
    const newRow = table.insertRow();
    newRow.id = `row-${lastRowId}`;
    newRow.innerHTML = `
    <td contenteditable="true" style="color: gray;" data-last-valid="Ny Kategori">Ny Kategori</td>
    <td contenteditable="true" style="color: gray;" data-last-valid="0 kr.">0 kr.</td>
    <td contenteditable="true" style="color: gray;" data-last-valid="0 kr.">0 kr.</td>`;
    calculateTotals(); 
    console.log('Row added:', newRow);
}

export function addRowShortcut() {
    console.log('Adding row via shortcut...');
    const table = document.querySelector("#dataTable tbody");
    let activeRow = document.activeElement && document.activeElement.tagName === 'TD' ? document.activeElement.parentNode : null;
    let rowIndex = activeRow ? Array.from(table.rows).indexOf(activeRow) + 1 : table.rows.length;  // Insert after the current row or at the end

    lastRowId++;
    const newRow = table.insertRow(rowIndex);
    newRow.id = `row-${lastRowId}`;
    newRow.innerHTML = `
    <td contenteditable="true" style="color: gray;" data-last-valid="Ny Kategori">Ny Kategori</td>
    <td contenteditable="true" style="color: gray;" data-last-valid="0 kr.">0 kr.</td>
    <td contenteditable="true" style="color: gray;" data-last-valid="0 kr.">0 kr.</td>`;
    calculateTotals();
    console.log('Row added via shortcut:', newRow);
}

export function removeRowButton() {
    console.log('Removing row via button...');
    const table = document.querySelector("#dataTable tbody");
    if (table.rows.length > 0) {
        table.deleteRow(-1);
        calculateTotals();
        console.log('Row removed via button');
    } else {
        console.log('No rows left to remove.');
    }
}

export function removeRowShortcut() {
    console.log('Removing row via shortcut...');
    const table = document.querySelector("#dataTable tbody");
    let activeRow = document.activeElement && document.activeElement.tagName === 'TD' ? document.activeElement.parentNode : null;

    if (activeRow && table.rows.length > 0) {
        let rowIndex = Array.from(table.rows).indexOf(activeRow);
        if (rowIndex > -1) {
            table.deleteRow(rowIndex);
            calculateTotals();
            console.log('Row removed via shortcut');
            // Enhanced focus management
            if (table.rows.length > 0) {
                if (rowIndex < table.rows.length) {
                    // Focus the row that has taken the place of the removed row
                    table.rows[rowIndex].cells[0].focus();
                } else {
                    // Focus the new last row
                    table.rows[table.rows.length - 1].cells[0].focus();
                }
            } else {
                console.log('All rows have been removed.');
            }
        }
    } else {
        console.log('No valid row selected or no rows to remove.');
        alert("Cannot remove the selected row or no rows left to remove.");
    }
}
