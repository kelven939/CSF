function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copiado com sucesso: ${text}`, 'success');
  }).catch(() => {
    showToast('Erro ao copiar. Tente novamente.', 'error');
  });
}

function showToast(message, type) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => {
    toast.className = 'toast';
  }, 3000);
}

function generateQR(innerId, text) {
  const container = document.getElementById(innerId);
  container.innerHTML = '';
  new QRCode(container, {
    text: text,
    width: 140,
    height: 140,
    colorDark : "#004080",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}

generateQR('mpesaInner', '848510103');
generateQR('emolaInner', '878530103');
// generateQR('bankInner', '000123456789');
generateQR('pixInner', 'equipe.institutoifg@gmail.com');
generateQR('paypalInner', 'https://paypal.me/institutoglobal');
generateQR('westernInner', '+5516993307422');

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// Modal
const modal = document.getElementById("solidarityModal");
const openModalBtn = document.getElementById("openModal");
const closeModal = modal.querySelector(".close");

// Abrir modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Fechar modal ao clicar no X
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar modal ao clicar fora da caixa
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});