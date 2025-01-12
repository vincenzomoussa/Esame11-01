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
