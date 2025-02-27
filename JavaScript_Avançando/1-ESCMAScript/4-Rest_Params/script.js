/* 
    Rest params (...) permite representar um
    número indefinido de argumentos como um array.

*/

//(rest é um array de argumentos)

function book(title,...Rest){
    console.log(title,...Rest)
    console.log(Rest.length)
}

book("O poder do hábito",1,2,3)

console.log("------------------------------")

//(args = rest oque muda é a nomeação)
function value(...args){
    console.log(args)
    console.log(args.length)
    console.log(...args)
}

value(1,2,3,4)