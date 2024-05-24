import {
  setupEventListeners,
  setupMutationObserver,
  tableHandlers,
  cellinteractions,
} from "./helpers/index.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "Document ready. Setting up event listeners and mutation observer."
  );

  // Initialize the handlers
  const tableInstance = tableHandlers();
  const cellInstance = cellinteractions();

  // Set up event listeners
  setupEventListeners();
  setupMutationObserver();

  const templateContent = document.getElementById("TemplateContent");

  fetch("template.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      templateContent.innerHTML = html;
      return html; // Pass the HTML along to ensure it's fully loaded
    })
    .then(() => {
      cellInstance.attachInputListeners(); // Now attach listeners
    })
    .catch((error) => {
      console.error("Failed to load template:", error);
      templateContent.innerHTML = "<p>Error loading the content!</p>";
    });
});
