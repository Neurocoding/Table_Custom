// Index.js for tableInteractions

// Import functions directly
import {
    addRowButton,
    addRowShortcut,
    removeRowButton,
    removeRowShortcut
} from './tableHandlers.js';

import {
    attachInputListeners,
    calculateAndUpdate,
    handleFocus,
    handleBlur,
    validateInput,
    resetToLastValid,
    formatAndDisplay
} from './cellInteractions.js';

import { 
    handleKeyboardNavigation,
    navigateRows
 } from './keyboardNavigation.js';

// Export all functions individually
export {
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
};
