document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-lista-espera");

  form.querySelectorAll("input, button").forEach(el => {
    el.disabled = true;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-lista-espera");

  form.querySelectorAll("input").forEach(el => el.disabled = true);

  const btn = form.querySelector("button");
  btn.disabled = true;
  btn.innerText = "Agendamento fechado";
});

document.querySelectorAll('.faq-question').forEach(item => {
	item.addEventListener('click', () => {
		const parent = item.parentElement;
		parent.classList.toggle('active');
	});
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
hamburger.addEventListener("click", () => nav.classList.toggle("active"));
/*========================================================================*/
let header = window.document.querySelectorAll(".navBar")[0]
window.addEventListener("scroll", ()=>{
	if(window.scrollY>50 && header.classList.contains("navBar")){
		header.classList.remove("navBar")
		header.classList.add("min")

		console.log(`(window.scrollY`)
	}else if(window.scrollY==0 && header.classList.contains("min")){
		header.classList.remove("min")
		header.classList.add("navBar")
		console.log(`(window.scrollY`)
	}
})

function updateYear() {
	let yearCorrent = document.querySelector(".yearCorrent");
	let date = new Date();
	let year = date.getFullYear();
	yearCorrent.innerHTML = year;
}
updateYear();
/*========================================================================*/
$(document).ready(function(){
	function updateHeaderColor() {
		var windowHeight = $(window).height();
		var scrollPosition = $(window).scrollTop();
		$('section').each(function(){
			var sectionTop = $(this).offset().top;
			var sectionBottom = sectionTop + $(this).height();

			if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
				var sectionId = $(this).attr('id');
				$('.nav-menu a').removeClass('active');
				$('.nav-menu a[href="#' + sectionId + '"]').addClass('active');
			}
		});
	}
	updateHeaderColor();
	$(window).scroll(updateHeaderColor);
});

/* ---------------------------------------------------------------------- */

// Inicializar Firebase
const db = getFirestore(app);
let container = document.querySelector("#Sectionbolsa .grid-container");

//carregar bolsas de estudo
async function carregarBolsas() {
  const container = document.querySelector("#Sectionbolsa .grid-container");
  container.innerHTML = "";

  try {
    const querySnapshot = await getDocs(collection(db, "bolsas"));
    console.log("Total de bolsas:", querySnapshot.size);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log("Bolsa carregada:", data);

      if (!data.seccao || data.seccao === "Procurar bolsas de estudo") {
        const card = document.createElement("div");
        card.classList.add("grid-item");

        card.innerHTML = `
          <div class="card item-card">
            <img src="${data.img || 'img/padrao.jpg'}" alt="${data.title || 'Bolsa de estudo'}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${data.title || 'Título não informado'}</h5>
              <p class="card-text">${data.text || 'Descrição não disponível.'}</p>

              <a href="${data.link || '#'}" target="_blank" class="btn-acessar-bolsa btnlink">
                <i class="fas fa-external-link-alt"></i> Acessar Bolsa
              </a>
            </div>
          </div>
        `;

        container.appendChild(card);
      }
    });

  } catch (error) {
    console.error("Erro ao carregar bolsas: ", error);
    container.innerHTML = "<p style='color:white;text-align:center;'>Erro ao carregar bolsas.</p>";
  }
}

// Function carregar empregos
/*async function carregarEmpregos() {
    try {
        let jobList = document.querySelector(".job-list");
        jobList.innerHTML = ""; 

        const querySnapshot = await getDocs(collection(db, "empregos"));

        if (querySnapshot.empty) {
            jobList.innerHTML = "<p style='color:white; text-align:center;'>Nenhum emprego disponível no momento.</p>";
            return;
        }

        querySnapshot.forEach((doc) => {
            let data = doc.data();
            console.log("Documento encontrado: ", data);

            let titulo = data.titulo || "Sem título";
            let categoria = data.categoria || "Sem categoria";
            let localizacao = data.localizacao || "Sem localização";
            let link = data.link || "#";

            let jobCard = document.createElement("div");
            jobCard.classList.add("job-card");
            jobCard.innerHTML = `
                <div class="job-title">${titulo}</div>
                <div class="job-info">
                    <i class="fas fa-tags"></i> ${categoria} <br>
                    <i class="fas fa-map-marker-alt"></i> ${localizacao}
                </div>
                <a href="${link}" class="job-link" target="_blank">Ver Oferta &rsaquo;</a>
            `;
            jobList.appendChild(jobCard);
        });

    } catch (error) {
        console.error("Erro ao carregar empregos:", error);
    }
}*/

// Chamar as functions
carregarBolsas();
carregarEmpregos();