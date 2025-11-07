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

// Function carregar bolsas de estudo
async function carregarBolsas() {
    container.innerHTML = ""; 

    try {
        const querySnapshot = await getDocs(collection(db, "bolsas"));
        querySnapshot.forEach((doc) => {
            let data = doc.data();

            // Apenas exibe bolsas da seção correta
            if(data.seccao && data.seccao === "Procurar bolsas de estudo") {

                let div = document.createElement("div");
                div.classList.add("grid-item");

                div.innerHTML = `
                    <div class="card item-card">
                        <img src="${data.img}" alt="${data.title}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${data.title}</h5>
                            <p class="card-text">${data.text}</p>
                            <a href="${data.link}" target="_blank" class="btn btn-primary btn-sm w-100">Acessar Bolsa</a>
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

// Function carregar empregos
async function carregarEmpregos() {
    try {
        let jobList = document.querySelector(".job-list");
        jobList.innerHTML = ""; 

        const querySnapshot = await getDocs(collection(db, "empregos"));
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            let jobCard = document.createElement("div");
            jobCard.classList.add("job-card");
            jobCard.innerHTML = `
                <div class="job-title">${data.titulo}</div>
                <div class="job-info">
                    <i class="fas fa-tags"></i> ${data.categoria} <br>
                    <i class="fas fa-map-marker-alt"></i> ${data.localizacao}</div>
                <a href="${data.link}" class="job-link" target="_blank">Ver Oferta &rsaquo;</a>
            `;
            jobList.appendChild(jobCard);
        });
    } catch (error) {
        console.error("Erro ao carregar empregos: ", error);
    }
}

// Chamar as functions
carregarBolsas();
carregarEmpregos();