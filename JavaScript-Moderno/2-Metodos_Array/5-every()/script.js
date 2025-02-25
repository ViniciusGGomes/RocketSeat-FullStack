/*
    O método every() testa se todos os elementos do 
    array passam na condição e retorna uma valor boleano

*/

const ages = [16, 20, 23, 30]

// Verificando se todas as idades são maiores ou igual a 18
const result = ages.every(age => age >= 18)
console.log(result)

console.log(ages.every(age => age >= 16))