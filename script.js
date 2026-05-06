// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // ---------- IMPORTANT ----------
  // REPLACE THIS URL with your actual GitHub Release APK link
  const APK_DOWNLOAD_URL = 'https://github.com/yourusername/arenaX/releases/download/v1.0/arenaX.apk';
  // ------------------------------
  
  const toast = document.getElementById('toast-msg');
  
  function showToast(message, isError = false) {
    if (!toast) return;
    toast.textContent = message || '⬇️ Download started — ArenaX APK';
    toast.style.borderLeftColor = isError ? '#ffa500' : '#FFD700';
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // actual download function
  function startDownload() {
    // you can also use window.location.href = APK_DOWNLOAD_URL;
    // but to give user feedback:
    showToast('📦 Starting download... check your browser');
    // small delay to allow toast to show, then trigger download
    setTimeout(() => {
      window.location.href = APK_DOWNLOAD_URL;
    }, 200);
  }

  // get both buttons (main hero button + bottom button)
  const mainBtn = document.getElementById('direct-apk-btn');
  const bottomBtn = document.getElementById('bottom-apk-btn');

  if (mainBtn) {
    mainBtn.addEventListener('click', (e) => {
      e.preventDefault();
      startDownload();
    });
  }
  if (bottomBtn) {
    bottomBtn.addEventListener('click', () => {
      startDownload();
    });
  }

  console.log('🔥 ArenaX APK landing | ready for mobile, tablet, PC');
  console.log(`APK URL configured: ${APK_DOWNLOAD_URL}`);
});
