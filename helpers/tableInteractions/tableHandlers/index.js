//index.js tableHandlers
import updateRowColors from "./updateRowColors.js";
import createRowContent from "./createRowContent.js";
import addRow from "./addRow.js";
import addRowButton from "./addRowButton.js";
import addRowShortcut from "./addRowShortcut.js";
import removeRowButton from "./removeRowButton.js";
import removeRowShortcut from "./removeRowShortcut.js";

/**
 * Table handlers module.
 */
export default function tableHandlers() {
  return {
    updateRowColors,
    createRowContent,
    addRow,
    addRowButton,
    addRowShortcut,
    removeRowButton,
    removeRowShortcut,
  };
}
