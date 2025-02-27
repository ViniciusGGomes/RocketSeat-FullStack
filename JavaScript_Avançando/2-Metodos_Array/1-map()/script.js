/*

    O método map() chama a função callback recebida
    por parâmetro para cada elemento do Array original,
    em ordem, e constrói um novo array com base nos
    retornos de cada chamada. E no fim, devolve o nosso array
    

*/

const products = ["Teclado", "Mouse", "Monitor"]

// Percorrendo os itens do Array. Usamos {} quando queremos fazer manipulação de algum item
products.map((product) => {
    console.log(product)
})

// Sintaxe reduzida.
products.map((product) => console.log(product))

// Retorna um novo array, com todos os products em maiusculo
const formatted = products.map((product) => {
    return product.toUpperCase()
})

console.log(formatted)

// Ultilizando o novo objeto retorna, retorna um array com objetos
const objectFormatted = products.map((product) => {
    return {
        id: Math.random(),
        description: product
    }
})

console.log(objectFormatted)

// map() é muito ultilizado quando você precisa 
// percorrer um array e manipular ele, 
// retornar um novo array ultilizando o map()








console.log("-----------------------")
console.log("CALLBACK FUNCTION")

/*
    CALLBACK FUNCTION
   1-Uma função como argumento para outra função
   Ou
   2-Criar a funcção diretamente no parÂmetro da função


*/ 

//1- Passando uma Função como argumento para outra função

function director(){
    console.log("John Carpenter")
}


function movie(nameMovie, director, year){
    console.log("Name of the movie: ", nameMovie)
    
    director()
    year()
    console.log("------------------------")

}

function year(){
    console.log("1982")
}

movie("The thing", director, year)

//2- Criando a função no próprio parâmetro com uma função anônima

function movie2(name, CALLBACK){
    console.log(name)

    CALLBACK()
    console.log("------------------------")
}

movie2("The shining", function(){
    console.log("Stanley Kubrick")
})

//3- Criando a função no próprio parâmetro com uma arrowFunction
function movie3(name3, CALLBACK){
    console.log(name3)

    CALLBACK()
    console.log("------------------------")
}
movie3("The HATEFUL8", () => {
    console.log("Tarantino")
})

//4- Fazer de uma forma incurtada 
function movie4(name4, CALLBACK){
    console.log(name4)

    CALLBACK()
    console.log("------------------------")
}

movie4("watchmen", () => console.log("Zack Snyder"))