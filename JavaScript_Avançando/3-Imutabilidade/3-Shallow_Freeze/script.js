const book = {
    title: "Objetos Imutáveis",
    category: "Javascript",
    author: {
        name: "Rodrigo",
        email: "Rodrigo@gmail.com"
    } 
}

// Congela o objeto e impede a modificação
Object.freeze(book)

book.category = "CSS" //Não modifica
console.log(book)

/*
    Porém ele faz um shalloww freeze, não impede 
    modificações profundas, em objetos aninhados
    (Um objeto dentro do outro), faz apenas
    um congelamento razo
*/


/*
    O object.freeze() não impede modificações
    profundas em objetos aninhados.

*/
book.author.name = "vinicius"