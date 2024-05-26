//script.js
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
    eventHandlers.setupMutationObserver();

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
        tableInteractions.cell_interactions.attachInputListeners(); // Now attach listeners
      })
      .catch((error) => {
        console.error("Failed to load template:", error);
        templateContent.innerHTML = "<p>Error loading the content!</p>";
      });
  } catch (error) {
    console.error("Failed to load helpers:", error);
  }
});
