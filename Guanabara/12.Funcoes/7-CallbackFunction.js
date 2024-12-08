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