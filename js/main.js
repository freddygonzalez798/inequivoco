// Función para cargar un componente en un contenedor específico
function loadComponent(containerId, filePath) {
    const container = document.getElementById(containerId);
    
    // Si el contenedor no existe, mostrar un error en la consola y salir
    if (!container) {
        console.error(`Error: No se encontró el elemento con ID "${containerId}".`);
        return;
    }

    fetch(filePath)
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
    loadComponent("footer", "components/footer.html");
    loadContentInicio("components/inicio.html"); // Cargar la página de inicio por defecto
    loadContentInicio("components/acercade.html"); // Cargar la página de inicio por defecto
});

// Función para cargar solo el contenido principal sin recargar la página
function loadContentInicio(page) {
    const mainContent = document.getElementById("main-content");

    if (!mainContent) {
        console.error(`Error: No se encontró el elemento con ID "main-content".`);
        return;
    }

    fetch(page)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML =   mainContent.innerHTML + data;
        })
        .catch(error => console.error(`Error cargando ${page}:`, error));
}
function loadContent(page) {
    const mainContent = document.getElementById("main-content");

    if (!mainContent) {
        console.error(`Error: No se encontró el elemento con ID "main-content".`);
        return;
    }

    fetch(page)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML =  data;
        })
        .catch(error => console.error(`Error cargando ${page}:`, error));
}
// Función para asignar eventos a los enlaces del navbar
function attachNavEvents() {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Evita la recarga de página
            const page = link.getAttribute("href"); // Obtiene la ruta del enlace
            loadContent(page); // Carga el contenido en el main
        });
    });
}
