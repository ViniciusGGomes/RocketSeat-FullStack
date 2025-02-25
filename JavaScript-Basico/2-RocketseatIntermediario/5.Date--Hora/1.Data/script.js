//1-Curiosidade

// Exibe a data e hora atual
console.log(new Date())

//Exibe a data e hora de referência, primeira data e hora (Considera o fuso)
console.log(new Date(0))

//Exive o número de milissegundos
console.log(new Date().getTime())


//2- Define Data e hora, mês (0-11)
console.log(new Date(2003, 6, 25))

//Define ano, mês (0-11) e dia e hora, minuto e segundo.
console.log(new Date(2003, 6, 25, 17, 45, 0))

//Definindo data e hora com String.
console.log(new Date("2025-07-25T14:30:00"))

console.log(new Date("july 3, 2032 23:30:33"))