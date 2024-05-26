// globalHelpers.js

// Import all functions from the main helpers index file
import * as Helpers from "./index.js";

// Attaching all exported functions to the global object (globalThis)
const assignedFunctions = [];
Object.entries(Helpers).forEach(([key, value], index) => {
  globalThis[key] = value;
  assignedFunctions.push({ index, key });
});

console.log("Global helpers setup completed.");
console.log("Assigned functions:", Object.keys(Helpers));
console.log("Assignment order:");
assignedFunctions
  .sort((a, b) => a.index - b.index)
  .forEach(({ key }) => {
    console.log(key);
  });
