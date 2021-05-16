function saveProduct(pNew, pList) {
    pList.push(pNew);
    printOneProduct(pNew)
}

function deleteArray(pList, pId) {
    let posicionBorrar = pList.findIndex(product => product.id === pId);
    products.splice(posicionBorrar, 1);

}