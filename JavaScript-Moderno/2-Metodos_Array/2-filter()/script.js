/*
    O método filter() cria um novo array com todos
    os elementos que passaram nas condição

*/

const words = ["JAVASCRIPT", "HTML", "CSS", "WEB"]

// Filtrando palavras que tenham mais do que 3 letras.
const result = words.filter((words => words.length > 3))

console.log(result)

const products = [
    {description: "mouse", price: 70, promotion: true},
    {description: "teclado", price: 120, promotion: false},
    {description: "monitor", price: 220, promotion: true}
]

// Exemplo de um filtro de produtos na promoção e preço
const promotion = products.filter((product => product.promotion === true & product.price < 100))

console.log(promotion)