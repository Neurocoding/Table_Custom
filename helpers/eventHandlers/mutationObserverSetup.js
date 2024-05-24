/**
 * Sets up a MutationObserver to watch for changes in the DOM and execute a callback.
 *
//  * @param {Function} callback - The function to call when mutations are observed.
 */
export default function setupMutationObserver(callback) {
  const TARGET_NODE_ID = "TemplateContent"; // ID of the DOM element to observe
  const OBSERVER_CONFIG = { childList: true, subtree: true }; // Observer configuration

  const targetNode = document.getElementById(TARGET_NODE_ID); // Get the target DOM element

  // Check if the target element exists
  if (!targetNode) {
    console.error(`Target node with ID '${TARGET_NODE_ID}' not found.`);
    return;
  }

  // Check if the callback is a function
  if (typeof callback !== "function") {
    console.error("Provided callback is not a function");
    return;
  }

  // Create a new MutationObserver
  const observer = new MutationObserver((mutations, obs) => {
    let shouldInvokeCallback = false;

    // Iterate over mutations to check for added nodes
    for (const mutation of mutations) {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        console.log("DOM tree changed.");
        shouldInvokeCallback = true;
        break;
      }
    }

    // Invoke the callback if changes are detected
    if (shouldInvokeCallback) {
      callback();
      obs.disconnect(); // Disconnect the observer after the initial setup to prevent stacking
    }
  });

  // Start observing the target node with the given configuration
  observer.observe(targetNode, OBSERVER_CONFIG);
  console.log(
    `MutationObserver initialized for element with ID '${TARGET_NODE_ID}'`
  );
}
