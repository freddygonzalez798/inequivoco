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
}
