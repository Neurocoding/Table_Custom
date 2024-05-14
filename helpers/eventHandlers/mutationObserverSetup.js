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
