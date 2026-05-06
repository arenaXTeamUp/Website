// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // get toast element
  const toast = document.getElementById('toast-msg');
  
  function showToast(message, isError = false) {
    if (!toast) return;
    toast.textContent = message || '✨ ArenaX — app download ready';
    toast.style.borderLeftColor = isError ? '#ffa500' : '#FFD700';
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // button handlers (demo / placeholder — you can replace with real store links)
  const googleBtn = document.getElementById('btn-google');
  const appleBtn = document.getElementById('btn-apple');
  const apkBtn = document.getElementById('btn-apk');
  const bottomBtn = document.getElementById('bottom-download');

  // For real production: change window.location or window.open
  // Example: googleBtn.href = "https://play.google.com/store/apps/details?id=com.arenax";
  // But for now we show a nice toast and prevent default (since separate demo)
  if (googleBtn) {
    googleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('📱 Google Play: ArenaX will be available soon. Stay tuned!');
    });
  }
  if (appleBtn) {
    appleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('🍎 App Store: Get notified when ArenaX launches on iOS.');
    });
  }
  if (apkBtn) {
    apkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('📦 Direct APK download — coming soon. For now, check official stores.');
    });
  }
  if (bottomBtn) {
    bottomBtn.addEventListener('click', () => {
      showToast('⚡ Download the ArenaX mobile app via Google Play or App Store.');
    });
  }

  // optional: add hover console greeting
  console.log('🔥 ArenaX landing | yellow/black theme | ready for mobile, tablet, PC');
});
