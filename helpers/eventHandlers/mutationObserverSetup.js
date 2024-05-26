// mutationObserverSetup.js

/**
 * Sets up a MutationObserver to watch for changes in the DOM and execute a callback.
 *
 * @param {function} callback - The function to call when mutations are observed.
 */
export function setupMutationObserver(callback) {
  const TARGET_NODE_ID = "TemplateContent"; // ID of the DOM element to observe
  const OBSERVER_CONFIG = { childList: true, subtree: true }; // Observer configuration

  const targetNode = document.getElementById(TARGET_NODE_ID); // Get the target DOM element

  if (!targetNode) {
    console.error(`Target node with ID '${TARGET_NODE_ID}' not found.`);
    return;
  }

  const observer = new MutationObserver((mutations) => {
    const shouldInvokeCallback = mutations.some(
      (mutation) =>
        mutation.type === "childList" && mutation.addedNodes.length > 0
    );

    if (shouldInvokeCallback) {
      callback();
    }
  });

  observer.observe(targetNode, OBSERVER_CONFIG);
  console.log(
    `MutationObserver initialized for element with ID '${TARGET_NODE_ID}'`
  );
}
