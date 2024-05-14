let lastRowId = 0;

function updateRowColors() {
    const rows = document.querySelectorAll("#dataTable tbody tr");
    rows.forEach((row, index) => {
        row.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#F2F2F2';
    });
}

function createRowContent() {
    const cellStyle = "padding: 12px; text-align: left; vertical-align: middle; color: gray; border-right: 1px solid #ccc;";
    const valueCellStyle = "padding: 12px; text-align: right; vertical-align: middle; color: gray; border-right: 1px solid #ccc;";
    const lastCellStyle = "padding: 12px; text-align: right; vertical-align: middle; color: gray;";
    
    return `
    <td contenteditable="true" style="${cellStyle}" data-last-valid="Ny Kategori">Ny Kategori</td>
    <td contenteditable="true" style="${valueCellStyle}" data-last-valid="0 kr.">0 kr.</td>
    <td contenteditable="true" style="${lastCellStyle}" data-last-valid="0 kr.">0 kr.</td>`;
}

function addRow(table, index) {
    lastRowId++;
    const newRow = table.insertRow(index);
    newRow.id = `row-${lastRowId}`;
    newRow.style.color = '#2f353e';
    newRow.style.borderBottom = '1px solid #ccc';
    newRow.innerHTML = createRowContent();
    calculateTotals();
    updateRowColors();
    console.log('Row added:', newRow);
}

export function addRowButton() {
    console.log('Adding row...');
    const table = document.querySelector("#dataTable tbody");
    addRow(table, table.rows.length);
}

export function addRowShortcut() {
    console.log('Adding row via shortcut...');
    const table = document.querySelector("#dataTable tbody");
    let activeRow = document.activeElement && document.activeElement.tagName === 'TD' ? document.activeElement.parentNode : null;
    let rowIndex = activeRow ? Array.from(table.rows).indexOf(activeRow) + 1 : table.rows.length;  // Insert after the current row or at the end
    addRow(table, rowIndex);
}

export function removeRowButton() {
    console.log('Removing row via button...');
    const table = document.querySelector("#dataTable tbody");
    if (table.rows.length > 0) {
        table.deleteRow(-1);
        calculateTotals();
        updateRowColors();
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
            updateRowColors();
            console.log('Row removed via shortcut');

            // Enhanced focus management
            if (table.rows.length > 0) {
                if (rowIndex < table.rows.length) {
                    table.rows[rowIndex].cells[0].focus();
                } else {
                    table.rows[table.rows.length - 1].cells[0].focus();
                }
            } else {
                console.log('All rows have been removed.');
            }
        }
    } else {
        console.log('No valid row selected or no rows to remove.');
    }
}
