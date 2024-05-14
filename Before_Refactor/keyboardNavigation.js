// Importing necessary functions from tableHandlers.js
import { addRowButton, addRowShortcut, removeRowShortcut } from './tableHandlers.js';

export function handleKeyboardNavigation(event) {
    console.log('Key pressed:', event.key, 'Shift:', event.shiftKey, 'Ctrl:', event.ctrlKey);  // Debug to show which key and modifiers are pressed

    // Allow normal navigation within the cell if Ctrl is pressed
    if (event.ctrlKey) return;

    if (event.shiftKey) {
        switch (event.key) {
            case 'Enter':
                // Retain default behavior when Shift+Enter
                break;
            case 'Delete':
                console.log('Shift+Delete pressed - Removing row');
                removeRowShortcut();
                event.preventDefault(); // Prevent default delete behavior
                break;
        }
    } else {
        switch (event.key) {
            case 'Enter':
                navigateRows('right');
                event.preventDefault(); // Prevent default enter behavior
                break;
            case 'Delete':
                if (document.activeElement && document.activeElement.contentEditable === 'true') {
                    document.activeElement.textContent = '';
                    console.log('Delete pressed - Clearing cell content');
                }
                break;
            case 'ArrowUp':
                navigateRows('up');
                break;
            case 'ArrowDown':
                navigateRows('down');
                break;
            case 'ArrowLeft':
                navigateRows('left');
                break;
            case 'ArrowRight':
                navigateRows('right');
                break;
            case 'Insert':
                console.log('Insert key pressed - Adding row');
                addRowShortcut();
                break;
        }
    }
}

function navigateRows(direction) {
    let activeElement = document.activeElement;
    if (!activeElement || !activeElement.parentNode || !activeElement.parentNode.parentNode) return;  // Exit if no element is currently focused or if structure is unexpected

    let rows = activeElement.parentNode.parentNode.children;
    let rowIndex = Array.from(rows).indexOf(activeElement.parentNode);
    let columns = activeElement.parentNode.children;
    let columnIndex = Array.from(columns).indexOf(activeElement);

    switch (direction) {
        case 'up':
            if (rowIndex > 0) {
                columns[columnIndex].parentNode.previousElementSibling.children[columnIndex].focus();
            }
            break;
        case 'down':
            if (rowIndex < rows.length - 1) {
                columns[columnIndex].parentNode.nextElementSibling.children[columnIndex].focus();
            }
            break;
        case 'left':
            if (columnIndex > 0) {
                activeElement.previousElementSibling.focus();
            } else if (rowIndex > 0) {  // Wrap to the last cell of the previous row
                rows[rowIndex - 1].children[columns.length - 1].focus();
            }
            break;
        case 'right':
            if (columnIndex < columns.length - 1) {
                activeElement.nextElementSibling.focus();
            } else if (rowIndex < rows.length - 1) {  // Wrap to the first cell of the next row
                rows[rowIndex + 1].children[0].focus();
            }
            break;
    }
}
