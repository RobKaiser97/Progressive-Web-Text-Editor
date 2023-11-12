const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  window.deferredPrompt = event;
});

butInstall.addEventListener('click', async () => {
  defferedPrompt.prompt();
  const { outcome } = await defferedPrompt.userChoice;
  if (outcome === 'accepted') {
    console.log('User accepted the A2HS prompt');
  } else {
    console.log('User dismissed the A2HS prompt');
  }
  window.deferredPrompt = null;
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed');
});
