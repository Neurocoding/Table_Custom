// setupEventListeners.js

import {
  keyboardNavigation,
  tableHandlers,
} from "../tableInteractions/index.js";
import { setupMutationObserver } from "./mutationObserverSetup.js";
import { calculateTotals } from "../utilities/calculateTotals.js";

/**
 * Callback function for MutationObserver to handle DOM changes.
 */
function onDomChange() {
  console.log("DOM has changed, setting up event listeners.");
  setupEventListeners(); // Re-setup event listeners if needed
  calculateTotals(); // Recalculate totals after DOM changes
}

/**
 * Debounce function to limit the rate at which a function can fire.
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to wait.
 * @param {boolean} immediate - Whether to trigger the function on the leading edge.
 * @returns {Function} - The debounced function.
 */
function debounce(func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/**
 * Sets up event listeners for various interactions.
 */
export function setupEventListeners() {
  const templateContent = document.getElementById("TemplateContent");

  if (!templateContent) {
    console.error("TemplateContent element not found.");
    return;
  }

  console.log("Template Content:", templateContent);

  // Add event listeners
  addEventListeners(templateContent);

  console.log("Keyboard navigation and event delegation setup.");
}

/**
 * Adds event listeners to the specified element.
 * @param {Element} element - The element to which event listeners will be added.
 */
function addEventListeners(element) {
  element.addEventListener("click", handleTemplateContentClick);
  document.addEventListener(
    "keydown",
    keyboardNavigation.handleKeyboardNavigation
  );
  element.addEventListener("input", calculateTotals);
}

/**
 * Removes event listeners from the specified element.
 * @param {Element} element - The element from which event listeners will be removed.
 */
function removeEventListeners(element) {
  element.removeEventListener("click", handleTemplateContentClick);
  document.removeEventListener(
    "keydown",
    keyboardNavigation.handleKeyboardNavigation
  );
  // Note: Do not remove input event listener for table calculations to ensure it remains functional
}

/**
 * Event handler configuration object.
 */
const eventHandlerConfig = {
  addRowButton: tableHandlers.addRowButton,
  removeRowButton: tableHandlers.removeRowButton,
};

/**
 * Handles click events on the template content.
 * @param {Event} event - The click event.
 */
function handleTemplateContentClick(event) {
  const target = event.target;
  console.log("Click event on:", target);

  const handler = eventHandlerConfig[target.id];
  if (handler) {
    console.log(`${target.id} clicked`);
    handler();
  } else {
    console.warn("Unhandled click event on:", target);
  }
}

// Initialize MutationObserver with the callback
setupMutationObserver(onDomChange);
