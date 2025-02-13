document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "components/navbar.html")
        .then(() => attachNavEvents()); // Asegurar eventos después de cargar el navbar

    loadContent("components/inicio.html"); // Solo cargar la página de inicio
});
