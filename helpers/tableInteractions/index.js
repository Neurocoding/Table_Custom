// Index.js for tableInteractions

// Import functions directly
import {
  addRowButton,
  addRowShortcut,
  removeRowButton,
  removeRowShortcut,
} from "./tableHandlers/index.js";

import {
  attachInputListeners,
  calculateAndUpdate,
  handleFocus,
  handleBlur,
  validateInput,
  resetToLastValid,
  formatAndDisplay,
} from "./cell_interactions/index.js";

import {
  handleKeyboardNavigation,
  navigateRows,
} from "./keyboardNavigation/index.js";

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
  navigateRows,
};
