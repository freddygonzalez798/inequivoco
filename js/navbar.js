// Lógica para la barra de navegación
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); 
        alert(`Has hecho clic en: ${item.textContent}`);
    });
});

function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active'); // Cambia el estado del menú (mostrar/ocultar)

    // Delegación de eventos para manejar clics en los enlaces de manera eficiente
    menu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            // Cerrar el menú cuando se hace clic en un enlace
            menu.classList.remove('active');
        }
    });
}
