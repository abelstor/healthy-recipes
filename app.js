
/* Toogle menu */

// Obtener referencias a los elementos
const toggleButton = document.getElementById('toggleButton');
const floatingElement = document.getElementById('floatingElement');

// Variable para controlar el estado
let isVisible = false;

// Función para mostrar/ocultar el elemento
function toggleElement() {
    if (isVisible) {
        // Ocultar elemento
        floatingElement.classList.remove('show');
        // toggleButton.textContent = 'Mostrar Elemento';
        isVisible = false;
    } else {
        // Mostrar elemento
        floatingElement.classList.add('show');
        // toggleButton.textContent = 'Ocultar Elemento';
        isVisible = true;
    }
}

// Agregar evento click al botón
toggleButton.addEventListener('click', toggleElement);

// Función para cerrar con la tecla ESC
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isVisible) {
        toggleElement();
    }
});

// Función para cerrar haciendo clic fuera del elemento flotante
document.addEventListener('click', function (event) {
    // Verificar si el elemento está visible y si el clic no fue en el elemento flotante ni en el botón
    if (isVisible &&
        !floatingElement.contains(event.target) &&
        !toggleButton.contains(event.target)) {
        toggleElement();
    }
});