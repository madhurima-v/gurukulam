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


/**
   * Faculty Section
   */
const pgtFaculty = document.getElementById('pgt-faculty')
const tgtFaculty = document.getElementById('tgt-faculty')
const prtFaculty = document.getElementById('prt-faculty')
const pgtBtn = document.getElementById('pgt-btn')
const tgtBtn = document.getElementById('tgt-btn')
const prtBtn = document.getElementById('prt-btn')

pgtFaculty.classList.add('show')
pgtBtn.classList.add('color')
tgtFaculty.classList.add('hide')
prtFaculty.classList.add('hide')

pgtBtn.addEventListener('click', () => {
  pgtBtn.classList.add('color')
  tgtBtn.classList.remove('color')
  prtBtn.classList.remove('color')
})

pgtBtn.addEventListener('click', () => {
pgtFaculty.classList.add('show')
pgtFaculty.classList.remove('hide')
tgtFaculty.classList.add('hide')
tgtFaculty.classList.remove('show')
prtFaculty.classList.add('hide')
prtFaculty.classList.remove('show')
})


tgtBtn.addEventListener('click', () => {
  tgtBtn.classList.add('color')
  pgtBtn.classList.remove('color')
  prtBtn.classList.remove('color')
})

tgtBtn.addEventListener('click', () => {
pgtFaculty.classList.remove('show')
pgtFaculty.classList.add('hide')
tgtFaculty.classList.add('show')
tgtFaculty.classList.remove('hide')
prtFaculty.classList.add('hide')
prtFaculty.classList.remove('show')
})

prtBtn.addEventListener('click', () => {
  prtBtn.classList.add('color')
  pgtBtn.classList.remove('color')
  tgtBtn.classList.remove('color')
})

prtBtn.addEventListener('click', () => {
  pgtFaculty.classList.remove('show')
  pgtFaculty.classList.add('hide')
  tgtFaculty.classList.remove('show')
  tgtFaculty.classList.add('hide')
  prtFaculty.classList.add('show')
  prtFaculty.classList.remove('hide')
})

/**
   * Student Section
   */

document.addEventListener("DOMContentLoaded", function() {
  var blocks = document.querySelectorAll('.class-block');
  var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              var countElement = entry.target.querySelector('.class-count');
              countElement.classList.add('zoom');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  blocks.forEach(function(block) {
      observer.observe(block);
  });
});