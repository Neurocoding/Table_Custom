// Index.js for all helpers

// helpers/index.js

// Importing all functions from submodules
import {
    setupEventListeners,
    setupMutationObserver
} from './eventHandlers/index.js';

import {
    addRowButton,
    addRowShortcut,
    removeRowButton,
    removeRowShortcut,
    attachInputListeners,
    calculateAndUpdate,
    handleFocus,
    handleBlur,
    validateInput,
    resetToLastValid,
    formatAndDisplay,
    handleKeyboardNavigation,
    navigateRows
} from './tableInteractions/index.js';

import {
    formatCurrencyDK,
    calculateTotals,
    parseCurrency
} from './utilities/index.js';

// Re-export all functions individually
export {
    setupEventListeners,
    setupMutationObserver,
    addRowButton,
    addRowShortcut,
    removeRowButton,
    removeRowShortcut,
    attachInputListeners,
    calculateAndUpdate,
    handleFocus,
    handleBlur,
    validateInput,
    resetToLastValid,
    formatAndDisplay,
    handleKeyboardNavigation,
    navigateRows,
    formatCurrencyDK,
    calculateTotals,
    parseCurrency
};
