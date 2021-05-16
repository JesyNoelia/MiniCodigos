let imgs = document.querySelector('figure img');

function cambiarFoto(pRuta) {
    imgs.src = `imagenes/${pRuta}.jpg`;
}
cambiarFoto('3')

let numeroImagen = 1;

let numeroTotal = 3;
/* const intervalo = setInterval(function () {
    numeroImagen = (numeroImagen >= numeroTotal) ? 1 : numeroImagen + 1;
    cambiarFoto(numeroImagen)
}, 3000); */

let pasada = 2 * numeroTotal;
const intervalo = setInterval(function () {
    if (pasada <= 1) {
        clearInterval(intervalo)
    }
    numeroImagen = (numeroImagen >= numeroTotal) ? 1 : numeroImagen + 1;
    cambiarFoto(numeroImagen);
    pasada--;
}, 1000);
