// for...in executa iterações a partir de um objeto
// e percore as propriedades
// Percorrendo oque existe DENTRO(IN) do objeto


//1- Objeto

const person = {
    name: "Vinicius",
    surname: "Gomes",
    email: "Vinicius@gmail.com"
}

for(property in person){
    //exibi o nome da propriedade
    console.log(property)

    //Exibe o conteudo da propriedade
    console.log(person[property])
}

//2- Array
let students = ["Rodrigo", "João", "Amanda"]

for(i in students){
    console.log(i)
}

for(student in students){
    console.log(students[student])
}