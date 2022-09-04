// Mobile hamburger menu
const hamburgerMenu = document.querySelector(".hamburger");
const hamburgerMenuDropdown = document.querySelector(".dropdown");

hamburgerMenu.addEventListener("click", function () {
  this.classList.toggle("is-active");
  hamburgerMenuDropdown.classList.toggle("is-active");
});

//==================================================
