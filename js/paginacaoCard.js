let cardsData = [];
let currentPage = 1;
const cardsPerPage = 4;

async function fetchCards() {
  const snapshot = await db.collection("bolsas").get();
  cardsData = snapshot.docs.map(doc => doc.data());
  renderCards();
}

function renderCards() {
  const cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = "";

  const start = (currentPage - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const paginatedCards = cardsData.slice(start, end);

  paginatedCards.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("custom-card");
    cardElement.innerHTML = `
      <img src="${card.img}" alt="${card.title}" loading="lazy">
      <div class="custom-card-body">
        <h5 class="custom-card-title">${card.title}</h5>
        <p class="custom-card-text">${card.text}</p>
      </div>
    `;
    cardContainer.appendChild(cardElement);
  });

  document.getElementById('prevPage').disabled = currentPage === 1;
  document.getElementById('nextPage').disabled = currentPage === Math.ceil(cardsData.length / cardsPerPage);
}

document.getElementById('prevPage').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderCards();
  }
});

document.getElementById('nextPage').addEventListener('click', () => {
  if (currentPage < Math.ceil(cardsData.length / cardsPerPage)) {
    currentPage++;
    renderCards();
  }
});

// Inicializar pegando do Firestore
fetchCards();

document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('click', () => {
    const area = item.getAttribute('data-area');
    window.location.href = `bolsas.html?area=${area}`;
  });
});