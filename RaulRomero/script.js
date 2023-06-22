// Mostrar u ocultar secciones
// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('nav ul li a');
  
//     navLinks.forEach(function(link) {
//       link.addEventListener('click', function(event) {
//         event.preventDefault();
//         const targetSectionId = link.getAttribute('href').substring(1);
//         const targetSection = document.getElementById(targetSectionId);
  
//         window.scrollTo({
//           top: targetSection.offsetTop,
//           behavior: 'smooth'
//         });
//       });
//     });
//   });
  

// codigo para el MENU

var posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function() {esconderMostrarMenu()};

function esconderMostrarMenu() {
    var posActualScroll = document.documentElement.scrollTop;

        if (posPreviaScroll>posActualScroll) {
            // cuando subimos montramos el menu
            document.getElementById("navbar").style.top = "0";
            
            if (posActualScroll>200) {
                document.getElementById("navbar").style.height = "50px";
                document.getElementById("navbar").style.fontSize = "1rem";
                
                
            }
            else{
                document.getElementById("navbar").style.height = "150px";
                document.getElementById("navbar").style.fontSize = "1.5rem";
                document.getElementById("menu").style.lineHeight ="100px";
                
            }


        }
        else {
            // cuando estamos bajando escondemos el menu
            

            if (posActualScroll<200) {
                document.getElementById("navbar").style.height = "50px";
                document.getElementById("navbar").style.fontSize = "1rem";
                document.getElementById("menu").style.lineHeight ="50px";
                
            }

            else{
                document.getElementById("navbar").style.top = "-150px";
            }
        }

        posPreviaScroll = posActualScroll;
}

