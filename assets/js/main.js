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



/**
   * Toggle Button
   */

function toggleMenu() {
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  } else {
    navbarCollapse.classList.add('show');
  }
}


