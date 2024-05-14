export function setupEventListeners() {
    const templateContent = document.getElementById('TemplateContent');
    console.log('Template Content initialized:', templateContent);

    templateContent.addEventListener('click', (event) => {
        const target = event.target;
        console.log('Click event on:', target.id);

        // Directly call functions since they will be globally available
        if (target.id === 'addRowButton') {
            console.log('Add Row button was clicked');
            addRowButton();  
        } else if (target.id === 'removeRowButton') {
            console.log('Remove Row button was clicked');
            removeRowButton();  
        }
    });

  document.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
    // Additional logic can be added here if needed
  });
}
