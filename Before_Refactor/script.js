import { addRowButton, removeRowButton } from './tableHandlers.js';
import { handleKeyboardNavigation } from './keyboardNavigation.js';
import { createInitialRow } from './initialRow.js';
import {formatCurrencyDK} from './FormatCurrencyDK.js';

function setupEventListeners() {
    const templateContent = document.getElementById('TemplateContent');
    console.log('Template Content:', templateContent);

    templateContent.addEventListener('click', function(event) {
        const target = event.target;
        console.log('Click event on:', target);

        if (target.id === 'addRowButton') {
            console.log('addRowButton clicked');
            addRowButton();
        } else if (target.id === 'removeRowButton') {
            console.log('removeRowButton clicked');
            removeRowButton();
        }
    });

    document.addEventListener('keydown', handleKeyboardNavigation);
    console.log('Keyboard navigation and event delegation setup.');
}

import { calculateTotals } from './domUtils.js';

document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                if (mutation.target.closest("#dataTable")) {
                    attachInputListeners();
                }
            }
        });
    });

    const config = { childList: true, subtree: true };
    const targetNode = document.getElementById('TemplateContent');
    observer.observe(targetNode, config);

    function attachInputListeners() {
        const editableCells = document.querySelectorAll("#dataTable tbody tr td[contenteditable='true']");
        console.log('Editable cells found:', editableCells.length);

        editableCells.forEach(cell => {
            cell.removeEventListener('input', () => calculateAndUpdate(cell));
            cell.removeEventListener('focus', handleFocus);
            cell.removeEventListener('blur', handleBlur);

            cell.addEventListener('input', () => calculateAndUpdate(cell));
            cell.addEventListener('focus', handleFocus);
            cell.addEventListener('blur', handleBlur);
        });
    }

    function calculateAndUpdate(cell) {
        console.log('Input event triggered, recalculating totals...');
        validateInput(cell);
        calculateTotals();
    }

    function handleFocus(event) {
        const cell = event.target;
        if (cell.textContent === 'Enter value' || cell.textContent === '0 kr.' || cell.textContent === 'Ny Kategori') {
            cell.textContent = '';
            cell.style.color = 'black';
        }
    }


    function validateInput(cell) {
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
    
    function formatAndDisplay(cell) {
        if (cell.cellIndex > 0 && cell.dataset.lastValid) {
            // Only format if there's a valid number saved.
            let formattedValue = formatCurrencyDK(parseFloat(cell.dataset.lastValid));
            cell.textContent = formattedValue;
        }
    }
    
    function resetToLastValid(cell) {
        if (cell.dataset.lastValid) {
            cell.textContent = cell.cellIndex === 0 ? cell.dataset.lastValid : formatCurrencyDK(parseFloat(cell.dataset.lastValid));
        } else {
            cell.textContent = cell.cellIndex === 0 ? 'Ny Kategori' : '0 kr.';
        }
        cell.style.color = 'red';
        setTimeout(() => cell.style.color = 'black', 1500);
    }
    
    function handleBlur(event) {
        const cell = event.target;
        if (cell.textContent.trim() === '') {
            if (cell.cellIndex === 0) {  // 'Kategori' column
                cell.textContent = 'Ny Kategori';
            } else {
                cell.textContent = '0 kr.'; // Set to zero for numeric columns
            }
            cell.style.color = 'gray'; // Placeholder color
            calculateAndUpdate(cell);  // Trigger recalculation when a cell is cleared
        } else {
            formatAndDisplay(cell);
        }
    }
    
    

    fetch('template.html')
        .then(response => response.text())
        .then(html => {
            targetNode.innerHTML = html;
            attachInputListeners();
            setupEventListeners();
            createInitialRow();
        })
        .catch(error => console.error('Failed to load template:', error));
});
