

// Exporting the functions as named exports
export function attachInputListeners() {
    const tableBody = document.querySelector("#dataTable tbody");

    tableBody.addEventListener('input', handleInput);
    tableBody.addEventListener('focus', handleFocus, true);
    tableBody.addEventListener('blur', handleBlur, true);
}

function handleInput(event) {
    const cell = event.target;
    if (cell.contentEditable === 'true') {
        console.log('Input event triggered, recalculating totals...');
        validateInput(cell);
        debounceRecalculation();
    }
}


export function calculateAndUpdate(event) {
    const cell = event.target;
    console.log('Input event triggered, recalculating totals...');
    validateInput(cell);
    debounceRecalculation();
}



export function handleFocus(event) {
    const cell = event.target;
    if (cell.textContent === 'Enter value' || cell.textContent === '0 kr.' || cell.textContent === 'Ny Kategori') {
        cell.textContent = '';
        cell.style.color = 'black';
    }
}

let debounceTimeout;

function debounceRecalculation() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        calculateTotals();
    }, 300); // Adjust the delay as needed (in milliseconds)
}

export function handleBlur(event) {
    const cell = event.target;
    if (cell.textContent.trim() === '') {
        cell.textContent = cell.cellIndex === 0 ? 'Ny Kategori' : '0 kr.';
        cell.style.color = 'gray'; // Placeholder color
        debounceRecalculation();
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
