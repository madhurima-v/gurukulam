/**
   * Preloader
   */
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var preloader = document.querySelector("#preloader");
    preloader.style.display = "none";
  }, 1000);
});

/**
   * Hamburger lines
   */

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


/**
   * Animation on Scroll
   */

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});