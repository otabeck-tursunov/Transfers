const country_menu_btn = document.querySelector(".country-menu-btn");
const navbar_menu_btn = document.querySelector(".navbar-menu-btn");
const country_menu = document.querySelector(".country-menu");
const navbar_menu = document.querySelector(".navbar-menu");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const line4 = document.querySelector(".line4");
const line5 = document.querySelector(".line5");
const line6 = document.querySelector(".line6");
country_menu_btn.addEventListener("click", () => {
  country_menu.classList.toggle("active");
  navbar_menu.classList.remove("active");
  line1.classList.toggle("line11");
  line2.classList.toggle("line22");
  line3.classList.toggle("line33");
  line4.classList.remove("line11");
  line5.classList.remove("line22");
  line6.classList.remove("line33");
});
navbar_menu_btn.addEventListener("click", () => {
  navbar_menu.classList.toggle("active");
  country_menu.classList.remove("active");
  line1.classList.remove("line11");
  line2.classList.remove("line22");
  line3.classList.remove("line33");
  line4.classList.toggle("line11");
  line5.classList.toggle("line22");
  line6.classList.toggle("line33");
});