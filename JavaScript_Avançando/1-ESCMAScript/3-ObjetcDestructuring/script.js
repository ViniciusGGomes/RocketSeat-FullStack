/*
    Destructuring assignment (desestruturação) permite
    extrair dados de arrays ou objetos em variáveis
    distintas.

*/

const product = {
    description: "Teclado",
    price: 70
}

const{description} = product
console.log("Descrição: ", description)
const{price} = product
console.log("Preço: ", price)

function newProduct({description, price}){
    console.log("### NOVO PRODUTO ###")
    console.log("Descrição: ", description)
    console.log("Preço: ", price)
}

newProduct({
    description: "Mouse",
    price: 40
})