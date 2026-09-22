/* Shared UI utilities used across all pages */
function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

function toggleMobileMenu() {
  document.getElementById('mobileDrawer').classList.toggle('hidden');
}

function showToast(title, desc) {
  const toast = document.getElementById('toastNotification');
  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastDesc').textContent = desc;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 4000);
}
