// Mostrar u ocultar secciones
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSectionId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);
  
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });
  

