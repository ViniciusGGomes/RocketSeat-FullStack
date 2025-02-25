// for...of itera sobre valores de um objeto iterável.
// Só funciona com objetos que de para fazer interação (Array)

let students = ["Rodrigo", "Amanda", "John"]

for(let student of students){
    console.log(student)
}

let user = [
    {
        name: "Vinicius",
        email: "vinicius@gmail.com"
    }
]

for(let value of user){
    console.log(value.name)
    console.log(value.email)
}

 