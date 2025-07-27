   // Dados dos Cards
   const cardsData = [
    { img: "./images/estudante1.jpg", title: "Bolsa de Licenciatura", text: "Apoio acadêmico completo." },
    { img: "./images/estudante2.jpg", title: "Bolsa de Mestrado", text: "Financiamento para pesquisa." },
    { img: "./images/estudante3.jpeg", title: "Bolsa de Doutorado", text: "Suporte para doutorandos." },
    { img: "./images/estudantes4.jpg", title: "Intercâmbio Acadêmico", text: "Estude em outro país." },
    { img: "./images/estudantes4.jpg", title: "Formação Técnica", text: "Cursos técnicos profissionalizantes." },
    { img: "./images/estudante3.jpeg", title: "Educação Online", text: "Cursos e treinamentos virtuais." },
    { img: "./images/estudante2.jpg", title: "Bolsa para Mulheres", text: "Incentivo à educação feminina." },
    { img: "./images/estudante1.jpg", title: "Ciências Exatas", text: "Foco em engenharias e TI." },
];

// Configuração de Paginação
let currentPage = 1;
const cardsPerPage = 4;
const totalPages = Math.ceil(cardsData.length / cardsPerPage);

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

    // Atualizar botões de paginação
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderCards();
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderCards();
    }
});

// Inicializar
renderCards();