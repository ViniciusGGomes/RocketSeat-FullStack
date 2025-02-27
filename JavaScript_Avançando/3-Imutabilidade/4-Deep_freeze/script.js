const book = {
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "João",
        email: "Jõao@gmail.com"
    }
}

// shallow freeze
Object.freeze(book)
book.category = "css"
// book.author.name = "vinicius"

// Deep freeze
function deepFreeze(object){
    // Obtém um array com todas as propriedades do objeto
    const props = Reflect.ownKeys(object)
    
    // Itera sobre todas as propriedades do objeto
    for(const prop of props){
        // Obtém o valor associado à propriedade atual
        const value = object[prop]

        // Verifica se o valor é um objeto ou função para
        // continuar aplicando o deepFreeze em objetos aninhados
        if(value && typeof value === "object" || typeof value === "function"){
            deepFreeze(value)
        }
    }

    // Retorna o objeto congelado
    return Object.freeze(object)
}
// Chama a função para congelar o objeto com deep freeze
deepFreeze(book)
book.author.name = "vinicius"
console.log(book)



