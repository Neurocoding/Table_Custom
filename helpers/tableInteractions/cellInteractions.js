

// Exporting the functions as named exports
export function attachInputListeners() {
    const editableCells = document.querySelectorAll("#dataTable tbody tr td[contenteditable='true']");
    console.log('Editable cells found:', editableCells.length);

    editableCells.forEach(cell => {
        cell.removeEventListener('input', calculateAndUpdate);
        cell.removeEventListener('focus', handleFocus);
        cell.removeEventListener('blur', handleBlur);

        cell.addEventListener('input', calculateAndUpdate);
        cell.addEventListener('focus', handleFocus);
        cell.addEventListener('blur', handleBlur);
    });
}

export function calculateAndUpdate(event) {
    const cell = event.target;
    console.log('Input event triggered, recalculating totals...');
    validateInput(cell);
    calculateTotals();
}

export function handleFocus(event) {
    const cell = event.target;
    if (cell.textContent === 'Enter value' || cell.textContent === '0 kr.' || cell.textContent === 'Ny Kategori') {
        cell.textContent = '';
        cell.style.color = 'black';
    }
}

export function handleBlur(event) {
    const cell = event.target;
    if (cell.textContent.trim() === '') {
        cell.textContent = cell.cellIndex === 0 ? 'Ny Kategori' : '0 kr.';
        cell.style.color = 'gray'; // Placeholder color
        calculateAndUpdate(event);  // Trigger recalculation when a cell is cleared
    } else {
        formatAndDisplay(cell);
    }
}

export function validateInput(cell) {
    if (cell.cellIndex === 0) {
        // For 'Kategori' column, simply manage placeholders.
        cell.dataset.lastValid = cell.textContent.trim() || "Ny Kategori";
    } else {
        // Attempt to clean the input and convert it to a number.
        let cleanedInput = cell.textContent.replace(/[^0-9,.-]/g, '').trim();
        cleanedInput = cleanedInput.replace(/,/g, '.'); // Handle comma as decimal point.
        let numericValue = parseFloat(cleanedInput);

        if (isNaN(numericValue)) {
            console.error("Invalid number input, resetting to last valid or placeholder");
            resetToLastValid(cell);
        } else {
            // Store raw number in dataset for potential re-use.
            cell.dataset.lastValid = numericValue.toString();
        }
    }
}

export function resetToLastValid(cell) {
    if (cell.dataset.lastValid) {
        cell.textContent = cell.cellIndex === 0 ? cell.dataset.lastValid : '0 kr.';
        cell.style.color = 'red';
        setTimeout(() => cell.style.color = 'black', 1500);
    }
}

export function formatAndDisplay(cell) {
    if (cell.cellIndex > 0 && cell.dataset.lastValid) {
        let formattedValue = formatCurrencyDK(parseFloat(cell.dataset.lastValid));
        cell.textContent = formattedValue;
    }
}
