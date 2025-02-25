//1- Modificar Data e Hora

//DATA

const date = new Date("December 13, 2024 21:45:00")

//-ano
date.setFullYear(2030)
//-mês
date.setMonth(1)
//-dia
date.setDate(10)

console.log(date)

//HORA

//-hora
date.setHours(10)
//-minuto
date.setMinutes(30)
//-segundo
date.setSeconds(10)

console.log(date)

//2- Formatando uma data e uma hora
let date2 = new Date("December 13, 2024 21:45:00")

//Formata para o mês sempre ter 2 dígitos.
let day = date.getDate().toString().padStart(2, "0")
console.log(day)

//Formata para o mês sempre ter 2 dígitos.
let month = (date.getMonth() + 1).toString().padStart(2,"0")
console.log(month)

let year = date.getFullYear()
let hour = date.getHours()
let minutes = date.getMinutes()

console.log(`${day}/${month}/${year} ás ${hour}:${minutes}`)

