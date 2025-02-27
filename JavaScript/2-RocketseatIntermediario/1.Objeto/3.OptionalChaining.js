/*
    OPTION CHAINING (?.) - encadeamento opcional
    Se a propriedade ou função chamada é nullish
    (null or undefined), a expressão retorna
    undefined em vez de gerar um erro.

    Útil ao explorar o conteúdo de um objeto 
    quando não existe garantia da existência 
    determinadas propriedades obrigatórias 

*/

const user = {
    id: 1,
    name: "Vinicao",
    
    // address: {
    //     street: "Avenida brasil",
    //     city: "São paulo",
    //     geo: {
    //         latitude: 47.808,
    //         longitude: 17.5674,
    //     }
    // },

    // message: function(){
    //     console.log(`Olá ${this.name}`)
    // }
}

console.log(user?.address?.street)
console.log(user?.address)

//No caso da função ele retorna nada 
user.message?.()