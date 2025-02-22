// // Lógica para la barra de navegación
// document.querySelectorAll('nav ul li a').forEach(item => {
//     item.addEventListener('click', event => {
//         event.preventDefault();
//         alert(`Has hecho clic en: ${item.textContent}`);
//         console.log("cliock");
//     });
// });

// function toggleMenu() {
//     const menu = document.querySelector('nav ul');
//     menu.classList.toggle('active'); // Cambia el estado del menú (mostrar/ocultar)

//     // Delegación de eventos para manejar clics en los enlaces de manera eficiente
//     menu.addEventListener('click', (event) => {
//         if (event.target.tagName === 'A') {
//             // Cerrar el menú cuando se hace clic en un enlace
//             menu.classList.remove('active');
//         }
//     });
// }

document.addEventListener("DOMContentLoaded", () => {
  attachNavEvents(); // Asegurar eventos cuando la página cargue
});

function attachNavEvents() {
  console.log("Ejecutando attachNavEvents...");

  // Seleccionar todos los enlaces del navbar dinámico
  document.querySelectorAll("nav ul li a").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      alert(`Has hecho clic en: ${item.textContent}`);
      console.log(`Cargando: ${item.getAttribute("data-page")}`);

      const page = item.getAttribute("data-page");
      if (page) loadContent(page);
    });
  });

  // Botón de menú hamburguesa
  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  } else {
    console.warn("⚠️ No se encontró el botón de menú.");
  }
}

// Función para abrir/cerrar menú en móviles
function toggleMenu() {
  const menu = document.querySelector("nav ul");
  if (menu) {
    menu.classList.toggle("active");
    console.log("Menú toggleado:", menu.classList.contains("active"));

    // Cerrar el menú si se hace clic en un enlace
    menu.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        menu.classList.remove("active");
      }
    });
  } else {
    console.error("❌ No se encontró el elemento <ul> en el navbar.");
  }
}
