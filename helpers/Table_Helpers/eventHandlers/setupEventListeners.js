// setupEventListeners.js

import { setupMutationObserver } from "./mutationObserverSetup.js";
import { tableInteractions } from "../index.js";

/**
 * Callback function for MutationObserver to handle DOM changes.
 */
function onDomChange() {
  console.log("DOM has changed, setting up event listeners.");
  setupEventListeners();
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

  console.log("Event listeners setup complete.");
}

/**
 * Adds event listeners to the specified element.
 * @param {Element} element - The element to which event listeners will be added.
 */
function addEventListeners(element) {
  element.addEventListener("click", handleTemplateContentClick);
  element.addEventListener("input", handleInput);
  tableInteractions.cell_interactions.attachInputListeners();
  document.addEventListener(
    "keydown",
    tableInteractions.keyboardNavigation.handleKeyboardNavigation
  );
}

/**
 * Event handler configuration object.
 */
const eventHandlerConfig = {
  addRowButton: tableInteractions.tableHandlers.addRowButton,
  removeRowButton: tableInteractions.tableHandlers.removeRowButton,
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

/**
 * Handles input events on the template content.
 * @param {Event} event - The input event.
 */
function handleInput(event) {
  tableInteractions.cell_interactions.calculateAndUpdate(event);
}

// Initialize MutationObserver with the callback
setupMutationObserver(onDomChange);
