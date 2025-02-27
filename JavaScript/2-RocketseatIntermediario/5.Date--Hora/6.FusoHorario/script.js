//1- Intl é a API de internacionalização do EXMAScript

// Obtém infotmações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale)

// Exibe no formato de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

//2- timezone
const date = new Date()

// Obtém a diferença em minutos do timezone.
console.log(date.getTimezoneOffset())

//obtém a diferencia em horas do timezone.
console.log(date.getTimezoneOffset() / 60)

//3- Criando uma data e hora com fuso horário
const dateWithTimazone = new Date ("2025-01-13T18:28:56.132-03:00") //- MAIS 3, + MENOS 3 
// console.log(dateWithTimazone.toISOString())

console.log(new Date().toLocaleString())
console.log(dateWithTimazone.toLocaleString())

