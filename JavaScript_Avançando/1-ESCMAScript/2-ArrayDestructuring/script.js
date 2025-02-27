/*
    Destructuring assignment (desestruturação) permite
    extrair dados de arrays ou objetos em variáveis distintas.

*/

let data = ["Vinicius", "vincius@gmail.com"]

// Desestruturando array
const[userName, email] = data
console.log("Name: ", userName)
console.log("Email: ", email)

// Desestrutura somente o primeiro
const fruits = ["banana", "maça", "limão"]
const[banana] = fruits
console.log(banana)

// Ignorando o primeiro na desestruturação
const[_,maca] = fruits
console.log(maca)

// Ignorando o primeiro e o segundo na desestruturação
const [,,limao] = fruits
console.log(limao)