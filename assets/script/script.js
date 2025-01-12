/* Evento per aggiungere una classa alla navbar allo scroll. */

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("barra");
  var getStart = document.getElementById("getStart");
  if (window.scrollY > 410) {
    navbar.classList.add("scrolled");
    getStart.classList.add("getStartedChange");
  } else {
    navbar.classList.remove("scrolled");
    getStart.classList.remove("getStartedChange");
  }
});

/* Funzione per illuminare le "emme" nell'html. */

let emme = document.querySelector("svg");

let gruppoEmme = [...emme.querySelectorAll('g[opacity="1"]')];

function randomOpacity() {
  let index = Math.floor(Math.random() * gruppoEmme.length + 1);
  let gruppo = gruppoEmme[index];

  gruppo.setAttribute("opacity", 0);
  setTimeout(() => {
    gruppo.setAttribute("opacity", 1);
  }, 1500);
}
setInterval(randomOpacity, 100);
