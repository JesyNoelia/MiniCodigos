let sectionProducts = document.querySelector('#products .flex')
let inputName = document.querySelector('#name');
let inputPrice = document.querySelector('#price');
let inputPhoto = document.querySelector('#photo');
let btnSubmit = document.getElementById('btn');
let idActual = 1;


const printOneProduct = function (pJsonProduct) {

    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let figure = document.createElement('figure');
    let button = document.createElement('button');

    button.dataset.id = pJsonProduct.id;
    article.id = "camiseta" + pJsonProduct.id;

    let contentH3 = document.createTextNode(pJsonProduct.name);
    let contentP = document.createTextNode(`Precio:  ${pJsonProduct.price} €`);

    h3.appendChild(contentH3);
    p.appendChild(contentP);

    figure.innerHTML = `<img title="${pJsonProduct.name}" src="${pJsonProduct.photo}">`
    button.innerText = "Borrar"

    button.addEventListener('click', deleteProduct);

    article.appendChild(figure);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(button);

    sectionProducts.appendChild(article);
}

function printAllProduct(pListproducts) {
    idActual = pListproducts.length;
    pListproducts.forEach(product => printOneProduct(product));
}

printAllProduct(products);

btnSubmit.addEventListener('click', getDataForm);

function getDataForm(event) {
    event.preventDefault();
    idActual++;
    const newProduct = {
        id: idActual,
        name: inputName.value.trim(),
        price: parseFloat(inputPrice.value.trim()),
        photo: inputPhoto.value.trim()
    }
    saveProduct(newProduct, products)
}
function deleteProduct(event) {
    let productDelete = "camiseta" + event.target.dataset.id;
    let objectTshirt = document.getElementById(productDelete);
    objectTshirt.parentNode.removeChild(objectTshirt)
    deleteArray(products, parseInt(event.target.dataset.id));

}