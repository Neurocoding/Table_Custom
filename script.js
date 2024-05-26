document.addEventListener("DOMContentLoaded", async () => {
  console.log(
    "Document ready. Setting up event listeners and mutation observer."
  );

  try {
    // Dynamically import the helpers module
    const Helpers = await import("./helpers/index.js");

    // Initialize the handlers
    Helpers.addRowButton();
    Helpers.removeRowButton();

    // Set up event listeners
    Helpers.setupEventListeners();
    Helpers.setupMutationObserver();

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
        Helpers.attachInputListeners(); // Now attach listeners
      })
      .catch((error) => {
        console.error("Failed to load template:", error);
        templateContent.innerHTML = "<p>Error loading the content!</p>";
      });
  } catch (error) {
    console.error("Failed to load helpers:", error);
  }
});
