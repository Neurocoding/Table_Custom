document.addEventListener("DOMContentLoaded", async () => {
  console.log(
    "Document ready. Setting up event listeners and mutation observer."
  );

  try {
    // Dynamically import the helpers module
    const { utilities, eventHandlers, tableInteractions } = await import(
      "./helpers/index.js"
    );
    console.log(
      "Successfully imported utilities, event handlers, and table interactions."
    );
    console.log("Utilities:", utilities);
    console.log("Event Handlers:", eventHandlers);
    console.log("Table Interactions:", tableInteractions);

    // Initialize the handlers
    initializeTableHandlers(tableInteractions.tableHandlers);

    // Set up the mutation observer with the callback function
    eventHandlers.setupMutationObserver(onDomMutation);

    // Load the template content
    await loadTemplateContent();

    // Set up event listeners after the template content is loaded
    eventHandlers.setupEventListeners();
  } catch (error) {
    console.error("Error during initialization:", error);
  }
});

function initializeTableHandlers(tableHandlers) {
  tableHandlers.addRowButton();
  tableHandlers.removeRowButton();
}

function onDomMutation() {
  console.log("DOM mutation observed!");
  // Additional logic to handle the mutation can be added here
}

async function loadTemplateContent() {
  const templateContent = document.getElementById("TemplateContent");
  if (!templateContent) {
    throw new Error("Element with ID 'TemplateContent' not found.");
  }

  try {
    const response = await fetch("tableTemplate.html");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    templateContent.innerHTML = html;
  } catch (error) {
    console.error("Error fetching table template:", error);
  }
}
