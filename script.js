
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
  const isOpen = navbar.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

navbar.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navbar.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();
