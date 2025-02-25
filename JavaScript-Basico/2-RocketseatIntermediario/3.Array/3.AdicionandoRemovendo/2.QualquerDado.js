//1- Adiconando diferentes tipos de dados no array

let myArray = [
    "um texto",
    10,
    true,

    function() {
        console.log("Função dentro do array")
    },
    {
        name: "Rodrigo",
        email: "Rodrigo@gmail.com"
    },
]
//Texto
console.log(myArray[0])

//Núemro
console.log(myArray[1])

//booleano
console.log(myArray[2])

// função
myArray[3]()

//Objeto
console.log(myArray[4].name, myArray[4].email)

console.log("--------------------------------------")
//Verifica se um item existe no Array

let fruits = ["Apple", "Lemon", "Banana"]
console.log(fruits.includes("Apple"))
console.log(fruits.includes("Lemon"))
console.log(fruits.includes("orange"))