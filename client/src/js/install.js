const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Update UI notify the user they can install the PWA
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', () => {
  // Show the prompt if deferredPrompt is stored
  if (window.deferredPrompt) {
    window.deferredPrompt.prompt();
    window.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      window.deferredPrompt = null;
      butInstall.style.display = 'none';
    });
  } else {
    // The user hit the install button but the app can't prompt to install (likely already installed)
    alert('The app is already installed or not available for install.');
  }
});

window.addEventListener('appinstalled', (event) => {
  // Log the installation to analytics or console
  console.log('PWA was installed', event);
  // Hide the install button after the app is installed
  butInstall.style.display = 'none';
  // Clear any stored deferredPrompt since the app was installed
  window.deferredPrompt = null;
});

// On load, or when the 'load' event fires, check if the PWA is already installed.
window.addEventListener('load', () => {
  butInstall.style.display = 'block'; // Always show the install button until app is installed
});
