let ferrari = document.querySelector('#coche1');
let mensaje = document.querySelector('#mensaje')
const velocidad = 15;
const meta = 675;
let nitro = 3;

let avanceFerrari = 0;

document.addEventListener('keydown', capturarTeclas);

function capturarTeclas(event) {

    switch (event.keyCode) {
        case 32:
            moverFerrari(velocidad)
            break;
        case 78: //Key code de la letra n.
            if (nitro > 0) {
                moverFerrari(40)
                nitro--;
            }
            break;
    }
}

function moverFerrari(pVelocidad) {
    avanceFerrari += pVelocidad;
    ferrari.style.marginLeft = avanceFerrari + 'px';

    if (avanceFerrari >= meta) {
        /* mensaje.innerText = 'Ha ganado el Ferrari';
        document.removeEventListener('keydown', capturarTeclas);
        clearInterval(intervaloMclaren);
        clearInterval(intervaloRedBull); */

        pararJuego('Ferrari')
    }
}


let macLaren = document.querySelector('#coche2');
let avanceMcLaren = 0;

let intervaloMclaren = setInterval(moverMclaren, 150);

function moverMclaren() {
    avanceMcLaren += 20;
    macLaren.style.marginLeft = avanceMcLaren + 'px';
    if (avanceMcLaren >= meta) {
        /*  mensaje.innerText = 'Ha ganado el McLaren';
         document.removeEventListener('keydown', capturarTeclas);//esto detiene el ferrari si gana otro coche
         clearInterval(intervaloMclaren);//esto detiene el mclaren en la meta y todos los demas
         clearInterval(intervaloRedBull); */
        pararJuego('McLaren')
    }
}

////////////MOVER REDBULL  aleatoria ente 0 -50
let redbull = document.querySelector('#coche3');
avanceRedBUll = 0;

let intervaloRedBull = setInterval(moverRedBull, 150);
function moverRedBull() {
    avanceRedBUll += Math.random() * 41
    redbull.style.marginLeft = avanceRedBUll + 'px';

    if (avanceRedBUll >= meta) {
        /* mensaje.innerText = 'Ha ganado el RedBull';
        document.removeEventListener('keydown', capturarTeclas);
        clearInterval(intervaloMclaren);
        clearInterval(intervaloRedBull); */
        pararJuego('RedBull')
    }
}

function pararJuego(pGanador) {
    mensaje.innerText = 'Ha ganado el ' + pGanador;
    document.removeEventListener('keydown', capturarTeclas);
    clearInterval(intervaloMclaren);
    clearInterval(intervaloRedBull);
}


