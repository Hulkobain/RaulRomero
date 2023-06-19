function openModal(imageSrc, imageAlt) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
  
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modal.style.display = "block";
  }
  
  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Obtener todas las imágenes de la galería
  const imageContainers = document.querySelectorAll(".image-container");
  
  // Agregar el evento onclick a cada contenedor de imagen
  imageContainers.forEach(container => {
    const image = container.querySelector("img");
    const src = image.getAttribute("src");
    const alt = image.getAttribute("alt");
  
    container.addEventListener("click", function() {
      openModal(src, alt);
    });
  });
  