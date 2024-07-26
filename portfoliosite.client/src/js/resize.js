const resizable = document.getElementById('resizable-element');
const resizer = resizable.querySelector('.resizer');

resizer.addEventListener('mousedown', onMouseDown);

function onMouseDown(event) {
    event.preventDefault();
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
}

function onMouseMove(event) {
    const rect = resizable.getBoundingClientRect();
    resizable.style.width = event.clientX - rect.left + 'px';
    resizable.style.height = event.clientY - rect.top + 'px';
}

function onMouseUp() {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
}