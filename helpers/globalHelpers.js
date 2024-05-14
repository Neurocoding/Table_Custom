// globalHelpers.js

// Import all functions from the main helpers index file
import * as Helpers from './index.js';  

// Attaching all exported functions to the global object (globalThis)
Object.assign(globalThis, Helpers);

console.log('Global helpers setup completed.');
