var miImage = document.querySelector('img');

miImage.onclick = function () {

    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png') {
        miImage.setAttribute('src', 'images/angular_icon.png');
    } else {
        miImage.setAttribute('src', 'images/firefox-icon.png');
    }

}

var miButton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function estaableceUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es fresco, ' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estaableceUsuario();
} else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco, ' + nombreAlmacenado;
}

miButton.onclick = function () {
    estaableceUsuario();
}