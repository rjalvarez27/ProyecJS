const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const btn_Modal = document.getElementById("btn")
const correo = document.getElementById("correo")
const password = document.getElementById("password")
const alerta = document.getElementById("alerta");
// ---------------- Desplegar menu --------------


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

//--------- Mode:Dark-----------------------------------

function darkMode(){
    let main_body=document.body;
    main_body.classList.toggle("darkMode");
}
//-------------- Carga de Modal -----------------------
// Modal Recarga de pagina
(function(){
    $(function(){
        $('#modelBox').modal()
    });
}());
// Boton cerrar Modal
function closeModel(){
    modelBox.style.display = "none";
};
//Pase de Batalla

const btn_ventana = document.getElementById("btn-ventana")

btn_ventana.addEventListener('click', ()=> {
    modelBox.style.display = "block"
} )

//---------------------------carrucel------------------------

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    
  let i = '';
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

