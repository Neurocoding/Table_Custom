//  helpers/tableInteractions/keyboardNavigation/index.js

import handleKeyboardNavigation from "./handleKeyboardNavigation";
import navigateRows from "./navigateRows";

export default function keyboardNavigation() {
  return {
    handleKeyboardNavigation,
    navigateRows,
  };
}
