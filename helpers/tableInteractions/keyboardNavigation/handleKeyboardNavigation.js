export default function handleKeyboardNavigation(event) {
  console.log(
    "Key pressed:",
    event.key,
    "Shift:",
    event.shiftKey,
    "Ctrl:",
    event.ctrlKey
  ); // Debug to show which key and modifiers are pressed

  // Allow normal navigation within the cell if Ctrl is pressed
  if (event.ctrlKey) return;

  if (event.shiftKey) {
    switch (event.key) {
      case "Enter":
        // Retain default behavior when Shift+Enter
        break;
      case "Delete":
        console.log("Shift+Delete pressed - Removing row");
        removeRowShortcut();
        event.preventDefault(); // Prevent default delete behavior
        break;
    }
  } else {
    switch (event.key) {
      case "Enter":
        navigateRows("right");
        event.preventDefault(); // Prevent default enter behavior
        break;
      case "Delete":
        if (
          document.activeElement &&
          document.activeElement.contentEditable === "true"
        ) {
          document.activeElement.textContent = "";
          console.log("Delete pressed - Clearing cell content");
        }
        break;
      case "ArrowUp":
        navigateRows("up");
        break;
      case "ArrowDown":
        navigateRows("down");
        break;
      case "ArrowLeft":
        navigateRows("left");
        break;
      case "ArrowRight":
        navigateRows("right");
        break;
      case "Insert":
        console.log("Insert key pressed - Adding row");
        addRowShortcut();
        break;
    }
  }
}
