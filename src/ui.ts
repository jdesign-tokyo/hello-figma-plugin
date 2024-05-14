const greetButton = document.getElementById('greet-button') as HTMLButtonElement;

if (greetButton) {
  greetButton.addEventListener('click', () => {
    parent.postMessage({ pluginMessage: { type: 'greet' } }, '*');
  });
} else {
  console.error('greet-button element not found');
}