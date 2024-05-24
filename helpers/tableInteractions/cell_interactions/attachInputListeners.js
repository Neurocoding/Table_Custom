import handleInput from "./handleInput.js";
import handleFocus from "./handleFocus.js";
import handleBlur from "./handleBlur.js";

/**
 * Attaches input listeners to the table body.
 */
export default function attachInputListeners() {
  const tableBody = document.querySelector("#dataTable tbody");

  tableBody.addEventListener("input", handleInput);
  tableBody.addEventListener("focus", handleFocus, true);
  tableBody.addEventListener("blur", handleBlur, true);
}
