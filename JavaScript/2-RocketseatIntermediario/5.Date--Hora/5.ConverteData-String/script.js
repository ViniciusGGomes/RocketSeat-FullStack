//1- Converte data para String

let date = new Date("2024-07-02T14:30:00")

//Converte para String
console.log(date.toString())

//Retorna apenas a data
console.log(date.toDateString())

//Retorna somente a hora
console.log(date.toTimeString())

console.log("2)------------------------------------")

//2- Exibe a data e hora no formato local

let date2 = new Date("2024-07-02T14:30:00")
console.log(date2.toLocaleDateString())
console.log(date2.toLocaleTimeString())

//Exibe a data e hora no formato escolhido
console.log(date2.toLocaleDateString("en"))
console.log(date2.toLocaleTimeString("en"))

console.log("3)------------------------------------")

//3- toLocaleString() manipula data e hora e faz a exibição de valores 

let date3 = new Date("2024-07-02T14:30:00")
console.log(date3.toLocaleString())
console.log(date3.toLocaleString("en"))

//Exibe a data e hora em styles diferentes

console.log(date3.toLocaleString("pt-BR",{
    dateStyle:"short"
})
)

console.log(date3.toLocaleString("pt-BR",{
    dateStyle:"long"
})
)

console.log(date3.toLocaleString("pt-BR",{
    dateStyle:"medium"
})
)

console.log(date3.toLocaleString("pt-BR",{
    dateStyle:"full"
})
)

console.log(date3.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
}))

// Converte para o formato da moeda real
let amount = 12.5
console.log(
    amount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
)