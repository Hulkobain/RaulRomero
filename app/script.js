function mostrarContenido(seccion) {
    const secciones = document.querySelectorAll('.content');
    secciones.forEach(seccion => seccion.style.display = 'none');
    
    const contenidoMostrar = document.getElementById(seccion);
    contenidoMostrar.style.display = 'block';
  }