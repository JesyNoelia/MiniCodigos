const camisetas = new Array(

    {
        ruta: 'https://cdn-5c091e43f911c81b78c1ba00.closte.com/wp-content/uploads/camiseta-ecologica-colores-algodon-organico-6.jpg',
        titulo: 'Camiseta Roja',
        precio: 30,
        descuento: {
            disponible: true,
            porcentaje: 25
        },
    },
    {
        ruta: 'https://ropalaboralonzor.com/5446-large_default/camiseta-colores-llamativos-roonie.jpg',
        titulo: 'Camiseta Amarilla',
        precio: 30,
        descuento: {
            disponible: false,
            porcentaje: 0
        },

    },
    {
        ruta: 'https://www.publiser.es/images/05676%20camiseta%20promocional%20azul%20profundo.jpg',
        titulo: 'Camiseta Turquesa',
        precio: 30,
        descuento: {
            disponible: true,
            porcentaje: 15
        },

    },
    {
        ruta: 'https://images-na.ssl-images-amazon.com/images/I/61NEefBpINL._AC_UX385_.jpg',
        titulo: 'Camiseta Combinada',
        precio: 30,
        descuento: {
            disponible: false,
            porcentaje: 25
        },
    },
)



function pintarLista(pLista, pTitulo) {

    let pintado = `<section>
    <h2>Tienda de ${pTitulo}</h2>
    <div class="flex">`
    for (let producto of pLista) {
        let mostrar = (producto.descuento.porcentaje > 0) ? `<p class="descuento">Descuento: ${producto.descuento.porcentaje}%</p>` : ``;
        pintado += `<article>
        <figure>
            <img src="${producto.ruta}"
                alt="${producto.titulo}">
        </figure>
        <h3>${producto.titulo}</h3>
        <p>Precio: ${producto.precio}€</p>
        ${mostrar}
    </article>`
    }
    pintado += `</div></section>`;
    document.write(pintado)
}

pintarLista(camisetas, 'Camisetas');




