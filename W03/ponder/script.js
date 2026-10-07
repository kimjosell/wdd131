let menuButton = document.querySelector(".menu-btn");
let menu = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuButton.classList.toggle("change");
});