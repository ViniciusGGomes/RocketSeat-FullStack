// Tipagem explicita
function sum(x: number, y: number): number{
  let sum = x + y
  
  return sum
}

console.log(sum(1,2))

// Retorno void
function multiply(x: number, y: number): void{
  let sum = x + y
  console.log(sum)
}

multiply(2,2)

// inferência de tipo
const subtract = (x,y) => {
  let subtract = x - y
  console.log(subtract)
}

subtract(2,2)