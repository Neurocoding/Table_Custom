# Table_Custom

Dynamic Table with Totals
This repository contains a custom implementation of a dynamic table with the ability to add, remove, and edit rows. The table automatically calculates and updates the total values in the footer based on the data entered in the cells.

## Features

- Add and remove rows using buttons or keyboard shortcuts
- Edit cell values directly in the table
- Keyboard navigation for easy cell and row traversal
- Automatic calculation and update of total values
- Input validation and formatting for numeric cells
- Placeholder management for empty cells
- Modular and reusable code structure

## Getting Started

To use the dynamic table in your project, follow these steps:

1. Clone the repository:

   git clone https://github.com/your-username/dynamic-table.git

2. Open the `index.html` file in your web browser.

3. Start interacting with the table:
   - Click on cells to edit their values
   - Use the "Add Row" and "Remove Row" buttons to manipulate rows
   - Navigate through cells and rows using arrow keys
   - Use the "Insert" key to add a new row and "Shift+Delete" to remove the current row

## File Structure

- `index.html`: The main HTML file that loads the necessary CSS and JavaScript files.
- `style.css`: The CSS file that defines the styles for the table and buttons.
- `script.js`: The main JavaScript file that sets up event listeners, fetches the table template, and initializes the table.
- `tableTemplate.html`: The HTML template file that defines the structure of the table.
- `helpers/`: Directory containing helper functions used in the table implementation.
- `eventHandlers/`: Functions for setting up event listeners and mutation observers.
- `tableInteractions/`: Functions for handling table-related actions.
- `utilities/`: Utility functions for formatting, calculation, and parsing.

## Dependencies

The dynamic table implementation does not rely on any external libraries or frameworks. It is built using pure JavaScript, HTML, and CSS.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

Feel free to customize the README file based on your specific requirements and add any additional sections or information that you think would be helpful for users of your dynamic table implementation.
