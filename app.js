
const toggleButton = document.getElementById('toggleButton');
const floatingElement = document.getElementById('floatingElement');

let isVisible = false;

function toggleElement() {
    if (isVisible) {
        floatingElement.classList.remove('show');
        isVisible = false;
    } else {
        floatingElement.classList.add('show');
        isVisible = true;
    }
}

toggleButton.addEventListener('click', toggleElement);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isVisible) {
        toggleElement();
    }
});

document.addEventListener('click', function (event) {
    if (isVisible &&
        !floatingElement.contains(event.target) &&
        !toggleButton.contains(event.target)) {
        toggleElement();
    }
});