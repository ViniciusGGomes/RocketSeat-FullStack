/*
    Funções anônimas
    São funções sem nome geralmente amarzenas em 
    VARIÁVEIS para uso imediato.
*/ 

const showMessage1 = function(){
    console.log("Vinicius") 
}

showMessage1()

const showMessage2 = function(message, name){
    return `${message} : ${name}`
}

console.log(showMessage2("Olá eu sou o","Lilvinicin"))