/*
    O método findIndex() retorna o índice no array do
    primeiro elemento que satisfizer a condição. Caso
    contrário, retorna -, indicando que nehum elemento
    passou no teste
*/


const values = [4, 6, 8, 12]

const index = values.findIndex(value => value > 4)

// Obtendo o primeiro ínidce do elemento que o valor 
// é maior do que 4
console.log(index)
console.log(values[index])

// Exemplo de quando não encontra
console.log(values.findIndex(value => value > 12))