import attachInputListeners from "./attachInputListeners.js";
import calculateAndUpdate from "./calculateAndUpdate.js";
import handleFocus from "./handleFocus.js";
import handleBlur from "./handleBlur.js";
import validateInput from "./validateInput.js";
import resetToLastValid from "./resetToLastValid.js";
import formatAndDisplay from "./formatAndDisplay.js";

/**
 * Cell interactions module.
 */
export default function cellInteractions() {
  return {
    attachInputListeners,
    calculateAndUpdate,
    handleFocus,
    handleBlur,
    validateInput,
    resetToLastValid,
    formatAndDisplay,
  };
}
