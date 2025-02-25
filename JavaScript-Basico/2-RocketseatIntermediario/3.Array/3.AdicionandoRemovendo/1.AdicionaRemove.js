//1-Adiconando no array

let users = []

//push adiciona no fim
users.push("Vinicius")
users.push("Maria")
users.push("Marcus")

console.log(users)

//unshift adicona no começo
users.unshift("Filipe")

console.log(users)

//2- remove do array

//shift remove no começo
users.shift()
console.log(users)

//pop remove no final 
users.pop()
console.log(users)

console.log("///////////////////////////////////////////////////////")

//USANDO O ÍNDICE 
let fruits = ["Apple", "Watermelon", "Lemon", "Strawberry"]

let position = fruits.indexOf("Lemon")
console.log(position)
//Se retorna -1, é porque não existe no array o elemento

fruits.splice(1, position)
console.log(fruits)
/*

    - Começa no índice 1 (onde está "Watermelon").
    - Remove "position" elementos, ou seja, 2 elementos.

*/