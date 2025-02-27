/*
    Maneiras de modificar o objeto sem alterar o 
    principal. ultilizando os conceitos de imutabilidade
*/

const book = {
    title: "Obejtos Imutáveis",
    category: "javascript",
    author: {
        name: "Rodrigo",
        email: "rodrigo@gmail.com"
    }
}

const updateBook = {
    ...book,
    title: "Criando um Front-end moderno com HTML",
    category: "html",
    type: "Programming"
}

// Original intacto.
console.log(book)

// Modificado
console.log(updateBook)

// Ultilizando operador de desestruturação (rest operator) para remover propriedades
const {category, ...bookWithoutCategory} = book
console.log(bookWithoutCategory)