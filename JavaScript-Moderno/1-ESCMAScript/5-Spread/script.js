/*
    Spread (espalhar) permite que um objeto
    iterável, como um expressão de array ou uma
    string seja expandido para ser usado onde 
    zero ou mais argumentos 

*/

const number = [1,2,3]
console.log(number)

// Spread
console.log(...number)

// Array com objetos
const data = [{
    name: "Rodrigo",
    email: "Rodrigo@gmail.com",
    avatar: "r.png"
},
{
    name: "vinicius",
    email: "vinicius@gmail.com",
    avatar: "v.png"
}]

console.log(data)

// Spread
console.log(...data)