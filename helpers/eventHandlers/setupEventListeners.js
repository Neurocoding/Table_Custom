export function setupEventListeners() {
  const templateContent = document.getElementById('TemplateContent');
  console.log('Template Content:', templateContent);

  templateContent.addEventListener('click', function(event) {
      const target = event.target;
      console.log('Click event on:', target);

      if (target.id === 'addRowButton') {
          console.log('addRowButton clicked');
          addRowButton();
      } else if (target.id === 'removeRowButton') {
          console.log('removeRowButton clicked');
          removeRowButton();
      }
  });

  document.addEventListener('keydown', handleKeyboardNavigation);
  console.log('Keyboard navigation and event delegation setup.');
}

