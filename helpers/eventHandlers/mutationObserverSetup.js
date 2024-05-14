export function setupMutationObserver() {
    const targetNode = document.getElementById('TemplateContent');
    const config = { childList: true, subtree: true };

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {
                console.log('DOM tree changed.');
            }
        });
    });

    observer.observe(targetNode, config);
    console.log('MutationObserver initialized for TemplateContent');
}

// ----------------------------------------------------------------------
// export function setupMutationObserver() {
//     const targetNode = document.getElementById('TemplateContent');
//     const config = { childList: true, subtree: true };

//     const observer = new MutationObserver(handleMutations);

//     observer.observe(targetNode, config);
//     console.log('MutationObserver initialized for TemplateContent');
// }

// function handleMutations(mutations) {
//     mutations.forEach((mutation) => {
//         if (mutation.type === 'childList') {
//             mutation.addedNodes.forEach((node) => {
//                 console.log('Node added:', node);
//                 // Perform actions based on the added node
//             });

//             mutation.removedNodes.forEach((node) => {
//                 console.log('Node removed:', node);
//                 // Perform actions based on the removed node
//             });
//         }
//     });
// }

//------------------------------------------------------------------------------
// In this example, the handleMutations function is responsible for processing
// the observed mutations and performing the necessary actions based on the changes.
// This separation of concerns makes the code more modular and
// easier to maintain and extend.
//------------------------------------------------------------------------------
