
    // 1. Menú Desplegable
    document.addEventListener("DOMContentLoaded", () => {
      const dropdown = document.querySelector('.dropdown');
      dropdown.addEventListener('click', function() {
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('show');
      });
    });

    // 2. Animación de Texto
    let textoAnimado = document.querySelector('.texto-animado');
    let colores = ['#FF6347', '#32CD32', '#1E90FF', '#FFD700', '#8A2BE2'];
    let index = 0;

    function cambiarColorTexto() {
      textoAnimado.style.color = colores[index];
      index = (index + 1) % colores.length;
    }
    setInterval(cambiarColorTexto, 2000);

    // 3. Logo Fijo
    let logo = document.querySelector('.logo');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        logo.classList.add('logo-fixed');
      } else {
        logo.classList.remove('logo-fixed');
      }
    });

    // 4. Slider de Imágenes
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function cambiarSlide() {
      slides[currentSlide].classList.remove('fade');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('fade');
    }
    setInterval(cambiarSlide, 5000);

    // 5. Galería de Fotos con Zoom
    let imagenesGaleria = document.querySelectorAll('.galeria-item');
    imagenesGaleria.forEach(img => {
      img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.2)';
      });
      img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
      });
    });

    // Cambiar el fondo con colores aleatorios
function cambiarFondo() {
    const colores = ["#FF6347", "#32CD32", "#1E90FF", "#FFD700", "#8A2BE2"];
    const indice = Math.floor(Math.random() * colores.length);
    document.body.style.backgroundColor = colores[indice];
  }
  
  window.onload = cambiarFondo; // Cambiar al cargar la página

  // Cambiar el fondo con colores aleatorios
function cambiarFondo() {
    const colores = ["#FF6347", "#32CD32", "#1E90FF", "#FFD700", "#8A2BE2", "#FF4500", "#FF1493", "#00FA9A"];
    const indice = Math.floor(Math.random() * colores.length); // Selecciona un color aleatorio
    document.body.style.backgroundColor = colores[indice];  // Aplica el color de fondo al body
  }
  
  // Llamar a la función para cambiar el fondo al cargar la página
  window.onload = cambiarFondo;  // Cambia el fondo al cargar la página

  
  // Mostrar el botón de "volver arriba" cuando el usuario hace scroll
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("btn-volver-arriba").style.display = "block";
    } else {
      document.getElementById("btn-volver-arriba").style.display = "none";
    }
  };
  
  // Función para volver arriba
  function volverArriba() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  