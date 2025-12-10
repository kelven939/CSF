// QR Codes
new QRCode(document.getElementById("qrMpesa"),{text:"848510103",width:130,height:130});
new QRCode(document.getElementById("qrEmola"),{text:"878530103",width:130,height:130});
new QRCode(document.getElementById("qrPix"),{text:"equipe.institutoifg@gmail.com",width:130,height:130});
new QRCode(document.getElementById("qrWestern"),{text:"+5516993307422",width:130,height:130});

document.querySelectorAll('.btn-copy').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const text = btn.getAttribute('data-text');
    navigator.clipboard.writeText(text);
    var modal = new bootstrap.Modal(document.getElementById('modalDoacao'));
    modal.show();
  });
});

// Voluntário
function enviarVoluntario(e){e.preventDefault();showToast("Candidatura enviada com sucesso!");e.target.reset();}

// Fade-in Cards
const cards = document.querySelectorAll('.card, .fade-in, .hero .content');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('show'); }
  });
},{threshold:0.2});
cards.forEach(c=>observer.observe(c));

function abrirLightbox(imagem, titulo, texto) {
  document.getElementById("lightbox-img").src = imagem;
  document.getElementById("lightbox-titulo").innerText = titulo;
  document.getElementById("lightbox-texto").innerText = texto;

  document.getElementById("lightbox").classList.add("active");
}

function fecharLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}