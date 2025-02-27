/*
    O método find() retorna o valor do primeiro elemento
    do array que satisfizer a condição. Caso contrario,
    undefined é retornado

*/


const values = [4, 88, 12, 102, 2]

// Retorna o primeiro elemento que valor é maior que 10
const found = values.find(value => value > 10) //88
console.log(found)


const fruits = [
    {name: "banana", quantity: 5},
    {name: "apple", quantity: 5},
    {name: "oranges", quantity: 5},
]

const result = fruits.find(fruit => fruit.name === "banana")
console.log(result)