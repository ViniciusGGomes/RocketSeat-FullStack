/*
    Arrow Function
    Uma forma mais concisa de escrever funções anônimas.
    Permite uma sintaxe mais enxuta e elegante para 
    funções em JavaScript.

*/



const showMessage1 = () => {
    console.log("Isso é uma ArrowFunction")
}

showMessage1()

/**
 * 
 * @param {String} name 
 * @param {String} email 
 * @returns 
 */
const showMessage2 = (name, email) => {
    return `YOUR NOME: ${name}. YOUR EMAIL ${email}`
}

result = showMessage2("Vinicius", "viniciusgmelllo@gmail.com")
console.log(result)