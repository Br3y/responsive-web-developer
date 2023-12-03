const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
let mobile = document.querySelector(".mobile");
let h1 = document.querySelector(".nav__title");

function showMenu() {
  mobile.style.height = "100%";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  h1.style.visibility = "hidden";
}

function closeTheMenu() {
  mobile.style.height = "0%";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  h1.style.visibility = "visible";
}

openMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", closeTheMenu);
