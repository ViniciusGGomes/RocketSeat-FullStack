/*
    FUNÇÃO CONSTRUTORA para intanciar objetos
    Criamos objetos com propriedades e métodos,
    NEW - criar uma nova copia na memoria(nova instancia) 

*/
//1-

//Função construtora
function createProduct(name){
    const product = {}

    product.name = name
    product.details = function(){
        console.log(`Nome do produto: "${this.name}"`)
    }

    return product
}

//Função construtora, criando objetos diferentes, e instaciando
//O new cria um novo objeto ultizando a estrutura da função construtor
const product1 = new createProduct("teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("mouse")
console.log(product2.name)
product2.details()

console.log(product1 === product2)

//2-
//Exemplos de funções construtoras disponíveis no próprio JavaScript
let myName = new String("Rodrigo")
console.log(myName)

let price = "40.6".replace(".", "")
console.log(price)

let data = new Date("2024-1-1")
console.log(data)

//3- outra forma de criar uma função construtora
function Person(name){
    this.name = name
    this.message = function(){
        console.log(`Olá, ${name}`)
    }
}

const person1 = new Person("Rodrigo")
console.log(person1.name)
person1.message()

const person2 = new Person("João")
console.log(person2.name)
person2.message()