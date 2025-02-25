//1-
let message = "Estou estudando os fundamentos em JavaScript"

console.log(message.toLowerCase())
console.log(message.toUpperCase())

//2-Comprimento de uma String, *propriedade*
console.log(message.length) 

let password = "12345"
if(password.length < 6){
    console.log("A senha deve conter ao menos 6 caracteres")
}

let value = 12345
console.log(String(value).length)
console.log(value.toString().length)


//3- Substituindo parte de um texto
console.log(message.replace("Estou estudando os fundamentos", "ESTUDANDO DE MADRUGADA"))

//Extraindo uma parte da string(start, end)
console.log(message.slice(0,5))

//Extraindo uma parte da String de trás para frente
console.log(message.slice(-25))

//Remover espaços no inicio e no fim da String
let textWithSpace = "        texto de exemplo       "
console.log(textWithSpace)
console.log(textWithSpace.trim())