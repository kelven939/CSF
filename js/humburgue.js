/*Humburguer*/
const humburguer = window.document.querySelectorAll(".humburguer")[0]
const navMenu = window.document.querySelectorAll(".nav-menu")[0]

humburguer.addEventListener("click", ()=>{
	humburguer.classList.toggle("active");
	navMenu.classList.toggle("active");
})