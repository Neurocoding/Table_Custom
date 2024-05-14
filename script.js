// will use globalThis to access the helpers

document.addEventListener('DOMContentLoaded', () => {
    // Initialize event handlers and mutation observers as soon as the document is ready
    setupEventListeners();
    setupMutationObserver();

    const templateContent = document.getElementById('TemplateContent');
    
    // Fetching the external HTML template
    fetch('template.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            // Injecting the fetched HTML into the designated container
            templateContent.innerHTML = html;

            // Ensuring that initializations that depend on the template are handled after it is loaded
            attachInputListeners();
            createInitialRow();
        })
        .catch(error => {
            // Handling any errors during fetch or HTML insertion and providing feedback
            console.error('Failed to load template:', error);
            templateContent.innerHTML = '<p>Error loading the content!</p>';
        });
});