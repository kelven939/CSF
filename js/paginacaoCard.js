import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const container = document.querySelector("#Sectionbolsa .grid-container");

async function carregarBolsas() {
  if (!window.db) {
    setTimeout(carregarBolsas, 100);
    return;
  }

  container.innerHTML = "";

  try {
    const querySnapshot = await getDocs(collection(window.db, "bolsas"));
    querySnapshot.forEach((docu) => {
      const data = docu.data();

      if (!data.seccao || data.seccao === "Procurar bolsas de estudo") {
        const div = document.createElement("div");
        div.classList.add("grid-item");

        div.innerHTML = `
          <div class="card item-card">
            <img src="${data.img || 'https://via.placeholder.com/300x150'}" alt="${data.title || 'Bolsa'}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${data.title || 'Sem título'}</h5>
              <p class="card-text">${data.text || 'Sem descrição'}</p>
              <a href="${data.link || '#'}" target="_blank" class="btn btn-primary btn-sm w-100 btnlink">
                <i class="fas fa-external-link-alt"></i> Acessar Bolsa
              </a>
            </div>
          </div>
        `;

        container.appendChild(div);
      }
    });
  } catch (error) {
    console.error("Erro ao carregar bolsas: ", error);
  }
}

carregarBolsas();