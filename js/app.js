const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("header-nav-container");
const overlay = document.getElementById("overlay");
const intro = document.getElementById("intro");
const navLinks = document.querySelectorAll(".header-nav-links");

const hamburgerEvent = () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
  overlay.classList.toggle("active");
  intro.classList.toggle("active");
};

hamburger.addEventListener("click", (e) => {
  hamburgerEvent();
});
