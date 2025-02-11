// Lógica para la barra de navegación
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); 
        alert(`Has hecho clic en: ${item.textContent}`);
    });
});

function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');

    // Cierra el menú al hacer clic en un elemento del menú
    document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active'); // Cierra el menú
        });
    });
}
