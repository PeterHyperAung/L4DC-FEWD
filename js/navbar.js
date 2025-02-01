const navbarMenuToggleEl = document.getElementById("navbar-menu-toggle");
const navbarLinksEL = document.getElementById("nav-links");

navbarMenuToggleEl.addEventListener("click", function (e) {
  navbarLinksEL.classList.toggle("nav-links-h-100");
});
