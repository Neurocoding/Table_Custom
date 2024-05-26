// script.js
import { setupMutationObserver } from "./helpers/eventHandlers/mutationObserverSetup.js";

document.addEventListener("DOMContentLoaded", async () => {
  console.log(
    "Document ready. Setting up event listeners and mutation observer."
  );

  try {
    // Dynamically import the helpers module
    const { utilities, eventHandlers, tableInteractions } = await import(
      "./helpers/index.js"
    );
    console.log("Utilities:", utilities);
    console.log("Event Handlers:", eventHandlers);
    console.log("Table Interactions:", tableInteractions);

    // Initialize the handlers
    tableInteractions.tableHandlers.addRowButton();
    tableInteractions.tableHandlers.removeRowButton();

    // Set up event listeners
    eventHandlers.setupEventListeners();

    // Define a callback function for the mutation observer
    function myCallback() {
      console.log("DOM mutation observed!");
      // Additional logic to handle the mutation can be added here
    }

    // Set up the mutation observer with the callback function
    eventHandlers.setupMutationObserver(myCallback);

    const templateContent = document.getElementById("TemplateContent");

    fetch("tableTemplate.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        templateContent.innerHTML = html;
        return html; // Pass the HTML along to ensure it's fully loaded
      });
  } catch (error) {
    console.error(
      "Error setting up event listeners and mutation observer:",
      error
    );
  }
});
