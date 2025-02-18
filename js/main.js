// Función para cargar un componente en un contenedor específico
function loadComponent(containerId, filePath) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error(`Error: No se encontró el elemento con ID "${containerId}".`);
        return;
    }

    return fetch(filePath)
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
            if (containerId === "navbar") attachNavEvents(); // Reactivar eventos en el navbar
        })
        .catch(error => console.error(`Error cargando ${filePath}:`, error));
}


// Cargar los componentes cuando la página haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "components/navbar.html");
    loadComponent("acercade", "components/acercade.html");
    loadContent("components/inicio.html"); // Cargar la página de inicio por defecto
});

// Función para cargar solo el contenido principal sin recargar la página
function loadContent(page) {
    const mainContent = document.getElementById("main-content");

    if (!mainContent) {
        console.error(`Error: No se encontró el elemento con ID "main-content".`);
        return;
    }

    return fetch(page)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data; // Reemplaza contenido en lugar de añadirlo
        })
        .catch(error => console.error(`Error cargando ${page}:`, error));
}

// Función para asignar eventos a los enlaces del navbar
function attachNavEvents() {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Evita la recarga de la página
            const page = link.getAttribute("data-page"); // Obtener la ruta del enlace
            if (page) {
                loadContent(page); // Cargar el contenido dinámicamente
                console.log("hola");
            }
        });
    });
}
