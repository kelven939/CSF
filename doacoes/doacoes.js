function copyText(text) {
    navigator.clipboard.writeText(text).then(() => alert("Número copiado: " + text));
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

  generateQR('mpesaInner', '258841441993');
  generateQR('emolaInner', '258864214697');
  generateQR('bankInner', '000123456789');
  generateQR('pixInner', 'doacoes@ifg.org');
  generateQR('paypalInner', 'https://paypal.me/institutoglobal');
  generateQR('westernInner', '+258841441993');

  // Abas
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