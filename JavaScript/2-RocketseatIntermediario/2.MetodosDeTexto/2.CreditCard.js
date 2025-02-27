//Completando uma String

const creditCard = "1234567812344928"
console.log(creditCard.length)

//Pega os 4 últimos dígitos.
const lastDigits = creditCard.slice(-4)
console.log(lastDigits)

//O padStart preeche a String do início. (tamanho, substitui)
const maskedNumber = lastDigits.padStart(creditCard.length, "x")
console.log(maskedNumber)

//O padEnd preeche a String no fim. (tamanho, substitui)
const number = "123"
console.log(number.padEnd(10, "x"))

