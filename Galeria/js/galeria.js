let imagen = document.querySelector('.galeria figure img');
let botones = document.getElementsByTagName('button');

let numImagen = 0;
const rutas = new Array('foto_1.jpg', 'foto_2.jpg', 'foto_3.jpg', 'foto_4.jpg', 'foto_5.jpg', 'foto_6.jpg',)

for (let boton of botones) {
    boton.addEventListener('click', cambiarImagen)
}

function cambiarImagen(event) {
    let direccion = event.target.innerText;

    if (direccion === 'SIGUIENTE' && numImagen < rutas.length) {
        numImagen = (numImagen === rutas.length - 1) ? 0 : numImagen + 1;
    } else if (direccion === 'ANTERIOR' && numImagen >= 0) {
        numImagen = (numImagen === 0) ? rutas.length - 1 : numImagen - 1;
    }
    imagen.src = `imagenes/` + rutas[numImagen];

}